import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncomeService } from '../../core/services/income.service';
import { Income, IncomeType, INCOME_TYPE_LABELS } from '../../core/models';
import { BottomNavComponent } from '../../shared/components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule, FormsModule, BottomNavComponent],
  template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Receitas</h1>
        <div class="month-selector">
          <button class="month-btn" (click)="prevMonth()"><span class="material-icons-round">chevron_left</span></button>
          <span class="month-label">{{ currentMonthLabel() }}</span>
          <button class="month-btn" (click)="nextMonth()" [disabled]="isCurrentMonth()"><span class="material-icons-round">chevron_right</span></button>
        </div>
      </header>

      <main class="page-content">
        <div class="total-card animate-fade-in">
          <span class="material-icons-round total-icon">trending_up</span>
          <div>
            <div class="total-label">Total de receitas</div>
            <div class="total-value">{{ totalIncome() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
          </div>
        </div>

        @if (loading()) {
          <div style="padding:0 1rem">
            @for (i of [1,2,3]; track i) {
              <div class="skeleton" style="height:72px;border-radius:16px;margin-bottom:0.5rem"></div>
            }
          </div>
        } @else if (incomes().length === 0) {
          <div class="empty-state">
            <span class="material-icons-round empty-icon">savings</span>
            <p class="empty-title">Nenhuma receita</p>
            <p class="empty-desc">Adicione suas receitas para calcular seu saldo</p>
          </div>
        } @else {
          <div class="income-list stagger-children">
            @for (income of incomes(); track income.id) {
              <div class="income-item" (click)="openEdit(income)">
                <div class="income-icon" [class]="'type-' + income.type">
                  <span class="material-icons-round">{{ getTypeIcon(income.type) }}</span>
                </div>
                <div class="income-info">
                  <div class="income-desc">{{ income.description }}</div>
                  <div class="income-meta">
                    <span class="badge badge-green">{{ getTypeLabel(income.type) }}</span>
                    <span class="income-date">{{ income.date | date:'dd/MM/yyyy':'':'pt-BR' }}</span>
                  </div>
                </div>
                <div class="income-amount">{{ income.amount | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
              </div>
            }
          </div>
        }
      </main>

      <button class="fab" (click)="openAdd()" style="background:var(--gradient-green)">
        <span class="material-icons-round">add</span>
      </button>

      @if (showModal()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-sheet animate-slide-up" (click)="$event.stopPropagation()">
            <div class="modal-handle"></div>
            <h2 class="modal-title">{{ editingIncome() ? 'Editar' : 'Nova' }} Receita</h2>
            <div class="modal-form">
              <div class="form-group">
                <label class="form-label">Descrição</label>
                <input type="text" class="form-control" [(ngModel)]="form.description" placeholder="Ex: Salário março" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Valor (R$)</label>
                  <input type="number" class="form-control" [(ngModel)]="form.amount" placeholder="0,00" step="0.01" min="0" />
                </div>
                <div class="form-group">
                  <label class="form-label">Data</label>
                  <input type="date" class="form-control" [(ngModel)]="form.date" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Tipo</label>
                <select class="form-control" [(ngModel)]="form.type">
                  @for (type of incomeTypes; track type.value) {
                    <option [value]="type.value">{{ type.label }}</option>
                  }
                </select>
              </div>
              <div class="modal-actions">
                @if (editingIncome()) {
                  <button class="btn btn-danger" (click)="deleteIncome()" [disabled]="saving()">
                    <span class="material-icons-round">delete</span>
                  </button>
                }
                <button class="btn btn-ghost" (click)="closeModal()">Cancelar</button>
                <button class="btn btn-success" (click)="saveIncome()" [disabled]="saving()">
                  @if (saving()) { <span class="spinner-sm"></span> }
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      <app-bottom-nav />
    </div>
  `,
  styles: [`
    .app-container { min-height:100vh;background:var(--color-bg-primary); }
    .page-header { position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border);padding:1rem 1.25rem;display:flex;align-items:center;justify-content:space-between; }
    .page-title { font-size:1.125rem;font-weight:700; }
    .month-selector { display:flex;align-items:center;gap:0.25rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:0.25rem; }
    .month-btn { background:none;border:none;cursor:pointer;color:var(--color-text-secondary);display:flex;align-items:center;padding:0.25rem;border-radius:8px;transition:all 150ms; &:hover:not(:disabled){color:var(--color-text-primary);} &:disabled{opacity:0.3;} .material-icons-round{font-size:18px;} }
    .month-label { font-size:0.8125rem;font-weight:600;padding:0 0.25rem;min-width:70px;text-align:center; }
    .total-card { display:flex;align-items:center;gap:0.75rem;margin:1rem;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:16px;padding:1rem 1.25rem; }
    .total-icon { font-size:28px;color:var(--color-green); }
    .total-label { font-size:0.75rem;color:var(--color-text-muted); }
    .total-value { font-size:1.375rem;font-weight:800;color:var(--color-green); }
    .income-list { padding:0 1rem; }
    .income-item { display:flex;align-items:center;gap:0.75rem;padding:0.875rem;background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;margin-bottom:0.5rem;cursor:pointer;transition:all 200ms; &:hover{border-color:var(--color-border-light);transform:translateY(-1px);} }
    .income-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(16,185,129,0.15); .material-icons-round{font-size:22px;color:var(--color-green);} }
    .income-info { flex:1;min-width:0; }
    .income-desc { font-size:0.875rem;font-weight:600; }
    .income-meta { display:flex;align-items:center;gap:0.5rem;margin-top:0.25rem; }
    .income-date { font-size:0.75rem;color:var(--color-text-muted); }
    .income-amount { font-size:0.9375rem;font-weight:700;color:var(--color-green);white-space:nowrap;flex-shrink:0; }
    .modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:200;display:flex;align-items:flex-end;justify-content:center; }
    .modal-sheet { background:var(--color-bg-card);border-radius:24px 24px 0 0;width:100%;max-width:480px;max-height:85vh;overflow-y:auto;padding:1.5rem; }
    .modal-handle { width:36px;height:4px;background:var(--color-border);border-radius:2px;margin:0 auto 1.25rem; }
    .modal-title { font-size:1.25rem;font-weight:700;margin-bottom:1.25rem; }
    .modal-form { display:flex;flex-direction:column;gap:1rem; }
    .form-row { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem; }
    .modal-actions { display:flex;gap:0.75rem;margin-top:0.5rem; .btn-success{flex:1;} }
    .spinner-sm { width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.7s linear infinite; }

    @media (min-width: 768px) {
      .modal-overlay { align-items: center; }
      .modal-sheet { border-radius: 24px; max-width: 500px; padding: 2rem; max-height: 85vh; }
      .modal-handle { display: none; }
      .income-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; }
    }
  `]
})
export class IncomeComponent implements OnInit {
  private incomeService = inject(IncomeService);

  incomes = signal<Income[]>([]);
  loading = signal(true);
  saving = signal(false);
  showModal = signal(false);
  editingIncome = signal<Income | null>(null);
  currentDate = signal(new Date());

  form: { description: string; amount: number; date: string; type: IncomeType } = {
    description: '', amount: 0, date: new Date().toISOString().split('T')[0], type: 'salario'
  };

  incomeTypes = Object.entries(INCOME_TYPE_LABELS).map(([value, label]) => ({ value: value as IncomeType, label }));

  typeIcons: Record<IncomeType, string> = { salario: 'work', extra: 'bolt', freelance: 'computer', investimento: 'show_chart', outros: 'attach_money' };

  currentMonthLabel = () => this.currentDate().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  isCurrentMonth = () => { const n = new Date(); return this.currentDate().getMonth() === n.getMonth() && this.currentDate().getFullYear() === n.getFullYear(); };
  totalIncome = () => this.incomes().reduce((s, i) => s + i.amount, 0);
  getTypeLabel = (t: IncomeType) => INCOME_TYPE_LABELS[t];
  getTypeIcon = (t: IncomeType) => this.typeIcons[t] ?? 'attach_money';

  async ngOnInit() { await this.loadIncomes(); }

  async prevMonth() { const d = new Date(this.currentDate()); d.setMonth(d.getMonth() - 1); this.currentDate.set(d); await this.loadIncomes(); }
  async nextMonth() { if (this.isCurrentMonth()) return; const d = new Date(this.currentDate()); d.setMonth(d.getMonth() + 1); this.currentDate.set(d); await this.loadIncomes(); }

  private async loadIncomes() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1; const year = this.currentDate().getFullYear();
    try { this.incomes.set(await this.incomeService.getByMonth(month, year)); } finally { this.loading.set(false); }
  }

  openAdd() { this.editingIncome.set(null); this.form = { description: '', amount: 0, date: new Date().toISOString().split('T')[0], type: 'salario' }; this.showModal.set(true); }
  openEdit(income: Income) { this.editingIncome.set(income); this.form = { description: income.description, amount: income.amount, date: income.date, type: income.type }; this.showModal.set(true); }
  closeModal() { this.showModal.set(false); }

  async saveIncome() {
    if (!this.form.description || !this.form.amount) return;
    this.saving.set(true);
    const month = this.currentDate().getMonth() + 1; const year = this.currentDate().getFullYear();
    try {
      if (this.editingIncome()) await this.incomeService.update(this.editingIncome()!.id, { ...this.form, month, year });
      else await this.incomeService.create({ ...this.form, month, year });
      this.closeModal(); await this.loadIncomes();
    } catch (e) { console.error(e); } finally { this.saving.set(false); }
  }

  async deleteIncome() {
    if (!this.editingIncome() || !confirm('Excluir esta receita?')) return;
    this.saving.set(true);
    try { await this.incomeService.delete(this.editingIncome()!.id); this.closeModal(); await this.loadIncomes(); }
    catch (e) { console.error(e); } finally { this.saving.set(false); }
  }
}
