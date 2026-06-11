import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoalService } from '../../core/services/goal.service';
import { ExpenseService } from '../../core/services/expense.service';
import { Goal, GoalType, getGoalStatus } from '../../core/models/goal.model';
import { CurrencyFormatDirective } from '../../shared/directives/currency-format.directive';
@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyFormatDirective],
  template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Metas Financeiras</h1>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div class="month-selector">
            <button class="month-btn" (click)="prevMonth()"><span class="material-icons-round">chevron_left</span></button>
            <span class="month-label">{{ currentMonthLabel() }}</span>
            <button class="month-btn" (click)="nextMonth()"><span class="material-icons-round">chevron_right</span></button>
          </div>
          <button class="btn-icon" (click)="openAdd()" aria-label="Adicionar meta">
            <span class="material-icons-round">add</span>
          </button>
        </div>
      </header>

      <main class="page-content">
        @if (loading()) {
          <div style="padding:0">
            @for (i of [1,2,3]; track i) {
              <div class="skeleton" style="height:120px;border-radius:20px;margin-bottom:0.75rem"></div>
            }
          </div>
        } @else if (goals().length === 0) {
          <div class="empty-state">
            <span class="material-icons-round empty-icon">flag</span>
            <p class="empty-title">Nenhuma meta criada</p>
            <p class="empty-desc">Defina metas financeiras para controlar seus gastos</p>
            <button class="btn btn-primary" (click)="openAdd()" style="margin-top:1rem">
              <span class="material-icons-round">add</span> Criar meta
            </button>
          </div>
        } @else {
          <div class="goals-list stagger-children">
            @for (goal of goals(); track goal.id) {
              <div class="goal-card" [class]="'status-' + getStatus(goal)" (click)="openEdit(goal)">
                <div class="goal-header">
                  <div>
                    <div class="goal-name">{{ goal.name }}</div>
                    <div class="goal-type badge" [class]="'badge-' + (goal.type === 'mensal' ? 'accent' : 'blue')">
                      {{ goal.type === 'mensal' ? 'Mensal' : 'Anual' }} • {{ getPeriodLabel(goal) }}
                    </div>
                  </div>
                  <div class="goal-pct" [class]="'pct-' + getStatus(goal)">
                    {{ getPercent(goal) | number:'1.0-0' }}%
                  </div>
                </div>

                <div class="goal-amounts">
                  <span class="goal-current">{{ goal.current_amount | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
                  <span class="goal-sep">de</span>
                  <span class="goal-limit">{{ goal.limit_amount | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
                </div>

                <div class="progress-bar" style="margin:0.75rem 0;height:8px">
                  <div class="progress-fill" [class]="getProgressClass(goal)" [style.width.%]="Math.min(getPercent(goal), 100)"></div>
                </div>

                @if (getPrediction(goal); as pred) {
                  <div class="goal-prediction">
                    <span class="material-icons-round">trending_up</span>
                    {{ pred }}
                  </div>
                }
              </div>
            }
          </div>
        }
      </main>

      @if (showModal()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-sheet animate-slide-up" (click)="$event.stopPropagation()">
            <div class="modal-handle"></div>
            <h2 class="modal-title">{{ editingGoal() ? 'Editar' : 'Nova' }} Meta</h2>
            <div class="modal-form">
              <div class="form-group">
                <label class="form-label">Nome da meta</label>
                <input type="text" class="form-control" [(ngModel)]="form.name" placeholder="Ex: Gastos com alimentação" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Valor limite (R$)</label>
                  <input type="text" inputmode="numeric" class="form-control" appCurrencyFormat [(ngModel)]="form.limit_amount" placeholder="0,00" />
                </div>
                <div class="form-group">
                  <label class="form-label">Tipo</label>
                  <select class="form-control" [(ngModel)]="form.type">
                    <option value="mensal">Mensal</option>
                    <option value="anual">Anual</option>
                  </select>
                </div>
              </div>
              
              <div class="form-row">
                @if (form.type === 'mensal') {
                  <div class="form-group">
                    <label class="form-label">Mês de Referência</label>
                    <input type="month" class="form-control" [(ngModel)]="form.monthStr" />
                  </div>
                } @else {
                  <div class="form-group">
                    <label class="form-label">Ano de Referência</label>
                    <input type="number" class="form-control" [(ngModel)]="form.year" min="2000" max="2100" />
                  </div>
                }
              </div>

              @if (!editingGoal()) {
                <div class="form-group" style="background:rgba(255,255,255,0.03);padding:0.75rem;border-radius:12px;border:1px solid var(--color-border);">
                  <label style="display:flex;align-items:center;gap:0.75rem;font-size:0.875rem;cursor:pointer;color:var(--color-text-secondary);">
                    <input type="checkbox" [(ngModel)]="form.calculateFromExisting" style="width:18px;height:18px;accent-color:var(--color-accent);" />
                    Calcular valor atual usando gastos já existentes do período
                  </label>
                </div>
              }

              @if (editingGoal()) {
                <div class="form-group">
                  <label class="form-label">Valor atual (R$)</label>
                  <input type="text" inputmode="numeric" class="form-control" appCurrencyFormat [(ngModel)]="form.current_amount" placeholder="0,00" />
                </div>
              }
              <div class="modal-actions">
                @if (editingGoal()) {
                  <button class="btn btn-danger" (click)="deleteGoal()" [disabled]="saving()">
                    <span class="material-icons-round">delete</span>
                  </button>
                }
                <button class="btn btn-ghost" (click)="closeModal()">Cancelar</button>
                <button class="btn btn-primary" (click)="saveGoal()" [disabled]="saving()">
                  @if (saving()) { <span class="spinner-sm"></span> }
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .app-container { min-height:100vh;background:var(--color-bg-primary); }
    .page-header { position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border);padding:1rem 1.25rem;display:flex;align-items:center;justify-content:space-between; }
    .page-title { font-size:1.125rem;font-weight:700; }
    .btn-icon { background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--color-text-secondary);transition:all 150ms; &:hover{color:var(--color-text-primary);} .material-icons-round{font-size:20px;} }
    .month-selector { display:flex;align-items:center;gap:0.25rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:0.25rem; }
    .month-btn { background:none;border:none;cursor:pointer;color:var(--color-text-secondary);display:flex;align-items:center;padding:0.25rem;border-radius:8px;transition:all 150ms; &:hover:not(:disabled){color:var(--color-text-primary);} &:disabled{opacity:0.3;} .material-icons-round{font-size:18px;} }
    .month-label { font-size:0.8125rem;font-weight:600;padding:0 0.25rem;min-width:70px;text-align:center; }
    .empty-state { text-align:center;padding:3rem 1.25rem;display:flex;flex-direction:column;align-items:center; }
    .empty-icon { font-size:48px;color:var(--color-text-muted);margin-bottom:1rem;opacity:0.5; }
    .empty-title { font-size:1.125rem;font-weight:700;color:var(--color-text-primary);margin-bottom:0.5rem; }
    .empty-desc { font-size:0.875rem;color:var(--color-text-muted);margin-bottom:1.5rem;max-width:250px; }
    .goals-list { display:flex;flex-direction:column;gap:0.75rem;padding:0 1rem; }
    .goal-card { background:var(--gradient-card);border:1px solid var(--color-border);border-radius:20px;padding:1.25rem;cursor:pointer;transition:all 200ms;
      &:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);}
      &.status-safe{border-color:rgba(16,185,129,0.2);}
      &.status-warning{border-color:rgba(245,158,11,0.2);}
      &.status-danger{border-color:rgba(239,68,68,0.25);background:linear-gradient(145deg,rgba(239,68,68,0.05) 0%,#0f0f0f 100%);}
    }
    .goal-header { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:0.5rem; }
    .goal-name { font-size:1rem;font-weight:700;margin-bottom:0.375rem; }
    .goal-pct { font-size:1.5rem;font-weight:800;letter-spacing:-0.02em; &.pct-safe{color:var(--color-green);} &.pct-warning{color:var(--color-yellow);} &.pct-danger{color:var(--color-red);} }
    .goal-amounts { display:flex;align-items:center;gap:0.5rem;font-size:0.875rem; }
    .goal-current { font-weight:700;color:var(--color-text-primary); }
    .goal-sep { color:var(--color-text-muted); }
    .goal-limit { color:var(--color-text-secondary); }
    .goal-prediction { display:flex;align-items:center;gap:0.375rem;font-size:0.75rem;color:var(--color-yellow);background:rgba(245,158,11,0.08);border-radius:8px;padding:0.5rem 0.75rem; .material-icons-round{font-size:14px;} }
    .modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:200;display:flex;align-items:flex-end;justify-content:center; }
    .modal-sheet { background:var(--color-bg-card);border-radius:24px 24px 0 0;width:100%;max-width:480px;max-height:85vh;overflow-y:auto;padding:1.5rem; }
    .modal-handle { width:36px;height:4px;background:var(--color-border);border-radius:2px;margin:0 auto 1.25rem; }
    .modal-title { font-size:1.25rem;font-weight:700;margin-bottom:1.25rem; }
    .modal-form { display:flex;flex-direction:column;gap:1rem; }
    .form-row { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem; }
    .modal-actions { display:flex;gap:0.75rem;margin-top:0.5rem; .btn-primary{flex:1;} }
    .spinner-sm { width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.7s linear infinite; }

    @media (min-width: 768px) {
      .modal-overlay { align-items: center; }
      .modal-sheet { border-radius: 24px; max-width: 500px; padding: 2rem; max-height: 85vh; }
      .modal-handle { display: none; }
      .goals-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; }
    }
  `]
})
export class GoalsComponent implements OnInit {
  protected Math = Math;
  private goalService = inject(GoalService);
  private expenseService = inject(ExpenseService);

  goals = signal<Goal[]>([]);
  loading = signal(true);
  saving = signal(false);
  showModal = signal(false);
  editingGoal = signal<Goal | null>(null);

  currentDate = signal(new Date());
  currentMonthLabel = () => this.currentDate().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  form: { name: string; limit_amount: number; type: GoalType; current_amount: number; monthStr: string; year: number; calculateFromExisting: boolean } = { 
    name: '', limit_amount: 0, type: 'mensal', current_amount: 0, 
    monthStr: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`, 
    year: new Date().getFullYear(),
    calculateFromExisting: false
  };

  async ngOnInit() { await this.loadGoals(); }

  async prevMonth() { const d = new Date(this.currentDate()); d.setMonth(d.getMonth() - 1); this.currentDate.set(d); await this.loadGoals(); }
  async nextMonth() { const d = new Date(this.currentDate()); d.setMonth(d.getMonth() + 1); this.currentDate.set(d); await this.loadGoals(); }

  private async loadGoals() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try { this.goals.set(await this.goalService.getForPeriod(month, year)); } finally { this.loading.set(false); }
  }

  getStatus = (goal: Goal) => getGoalStatus(goal.current_amount, goal.limit_amount);
  getPercent = (goal: Goal) => goal.limit_amount > 0 ? (goal.current_amount / goal.limit_amount) * 100 : 0;
  getProgressClass = (goal: Goal) => { const s = this.getStatus(goal); return s === 'safe' ? 'green' : s === 'warning' ? 'yellow' : 'red'; };
  getPrediction = (goal: Goal) => this.goalService.predictOverflow(goal.current_amount, goal.limit_amount);
  getPeriodLabel = (goal: Goal) => goal.type === 'mensal' ? `${String(goal.month).padStart(2, '0')}/${goal.year}` : `${goal.year}`;

  openAdd() { 
    this.editingGoal.set(null); 
    this.form = { 
      name: '', limit_amount: 0, type: 'mensal', current_amount: 0,
      monthStr: `${this.currentDate().getFullYear()}-${String(this.currentDate().getMonth() + 1).padStart(2, '0')}`,
      year: this.currentDate().getFullYear(),
      calculateFromExisting: false
    }; 
    this.showModal.set(true); 
  }
  openEdit(goal: Goal) { 
    this.editingGoal.set(goal); 
    const m = goal.month ? String(goal.month).padStart(2, '0') : '01';
    const y = goal.year || this.currentDate().getFullYear();
    this.form = { 
      name: goal.name, limit_amount: goal.limit_amount, type: goal.type, current_amount: goal.current_amount,
      monthStr: `${y}-${m}`, year: y, calculateFromExisting: false
    }; 
    this.showModal.set(true); 
  }
  closeModal() { this.showModal.set(false); }

  async saveGoal() {
    if (!this.form.name || !this.form.limit_amount) return;
    this.saving.set(true);
    
    let targetMonth: number | undefined;
    let targetYear: number;
    
    if (this.form.type === 'mensal') {
      const [yy, mm] = this.form.monthStr.split('-');
      targetYear = parseInt(yy, 10);
      targetMonth = parseInt(mm, 10);
    } else {
      targetYear = this.form.year;
    }

    let initialCurrentAmount = 0;
    if (this.form.calculateFromExisting && !this.editingGoal()) {
      if (this.form.type === 'mensal') {
        initialCurrentAmount = await this.expenseService.getTotalByMonth(targetMonth!, targetYear);
      } else {
        let total = 0;
        for (let m = 1; m <= 12; m++) {
          total += await this.expenseService.getTotalByMonth(m, targetYear);
        }
        initialCurrentAmount = total;
      }
    }

    try {
      if (this.editingGoal()) {
        await this.goalService.update(this.editingGoal()!.id, { ...this.form, month: targetMonth, year: targetYear });
      } else {
        await this.goalService.create({ name: this.form.name, limit_amount: this.form.limit_amount, type: this.form.type, month: targetMonth, year: targetYear, current_amount: initialCurrentAmount });
      }
      this.closeModal(); await this.loadGoals();
    } catch (e) { console.error(e); } finally { this.saving.set(false); }
  }

  async deleteGoal() {
    if (!this.editingGoal() || !confirm('Excluir esta meta?')) return;
    this.saving.set(true);
    try { await this.goalService.delete(this.editingGoal()!.id); this.closeModal(); await this.loadGoals(); }
    catch (e) { console.error(e); } finally { this.saving.set(false); }
  }
}
