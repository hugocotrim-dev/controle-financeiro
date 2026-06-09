# 💰 FinanceFlow — Controle Financeiro PWA

Aplicação Progressive Web App (PWA) de controle financeiro pessoal estilo fintech, construída com **Angular 21** e **Supabase**.

![Angular](https://img.shields.io/badge/Angular-21-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green)
![PWA](https://img.shields.io/badge/PWA-Installable-purple)

---

## ✨ Funcionalidades

- 🔐 **Autenticação** — Login, cadastro, multi-dispositivo, logout global
- 💸 **Gastos** — CRUD completo com filtro por categoria e mês
- 💵 **Receitas** — Controle de entradas financeiras por tipo
- 🎯 **Metas** — Criação e monitoramento com alertas de ultrapassagem
- 📊 **Dashboard** — Cards resumo, insights automáticos, ações rápidas
- 📅 **Histórico** — Navegação por meses anteriores
- 💳 **Parcelamentos** — Geração automática de parcelas vinculadas
- 🔄 **Recorrentes** — Gastos automáticos (aluguel, internet, etc.)
- 🧠 **Inteligência** — Insights e previsões baseados em histórico
- ⚙️ **Configurações** — Tema claro/escuro, orçamento mensal, segurança
- 📱 **PWA** — Instalável no celular, design mobile-first

---

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) v22+ ou v24+
- [npm](https://npmjs.com/) v8+
- Conta no [Supabase](https://supabase.com/)

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/controle-financeiro.git
cd controle-financeiro
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar Supabase

1. Crie um projeto em [supabase.com](https://supabase.com/)
2. No **SQL Editor**, execute o conteúdo de `supabase/schema.sql`
3. Copie a **Project URL** e **Anon Key** (Settings → API)
4. Atualize `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'https://SEU_PROJETO.supabase.co',
  supabaseAnonKey: 'SUA_ANON_KEY',
};
```

### 4. Executar localmente

```bash
npm start
```

O app estará disponível em `http://localhost:4200/`

---

## 🗄️ Banco de Dados

O schema SQL está em `supabase/schema.sql` e cria:

| Tabela | Descrição |
|--------|-----------|
| `profiles` | Perfis de usuário (extensão auth.users) |
| `categories` | Categorias de gastos (padrão + customizadas) |
| `expenses` | Gastos/despesas |
| `incomes` | Receitas/entradas |
| `budgets` | Orçamento mensal |
| `goals` | Metas financeiras |
| `recurring_expenses` | Gastos recorrentes |
| `installment_groups` | Grupos de parcelamento |

Todas com **RLS (Row Level Security)** habilitado.

---

## 📁 Estrutura

```
src/app/
  core/
    guards/        → authGuard, publicGuard
    models/        → TypeScript interfaces
    services/      → Supabase services (auth, expense, income, etc.)
  shared/
    components/    → bottom-nav
  features/
    auth/          → login, register
    dashboard/     → home com cards e insights
    expenses/      → CRUD de gastos
    income/        → CRUD de receitas
    goals/         → metas financeiras
    history/       → histórico mensal
    settings/      → configurações e tema
```

---

## 🌐 Deploy no GitHub Pages

```bash
# Build para produção
npx @angular/cli@21 build --configuration production --base-href /controle-financeiro/

# Deploy com angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/controle-financeiro-app/browser
```

---

## 🎨 Design

- **Tema**: Black fintech (estilo Nubank)
- **Fonte**: Inter (Google Fonts)
- **Ícones**: Material Icons Round
- **Layout**: Mobile-first (max 480px centrado)
- **Animações**: Fade-in, slide-up, stagger, pulse-glow

---

## 📜 Licença

MIT
