import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Income } from '../models';

@Injectable({ providedIn: 'root' })
export class IncomeService {
  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  async getByMonth(month: number, year: number): Promise<Income[]> {
    const { data, error } = await this.supabase.client
      .from('incomes')
      .select('*')
      .eq('user_id', this.auth.getCurrentUserId())
      .eq('month', month)
      .eq('year', year)
      .order('date', { ascending: false });
    if (error) throw error;
    return (data ?? []) as Income[];
  }

  async getForLast12Months(year: number, month: number): Promise<Income[]> {
    const startDate = new Date(year - 1, month, 1);
    const endDate = new Date(year, month, 0);

    const { data, error } = await this.supabase.client
      .from('incomes')
      .select('*')
      .eq('user_id', this.auth.getCurrentUserId())
      .gte('date', startDate.toISOString().split('T')[0])
      .lte('date', endDate.toISOString().split('T')[0])
      .order('date', { ascending: false });

    if (error) throw error;
    return (data ?? []) as Income[];
  }

  async create(income: Omit<Income, 'id' | 'created_at' | 'user_id'>): Promise<Income> {
    const { data, error } = await this.supabase.client
      .from('incomes')
      .insert({ ...income, user_id: this.auth.getCurrentUserId() })
      .select()
      .single();
    if (error) throw error;
    return data as Income;
  }

  async update(id: string, income: Partial<Income>): Promise<Income> {
    const { data, error } = await this.supabase.client
      .from('incomes')
      .update(income)
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId())
      .select()
      .single();
    if (error) throw error;
    return data as Income;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.supabase.client
      .from('incomes')
      .delete()
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId());
    if (error) throw error;
  }

  async getTotalByMonth(month: number, year: number): Promise<number> {
    const incomes = await this.getByMonth(month, year);
    return incomes.reduce((sum, i) => sum + i.amount, 0);
  }
}
