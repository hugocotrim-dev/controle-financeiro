import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Budget } from '../models';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  async getByMonth(month: number, year: number): Promise<Budget | null> {
    const { data } = await this.supabase.client
      .from('budgets')
      .select('*')
      .eq('user_id', this.auth.getCurrentUserId())
      .eq('month', month)
      .eq('year', year)
      .single();
    return data as Budget | null;
  }

  async upsert(month: number, year: number, amount: number): Promise<Budget> {
    const existing = await this.getByMonth(month, year);
    const userId = this.auth.getCurrentUserId();

    if (existing) {
      const { data, error } = await this.supabase.client
        .from('budgets')
        .update({ amount })
        .eq('id', existing.id)
        .select()
        .single();
      if (error) throw error;
      return data as Budget;
    } else {
      const { data, error } = await this.supabase.client
        .from('budgets')
        .insert({ user_id: userId, month, year, amount })
        .select()
        .single();
      if (error) throw error;
      return data as Budget;
    }
  }
}
