import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../core/services/expense.service';
import { IncomeService } from '../../core/services/income.service';
import { BottomNavComponent } from '../../shared/components/bottom-nav/bottom-nav.component';

interface MonthHistory {
  month: number;
  year: number;
  label: string;
  totalExpenses: number;
  totalIncome: number;
  balance: number;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Histórico</h1>
      </header>

      <main class="page-content">
        @if (loading()) {
          <div>
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="skeleton" style="height:88px;border-radius:16px;margin-bottom:0.75rem"></div>
            }
          </div>
        } @else {
          <div class="history-list stagger-children">
            @for (item of history(); track item.month + '-' + item.year) {
              <div class="history-card" [class.current]="isCurrentMonth(item)">
                <div class="history-month">
                  <div class="month-label-big">{{ item.label }}</div>
                  @if (isCurrentMonth(item)) {
                    <span class="badge badge-accent">Atual</span>
                  }
                </div>
                <div class="history-stats">
                  <div class="hstat">
                    <span class="hstat-icon green">
                      <span class="material-icons-round">arrow_upward</span>
                    </span>
                    <div>
                      <div class="hstat-label">Receitas</div>
                      <div class="hstat-value income">{{ item.totalIncome | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}</div>
                    </div>
                  </div>
                  <div class="hstat">
                    <span class="hstat-icon red">
                      <span class="material-icons-round">arrow_downward</span>
                    </span>
                    <div>
                      <div class="hstat-label">Gastos</div>
                      <div class="hstat-value expense">{{ item.totalExpenses | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}</div>
                    </div>
                  </div>
                  <div class="hstat">
                    <div>
                      <div class="hstat-label">Saldo</div>
                      <div class="hstat-value" [class.income]="item.balance >= 0" [class.expense]="item.balance < 0">
                        {{ item.balance | currency:'BRL':'symbol':'1.0-0':'pt-BR' }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </main>

      <app-bottom-nav />
    </div>
  `,
  styles: [`
    .app-container { min-height:100vh;background:var(--color-bg-primary); }
    .page-header { position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border);padding:1rem 1.25rem; }
    .page-title { font-size:1.125rem;font-weight:700; }
    .history-list { display:flex;flex-direction:column;gap:0.75rem; }
    .history-card { background:var(--gradient-card);border:1px solid var(--color-border);border-radius:16px;padding:1rem 1.25rem;transition:all 200ms;
      &.current { border-color:rgba(168,85,247,0.3);background:linear-gradient(145deg,rgba(168,85,247,0.05) 0%,#0f0f0f 100%); }
    }
    .history-month { display:flex;align-items:center;gap:0.75rem;margin-bottom:0.875rem; }
    .month-label-big { font-size:1rem;font-weight:700;text-transform:capitalize; }
    .history-stats { display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem; }
    .hstat { display:flex;align-items:center;gap:0.5rem; }
    .hstat-icon { width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center; .material-icons-round{font-size:14px;color:white;} &.green{background:rgba(16,185,129,0.2);.material-icons-round{color:var(--color-green);}} &.red{background:rgba(239,68,68,0.2);.material-icons-round{color:var(--color-red);}} }
    .hstat-label { font-size:0.625rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em; }
    .hstat-value { font-size:0.8125rem;font-weight:700; &.income{color:var(--color-green);} &.expense{color:var(--color-red);} }

    @media (min-width: 768px) {
      .history-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
    }
  `]
})
export class HistoryComponent implements OnInit {
  private expenseService = inject(ExpenseService);
  private incomeService = inject(IncomeService);

  history = signal<MonthHistory[]>([]);
  loading = signal(true);

  async ngOnInit() {
    this.loading.set(true);
    const months: MonthHistory[] = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      const [totalExpenses, totalIncome] = await Promise.all([
        this.expenseService.getTotalByMonth(month, year),
        this.incomeService.getTotalByMonth(month, year),
      ]);
      months.push({
        month, year,
        label: d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
        totalExpenses, totalIncome,
        balance: totalIncome - totalExpenses,
      });
    }
    this.history.set(months.reverse());
    this.loading.set(false);
  }

  isCurrentMonth = (item: MonthHistory) => {
    const now = new Date();
    return item.month === now.getMonth() + 1 && item.year === now.getFullYear();
  };
}
