export interface Category {
  id: string;
  user_id?: string;
  name: string;
  icon: string;
  color: string;
  is_default: boolean;
  created_at?: string;
}

export const DEFAULT_CATEGORIES: Omit<Category, 'id' | 'created_at'>[] = [
  { name: 'Farmácia', icon: 'local_pharmacy', color: '#ef4444', is_default: true },
  { name: 'Mercado', icon: 'shopping_cart', color: '#10b981', is_default: true },
  { name: 'Casa', icon: 'home', color: '#3b82f6', is_default: true },
  { name: 'Boletos', icon: 'receipt_long', color: '#f59e0b', is_default: true },
  { name: 'Compras parceladas', icon: 'credit_card', color: '#8b5cf6', is_default: true },
  { name: 'Presentes', icon: 'card_giftcard', color: '#ec4899', is_default: true },
  { name: 'Transporte', icon: 'directions_car', color: '#06b6d4', is_default: true },
  { name: 'Alimentação', icon: 'restaurant', color: '#f97316', is_default: true },
  { name: 'Lazer', icon: 'sports_esports', color: '#84cc16', is_default: true },
  { name: 'Saúde', icon: 'favorite', color: '#f43f5e', is_default: true },
  { name: 'Outros', icon: 'category', color: '#a1a1aa', is_default: true },
];
