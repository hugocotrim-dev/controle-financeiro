import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from './supabase.service';
import { UserProfile } from '../models';
import { Session } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _session = signal<Session | null>(null);
  private _profile = signal<UserProfile | null>(null);
  private _loading = signal(true);

  session = this._session.asReadonly();
  profile = this._profile.asReadonly();
  loading = this._loading.asReadonly();
  isLoggedIn = computed(() => !!this._session());
  isAdmin = computed(() => this._profile()?.role === 'admin');

  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {
    this.init();
  }

  private async init() {
    const { data } = await this.supabase.auth.getSession();
    this._session.set(data.session);
    if (data.session) {
      await this.loadProfile(data.session.user.id);
    }
    this._loading.set(false);

    this.supabase.auth.onAuthStateChange(async (event, session) => {
      this._session.set(session);
      if (session) {
        await this.loadProfile(session.user.id);
      } else {
        this._profile.set(null);
      }
    });
  }

  private async loadProfile(userId: string) {
    const { data } = await this.supabase.client
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (data) this._profile.set(data as UserProfile);
  }

  async signUp(username: string, email: string, password: string, name: string) {
    // 1. Verificação prévia de duplicidade (Username e Email)
    const { data: existingUser } = await this.supabase.client
      .from('profiles')
      .select('email, username')
      .or(`email.eq.${email},username.eq.${username}`)
      .maybeSingle();

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error('Este e-mail já está em uso.');
      }
      if (existingUser.username === username) {
        throw new Error('Este username já está em uso.');
      }
    }

    // 2. Criar a conta no Supabase Auth
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: { 
        data: { name, username },
        emailRedirectTo: window.location.origin + '/controle-financeiro/login' 
      },
    });
    if (error) throw error;
    return data;
  }

  async signIn(emailOrUsername: string, password: string) {
    let loginEmail = emailOrUsername;

    // Se não tiver '@', assumimos que é um username e tentamos buscar o e-mail real
    if (!loginEmail.includes('@')) {
      const { data, error } = await this.supabase.client
        .from('profiles')
        .select('email')
        .eq('username', loginEmail)
        .maybeSingle();

      if (!data || error) {
        throw new Error('Usuário não encontrado.');
      }
      loginEmail = data.email;
    }

    const { data, error } = await this.supabase.auth.signInWithPassword({ email: loginEmail, password });
    if (error) throw error;
    return data;
  }

  async signOut() {
    await this.supabase.auth.signOut();
    this._session.set(null);
    this._profile.set(null);
    this.router.navigate(['/auth/login']);
  }

  async signOutAll() {
    await this.supabase.auth.signOut({ scope: 'global' });
    this._session.set(null);
    this._profile.set(null);
    this.router.navigate(['/auth/login']);
  }

  getCurrentUserId(): string {
    return this._session()?.user?.id ?? '';
  }
}
