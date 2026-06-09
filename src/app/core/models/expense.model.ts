export type ExpenseType = 'fixo' | 'parcelado' | 'recorrente';

export interface Expense {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  date: string;
  category_id: string | null;
  category?: Category;
  observation?: string;
  type: ExpenseType;
  installment_group_id?: string;
  installment_number?: number;
  total_installments?: number;
  month: number;
  year: number;
  created_at: string;
}

export interface InstallmentGroup {
  id: string;
  user_id: string;
  description: string;
  total_amount: number;
  total_installments: number;
  installment_amount: number;
  start_date: string;
  created_at: string;
}

import { Category } from './category.model';
