import { Component, OnInit, signal, inject, NgZone, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../core/services/supabase.service';
import { AuthService } from '../../core/services/auth.service';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string; // YYYY-MM-DD
  type: 'income' | 'expense';
  source?: string;
  timestamp: number;
}

interface ExtratoGroup {
  dateLabel: string;
  day: string;
  monthStr: string;
  transactions: Transaction[];
  saldoDoDia: number;
}

type Periodo = 'diario' | 'mensal' | 'anual';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Saldo e extrato</h1>
      </header>

      <div class="period-tabs">
        <button [class.active]="periodo() === 'diario'" (click)="setPeriodo('diario')">Diário</button>
        <button [class.active]="periodo() === 'mensal'" (click)="setPeriodo('mensal')">Mensal</button>
        <button [class.active]="periodo() === 'anual'" (click)="setPeriodo('anual')">Anual</button>
      </div>

      <div class="date-navigator">
        <button class="nav-btn" (click)="prev()"><span class="material-icons-round">chevron_left</span></button>
        <div class="current-date">{{ currentDateLabel() }}</div>
        <button class="nav-btn" (click)="next()"><span class="material-icons-round">chevron_right</span></button>
      </div>

      <main class="page-content">
        @if (loading()) {
          <div style="padding: 1rem 1.25rem;">
            @for (i of [1,2,3]; track i) {
              <div class="skeleton" style="height:88px;border-radius:16px;margin-bottom:1.5rem"></div>
            }
          </div>
        } @else if (extratoGroups().length === 0) {
          <div class="empty-state">Nenhuma movimentação neste período.</div>
        } @else {
          <div class="timeline">
            @for (group of extratoGroups(); track group.dateLabel) {
              <div class="timeline-group">
                <div class="timeline-date">
                  <span class="day">{{ group.day }}</span>
                  <span class="month">{{ group.monthStr }}</span>
                </div>
                <div class="timeline-content">
                  @for (tx of group.transactions; track tx.id) {
                    <div class="timeline-item">
                      <div class="dot" [class.income]="tx.type === 'income'" [class.expense]="tx.type === 'expense'"></div>
                      <div class="tx-details">
                        <div class="tx-title">{{ tx.description }}</div>
                        <div class="tx-subtitle">{{ tx.source }}</div>
                      </div>
                      <div class="tx-amount" [class.income]="tx.type === 'income'" [class.expense]="tx.type === 'expense'">
                        {{ tx.type === 'expense' ? '-' : '' }}{{ tx.amount | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}
                      </div>
                    </div>
                  }
                  <div class="daily-balance">
                    <span class="lbl">Saldo do {{ periodo() === 'anual' ? 'mês' : 'dia' }}</span>
                    <span class="val">{{ group.saldoDoDia | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .app-container { min-height: 100vh; background: var(--color-bg-primary); padding-bottom: 5rem; }
    .page-header { position: sticky; top: 0; z-index: 10; background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid var(--color-border); padding: 1rem 1.25rem 1rem 4.5rem; }
    .page-title { font-size: 1.125rem; font-weight: 700; }
    
    .period-tabs { display: flex; padding: 1rem 1.25rem 0.5rem; gap: 0.5rem; }
    .period-tabs button { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--color-text-muted); border-radius: 8px; padding: 0.5rem; font-size: 0.8125rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .period-tabs button.active { background: rgba(168, 85, 247, 0.15); color: var(--color-accent-light); border-color: rgba(168, 85, 247, 0.3); }

    .date-navigator { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 1.25rem 1.5rem; }
    .nav-btn { background: rgba(255,255,255,0.05); border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; }
    .current-date { font-size: 1rem; font-weight: 600; text-transform: capitalize; }

    .empty-state { text-align: center; padding: 3rem 1.25rem; color: var(--color-text-muted); font-size: 0.875rem; }

    .timeline { display: flex; flex-direction: column; padding: 0 1.25rem 2rem; }
    .timeline-group { display: flex; gap: 1rem; }
    .timeline-date { width: 45px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 4px; }
    .timeline-date .day { font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary); }
    .timeline-date .month { font-size: 0.75rem; font-weight: 500; color: var(--color-text-muted); text-transform: capitalize; }
    
    .timeline-content { flex: 1; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 1.25rem; position: relative; padding-bottom: 0.5rem; margin-bottom: 0.5rem; }
    
    .timeline-item { display: flex; align-items: center; margin-bottom: 1.25rem; position: relative; }
    .dot { width: 8px; height: 8px; border-radius: 50%; position: absolute; left: -24.5px; background: white; }
    .dot.income { background: var(--color-green); box-shadow: 0 0 8px rgba(16, 185, 129, 0.6); }
    .dot.expense { background: var(--color-red); box-shadow: 0 0 8px rgba(239, 68, 68, 0.6); }

    .tx-details { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .tx-title { font-size: 0.875rem; font-weight: 600; color: var(--color-text-primary); }
    .tx-subtitle { font-size: 0.75rem; color: var(--color-text-muted); text-transform: capitalize; }
    .tx-amount { font-size: 0.875rem; font-weight: 700; }
    .tx-amount.income { color: var(--color-green); }
    .tx-amount.expense { color: var(--color-red); }

    .daily-balance { display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; margin-bottom: 1.5rem; border-top: 1px dashed rgba(255,255,255,0.1); }
    .daily-balance .lbl { font-size: 0.75rem; color: var(--color-text-muted); }
    .daily-balance .val { font-size: 0.8125rem; font-weight: 600; color: var(--color-text-primary); }
  `]
})
export class HistoryComponent implements OnInit {
  private supabase = inject(SupabaseService);
  private auth = inject(AuthService);
  private ngZone = inject(NgZone);

  periodo = signal<Periodo>('mensal');
  currentDate = signal<Date>(new Date());
  extratoGroups = signal<ExtratoGroup[]>([]);
  loading = signal(false);

  currentDateLabel = computed(() => {
    const d = this.currentDate();
    const p = this.periodo();
    if (p === 'diario') {
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    } else if (p === 'mensal') {
      return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    } else {
      return d.getFullYear().toString();
    }
  });

  ngOnInit() {
    this.loadData();
  }

  setPeriodo(p: Periodo) {
    this.periodo.set(p);
    this.currentDate.set(new Date()); // Reset to today when changing period
    this.loadData();
  }

  prev() {
    const d = new Date(this.currentDate());
    const p = this.periodo();
    if (p === 'diario') d.setDate(d.getDate() - 1);
    else if (p === 'mensal') d.setMonth(d.getMonth() - 1);
    else d.setFullYear(d.getFullYear() - 1);
    this.currentDate.set(d);
    this.loadData();
  }

  next() {
    const d = new Date(this.currentDate());
    const p = this.periodo();
    if (p === 'diario') d.setDate(d.getDate() + 1);
    else if (p === 'mensal') d.setMonth(d.getMonth() + 1);
    else d.setFullYear(d.getFullYear() + 1);
    this.currentDate.set(d);
    this.loadData();
  }

  async loadData() {
    this.loading.set(true);
    const userId = this.auth.getCurrentUserId();
    const date = this.currentDate();
    const p = this.periodo();

    let startDateStr = '';
    let endDateStr = '';

    if (p === 'diario') {
      startDateStr = date.toISOString().split('T')[0];
      endDateStr = startDateStr;
    } else if (p === 'mensal') {
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      startDateStr = firstDay.toISOString().split('T')[0];
      endDateStr = lastDay.toISOString().split('T')[0];
    } else if (p === 'anual') {
      const firstDay = new Date(date.getFullYear(), 0, 1);
      const lastDay = new Date(date.getFullYear(), 11, 31);
      startDateStr = firstDay.toISOString().split('T')[0];
      endDateStr = lastDay.toISOString().split('T')[0];
    }

    try {
      // Fetch Expenses
      const { data: expenses } = await this.supabase.client
        .from('expenses')
        .select('*')
        .eq('user_id', userId)
        .gte('date', startDateStr)
        .lte('date', endDateStr);

      // Fetch Incomes
      const { data: incomes } = await this.supabase.client
        .from('incomes')
        .select('*')
        .eq('user_id', userId)
        .gte('date', startDateStr)
        .lte('date', endDateStr);

      const allTx: Transaction[] = [];

      (expenses || []).forEach(e => {
        allTx.push({
          id: e.id,
          description: e.description,
          amount: e.amount,
          date: e.date,
          type: 'expense',
          source: e.type, // 'unico', 'fixo', 'parcelado'
          timestamp: new Date(e.date).getTime()
        });
      });

      (incomes || []).forEach(i => {
        allTx.push({
          id: i.id,
          description: i.description,
          amount: i.amount,
          date: i.date,
          type: 'income',
          source: 'Receita',
          timestamp: new Date(i.date).getTime()
        });
      });

      // Sort descending
      allTx.sort((a, b) => b.timestamp - a.timestamp);

      // Grouping
      const groupsMap = new Map<string, ExtratoGroup>();

      allTx.forEach(tx => {
        const txDate = new Date(tx.date + 'T12:00:00'); // Prevent timezone issues
        
        let groupKey = '';
        let dayStr = '';
        let monthStr = '';

        if (p === 'anual') {
          // Group by Month
          groupKey = txDate.getFullYear() + '-' + txDate.getMonth();
          dayStr = '';
          monthStr = txDate.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
        } else {
          // Group by Day
          groupKey = tx.date;
          dayStr = txDate.getDate().toString();
          monthStr = txDate.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
        }

        if (!groupsMap.has(groupKey)) {
          groupsMap.set(groupKey, {
            dateLabel: groupKey,
            day: dayStr,
            monthStr: monthStr,
            transactions: [],
            saldoDoDia: 0
          });
        }

        const group = groupsMap.get(groupKey)!;
        group.transactions.push(tx);
        
        if (tx.type === 'income') {
          group.saldoDoDia += tx.amount;
        } else {
          group.saldoDoDia -= tx.amount;
        }
      });

      const finalGroups = Array.from(groupsMap.values());

      this.ngZone.run(() => {
        this.extratoGroups.set(finalGroups);
      });

    } catch (e) {
      console.error('Erro ao carregar extrato', e);
    } finally {
      this.ngZone.run(() => {
        this.loading.set(false);
      });
    }
  }
}
