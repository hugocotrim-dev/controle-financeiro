import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Category, DEFAULT_CATEGORIES } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private supabase: SupabaseService,
    private auth: AuthService
  ) {}

  async getAll(): Promise<Category[]> {
    const userId = this.auth.getCurrentUserId();
    const { data, error } = await this.supabase.client
      .from('categories')
      .select('*')
      .or(`is_default.eq.true,user_id.eq.${userId}`)
      .order('name');
    if (error) throw error;
    return (data ?? []) as Category[];
  }

  async create(category: Omit<Category, 'id' | 'created_at' | 'is_default'>): Promise<Category> {
    const { data, error } = await this.supabase.client
      .from('categories')
      .insert({ ...category, user_id: this.auth.getCurrentUserId(), is_default: false })
      .select()
      .single();
    if (error) throw error;
    return data as Category;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.supabase.client
      .from('categories')
      .delete()
      .eq('id', id)
      .eq('user_id', this.auth.getCurrentUserId())
      .eq('is_default', false);
    if (error) throw error;
  }
}
