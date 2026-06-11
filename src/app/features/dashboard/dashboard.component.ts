import { Component, OnInit, signal, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AuthService } from '../../core/services/auth.service';
import { ExpenseService } from '../../core/services/expense.service';
import { IncomeService } from '../../core/services/income.service';
import { BudgetService } from '../../core/services/budget.service';
import { GoalService } from '../../core/services/goal.service';
import { Goal, getGoalStatus } from '../../core/models/goal.model';

Chart.register(...registerables);

interface MonthSummary {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  budgetAmount: number;
  budgetUsedPct: number;
  transactionCount: number;
}

interface Insight {
  icon: string;
  text: string;
  type: 'info' | 'warning' | 'success' | 'danger';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="app-container">
      <!-- Header -->
      <header class="page-header">
        <h1 class="page-title">Olá, {{ greeting() | lowercase }}, {{ profile()?.username ?? 'Usuário' }}!</h1>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div class="month-selector">
            <button class="month-btn" (click)="prevMonth()">
              <span class="material-icons-round">chevron_left</span>
            </button>
            <span class="month-label">{{ currentMonthLabel() }}</span>
            <button class="month-btn" (click)="nextMonth()">
              <span class="material-icons-round">chevron_right</span>
            </button>
          </div>
        </div>
      </header>

      <main class="page-content">
        <!-- Balance Hero Card -->
        <div class="balance-card animate-fade-in">
          <div class="balance-label">Saldo do mês</div>
          @if (loading()) {
            <div class="skeleton" style="height:48px;width:180px;margin:0.5rem 0;border-radius:8px"></div>
          } @else {
            <div class="balance-amount" [class.positive]="summary().balance >= 0" [class.negative]="summary().balance < 0">
              {{ summary().balance | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}
            </div>
          }
          <div class="balance-row">
            <div class="balance-item">
              <div class="balance-item-header">
                <span class="material-icons-round" style="color:var(--color-green);font-size:16px">arrow_upward</span>
                <span class="balance-item-label">Receitas</span>
              </div>
              @if (loading()) {
                <div class="skeleton" style="height:16px;width:80px;border-radius:4px"></div>
              } @else {
                <span class="balance-item-value income">{{ summary().totalIncome | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
              }
            </div>
            <div class="balance-divider"></div>
            <div class="balance-item">
              <div class="balance-item-header">
                <span class="material-icons-round" style="color:var(--color-red);font-size:16px">arrow_downward</span>
                <span class="balance-item-label">Gastos</span>
              </div>
              @if (loading()) {
                <div class="skeleton" style="height:16px;width:80px;border-radius:4px"></div>
              } @else {
                <span class="balance-item-value expense">{{ summary().totalExpenses | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
              }
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid stagger-children">
          <!-- Budget -->
          <div class="stat-card">
            <div class="stat-header">
              <div class="stat-icon purple">
                <span class="material-icons-round">account_balance_wallet</span>
              </div>
              <span class="stat-label">Orçamento</span>
            </div>
            @if (summary().budgetAmount > 0) {
              <div class="stat-value">{{ summary().budgetUsedPct | number:'1.0-0' }}%</div>
              <div class="progress-bar" style="margin-top:0.5rem">
                <div class="progress-fill"
                  [class]="getBudgetClass()"
                  [style.width.%]="Math.min(summary().budgetUsedPct, 100)">
                </div>
              </div>
              <div class="stat-sub">de {{ summary().budgetAmount | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}</div>
            } @else {
              <div class="stat-empty">
                <a routerLink="/settings">Definir orçamento</a>
              </div>
            }
          </div>

          <!-- Transactions -->
          <div class="stat-card">
            <div class="stat-header">
              <div class="stat-icon blue">
                <span class="material-icons-round">receipt_long</span>
              </div>
              <span class="stat-label">Transações</span>
            </div>
            <div class="stat-value">{{ summary().transactionCount }}</div>
            <div class="stat-sub">este mês</div>
          </div>
        </div>

        <!-- Insights -->
        @if (insights().length > 0) {
          <section class="insights-section">
            <h3 class="section-title">
              <span class="material-icons-round">lightbulb</span>
              Insights
            </h3>
            <div class="insights-list stagger-children">
              @for (insight of insights(); track insight.text) {
                <div class="insight-card" [class]="'insight-' + insight.type">
                  <span class="material-icons-round insight-icon">{{ insight.icon }}</span>
                  <p class="insight-text">{{ insight.text }}</p>
                </div>
              }
            </div>
          </section>
        }

        <!-- Expenses Chart -->
        <section class="chart-section">
          <h3 class="section-title">
            <span class="material-icons-round">pie_chart</span>
            Despesas por Categoria
          </h3>
          <div class="card chart-card">
            <div class="chart-container" style="position: relative; height: 220px; width: 100%;">
              <canvas #expensesChart></canvas>
            </div>
          </div>
        </section>

        <!-- Goals Overview -->
        @if (goals().length > 0) {
          <section class="goals-section">
            <div class="section-header">
              <h3 class="section-title">
                <span class="material-icons-round">flag</span>
                Metas
              </h3>
              <a routerLink="/goals" class="section-link">Ver todas</a>
            </div>
            <div class="goals-list stagger-children">
              @for (goal of goals().slice(0, 3); track goal.id) {
                <div class="goal-mini-card">
                  <div class="goal-mini-header">
                    <span class="goal-mini-name">{{ goal.name }} <span style="font-size:0.65rem;color:var(--color-text-muted);font-weight:normal;margin-left:4px;">({{ goal.type === 'mensal' ? 'Mensal' : 'Anual' }})</span></span>
                    <span class="badge" [class]="'badge-' + getGoalStatusColor(goal)">
                      {{ (goal.current_amount / goal.limit_amount * 100) | number:'1.0-0' }}%
                    </span>
                  </div>
                  <div class="progress-bar" style="margin-top:0.5rem">
                    <div class="progress-fill"
                      [class]="getGoalProgressClass(goal)"
                      [style.width.%]="Math.min(goal.current_amount / goal.limit_amount * 100, 100)">
                    </div>
                  </div>
                  <div class="goal-mini-values">
                    <span>{{ goal.current_amount | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}</span>
                    <span>{{ goal.limit_amount | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}</span>
                  </div>
                </div>
              }
            </div>
          </section>
        }

        <!-- Quick Actions -->
        <section class="quick-actions">
          <h3 class="section-title">
            <span class="material-icons-round">flash_on</span>
            Ações rápidas
          </h3>
          <div class="actions-grid">
            <a routerLink="/expenses" class="action-btn expenses">
              <span class="material-icons-round">add_circle</span>
              <span>Novo gasto</span>
            </a>
            <a routerLink="/income" class="action-btn income">
              <span class="material-icons-round">savings</span>
              <span>Nova receita</span>
            </a>
            <a routerLink="/goals" class="action-btn goals">
              <span class="material-icons-round">track_changes</span>
              <span>Nova meta</span>
            </a>
            <a routerLink="/history" class="action-btn history">
              <span class="material-icons-round">history</span>
              <span>Histórico</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .app-container { min-height: 100vh; background: var(--color-bg-primary); padding-bottom: 5rem; }
    .page-header { background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid var(--color-border); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; }
    .page-title { font-size:1.125rem;font-weight:700; }
    
    .month-selector { display: flex; align-items: center; gap: 0.25rem; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 0.25rem; }
    .month-btn { background: none; border: none; cursor: pointer; color: var(--color-text-secondary); display: flex; align-items: center; padding: 0.25rem; border-radius: 8px; transition: all 150ms; &:hover:not(:disabled){color:var(--color-text-primary);background:var(--color-bg-card-hover);} &:disabled{opacity:0.3;cursor:not-allowed;} .material-icons-round{font-size:18px;} }
    .month-label { font-size:0.8125rem;font-weight:600;color:var(--color-text-primary);padding:0 0.25rem;min-width:70px;text-align:center; }

    .balance-card {
      margin: 1rem;
      background: linear-gradient(135deg, #1a0a2e 0%, #0d0d0d 60%, #0a1a10 100%);
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 24px;
      padding: 1.5rem;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%);
      }
    }

    .balance-row { display:flex;justify-content:space-between;gap:0.5rem;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.06); }
    .balance-item { display:flex;flex-direction:column;gap:0.25rem;flex:1;min-width:0; }
    .balance-item-header { display:flex;align-items:center;gap:0.25rem; }
    .balance-item-label { font-size:0.75rem;color:var(--color-text-muted); }
    .balance-item-value { font-size:1rem;font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; &.income{color:var(--color-green);} &.expense{color:var(--color-red);} }
    .balance-divider { width:1px;height:auto;min-height:32px;background:rgba(255,255,255,0.08);margin:0; }

    .stats-grid { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin:0 1rem 1rem; }
    .stat-card { background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;padding:1rem; }
    .stat-header { display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem; }
    .stat-icon { width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center; .material-icons-round{font-size:18px;color:white;} &.purple{background:rgba(168,85,247,0.2);.material-icons-round{color:var(--color-accent);}} &.blue{background:rgba(59,130,246,0.2);.material-icons-round{color:var(--color-blue);}} }
    .stat-label { font-size:0.75rem;color:var(--color-text-secondary);font-weight:500; }
    .stat-value { font-size:1.5rem;font-weight:800;letter-spacing:-0.02em; }
    .stat-sub { font-size:0.75rem;color:var(--color-text-muted);margin-top:0.25rem; }
    .stat-empty a { font-size:0.75rem;color:var(--color-accent);font-weight:500; }

    .section-title { display:flex;align-items:center;gap:0.375rem;font-size:0.9375rem;font-weight:700;margin-bottom:0.75rem; .material-icons-round{font-size:18px;color:var(--color-accent);} }
    .section-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem; .section-title{margin-bottom:0;} }
    .section-link { font-size:0.8125rem;color:var(--color-accent);font-weight:600; }

    .insights-section, .goals-section, .quick-actions { margin:0 1rem 1.25rem; }

    .insights-list { display:flex;flex-direction:column;gap:0.5rem; }
    .insight-card { display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;border-radius:12px;border:1px solid transparent;
      &.insight-info { background:rgba(59,130,246,0.08);border-color:rgba(59,130,246,0.2); .insight-icon{color:var(--color-blue);} }
      &.insight-warning { background:rgba(245,158,11,0.08);border-color:rgba(245,158,11,0.2); .insight-icon{color:var(--color-yellow);} }
      &.insight-danger { background:rgba(239,68,68,0.08);border-color:rgba(239,68,68,0.2); .insight-icon{color:var(--color-red);} }
      &.insight-success { background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2); .insight-icon{color:var(--color-green);} }
    }
    .insight-icon { font-size:18px;margin-top:1px;flex-shrink:0; }
    .insight-text { font-size:0.8125rem;color:var(--color-text-secondary);line-height:1.5; }

    .goals-list { display:flex;flex-direction:column;gap:0.5rem; }
    .goal-mini-card { background:var(--gradient-card);border:1px solid var(--color-border);border-radius:12px;padding:0.875rem; }
    .goal-mini-header { display:flex;align-items:center;justify-content:space-between; }
    .goal-mini-name { font-size:0.875rem;font-weight:600;color:var(--color-text-primary); }
    .goal-mini-values { display:flex;justify-content:space-between;margin-top:0.375rem; span{font-size:0.75rem;color:var(--color-text-muted);} }

    .actions-grid { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem; }
    .action-btn { display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.375rem;padding:1rem;border-radius:16px;text-decoration:none;font-size:0.8125rem;font-weight:600;transition:all 200ms;border:1px solid var(--color-border);
      .material-icons-round{font-size:24px;}
      &:hover{transform:translateY(-2px);}
      &.expenses { background:rgba(239,68,68,0.1);color:var(--color-red);border-color:rgba(239,68,68,0.2); }
      &.income { background:rgba(16,185,129,0.1);color:var(--color-green);border-color:rgba(16,185,129,0.2); }
      &.goals { background:rgba(168,85,247,0.1);color:var(--color-accent);border-color:rgba(168,85,247,0.2); }
      &.history { background:rgba(59,130,246,0.1);color:var(--color-blue);border-color:rgba(59,130,246,0.2); }
    }

    @media (min-width: 768px) {
      .page-content { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
      .balance-card { grid-column: 1 / -1; margin: 0; }
      .quick-actions { grid-column: 1 / -1; }
      .actions-grid { display: flex; justify-content: center; gap: 2rem; }
      .action-btn { width: 120px; }
      .insights-container { grid-column: 1 / 3; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
      .card, .chart-card { margin-bottom: 0; }
      .chart-section { grid-column: 1 / 3; }
    }
  `]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  protected Math = Math;

  @ViewChild('expensesChart') chartRef!: ElementRef<HTMLCanvasElement>;
  private chartInstance: Chart | null = null;

  private authService = inject(AuthService);
  private expenseService = inject(ExpenseService);
  private incomeService = inject(IncomeService);
  private budgetService = inject(BudgetService);
  private goalService = inject(GoalService);

  profile = this.authService.profile;
  loading = signal(true);
  summary = signal<MonthSummary>({ totalIncome: 0, totalExpenses: 0, balance: 0, budgetAmount: 0, budgetUsedPct: 0, transactionCount: 0 });
  insights = signal<Insight[]>([]);
  goals = signal<Goal[]>([]);

  currentDate = signal(new Date());

  currentMonthLabel = () => this.currentDate().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  isCurrentMonth = () => {
    const now = new Date();
    return this.currentDate().getMonth() === now.getMonth() && this.currentDate().getFullYear() === now.getFullYear();
  };

  greeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Bom dia';
    if (h < 18) return 'Boa tarde';
    return 'Boa noite';
  }

  async ngOnInit() {
    await this.loadData();
  }

  async prevMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() - 1);
    this.currentDate.set(d);
    await this.loadData();
  }

  async nextMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() + 1);
    this.currentDate.set(d);
    await this.loadData();
  }

  private async loadData() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();

    try {
      const [expenses, totalIncome, budget, goals] = await Promise.all([
        this.expenseService.getByMonth(month, year),
        this.incomeService.getTotalByMonth(month, year),
        this.budgetService.getByMonth(month, year),
        this.goalService.getForPeriod(month, year),
      ]);

      const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0);
      const budgetAmount = budget?.amount ?? 0;
      const budgetUsedPct = budgetAmount > 0 ? (totalExpenses / budgetAmount) * 100 : 0;

      this.summary.set({
        totalIncome,
        totalExpenses,
        balance: totalIncome - totalExpenses,
        budgetAmount,
        budgetUsedPct,
        transactionCount: expenses.length,
      });

      this.goals.set(goals);
      this.generateInsights(totalIncome, totalExpenses, budgetAmount, budgetUsedPct);
      this.updateChart(expenses);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading.set(false);
    }
  }

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  private initChart() {
    if (!this.chartRef) return;
    const ctx = this.chartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Sem gastos'],
        datasets: [{
          data: [1],
          backgroundColor: ['#2a2a2a'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: { position: 'right', labels: { color: '#a1a1aa', font: { family: 'Inter', size: 12 } } },
          tooltip: { enabled: false }
        }
      }
    });
  }

  private updateChart(expenses: any[]) {
    if (!this.chartInstance) return;

    if (expenses.length === 0) {
      this.chartInstance.data = {
        labels: ['Nenhum gasto este mês'],
        datasets: [{
          data: [1],
          backgroundColor: ['#2a2a2a'],
          borderWidth: 0,
        }]
      };
      this.chartInstance.options.plugins!.tooltip!.enabled = false;
      this.chartInstance.update();
      return;
    }

    // Agrupar por categoria
    const categoryTotals = new Map<string, { total: number, color: string }>();
    for (const exp of expenses) {
      const catName = exp.category?.name || 'Outros';
      const catColor = exp.category?.color || '#a855f7';
      const existing = categoryTotals.get(catName) || { total: 0, color: catColor };
      existing.total += exp.amount;
      categoryTotals.set(catName, existing);
    }

    const labels: string[] = [];
    const data: number[] = [];
    const colors: string[] = [];

    categoryTotals.forEach((val, key) => {
      labels.push(key);
      data.push(val.total);
      colors.push(val.color);
    });

    this.chartInstance.data = {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset: 4
      }]
    };
    this.chartInstance.options.plugins!.tooltip!.enabled = true;
    this.chartInstance.update();
  }

  private generateInsights(income: number, expenses: number, budget: number, budgetPct: number) {
    const ins: Insight[] = [];
    if (budgetPct >= 100) ins.push({ icon: 'warning', text: `Você ultrapassou o orçamento do mês! Gasto ${budgetPct.toFixed(0)}% do limite.`, type: 'danger' });
    else if (budgetPct >= 80) ins.push({ icon: 'notifications_active', text: `Atenção: ${budgetPct.toFixed(0)}% do orçamento mensal já foi utilizado.`, type: 'warning' });
    if (income > 0 && expenses > income) ins.push({ icon: 'trending_down', text: 'Seus gastos superaram as receitas este mês. Revise suas despesas.', type: 'danger' });
    else if (income > 0 && expenses <= income * 0.5) ins.push({ icon: 'star', text: 'Ótimo! Você gastou menos de 50% da sua receita este mês.', type: 'success' });
    this.insights.set(ins);
  }

  getBudgetClass(): string {
    const pct = this.summary().budgetUsedPct;
    if (pct >= 100) return 'red';
    if (pct >= 80) return 'yellow';
    return 'green';
  }

  getGoalStatusColor(goal: Goal): string {
    const status = getGoalStatus(goal.current_amount, goal.limit_amount);
    return status === 'safe' ? 'green' : status === 'warning' ? 'yellow' : 'red';
  }

  getGoalProgressClass(goal: Goal): string {
    const status = getGoalStatus(goal.current_amount, goal.limit_amount);
    return status === 'safe' ? 'green' : status === 'warning' ? 'yellow' : 'red';
  }
}
