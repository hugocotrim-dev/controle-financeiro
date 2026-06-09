import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Goal } from '../models';

@Injectable({ providedIn: 'root' })
export class GoalService {
  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  async getAll(): Promise<Goal[]> {
    const { data, error } = await this.supabase.client
      .from('goals')
      .select('*')
      .eq('user_id', this.auth.getCurrentUserId())
      .order('created_at', { ascending: false });
    if (error) throw error;
    return (data ?? []) as Goal[];
  }

  async create(goal: Omit<Goal, 'id' | 'created_at' | 'user_id' | 'current_amount'>): Promise<Goal> {
    const { data, error } = await this.supabase.client
      .from('goals')
      .insert({ ...goal, user_id: this.auth.getCurrentUserId(), current_amount: 0 })
      .select()
      .single();
    if (error) throw error;
    return data as Goal;
  }

  async update(id: string, goal: Partial<Goal>): Promise<Goal> {
    const { data, error } = await this.supabase.client
      .from('goals')
      .update(goal)
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId())
      .select()
      .single();
    if (error) throw error;
    return data as Goal;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.supabase.client
      .from('goals')
      .delete()
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId());
    if (error) throw error;
  }

  // Simple linear projection: predict days until goal is reached
  predictOverflow(currentAmount: number, limitAmount: number, daysInMonth: number = 30): string | null {
    if (currentAmount >= limitAmount) return 'Meta já ultrapassada!';
    const today = new Date().getDate();
    if (today === 0) return null;
    const dailyAvg = currentAmount / today;
    const remaining = limitAmount - currentAmount;
    const daysLeft = Math.ceil(remaining / dailyAvg);
    if (daysLeft <= 7) return `Você deve ultrapassar a meta em ~${daysLeft} dias se continuar neste ritmo`;
    return null;
  }
}
