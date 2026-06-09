import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';
import { CategoryService } from '../../core/services/category.service';
import { Expense, Category, ExpenseType } from '../../core/models';
import { BottomNavComponent } from '../../shared/components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule, BottomNavComponent],
  template: `
    <div class="app-container">
      <!-- Header -->
      <header class="page-header">
        <h1 class="page-title">Gastos</h1>
        <div class="month-selector">
          <button class="month-btn" (click)="prevMonth()">
            <span class="material-icons-round">chevron_left</span>
          </button>
          <span class="month-label">{{ currentMonthLabel() }}</span>
          <button class="month-btn" (click)="nextMonth()" [disabled]="isCurrentMonth()">
            <span class="material-icons-round">chevron_right</span>
          </button>
        </div>
      </header>

      <main class="page-content">
        <!-- Total Card -->
        <div class="total-card animate-fade-in">
          <span class="material-icons-round total-icon">payments</span>
          <div>
            <div class="total-label">Total de gastos</div>
            <div class="total-value">{{ totalExpenses() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
          </div>
        </div>

        <!-- Category Filter -->
        <div class="filter-chips">
          <button class="chip" [class.active]="selectedCategory() === null" (click)="selectedCategory.set(null)">
            Todos
          </button>
          @for (cat of categories(); track cat.id) {
            <button class="chip" [class.active]="selectedCategory() === cat.id" (click)="selectedCategory.set(cat.id)">
              <span class="material-icons-round" [style.color]="cat.color" style="font-size:14px">{{ cat.icon }}</span>
              {{ cat.name }}
            </button>
          }
        </div>

        <!-- Expense List -->
        @if (loading()) {
          <div class="loading-list">
            @for (i of [1,2,3,4,5]; track i) {
              <div class="skeleton" style="height:72px;border-radius:16px;margin-bottom:0.5rem"></div>
            }
          </div>
        } @else if (filteredExpenses().length === 0) {
          <div class="empty-state">
            <span class="material-icons-round empty-icon">receipt_long</span>
            <p class="empty-title">Nenhum gasto encontrado</p>
            <p class="empty-desc">Adicione um gasto clicando no botão abaixo</p>
          </div>
        } @else {
          <div class="expense-list stagger-children">
            @for (expense of filteredExpenses(); track expense.id) {
              <div class="expense-item" (click)="openEdit(expense)">
                <div class="expense-icon" [style.background]="getCategoryColor(expense) + '22'">
                  <span class="material-icons-round" [style.color]="getCategoryColor(expense)">
                    {{ getCategoryIcon(expense) }}
                  </span>
                </div>
                <div class="expense-info">
                  <div class="expense-desc">{{ expense.description }}</div>
                  <div class="expense-meta">
                    <span class="badge badge-gray">{{ expense.category?.name ?? 'Sem categoria' }}</span>
                    @if (expense.type === 'parcelado') {
                      <span class="badge badge-accent">{{ expense.installment_number }}/{{ expense.total_installments }}x</span>
                    }
                    @if (expense.type === 'recorrente') {
                      <span class="badge badge-yellow">Recorrente</span>
                    }
                  </div>
                  <div class="expense-date">{{ expense.date | date:'dd/MM/yyyy':'':'pt-BR' }}</div>
                </div>
                <div class="expense-amount">{{ expense.amount | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
              </div>
            }
          </div>
        }
      </main>

      <!-- FAB -->
      <button class="fab" (click)="openAdd()" aria-label="Adicionar gasto">
        <span class="material-icons-round">add</span>
      </button>

      <!-- Modal -->
      @if (showModal()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-sheet animate-slide-up" (click)="$event.stopPropagation()">
            <div class="modal-handle"></div>
            <h2 class="modal-title">{{ editingExpense() ? 'Editar' : 'Novo' }} Gasto</h2>

            <div class="modal-form">
              <div class="form-group">
                <label class="form-label">Descrição</label>
                <input type="text" class="form-control" [(ngModel)]="form.description" placeholder="Ex: Supermercado" />
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
                <label class="form-label">Categoria</label>
                <select class="form-control" [(ngModel)]="form.category_id">
                  <option value="">Selecionar...</option>
                  @for (cat of categories(); track cat.id) {
                    <option [value]="cat.id">{{ cat.name }}</option>
                  }
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Tipo</label>
                <div class="type-selector">
                  @for (type of expenseTypes; track type.value) {
                    <button type="button" class="type-btn" [class.active]="form.type === type.value" (click)="form.type = type.value">
                      {{ type.label }}
                    </button>
                  }
                </div>
              </div>

              @if (form.type === 'parcelado') {
                <div class="form-group">
                  <label class="form-label">Número de parcelas</label>
                  <input type="number" class="form-control" [(ngModel)]="form.total_installments" placeholder="Ex: 12" min="2" max="60" />
                  <small class="form-hint">Valor por parcela: {{ getInstallmentValue() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</small>
                </div>
              }

              <div class="form-group">
                <label class="form-label">Observação (opcional)</label>
                <input type="text" class="form-control" [(ngModel)]="form.observation" placeholder="Detalhes adicionais..." />
              </div>

              <div class="modal-actions">
                @if (editingExpense()) {
                  <button class="btn btn-danger" (click)="deleteExpense()" [disabled]="saving()">
                    <span class="material-icons-round">delete</span>
                  </button>
                }
                <button class="btn btn-ghost" (click)="closeModal()">Cancelar</button>
                <button class="btn btn-primary" (click)="saveExpense()" [disabled]="saving()">
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
    .app-container { min-height:100vh;max-width:480px;margin:0 auto;background:var(--color-bg-primary); }

    .page-header { position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border);padding:1rem 1.25rem;display:flex;align-items:center;justify-content:space-between; }
    .page-title { font-size:1.125rem;font-weight:700; }
    .month-selector { display:flex;align-items:center;gap:0.25rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:0.25rem; }
    .month-btn { background:none;border:none;cursor:pointer;color:var(--color-text-secondary);display:flex;align-items:center;padding:0.25rem;border-radius:8px;transition:all 150ms; &:hover:not(:disabled){color:var(--color-text-primary);} &:disabled{opacity:0.3;} .material-icons-round{font-size:18px;} }
    .month-label { font-size:0.8125rem;font-weight:600;padding:0 0.25rem;min-width:70px;text-align:center; }

    .total-card { display:flex;align-items:center;gap:0.75rem;margin:1rem;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:16px;padding:1rem 1.25rem; }
    .total-icon { font-size:28px;color:var(--color-red); }
    .total-label { font-size:0.75rem;color:var(--color-text-muted); }
    .total-value { font-size:1.375rem;font-weight:800;color:var(--color-red); }

    .filter-chips { display:flex;gap:0.5rem;overflow-x:auto;padding:0 1rem 0.75rem;scrollbar-width:none; &::-webkit-scrollbar{display:none;} }

    .expense-list { padding:0 1rem; }
    .expense-item { display:flex;align-items:center;gap:0.75rem;padding:0.875rem;background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;margin-bottom:0.5rem;cursor:pointer;transition:all 200ms; &:hover{border-color:var(--color-border-light);transform:translateY(-1px);} }
    .expense-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0; .material-icons-round{font-size:22px;} }
    .expense-info { flex:1;min-width:0; }
    .expense-desc { font-size:0.875rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
    .expense-meta { display:flex;gap:0.375rem;margin:0.25rem 0;flex-wrap:wrap; }
    .expense-date { font-size:0.75rem;color:var(--color-text-muted); }
    .expense-amount { font-size:0.9375rem;font-weight:700;color:var(--color-red);white-space:nowrap;flex-shrink:0; }

    .loading-list { padding:0 1rem; }

    .modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:200;display:flex;align-items:flex-end;justify-content:center; }
    .modal-sheet { background:var(--color-bg-card);border-radius:24px 24px 0 0;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;padding:1.5rem; }
    .modal-handle { width:36px;height:4px;background:var(--color-border);border-radius:2px;margin:0 auto 1.25rem; }
    .modal-title { font-size:1.25rem;font-weight:700;margin-bottom:1.25rem; }
    .modal-form { display:flex;flex-direction:column;gap:1rem; }
    .form-row { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem; }
    .form-hint { font-size:0.75rem;color:var(--color-text-muted);margin-top:0.25rem;display:block; }
    .type-selector { display:flex;gap:0.5rem; }
    .type-btn { flex:1;padding:0.5rem;background:var(--color-bg-input);border:1px solid var(--color-border);border-radius:8px;color:var(--color-text-secondary);font-size:0.8125rem;font-weight:500;cursor:pointer;transition:all 150ms; &.active{background:rgba(168,85,247,0.15);border-color:var(--color-accent);color:var(--color-accent-light);} }
    .modal-actions { display:flex;gap:0.75rem;margin-top:0.5rem; .btn-primary{flex:1;} }
    .spinner-sm { width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.7s linear infinite; }
  `]
})
export class ExpensesComponent implements OnInit {
  private expenseService = inject(ExpenseService);
  private categoryService = inject(CategoryService);

  expenses = signal<Expense[]>([]);
  categories = signal<Category[]>([]);
  loading = signal(true);
  saving = signal(false);
  showModal = signal(false);
  editingExpense = signal<Expense | null>(null);
  selectedCategory = signal<string | null>(null);

  currentDate = signal(new Date());

  form: {
    description: string; amount: number; date: string; category_id: string;
    type: ExpenseType; observation: string; total_installments: number;
  } = { description: '', amount: 0, date: new Date().toISOString().split('T')[0], category_id: '', type: 'fixo', observation: '', total_installments: 2 };

  expenseTypes = [
    { value: 'fixo' as ExpenseType, label: 'Fixo' },
    { value: 'parcelado' as ExpenseType, label: 'Parcelado' },
    { value: 'recorrente' as ExpenseType, label: 'Recorrente' },
  ];

  currentMonthLabel = () => this.currentDate().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  isCurrentMonth = () => {
    const now = new Date();
    return this.currentDate().getMonth() === now.getMonth() && this.currentDate().getFullYear() === now.getFullYear();
  };

  filteredExpenses = () => this.selectedCategory()
    ? this.expenses().filter(e => e.category_id === this.selectedCategory())
    : this.expenses();

  totalExpenses = () => this.filteredExpenses().reduce((s, e) => s + e.amount, 0);

  getInstallmentValue = () => this.form.amount > 0 && this.form.total_installments > 0
    ? this.form.amount / this.form.total_installments : 0;

  getCategoryColor = (e: Expense) => e.category?.color ?? '#a1a1aa';
  getCategoryIcon = (e: Expense) => e.category?.icon ?? 'category';

  async ngOnInit() {
    const [, cats] = await Promise.all([this.loadExpenses(), this.categoryService.getAll()]);
    this.categories.set(cats);
  }

  private async loadExpenses() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try {
      const data = await this.expenseService.getByMonth(month, year);
      this.expenses.set(data);
    } finally { this.loading.set(false); }
  }

  async prevMonth() { const d = new Date(this.currentDate()); d.setMonth(d.getMonth() - 1); this.currentDate.set(d); await this.loadExpenses(); }
  async nextMonth() { if (this.isCurrentMonth()) return; const d = new Date(this.currentDate()); d.setMonth(d.getMonth() + 1); this.currentDate.set(d); await this.loadExpenses(); }

  openAdd() {
    this.editingExpense.set(null);
    this.form = { description: '', amount: 0, date: new Date().toISOString().split('T')[0], category_id: '', type: 'fixo', observation: '', total_installments: 2 };
    this.showModal.set(true);
  }

  openEdit(expense: Expense) {
    this.editingExpense.set(expense);
    this.form = { description: expense.description, amount: expense.amount, date: expense.date, category_id: expense.category_id, type: expense.type, observation: expense.observation ?? '', total_installments: expense.total_installments ?? 2 };
    this.showModal.set(true);
  }

  closeModal() { this.showModal.set(false); }

  async saveExpense() {
    if (!this.form.description || !this.form.amount) return;
    this.saving.set(true);
    try {
      const month = this.currentDate().getMonth() + 1;
      const year = this.currentDate().getFullYear();
      if (this.form.type === 'parcelado' && !this.editingExpense()) {
        const startDate = new Date(this.form.date);
        await this.expenseService.createInstallments(
          { description: this.form.description, total_amount: this.form.amount, total_installments: this.form.total_installments, installment_amount: this.form.amount / this.form.total_installments, start_date: this.form.date },
          startDate, this.form.category_id
        );
      } else if (this.editingExpense()) {
        await this.expenseService.update(this.editingExpense()!.id, { ...this.form, month, year });
      } else {
        await this.expenseService.create({ ...this.form, month, year });
      }
      this.closeModal();
      await this.loadExpenses();
    } catch (e) { console.error(e); }
    finally { this.saving.set(false); }
  }

  async deleteExpense() {
    if (!this.editingExpense()) return;
    if (!confirm('Excluir este gasto?')) return;
    this.saving.set(true);
    try {
      await this.expenseService.delete(this.editingExpense()!.id);
      this.closeModal();
      await this.loadExpenses();
    } catch (e) { console.error(e); }
    finally { this.saving.set(false); }
  }
}
