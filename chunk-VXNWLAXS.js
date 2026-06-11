import {
  AuthService,
  CommonModule,
  Component,
  CurrencyPipe,
  NgZone,
  SupabaseService,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBindV,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-R7DS5LVY.js";

// src/app/features/history/history.component.ts
var _c0 = (a0) => [a0, "BRL", "symbol", "1.2-2", "pt-BR"];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.dateLabel;
var _forTrack1 = ($index, $item) => $item.id;
function HistoryComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Entradas");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9, "Sa\xEDdas");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 18)(14, "span", 15);
    \u0275\u0275text(15, "Saldo Geral");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "span", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(6, 7, \u0275\u0275pureFunction1(25, _c0, ctx_r0.totalEntradas())));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBindV(12, 13, \u0275\u0275pureFunction1(27, _c0, ctx_r0.totalSaidas())));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("income", ctx_r0.saldoGeral() >= 0)("expense", ctx_r0.saldoGeral() < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(18, 19, \u0275\u0275pureFunction1(29, _c0, ctx_r0.saldoGeral())), " ");
  }
}
function HistoryComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 20);
  }
}
function HistoryComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, HistoryComponent_Conditional_22_For_2_Template, 1, 0, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function HistoryComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275text(1, "Nenhuma movimenta\xE7\xE3o neste per\xEDodo.");
    \u0275\u0275domElementEnd();
  }
}
function HistoryComponent_Conditional_24_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26);
    \u0275\u0275domElement(1, "div", 28);
    \u0275\u0275domElementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("income", tx_r2.type === "income")("expense", tx_r2.type === "expense");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.source);
    \u0275\u0275advance();
    \u0275\u0275classProp("income", tx_r2.type === "income")("expense", tx_r2.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tx_r2.type === "expense" ? "-" : "", "", \u0275\u0275pipeBindV(9, 12, \u0275\u0275pureFunction1(18, _c0, tx_r2.amount)), " ");
  }
}
function HistoryComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 25);
    \u0275\u0275repeaterCreate(7, HistoryComponent_Conditional_24_For_2_For_8_Template, 10, 20, "div", 26, _forTrack1);
    \u0275\u0275domElementStart(9, "div", 27)(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r3.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r3.monthStr);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r3.transactions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Saldo do ", ctx_r0.periodo() === "anual" ? "m\xEAs" : "dia");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(14, 4, \u0275\u0275pureFunction1(10, _c0, group_r3.saldoDoDia)));
  }
}
function HistoryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, HistoryComponent_Conditional_24_For_2_Template, 15, 12, "div", 21, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.extratoGroups());
  }
}
var HistoryComponent = class _HistoryComponent {
  supabase = inject(SupabaseService);
  auth = inject(AuthService);
  ngZone = inject(NgZone);
  periodo = signal("mensal", ...ngDevMode ? [{ debugName: "periodo" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : (
    /* istanbul ignore next */
    []
  ));
  extratoGroups = signal([], ...ngDevMode ? [{ debugName: "extratoGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  totalEntradas = signal(0, ...ngDevMode ? [{ debugName: "totalEntradas" }] : (
    /* istanbul ignore next */
    []
  ));
  totalSaidas = signal(0, ...ngDevMode ? [{ debugName: "totalSaidas" }] : (
    /* istanbul ignore next */
    []
  ));
  saldoGeral = signal(0, ...ngDevMode ? [{ debugName: "saldoGeral" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDateLabel = computed(() => {
    const d = this.currentDate();
    const p = this.periodo();
    if (p === "diario") {
      return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
    } else if (p === "mensal") {
      return d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
    } else {
      return d.getFullYear().toString();
    }
  }, ...ngDevMode ? [{ debugName: "currentDateLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadData();
  }
  setPeriodo(p) {
    this.periodo.set(p);
    this.currentDate.set(/* @__PURE__ */ new Date());
    this.loadData();
  }
  prev() {
    const d = new Date(this.currentDate());
    const p = this.periodo();
    if (p === "diario")
      d.setDate(d.getDate() - 1);
    else if (p === "mensal")
      d.setMonth(d.getMonth() - 1);
    else
      d.setFullYear(d.getFullYear() - 1);
    this.currentDate.set(d);
    this.loadData();
  }
  next() {
    const d = new Date(this.currentDate());
    const p = this.periodo();
    if (p === "diario")
      d.setDate(d.getDate() + 1);
    else if (p === "mensal")
      d.setMonth(d.getMonth() + 1);
    else
      d.setFullYear(d.getFullYear() + 1);
    this.currentDate.set(d);
    this.loadData();
  }
  async loadData() {
    this.loading.set(true);
    const userId = this.auth.getCurrentUserId();
    const date = this.currentDate();
    const p = this.periodo();
    let startDateStr = "";
    let endDateStr = "";
    if (p === "diario") {
      startDateStr = date.toISOString().split("T")[0];
      endDateStr = startDateStr;
    } else if (p === "mensal") {
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      startDateStr = firstDay.toISOString().split("T")[0];
      endDateStr = lastDay.toISOString().split("T")[0];
    } else if (p === "anual") {
      const firstDay = new Date(date.getFullYear(), 0, 1);
      const lastDay = new Date(date.getFullYear(), 11, 31);
      startDateStr = firstDay.toISOString().split("T")[0];
      endDateStr = lastDay.toISOString().split("T")[0];
    }
    try {
      const { data: expenses } = await this.supabase.client.from("expenses").select("*").eq("user_id", userId).gte("date", startDateStr).lte("date", endDateStr);
      const { data: incomes } = await this.supabase.client.from("incomes").select("*").eq("user_id", userId).gte("date", startDateStr).lte("date", endDateStr);
      const allTx = [];
      let tEntradas = 0;
      let tSaidas = 0;
      (expenses || []).forEach((e) => {
        tSaidas += e.amount;
        allTx.push({
          id: e.id,
          description: e.description,
          amount: e.amount,
          date: e.date,
          type: "expense",
          source: e.type,
          // 'unico', 'fixo', 'parcelado'
          timestamp: new Date(e.date).getTime()
        });
      });
      (incomes || []).forEach((i) => {
        tEntradas += i.amount;
        allTx.push({
          id: i.id,
          description: i.description,
          amount: i.amount,
          date: i.date,
          type: "income",
          source: "Receita",
          timestamp: new Date(i.date).getTime()
        });
      });
      allTx.sort((a, b) => b.timestamp - a.timestamp);
      const groupsMap = /* @__PURE__ */ new Map();
      allTx.forEach((tx) => {
        const txDate = /* @__PURE__ */ new Date(tx.date + "T12:00:00");
        let groupKey = "";
        let dayStr = "";
        let monthStr = "";
        if (p === "anual") {
          groupKey = txDate.getFullYear() + "-" + txDate.getMonth();
          dayStr = "";
          monthStr = txDate.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
        } else {
          groupKey = tx.date;
          dayStr = txDate.getDate().toString();
          monthStr = txDate.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
        }
        if (!groupsMap.has(groupKey)) {
          groupsMap.set(groupKey, {
            dateLabel: groupKey,
            day: dayStr,
            monthStr,
            transactions: [],
            saldoDoDia: 0
          });
        }
        const group = groupsMap.get(groupKey);
        group.transactions.push(tx);
        if (tx.type === "income") {
          group.saldoDoDia += tx.amount;
        } else {
          group.saldoDoDia -= tx.amount;
        }
      });
      const finalGroups = Array.from(groupsMap.values());
      this.ngZone.run(() => {
        this.totalEntradas.set(tEntradas);
        this.totalSaidas.set(tSaidas);
        this.saldoGeral.set(tEntradas - tSaidas);
        this.extratoGroups.set(finalGroups);
      });
    } catch (e) {
      console.error("Erro ao carregar extrato", e);
    } finally {
      this.ngZone.run(() => {
        this.loading.set(false);
      });
    }
  }
  static \u0275fac = function HistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], decls: 25, vars: 9, consts: [[1, "app-container"], [1, "page-header"], [1, "page-title"], [1, "period-tabs"], [3, "click"], [1, "date-navigator"], [1, "nav-btn", 3, "click"], [1, "material-icons-round"], [1, "current-date"], [1, "period-summary"], [1, "page-content"], [2, "padding", "1rem 1.25rem"], [1, "empty-state"], [1, "timeline"], [1, "summary-item"], [1, "lbl"], [1, "val", "income"], [1, "val", "expense"], [1, "summary-item", "total"], [1, "val"], [1, "skeleton", 2, "height", "88px", "border-radius", "16px", "margin-bottom", "1.5rem"], [1, "timeline-group"], [1, "timeline-date"], [1, "day"], [1, "month"], [1, "timeline-content"], [1, "timeline-item"], [1, "daily-balance"], [1, "dot"], [1, "tx-details"], [1, "tx-title"], [1, "tx-subtitle"], [1, "tx-amount"]], template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Saldo e extrato");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275domListener("click", function HistoryComponent_Template_button_click_5_listener() {
        return ctx.setPeriodo("diario");
      });
      \u0275\u0275text(6, "Di\xE1rio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 4);
      \u0275\u0275domListener("click", function HistoryComponent_Template_button_click_7_listener() {
        return ctx.setPeriodo("mensal");
      });
      \u0275\u0275text(8, "Mensal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 4);
      \u0275\u0275domListener("click", function HistoryComponent_Template_button_click_9_listener() {
        return ctx.setPeriodo("anual");
      });
      \u0275\u0275text(10, "Anual");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 5)(12, "button", 6);
      \u0275\u0275domListener("click", function HistoryComponent_Template_button_click_12_listener() {
        return ctx.prev();
      });
      \u0275\u0275domElementStart(13, "span", 7);
      \u0275\u0275text(14, "chevron_left");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 8);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 6);
      \u0275\u0275domListener("click", function HistoryComponent_Template_button_click_17_listener() {
        return ctx.next();
      });
      \u0275\u0275domElementStart(18, "span", 7);
      \u0275\u0275text(19, "chevron_right");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(20, HistoryComponent_Conditional_20_Template, 19, 31, "div", 9);
      \u0275\u0275domElementStart(21, "main", 10);
      \u0275\u0275conditionalCreate(22, HistoryComponent_Conditional_22_Template, 3, 1, "div", 11)(23, HistoryComponent_Conditional_23_Template, 2, 0, "div", 12)(24, HistoryComponent_Conditional_24_Template, 3, 0, "div", 13);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.periodo() === "diario");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.periodo() === "mensal");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.periodo() === "anual");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.currentDateLabel());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading() && ctx.extratoGroups().length > 0 ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 22 : ctx.extratoGroups().length === 0 ? 23 : 24);
    }
  }, dependencies: [CommonModule, CurrencyPipe], styles: ["\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n  padding-bottom: 5rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.period-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem 1.25rem 0.5rem;\n  gap: 0.5rem;\n}\n.period-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: var(--color-text-muted);\n  border-radius: 8px;\n  padding: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.period-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.15);\n  color: var(--color-accent-light);\n  border-color: rgba(168, 85, 247, 0.3);\n}\n.date-navigator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1.25rem 1.5rem;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n}\n.current-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1.25rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.period-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  margin: 0 1.25rem 1.5rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary-item.total[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  padding-left: 1rem;\n}\n.summary-item[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.summary-item[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.val.income[_ngcontent-%COMP%] {\n  color: var(--color-green);\n}\n.val.expense[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 1.25rem 2rem;\n}\n.timeline-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.timeline-date[_ngcontent-%COMP%] {\n  width: 45px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n}\n.timeline-date[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n}\n.timeline-date[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  text-transform: capitalize;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  padding-left: 1.25rem;\n  position: relative;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.25rem;\n  position: relative;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  left: -24.5px;\n  background: white;\n}\n.dot.income[_ngcontent-%COMP%] {\n  background: var(--color-green);\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.dot.expense[_ngcontent-%COMP%] {\n  background: var(--color-red);\n  box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);\n}\n.tx-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tx-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n.tx-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: capitalize;\n}\n.tx-amount[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.tx-amount.income[_ngcontent-%COMP%] {\n  color: var(--color-green);\n}\n.tx-amount.expense[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.daily-balance[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.75rem;\n  margin-bottom: 1.5rem;\n  border-top: 1px dashed rgba(255, 255, 255, 0.1);\n}\n.daily-balance[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.daily-balance[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n/*# sourceMappingURL=history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryComponent, [{
    type: Component,
    args: [{ selector: "app-history", standalone: true, imports: [CommonModule], template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Saldo e extrato</h1>
      </header>

      <div class="period-tabs">
        <button [class.active]="periodo() === 'diario'" (click)="setPeriodo('diario')">Di\xE1rio</button>
        <button [class.active]="periodo() === 'mensal'" (click)="setPeriodo('mensal')">Mensal</button>
        <button [class.active]="periodo() === 'anual'" (click)="setPeriodo('anual')">Anual</button>
      </div>

      <div class="date-navigator">
        <button class="nav-btn" (click)="prev()"><span class="material-icons-round">chevron_left</span></button>
        <div class="current-date">{{ currentDateLabel() }}</div>
        <button class="nav-btn" (click)="next()"><span class="material-icons-round">chevron_right</span></button>
      </div>

      @if (!loading() && extratoGroups().length > 0) {
        <div class="period-summary">
          <div class="summary-item">
            <span class="lbl">Entradas</span>
            <span class="val income">{{ totalEntradas() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
          </div>
          <div class="summary-item">
            <span class="lbl">Sa\xEDdas</span>
            <span class="val expense">-{{ totalSaidas() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
          </div>
          <div class="summary-item total">
            <span class="lbl">Saldo Geral</span>
            <span class="val" [class.income]="saldoGeral() >= 0" [class.expense]="saldoGeral() < 0">
              {{ saldoGeral() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}
            </span>
          </div>
        </div>
      }

      <main class="page-content">
        @if (loading()) {
          <div style="padding: 1rem 1.25rem;">
            @for (i of [1,2,3]; track i) {
              <div class="skeleton" style="height:88px;border-radius:16px;margin-bottom:1.5rem"></div>
            }
          </div>
        } @else if (extratoGroups().length === 0) {
          <div class="empty-state">Nenhuma movimenta\xE7\xE3o neste per\xEDodo.</div>
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
                    <span class="lbl">Saldo do {{ periodo() === 'anual' ? 'm\xEAs' : 'dia' }}</span>
                    <span class="val">{{ group.saldoDoDia | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;656dae938bac092c42fb801b2c3786f52638de3831e323d462e8ed20d5a43b36;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/history/history.component.ts */\n.app-container {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n  padding-bottom: 5rem;\n}\n.page-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n}\n.page-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.period-tabs {\n  display: flex;\n  padding: 1rem 1.25rem 0.5rem;\n  gap: 0.5rem;\n}\n.period-tabs button {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: var(--color-text-muted);\n  border-radius: 8px;\n  padding: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.period-tabs button.active {\n  background: rgba(168, 85, 247, 0.15);\n  color: var(--color-accent-light);\n  border-color: rgba(168, 85, 247, 0.3);\n}\n.date-navigator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1.25rem 1.5rem;\n}\n.nav-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n}\n.current-date {\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 1.25rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.period-summary {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  margin: 0 1.25rem 1.5rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary-item.total {\n  align-items: flex-end;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  padding-left: 1rem;\n}\n.summary-item .lbl {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.summary-item .val {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.val.income {\n  color: var(--color-green);\n}\n.val.expense {\n  color: var(--color-red);\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  padding: 0 1.25rem 2rem;\n}\n.timeline-group {\n  display: flex;\n  gap: 1rem;\n}\n.timeline-date {\n  width: 45px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n}\n.timeline-date .day {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n}\n.timeline-date .month {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  text-transform: capitalize;\n}\n.timeline-content {\n  flex: 1;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  padding-left: 1.25rem;\n  position: relative;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.timeline-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.25rem;\n  position: relative;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  left: -24.5px;\n  background: white;\n}\n.dot.income {\n  background: var(--color-green);\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.dot.expense {\n  background: var(--color-red);\n  box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);\n}\n.tx-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tx-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n.tx-subtitle {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: capitalize;\n}\n.tx-amount {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.tx-amount.income {\n  color: var(--color-green);\n}\n.tx-amount.expense {\n  color: var(--color-red);\n}\n.daily-balance {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.75rem;\n  margin-bottom: 1.5rem;\n  border-top: 1px dashed rgba(255, 255, 255, 0.1);\n}\n.daily-balance .lbl {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.daily-balance .val {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n/*# sourceMappingURL=history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/features/history/history.component.ts", lineNumber: 157 });
})();
export {
  HistoryComponent
};
//# sourceMappingURL=chunk-VXNWLAXS.js.map
