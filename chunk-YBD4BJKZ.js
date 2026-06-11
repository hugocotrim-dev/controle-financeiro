import {
  IncomeService
} from "./chunk-CHX73ELO.js";
import "./chunk-SN2A44JV.js";
import {
  CurrencyFormatDirective
} from "./chunk-GXSS26JU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NY2MEXEQ.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R7DS5LVY.js";

// src/app/core/models/income.model.ts
var INCOME_TYPE_LABELS = {
  salario: "Sal\xE1rio",
  extra: "Extra",
  freelance: "Freelance",
  investimento: "Investimento",
  outros: "Outros"
};

// src/app/features/income/income.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => [a0, "BRL", "symbol", "1.2-2", "pt-BR"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function IncomeComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function IncomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, IncomeComponent_Conditional_18_For_2_Template, 1, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function IncomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Nenhuma receita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Adicione suas receitas para calcular seu saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Nova receita ");
    \u0275\u0275elementEnd()();
  }
}
function IncomeComponent_Conditional_20_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_20_For_15_Template_div_click_0_listener() {
      const income_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(income_r5));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31)(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const income_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + income_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeIcon(income_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(income_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(income_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 7, income_r5.date, "dd/MM/yyyy", "", "pt-BR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(15, 12, \u0275\u0275pureFunction1(18, _c1, income_r5.amount)));
  }
}
function IncomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5, "Total de receitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_20_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Nova receita ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275repeaterCreate(14, IncomeComponent_Conditional_20_For_15_Template, 16, 20, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(8, 1, \u0275\u0275pureFunction1(7, _c1, ctx_r1.totalIncome())));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.incomes());
  }
}
function IncomeComponent_Conditional_21_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r7.label);
  }
}
function IncomeComponent_Conditional_21_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_21_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteIncome());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function IncomeComponent_Conditional_21_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function IncomeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "div", 37);
    \u0275\u0275elementStart(3, "h2", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "div", 40)(7, "label", 41);
    \u0275\u0275text(8, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Conditional_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 43)(11, "div", 40)(12, "label", 41);
    \u0275\u0275text(13, "Valor (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Conditional_21_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amount, $event) || (ctx_r1.form.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 40)(16, "label", 41);
    \u0275\u0275text(17, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Conditional_21_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date, $event) || (ctx_r1.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 40)(20, "label", 41);
    \u0275\u0275text(21, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Conditional_21_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(23, IncomeComponent_Conditional_21_For_24_Template, 2, 2, "option", 47, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 48);
    \u0275\u0275conditionalCreate(26, IncomeComponent_Conditional_21_Conditional_26_Template, 3, 1, "button", 49);
    \u0275\u0275elementStart(27, "button", 50);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_21_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 51);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_21_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveIncome());
    });
    \u0275\u0275conditionalCreate(30, IncomeComponent_Conditional_21_Conditional_30_Template, 1, 0, "span", 52);
    \u0275\u0275text(31, " Salvar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingIncome() ? "Editar" : "Nova", " Receita");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.incomeTypes);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.editingIncome() ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 30 : -1);
  }
}
var IncomeComponent = class _IncomeComponent {
  incomeService = inject(IncomeService);
  incomes = signal([], ...ngDevMode ? [{ debugName: "incomes" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
    /* istanbul ignore next */
    []
  ));
  editingIncome = signal(null, ...ngDevMode ? [{ debugName: "editingIncome" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : (
    /* istanbul ignore next */
    []
  ));
  form = {
    description: "",
    amount: 0,
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    type: "salario"
  };
  incomeTypes = Object.entries(INCOME_TYPE_LABELS).map(([value, label]) => ({ value, label }));
  typeIcons = { salario: "work", extra: "bolt", freelance: "computer", investimento: "show_chart", outros: "attach_money" };
  currentMonthLabel = () => this.currentDate().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  isCurrentMonth = () => {
    const n = /* @__PURE__ */ new Date();
    return this.currentDate().getMonth() === n.getMonth() && this.currentDate().getFullYear() === n.getFullYear();
  };
  totalIncome = () => this.incomes().reduce((s, i) => s + i.amount, 0);
  getTypeLabel = (t) => INCOME_TYPE_LABELS[t];
  getTypeIcon = (t) => this.typeIcons[t] ?? "attach_money";
  async ngOnInit() {
    await this.loadIncomes();
  }
  async prevMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() - 1);
    this.currentDate.set(d);
    await this.loadIncomes();
  }
  async nextMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() + 1);
    this.currentDate.set(d);
    await this.loadIncomes();
  }
  async loadIncomes() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try {
      this.incomes.set(await this.incomeService.getByMonth(month, year));
    } finally {
      this.loading.set(false);
    }
  }
  openAdd() {
    this.editingIncome.set(null);
    this.form = { description: "", amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], type: "salario" };
    this.showModal.set(true);
  }
  openEdit(income) {
    this.editingIncome.set(income);
    this.form = { description: income.description, amount: income.amount, date: income.date, type: income.type };
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  async saveIncome() {
    if (!this.form.description || !this.form.amount) {
      alert("Por favor, preencha a descri\xE7\xE3o e o valor da receita.");
      return;
    }
    this.saving.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try {
      if (this.editingIncome())
        await this.incomeService.update(this.editingIncome().id, __spreadProps(__spreadValues({}, this.form), { month, year }));
      else
        await this.incomeService.create(__spreadProps(__spreadValues({}, this.form), { month, year }));
      this.closeModal();
      await this.loadIncomes();
    } catch (e) {
      console.error(e);
      alert("Erro ao salvar receita: " + (e?.message || JSON.stringify(e)));
    } finally {
      this.saving.set(false);
    }
  }
  async deleteIncome() {
    if (!this.editingIncome())
      return;
    if (!confirm("Excluir esta receita?"))
      return;
    this.saving.set(true);
    try {
      await this.incomeService.delete(this.editingIncome().id);
      this.closeModal();
      await this.loadIncomes();
    } catch (e) {
      console.error(e);
    } finally {
      this.saving.set(false);
    }
  }
  static \u0275fac = function IncomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeComponent, selectors: [["app-income"]], decls: 22, vars: 3, consts: [[1, "app-container"], [1, "page-header"], [1, "page-title"], [2, "display", "flex", "align-items", "center", "gap", "0.5rem"], [1, "month-selector"], [1, "month-btn", 3, "click"], [1, "material-icons-round"], [1, "month-label"], ["aria-label", "Adicionar receita", 1, "btn-icon", 3, "click"], [1, "page-content"], [2, "padding", "0 1rem"], [1, "empty-state", "animate-fade-in"], [1, "modal-overlay"], [1, "skeleton", 2, "height", "72px", "border-radius", "16px", "margin-bottom", "0.5rem"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "btn", "btn-success", 2, "margin-top", "1rem", 3, "click"], [1, "total-card", "animate-fade-in"], [1, "material-icons-round", "total-icon"], [2, "flex", "1"], [1, "total-label"], [1, "total-value"], [1, "btn", "btn-success", 2, "border-radius", "12px", "padding", "0.5rem 1rem", "font-size", "0.875rem", 3, "click"], [1, "material-icons-round", 2, "font-size", "18px"], [1, "income-list", "stagger-children"], [1, "income-item"], [1, "income-item", 3, "click"], [1, "income-icon"], [1, "income-info"], [1, "income-desc"], [1, "income-meta"], [1, "badge", "badge-green"], [1, "income-date"], [1, "income-amount"], [1, "modal-overlay", 3, "click"], [1, "modal-sheet", "animate-slide-up", 3, "click"], [1, "modal-handle"], [1, "modal-title"], [1, "modal-form"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Ex: Sal\xE1rio mar\xE7o", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "inputmode", "numeric", "appCurrencyFormat", "", "placeholder", "0,00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "modal-actions"], [1, "btn", "btn-danger", 3, "disabled"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "spinner-sm"], [1, "btn", "btn-danger", 3, "click", "disabled"]], template: function IncomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Receitas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function IncomeComponent_Template_button_click_6_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function IncomeComponent_Template_button_click_11_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function IncomeComponent_Template_button_click_14_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(15, "span", 6);
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "main", 9);
      \u0275\u0275conditionalCreate(18, IncomeComponent_Conditional_18_Template, 3, 1, "div", 10)(19, IncomeComponent_Conditional_19_Template, 11, 0, "div", 11)(20, IncomeComponent_Conditional_20_Template, 16, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, IncomeComponent_Conditional_21_Template, 32, 8, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.currentMonthLabel());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 18 : ctx.incomes().length === 0 ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 21 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CurrencyFormatDirective, CurrencyPipe, DatePipe], styles: ["\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.month-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.25rem;\n}\n.month-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 8px;\n  transition: all 150ms;\n}\n.month-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--color-text-primary);\n}\n.month-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n}\n.month-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.month-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0 0.25rem;\n  min-width: 70px;\n  text-align: center;\n}\n.total-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1rem;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n}\n.total-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--color-green);\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--color-green);\n}\n.income-list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.income-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.income-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-light);\n  transform: translateY(-1px);\n}\n.income-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(16, 185, 129, 0.15);\n}\n.income-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--color-green);\n}\n.income-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.income-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.income-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.income-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.income-amount[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--color-green);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 85vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .modal-sheet[_ngcontent-%COMP%] {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .income-list[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=income.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeComponent, [{
    type: Component,
    args: [{ selector: "app-income", standalone: true, imports: [CommonModule, FormsModule, CurrencyFormatDirective], template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Receitas</h1>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div class="month-selector">
            <button class="month-btn" (click)="prevMonth()"><span class="material-icons-round">chevron_left</span></button>
            <span class="month-label">{{ currentMonthLabel() }}</span>
            <button class="month-btn" (click)="nextMonth()"><span class="material-icons-round">chevron_right</span></button>
          </div>
          <button class="btn-icon" (click)="openAdd()" aria-label="Adicionar receita">
            <span class="material-icons-round">add</span>
          </button>
        </div>
      </header>

      <main class="page-content">
        @if (loading()) {
          <div style="padding:0 1rem">
            @for (i of [1,2,3]; track i) {
              <div class="skeleton" style="height:72px;border-radius:16px;margin-bottom:0.5rem"></div>
            }
          </div>
        } @else if (incomes().length === 0) {
          <div class="empty-state animate-fade-in">
            <span class="material-icons-round empty-icon">savings</span>
            <p class="empty-title">Nenhuma receita</p>
            <p class="empty-desc">Adicione suas receitas para calcular seu saldo</p>
            <button class="btn btn-success" (click)="openAdd()" style="margin-top:1rem">
              <span class="material-icons-round">add</span> Nova receita
            </button>
          </div>
        } @else {
          <!-- Total Card -->
          <div class="total-card animate-fade-in">
            <span class="material-icons-round total-icon">trending_up</span>
            <div style="flex: 1;">
              <div class="total-label">Total de receitas</div>
              <div class="total-value">{{ totalIncome() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
            </div>
            <button class="btn btn-success" (click)="openAdd()" style="border-radius: 12px; padding: 0.5rem 1rem; font-size: 0.875rem;">
              <span class="material-icons-round" style="font-size: 18px;">add</span> Nova receita
            </button>
          </div>

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



      @if (showModal()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-sheet animate-slide-up" (click)="$event.stopPropagation()">
            <div class="modal-handle"></div>
            <h2 class="modal-title">{{ editingIncome() ? 'Editar' : 'Nova' }} Receita</h2>
            <div class="modal-form">
              <div class="form-group">
                <label class="form-label">Descri\xE7\xE3o</label>
                <input type="text" class="form-control" [(ngModel)]="form.description" placeholder="Ex: Sal\xE1rio mar\xE7o" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Valor (R$)</label>
                  <input type="text" inputmode="numeric" class="form-control" appCurrencyFormat [(ngModel)]="form.amount" placeholder="0,00" />
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
    </div>
  `, styles: ["/* angular:styles/component:scss;b89b11ac08ba48a073435cdc72232686474ece17490c3853d3850ccfd7ae852e;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/income/income.component.ts */\n.app-container {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon .material-icons-round {\n  font-size: 20px;\n}\n.month-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.25rem;\n}\n.month-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 8px;\n  transition: all 150ms;\n}\n.month-btn:hover:not(:disabled) {\n  color: var(--color-text-primary);\n}\n.month-btn:disabled {\n  opacity: 0.3;\n}\n.month-btn .material-icons-round {\n  font-size: 18px;\n}\n.month-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0 0.25rem;\n  min-width: 70px;\n  text-align: center;\n}\n.total-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1rem;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n}\n.total-icon {\n  font-size: 28px;\n  color: var(--color-green);\n}\n.total-label {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.total-value {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--color-green);\n}\n.income-list {\n  padding: 0 1rem;\n}\n.income-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.income-item:hover {\n  border-color: var(--color-border-light);\n  transform: translateY(-1px);\n}\n.income-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(16, 185, 129, 0.15);\n}\n.income-icon .material-icons-round {\n  font-size: 22px;\n  color: var(--color-green);\n}\n.income-info {\n  flex: 1;\n  min-width: 0;\n}\n.income-desc {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.income-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.income-date {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.income-amount {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--color-green);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 85vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions .btn-success {\n  flex: 1;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay {\n    align-items: center;\n  }\n  .modal-sheet {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle {\n    display: none;\n  }\n  .income-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=income.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeComponent, { className: "IncomeComponent", filePath: "src/app/features/income/income.component.ts", lineNumber: 161 });
})();
export {
  IncomeComponent
};
//# sourceMappingURL=chunk-YBD4BJKZ.js.map
