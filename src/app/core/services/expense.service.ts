import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Expense, InstallmentGroup } from '../models';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  async getByMonth(month: number, year: number): Promise<Expense[]> {
    const { data, error } = await this.supabase.client
      .from('expenses')
      .select('*, category:categories(*)')
      .eq('user_id', this.auth.getCurrentUserId())
      .eq('month', month)
      .eq('year', year)
      .order('date', { ascending: false });
    if (error) throw error;
    return (data ?? []) as Expense[];
  }

  async getForLast12Months(year: number, month: number): Promise<Expense[]> {
    const startDate = new Date(year - 1, month, 1); // 12 months ago
    const endDate = new Date(year, month, 0); // end of current month

    const { data, error } = await this.supabase.client
      .from('expenses')
      .select('*, category:categories(*)')
      .eq('user_id', this.auth.getCurrentUserId())
      .gte('date', startDate.toISOString().split('T')[0])
      .lte('date', endDate.toISOString().split('T')[0])
      .order('date', { ascending: false });
      
    if (error) throw error;
    return (data ?? []) as Expense[];
  }

  async create(expense: Omit<Expense, 'id' | 'created_at' | 'user_id' | 'category'>): Promise<Expense> {
    const { data, error } = await this.supabase.client
      .from('expenses')
      .insert({ ...expense, user_id: this.auth.getCurrentUserId() })
      .select('*, category:categories(*)')
      .single();
    if (error) throw error;
    return data as Expense;
  }

  async createInstallments(group: Omit<InstallmentGroup, 'id' | 'created_at' | 'user_id'>, startDate: Date, categoryId: string | null) {
    const userId = this.auth.getCurrentUserId();

    // Create installment group
    const { data: groupData, error: groupError } = await this.supabase.client
      .from('installment_groups')
      .insert({ ...group, user_id: userId })
      .select()
      .single();
    if (groupError) throw groupError;

    // Create individual expense records for each installment
    const installments = [];
    for (let i = 0; i < group.total_installments; i++) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);
      installments.push({
        user_id: userId,
        description: `${group.description} (${i + 1}/${group.total_installments})`,
        amount: group.installment_amount,
        date: date.toISOString().split('T')[0],
        category_id: categoryId,
        type: 'parcelado' as const,
        installment_group_id: groupData.id,
        installment_number: i + 1,
        total_installments: group.total_installments,
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      });
    }

    const { error } = await this.supabase.client.from('expenses').insert(installments);
    if (error) throw error;
  }

  async update(id: string, expense: Partial<Expense>): Promise<Expense> {
    const { data, error } = await this.supabase.client
      .from('expenses')
      .update(expense)
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId())
      .select('*, category:categories(*)')
      .single();
    if (error) throw error;
    return data as Expense;
  }

  async delete(id: string): Promise<void> {
    const { data: expense, error: fetchError } = await this.supabase.client
      .from('expenses')
      .select('installment_group_id')
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId())
      .single();

    if (fetchError) throw fetchError;

    if (expense?.installment_group_id) {
      const { error: deleteExpensesError } = await this.supabase.client
        .from('expenses')
        .delete()
        .eq('installment_group_id', expense.installment_group_id)
        .eq('user_id', this.auth.getCurrentUserId());
      if (deleteExpensesError) throw deleteExpensesError;

      const { error: deleteGroupError } = await this.supabase.client
        .from('installment_groups')
        .delete()
        .eq('id', expense.installment_group_id)
        .eq('user_id', this.auth.getCurrentUserId());
      if (deleteGroupError) throw deleteGroupError;
    } else {
      const { error } = await this.supabase.client
        .from('expenses')
        .delete()
        .eq('id', id)
        .eq('user_id', this.auth.getCurrentUserId());
      if (error) throw error;
    }
  }

  async getTotalByMonth(month: number, year: number): Promise<number> {
    const expenses = await this.getByMonth(month, year);
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  async getLast6MonthsTotals(): Promise<{ month: number; year: number; total: number; label: string }[]> {
    const results = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      const total = await this.getTotalByMonth(month, year);
      const label = d.toLocaleDateString('pt-BR', { month: 'short' });
      results.push({ month, year, total, label });
    }
    return results;
  }

  async getByCategory(month: number, year: number): Promise<{ category: string; total: number; color: string }[]> {
    const expenses = await this.getByMonth(month, year);
    const map = new Map<string, { total: number; color: string }>();
    for (const e of expenses) {
      const name = e.category?.name ?? 'Outros';
      const color = e.category?.color ?? '#a1a1aa';
      const existing = map.get(name) ?? { total: 0, color };
      map.set(name, { total: existing.total + e.amount, color });
    }
    return Array.from(map.entries()).map(([category, v]) => ({ category, ...v }));
  }
}
