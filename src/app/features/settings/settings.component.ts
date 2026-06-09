import { Component, OnInit, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { BudgetService } from '../../core/services/budget.service';
import { BottomNavComponent } from '../../shared/components/bottom-nav/bottom-nav.component';

type ThemeOption = 'dark' | 'light' | 'system';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, BottomNavComponent],
  template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Configurações</h1>
      </header>

      <main class="page-content">
        <!-- Profile Card -->
        <div class="settings-section animate-fade-in">
          <div class="profile-card">
            <div class="avatar">
              <span class="material-icons-round">person</span>
            </div>
            <div class="profile-info">
              <div class="profile-name">{{ profile()?.name ?? 'Usuário' }}</div>
              <div class="profile-email">{{ profile()?.email ?? '' }}</div>
              @if (profile()?.role === 'admin') {
                <span class="badge badge-accent" style="margin-top:0.25rem">Administrador</span>
              }
            </div>
          </div>
        </div>

        <!-- Budget -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">account_balance_wallet</span>
            Orçamento Mensal
          </h3>
          <div class="settings-card">
            <div class="form-group">
              <label class="form-label">Valor do orçamento (R$)</label>
              <input type="number" class="form-control" [(ngModel)]="budgetAmount" placeholder="Ex: 3000" step="50" min="0" />
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:0.75rem" (click)="saveBudget()" [disabled]="savingBudget()">
              @if (savingBudget()) { <span class="spinner-sm"></span> }
              <span class="material-icons-round">save</span>
              Salvar orçamento
            </button>
            @if (budgetSaved()) {
              <div class="success-toast">
                <span class="material-icons-round">check_circle</span>
                Orçamento salvo com sucesso!
              </div>
            }
          </div>
        </div>

        <!-- Theme -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">palette</span>
            Aparência
          </h3>
          <div class="settings-card">
            <div class="theme-options">
              @for (opt of themeOptions; track opt.value) {
                <button class="theme-btn" [class.active]="theme() === opt.value" (click)="setTheme(opt.value)">
                  <span class="material-icons-round">{{ opt.icon }}</span>
                  <span>{{ opt.label }}</span>
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Sessions / Security -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">security</span>
            Segurança
          </h3>
          <div class="settings-card">
            <button class="settings-item danger" (click)="signOutAll()">
              <span class="material-icons-round">logout</span>
              <div>
                <div class="item-label">Sair em todos os dispositivos</div>
                <div class="item-desc">Encerra todas as sessões ativas</div>
              </div>
              <span class="material-icons-round arrow">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Logout -->
        <div class="settings-section">
          <button class="btn btn-ghost" style="width:100%;gap:0.5rem" (click)="signOut()">
            <span class="material-icons-round">logout</span>
            Sair desta sessão
          </button>
        </div>

        <div class="app-version">FinanceFlow v1.0.0</div>
      </main>

      <app-bottom-nav />
    </div>
  `,
  styles: [`
    .app-container { min-height:100vh;background:var(--color-bg-primary); }
    .page-header { position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border);padding:1rem 1.25rem 1rem 4.5rem; }
    .page-title { font-size:1.125rem;font-weight:700; }
    .settings-section { margin-bottom:1.25rem; }
    .section-title { display:flex;align-items:center;gap:0.375rem;font-size:0.8125rem;font-weight:600;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.625rem; .material-icons-round{font-size:16px;color:var(--color-accent);} }
    .settings-card { background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;padding:1rem;overflow:hidden; }
    .profile-card { display:flex;align-items:center;gap:1rem;background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;padding:1.25rem; }
    .avatar { width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;flex-shrink:0; .material-icons-round{font-size:28px;color:white;} }
    .profile-name { font-size:1rem;font-weight:700; }
    .profile-email { font-size:0.8125rem;color:var(--color-text-secondary);margin-top:2px; }
    .theme-options { display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem; }
    .theme-btn { display:flex;flex-direction:column;align-items:center;gap:0.375rem;padding:0.75rem;background:var(--color-bg-input);border:1px solid var(--color-border);border-radius:12px;cursor:pointer;color:var(--color-text-secondary);font-size:0.75rem;font-weight:500;transition:all 150ms; .material-icons-round{font-size:22px;} &.active{background:rgba(168,85,247,0.15);border-color:var(--color-accent);color:var(--color-accent-light);} }
    .settings-item { display:flex;align-items:center;gap:0.75rem;width:100%;background:none;border:none;border-radius:12px;padding:0.75rem;cursor:pointer;transition:all 150ms;text-align:left; .item-label{font-size:0.875rem;font-weight:600;} .item-desc{font-size:0.75rem;color:var(--color-text-muted);margin-top:2px;} .arrow{margin-left:auto;color:var(--color-text-muted);font-size:18px;} &.danger{ .material-icons-round:first-child{color:var(--color-red);} .item-label{color:var(--color-red);} } &:hover{background:var(--color-bg-input);} }
    .success-toast { display:flex;align-items:center;gap:0.375rem;margin-top:0.625rem;font-size:0.8125rem;color:var(--color-green); .material-icons-round{font-size:16px;} }
    .spinner-sm { width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.7s linear infinite; }
    .app-version { text-align:center;font-size:0.75rem;color:var(--color-text-muted);margin-top:1rem;padding-bottom:1rem; }
  `]
})
export class SettingsComponent implements OnInit {
  private authService = inject(AuthService);
  private budgetService = inject(BudgetService);

  profile = this.authService.profile;
  budgetAmount = 0;
  savingBudget = signal(false);
  budgetSaved = signal(false);
  theme = signal<ThemeOption>('dark');

  themeOptions: { value: ThemeOption; label: string; icon: string }[] = [
    { value: 'dark', label: 'Escuro', icon: 'dark_mode' },
    { value: 'light', label: 'Claro', icon: 'light_mode' },
    { value: 'system', label: 'Sistema', icon: 'computer' },
  ];

  async ngOnInit() {
    const saved = localStorage.getItem('ff-theme') as ThemeOption | null;
    if (saved) this.theme.set(saved);
    this.applyTheme(this.theme());

    const now = new Date();
    const budget = await this.budgetService.getByMonth(now.getMonth() + 1, now.getFullYear());
    if (budget) this.budgetAmount = budget.amount;
  }

  setTheme(t: ThemeOption) {
    this.theme.set(t);
    localStorage.setItem('ff-theme', t);
    this.applyTheme(t);
  }

  private applyTheme(t: ThemeOption) {
    const root = document.documentElement;
    if (t === 'light') root.setAttribute('data-theme', 'light');
    else if (t === 'dark') root.removeAttribute('data-theme');
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'light');
    }
  }

  async saveBudget() {
    this.savingBudget.set(true);
    const now = new Date();
    try {
      await this.budgetService.upsert(now.getMonth() + 1, now.getFullYear(), this.budgetAmount);
      this.budgetSaved.set(true);
      setTimeout(() => this.budgetSaved.set(false), 3000);
    } catch (e) { console.error(e); }
    finally { this.savingBudget.set(false); }
  }

  signOut() { this.authService.signOut(); }
  signOutAll() { if (confirm('Sair em todos os dispositivos?')) this.authService.signOutAll(); }
}
