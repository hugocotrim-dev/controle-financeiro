export type RecurringFrequency = 'mensal' | 'trimestral' | 'semestral' | 'anual';

export interface RecurringExpense {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  category_id: string;
  category?: import('./category.model').Category;
  frequency: RecurringFrequency;
  next_date: string;
  active: boolean;
  created_at: string;
}
