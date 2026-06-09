import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-bg">
        <div class="auth-glow"></div>
      </div>

      <div class="auth-content">
        <!-- Logo -->
        <div class="auth-logo animate-fade-in">
          <div class="logo-icon">
            <span class="material-icons-round">account_balance_wallet</span>
          </div>
          <h1 class="logo-name">FinanceFlow</h1>
          <p class="logo-tagline">Seu dinheiro, sob controle</p>
        </div>

        <!-- Form -->
        <div class="auth-card animate-slide-up">
          <h2 class="auth-title">Entrar</h2>
          <p class="auth-subtitle">Bem-vindo de volta! 👋</p>

          @if (error()) {
            <div class="auth-error">
              <span class="material-icons-round">error_outline</span>
              {{ error() }}
            </div>
          }

          <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)" novalidate>
            <div class="form-group">
              <label class="form-label" for="email">E-mail</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-control with-icon"
                  placeholder="seu@email.com"
                  [(ngModel)]="email"
                  required
                  email
                  #emailInput="ngModel"
                />
              </div>
              @if (emailInput.invalid && emailInput.touched) {
                <span class="field-error">E-mail inválido</span>
              }
            </div>

            <div class="form-group" style="margin-top: 1rem">
              <label class="form-label" for="password">Senha</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">lock</span>
                <input
                  id="password"
                  name="password"
                  [type]="showPassword() ? 'text' : 'password'"
                  class="form-control with-icon"
                  placeholder="••••••••"
                  [(ngModel)]="password"
                  required
                  minlength="6"
                  #passwordInput="ngModel"
                />
                <button type="button" class="input-toggle" (click)="showPassword.set(!showPassword())">
                  <span class="material-icons-round">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
              @if (passwordInput.invalid && passwordInput.touched) {
                <span class="field-error">Mínimo 6 caracteres</span>
              }
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style="margin-top: 1.5rem"
              [disabled]="loading()"
            >
              @if (loading()) {
                <span class="spinner"></span>
                Entrando...
              } @else {
                <span class="material-icons-round">login</span>
                Entrar
              }
            </button>
          </form>

          <p class="auth-link">
            Não tem conta?
            <a routerLink="/auth/register">Cadastre-se grátis</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      position: relative;
      background: #000;
      overflow: hidden;
    }

    .auth-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .auth-glow {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
      filter: blur(40px);
    }

    .auth-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem 1.5rem;
      gap: 2rem;
      max-width: 480px;
      margin: 0 auto;
      width: 100%;
    }

    .auth-logo {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-icon {
      width: 72px;
      height: 72px;
      border-radius: 20px;
      background: linear-gradient(135deg, #a855f7, #7c3aed);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 32px rgba(168, 85, 247, 0.4);
      animation: pulse-glow 3s infinite;

      .material-icons-round { font-size: 36px; color: white; }
    }

    .logo-name {
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.02em;
    }

    .logo-tagline {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }

    .auth-card {
      width: 100%;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      padding: 2rem;
    }

    .auth-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    .auth-subtitle {
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    .auth-error {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 12px;
      padding: 0.75rem 1rem;
      color: var(--color-red);
      font-size: 0.875rem;
      margin-bottom: 1rem;

      .material-icons-round { font-size: 18px; }
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 1rem;
      color: var(--color-text-muted);
      font-size: 20px;
      pointer-events: none;
      z-index: 1;
    }

    .form-control.with-icon {
      padding-left: 3rem;
    }

    .input-toggle {
      position: absolute;
      right: 0.75rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text-muted);
      display: flex;
      align-items: center;
      padding: 0.25rem;
      border-radius: 4px;
      transition: color 150ms;

      &:hover { color: var(--color-text-secondary); }
      .material-icons-round { font-size: 20px; }
    }

    .field-error {
      font-size: 0.75rem;
      color: var(--color-red);
      margin-top: 0.25rem;
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .auth-link {
      text-align: center;
      margin-top: 1.5rem;
      color: var(--color-text-secondary);
      font-size: 0.875rem;

      a { font-weight: 600; color: var(--color-accent-light); }
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  loading = signal(false);
  error = signal('');
  showPassword = signal(false);

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.error.set('');
    try {
      await this.authService.signIn(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error.set(err.message ?? 'Erro ao entrar. Verifique suas credenciais.');
    } finally {
      this.loading.set(false);
    }
  }
}
