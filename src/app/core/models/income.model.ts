export type IncomeType = 'salario' | 'extra' | 'freelance' | 'investimento' | 'outros';

export interface Income {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  date: string;
  type: IncomeType;
  month: number;
  year: number;
  created_at: string;
}

export const INCOME_TYPE_LABELS: Record<IncomeType, string> = {
  salario: 'Salário',
  extra: 'Extra',
  freelance: 'Freelance',
  investimento: 'Investimento',
  outros: 'Outros',
};
