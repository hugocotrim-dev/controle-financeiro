-- =============================================
-- FINANCEFLOW — SUPABASE SCHEMA SQL
-- Execute este script no Supabase SQL Editor
-- =============================================

-- Habilitar extensão UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PROFILES (extensão do auth.users)
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name', 'Usuário'), NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- CATEGORIES
-- =============================================
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'category',
  color TEXT NOT NULL DEFAULT '#a1a1aa',
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own + default categories" ON categories
  FOR SELECT USING (is_default = true OR auth.uid() = user_id);

CREATE POLICY "Users manage own categories" ON categories
  FOR ALL USING (auth.uid() = user_id AND is_default = false);

-- Insert default categories
INSERT INTO categories (name, icon, color, is_default) VALUES
  ('Farmácia', 'local_pharmacy', '#ef4444', true),
  ('Mercado', 'shopping_cart', '#10b981', true),
  ('Casa', 'home', '#3b82f6', true),
  ('Boletos', 'receipt_long', '#f59e0b', true),
  ('Compras parceladas', 'credit_card', '#8b5cf6', true),
  ('Presentes', 'card_giftcard', '#ec4899', true),
  ('Transporte', 'directions_car', '#06b6d4', true),
  ('Alimentação', 'restaurant', '#f97316', true),
  ('Lazer', 'sports_esports', '#84cc16', true),
  ('Saúde', 'favorite', '#f43f5e', true),
  ('Outros', 'category', '#a1a1aa', true)
ON CONFLICT DO NOTHING;

-- =============================================
-- INSTALLMENT GROUPS (grupos de parcelamento)
-- =============================================
CREATE TABLE IF NOT EXISTS installment_groups (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  description TEXT NOT NULL,
  total_amount NUMERIC(12,2) NOT NULL,
  total_installments INTEGER NOT NULL,
  installment_amount NUMERIC(12,2) NOT NULL,
  start_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE installment_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own installment groups" ON installment_groups
  FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- EXPENSES (gastos)
-- =============================================
CREATE TABLE IF NOT EXISTS expenses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  description TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL,
  category_id UUID REFERENCES categories(id),
  observation TEXT,
  type TEXT NOT NULL DEFAULT 'fixo' CHECK (type IN ('fixo', 'parcelado', 'recorrente')),
  installment_group_id UUID REFERENCES installment_groups(id) ON DELETE SET NULL,
  installment_number INTEGER,
  total_installments INTEGER,
  month INTEGER NOT NULL CHECK (month BETWEEN 1 AND 12),
  year INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own expenses" ON expenses
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Admins read all expenses" ON expenses
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE INDEX idx_expenses_user_month_year ON expenses(user_id, month, year);

-- =============================================
-- INCOMES (receitas)
-- =============================================
CREATE TABLE IF NOT EXISTS incomes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  description TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL,
  type TEXT NOT NULL DEFAULT 'outros' CHECK (type IN ('salario', 'extra', 'freelance', 'investimento', 'outros')),
  month INTEGER NOT NULL CHECK (month BETWEEN 1 AND 12),
  year INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE incomes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own incomes" ON incomes
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Admins read all incomes" ON incomes
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE INDEX idx_incomes_user_month_year ON incomes(user_id, month, year);

-- =============================================
-- BUDGETS (orçamentos mensais)
-- =============================================
CREATE TABLE IF NOT EXISTS budgets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  month INTEGER NOT NULL CHECK (month BETWEEN 1 AND 12),
  year INTEGER NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, month, year)
);

ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own budgets" ON budgets
  FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- GOALS (metas financeiras)
-- =============================================
CREATE TABLE IF NOT EXISTS goals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  limit_amount NUMERIC(12,2) NOT NULL,
  type TEXT NOT NULL DEFAULT 'mensal' CHECK (type IN ('mensal', 'anual')),
  current_amount NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own goals" ON goals
  FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- RECURRING EXPENSES (gastos recorrentes)
-- =============================================
CREATE TABLE IF NOT EXISTS recurring_expenses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  description TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  category_id UUID REFERENCES categories(id),
  frequency TEXT NOT NULL CHECK (frequency IN ('mensal', 'trimestral', 'semestral', 'anual')),
  next_date DATE NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE recurring_expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own recurring expenses" ON recurring_expenses
  FOR ALL USING (auth.uid() = user_id);
