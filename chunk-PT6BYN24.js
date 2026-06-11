import {
  GoalService
} from "./chunk-UMEOT4EK.js";
import {
  ExpenseService
} from "./chunk-B7SYATWQ.js";
import {
  getGoalStatus
} from "./chunk-SN2A44JV.js";
import {
  CurrencyFormatDirective
} from "./chunk-GXSS26JU.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NY2MEXEQ.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DecimalPipe,
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
  ɵɵpipeBind2,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R7DS5LVY.js";

// src/app/features/goals/goals.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => [a0, "BRL", "symbol", "1.2-2", "pt-BR"];
var _forTrack0 = ($index, $item) => $item.id;
function GoalsComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function GoalsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, GoalsComponent_Conditional_19_For_2_Template, 1, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function GoalsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "Nenhuma meta criada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Defina metas financeiras para controlar seus gastos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Criar meta ");
    \u0275\u0275elementEnd()();
  }
}
function GoalsComponent_Conditional_21_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 7);
    \u0275\u0275text(2, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function GoalsComponent_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_21_For_2_Template_div_click_0_listener() {
      const goal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(goal_r4));
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "div")(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15, "de");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 30);
    \u0275\u0275element(20, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, GoalsComponent_Conditional_21_For_2_Conditional_21_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const goal_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("status-" + ctx_r1.getStatus(goal_r4));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(goal_r4.name);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + (goal_r4.type === "mensal" ? "accent" : "blue"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", goal_r4.type === "mensal" ? "Mensal" : "Anual", " \u2022 ", ctx_r1.getPeriodLabel(goal_r4), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap("pct-" + ctx_r1.getStatus(goal_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 17, ctx_r1.getPercent(goal_r4), "1.0-0"), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(13, 20, \u0275\u0275pureFunction1(32, _c1, goal_r4.current_amount)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(18, 26, \u0275\u0275pureFunction1(34, _c1, goal_r4.limit_amount)));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getProgressClass(goal_r4));
    \u0275\u0275styleProp("width", ctx_r1.Math.min(ctx_r1.getPercent(goal_r4), 100), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_21_0 = ctx_r1.getPrediction(goal_r4)) ? 21 : -1, tmp_21_0);
  }
}
function GoalsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, GoalsComponent_Conditional_21_For_2_Template, 22, 36, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.goals());
  }
}
function GoalsComponent_Conditional_22_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2, "M\xEAs de Refer\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Conditional_24_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.monthStr, $event) || (ctx_r1.form.monthStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.monthStr);
  }
}
function GoalsComponent_Conditional_22_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2, "Ano de Refer\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Conditional_25_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.year, $event) || (ctx_r1.form.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.year);
  }
}
function GoalsComponent_Conditional_22_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "label", 54)(2, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Conditional_26_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.calculateFromExisting, $event) || (ctx_r1.form.calculateFromExisting = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Calcular valor atual usando gastos j\xE1 existentes do per\xEDodo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.calculateFromExisting);
  }
}
function GoalsComponent_Conditional_22_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2, "Valor atual (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Conditional_27_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.current_amount, $event) || (ctx_r1.form.current_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.current_amount);
  }
}
function GoalsComponent_Conditional_22_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_22_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteGoal());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function GoalsComponent_Conditional_22_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function GoalsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_22_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "div", 35);
    \u0275\u0275elementStart(3, "h2", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37)(6, "div", 38)(7, "label", 39);
    \u0275\u0275text(8, "Nome da meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41)(11, "div", 38)(12, "label", 39);
    \u0275\u0275text(13, "Valor limite (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.limit_amount, $event) || (ctx_r1.form.limit_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 38)(16, "label", 39);
    \u0275\u0275text(17, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function GoalsComponent_Conditional_22_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 44);
    \u0275\u0275text(20, "Mensal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 45);
    \u0275\u0275text(22, "Anual");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 41);
    \u0275\u0275conditionalCreate(24, GoalsComponent_Conditional_22_Conditional_24_Template, 4, 1, "div", 38)(25, GoalsComponent_Conditional_22_Conditional_25_Template, 4, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, GoalsComponent_Conditional_22_Conditional_26_Template, 4, 1, "div", 46);
    \u0275\u0275conditionalCreate(27, GoalsComponent_Conditional_22_Conditional_27_Template, 4, 1, "div", 38);
    \u0275\u0275elementStart(28, "div", 47);
    \u0275\u0275conditionalCreate(29, GoalsComponent_Conditional_22_Conditional_29_Template, 3, 1, "button", 48);
    \u0275\u0275elementStart(30, "button", 49);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_22_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(31, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 50);
    \u0275\u0275listener("click", function GoalsComponent_Conditional_22_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveGoal());
    });
    \u0275\u0275conditionalCreate(33, GoalsComponent_Conditional_22_Conditional_33_Template, 1, 0, "span", 51);
    \u0275\u0275text(34, " Salvar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingGoal() ? "Editar" : "Nova", " Meta");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.limit_amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.form.type === "mensal" ? 24 : 25);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.editingGoal() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editingGoal() ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingGoal() ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 33 : -1);
  }
}
var GoalsComponent = class _GoalsComponent {
  Math = Math;
  goalService = inject(GoalService);
  expenseService = inject(ExpenseService);
  goals = signal([], ...ngDevMode ? [{ debugName: "goals" }] : (
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
  editingGoal = signal(null, ...ngDevMode ? [{ debugName: "editingGoal" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : (
    /* istanbul ignore next */
    []
  ));
  currentMonthLabel = () => this.currentDate().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  form = {
    name: "",
    limit_amount: 0,
    type: "mensal",
    current_amount: 0,
    monthStr: `${(/* @__PURE__ */ new Date()).getFullYear()}-${String((/* @__PURE__ */ new Date()).getMonth() + 1).padStart(2, "0")}`,
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    calculateFromExisting: false
  };
  async ngOnInit() {
    await this.loadGoals();
  }
  async prevMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() - 1);
    this.currentDate.set(d);
    await this.loadGoals();
  }
  async nextMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() + 1);
    this.currentDate.set(d);
    await this.loadGoals();
  }
  async loadGoals() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try {
      this.goals.set(await this.goalService.getForPeriod(month, year));
    } finally {
      this.loading.set(false);
    }
  }
  getStatus = (goal) => getGoalStatus(goal.current_amount, goal.limit_amount);
  getPercent = (goal) => goal.limit_amount > 0 ? goal.current_amount / goal.limit_amount * 100 : 0;
  getProgressClass = (goal) => {
    const s = this.getStatus(goal);
    return s === "safe" ? "green" : s === "warning" ? "yellow" : "red";
  };
  getPrediction = (goal) => this.goalService.predictOverflow(goal.current_amount, goal.limit_amount);
  getPeriodLabel = (goal) => goal.type === "mensal" ? `${String(goal.month).padStart(2, "0")}/${goal.year}` : `${goal.year}`;
  openAdd() {
    this.editingGoal.set(null);
    this.form = {
      name: "",
      limit_amount: 0,
      type: "mensal",
      current_amount: 0,
      monthStr: `${this.currentDate().getFullYear()}-${String(this.currentDate().getMonth() + 1).padStart(2, "0")}`,
      year: this.currentDate().getFullYear(),
      calculateFromExisting: false
    };
    this.showModal.set(true);
  }
  openEdit(goal) {
    this.editingGoal.set(goal);
    const m = goal.month ? String(goal.month).padStart(2, "0") : "01";
    const y = goal.year || this.currentDate().getFullYear();
    this.form = {
      name: goal.name,
      limit_amount: goal.limit_amount,
      type: goal.type,
      current_amount: goal.current_amount,
      monthStr: `${y}-${m}`,
      year: y,
      calculateFromExisting: false
    };
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  async saveGoal() {
    if (!this.form.name || !this.form.limit_amount)
      return;
    this.saving.set(true);
    let targetMonth;
    let targetYear;
    if (this.form.type === "mensal") {
      const [yy, mm] = this.form.monthStr.split("-");
      targetYear = parseInt(yy, 10);
      targetMonth = parseInt(mm, 10);
    } else {
      targetYear = this.form.year;
    }
    let initialCurrentAmount = 0;
    if (this.form.calculateFromExisting && !this.editingGoal()) {
      if (this.form.type === "mensal") {
        initialCurrentAmount = await this.expenseService.getTotalByMonth(targetMonth, targetYear);
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
        await this.goalService.update(this.editingGoal().id, __spreadProps(__spreadValues({}, this.form), { month: targetMonth, year: targetYear }));
      } else {
        await this.goalService.create({ name: this.form.name, limit_amount: this.form.limit_amount, type: this.form.type, month: targetMonth, year: targetYear, current_amount: initialCurrentAmount });
      }
      this.closeModal();
      await this.loadGoals();
    } catch (e) {
      console.error(e);
    } finally {
      this.saving.set(false);
    }
  }
  async deleteGoal() {
    if (!this.editingGoal() || !confirm("Excluir esta meta?"))
      return;
    this.saving.set(true);
    try {
      await this.goalService.delete(this.editingGoal().id);
      this.closeModal();
      await this.loadGoals();
    } catch (e) {
      console.error(e);
    } finally {
      this.saving.set(false);
    }
  }
  static \u0275fac = function GoalsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoalsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoalsComponent, selectors: [["app-goals"]], decls: 23, vars: 3, consts: [[1, "app-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "header-right", 2, "display", "flex", "gap", "1rem", "align-items", "center"], [1, "month-selector", 2, "display", "flex", "align-items", "center", "gap", "0.25rem", "background", "var(--color-bg-card)", "border", "1px solid var(--color-border)", "border-radius", "12px", "padding", "0.25rem"], [1, "month-btn", 2, "background", "none", "border", "none", "color", "var(--color-text-secondary)", "display", "flex", "align-items", "center", "padding", "0.25rem", "cursor", "pointer", 3, "click"], [1, "material-icons-round"], [1, "month-label", 2, "font-size", "0.8125rem", "font-weight", "600", "min-width", "70px", "text-align", "center"], [1, "btn-icon", 3, "click"], [1, "page-content"], [2, "padding", "0"], [1, "empty-state"], [1, "goals-list", "stagger-children"], [1, "modal-overlay"], [1, "skeleton", 2, "height", "120px", "border-radius", "20px", "margin-bottom", "0.75rem"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "goal-card", 3, "class"], [1, "goal-card", 3, "click"], [1, "goal-header"], [1, "goal-name"], [1, "goal-type", "badge"], [1, "goal-pct"], [1, "goal-amounts"], [1, "goal-current"], [1, "goal-sep"], [1, "goal-limit"], [1, "progress-bar", 2, "margin", "0.75rem 0", "height", "8px"], [1, "progress-fill"], [1, "goal-prediction"], [1, "modal-overlay", 3, "click"], [1, "modal-sheet", "animate-slide-up", 3, "click"], [1, "modal-handle"], [1, "modal-title"], [1, "modal-form"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Ex: Gastos com alimenta\xE7\xE3o", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "inputmode", "numeric", "appCurrencyFormat", "", "placeholder", "0,00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "mensal"], ["value", "anual"], [1, "form-group", 2, "background", "rgba(255,255,255,0.03)", "padding", "0.75rem", "border-radius", "12px", "border", "1px solid var(--color-border)"], [1, "modal-actions"], [1, "btn", "btn-danger", 3, "disabled"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], ["type", "month", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "2000", "max", "2100", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "align-items", "center", "gap", "0.75rem", "font-size", "0.875rem", "cursor", "pointer", "color", "var(--color-text-secondary)"], ["type", "checkbox", 2, "width", "18px", "height", "18px", "accent-color", "var(--color-accent)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-danger", 3, "click", "disabled"]], template: function GoalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Metas Financeiras");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "button", 6);
      \u0275\u0275listener("click", function GoalsComponent_Template_button_click_7_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function GoalsComponent_Template_button_click_12_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(13, "span", 7);
      \u0275\u0275text(14, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function GoalsComponent_Template_button_click_15_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(16, "span", 7);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "main", 10);
      \u0275\u0275conditionalCreate(19, GoalsComponent_Conditional_19_Template, 3, 1, "div", 11)(20, GoalsComponent_Conditional_20_Template, 11, 0, "div", 12)(21, GoalsComponent_Conditional_21_Template, 3, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, GoalsComponent_Conditional_22_Template, 35, 10, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.currentMonthLabel());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 19 : ctx.goals().length === 0 ? 20 : 21);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 22 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, CurrencyFormatDirective, DecimalPipe, CurrencyPipe], styles: ["\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.goals-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.goal-card[_ngcontent-%COMP%] {\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 20px;\n  padding: 1.25rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.goal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.goal-card.status-safe[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.goal-card.status-warning[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.goal-card.status-danger[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.25);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(239, 68, 68, 0.05) 0%,\n      #0f0f0f 100%);\n}\n.goal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.goal-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n.goal-pct[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.goal-pct.pct-safe[_ngcontent-%COMP%] {\n  color: var(--color-green);\n}\n.goal-pct.pct-warning[_ngcontent-%COMP%] {\n  color: var(--color-yellow);\n}\n.goal-pct.pct-danger[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.goal-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.goal-current[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-text-primary);\n}\n.goal-sep[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.goal-limit[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n}\n.goal-prediction[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  color: var(--color-yellow);\n  background: rgba(245, 158, 11, 0.08);\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.goal-prediction[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 85vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .modal-sheet[_ngcontent-%COMP%] {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .goals-list[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=goals.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoalsComponent, [{
    type: Component,
    args: [{ selector: "app-goals", standalone: true, imports: [CommonModule, FormsModule, CurrencyFormatDirective], template: `
    <div class="app-container">
      <header class="page-header">
        <div class="header-left">
          <h1 class="page-title">Metas Financeiras</h1>
        </div>
        <div class="header-right" style="display:flex;gap:1rem;align-items:center;">
          <div class="month-selector" style="display:flex;align-items:center;gap:0.25rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:0.25rem;">
            <button class="month-btn" (click)="prevMonth()" style="background:none;border:none;color:var(--color-text-secondary);display:flex;align-items:center;padding:0.25rem;cursor:pointer;"><span class="material-icons-round">chevron_left</span></button>
            <span class="month-label" style="font-size:0.8125rem;font-weight:600;min-width:70px;text-align:center;">{{ currentMonthLabel() }}</span>
            <button class="month-btn" (click)="nextMonth()" style="background:none;border:none;color:var(--color-text-secondary);display:flex;align-items:center;padding:0.25rem;cursor:pointer;"><span class="material-icons-round">chevron_right</span></button>
          </div>
          <button class="btn-icon" (click)="openAdd()">
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
                      {{ goal.type === 'mensal' ? 'Mensal' : 'Anual' }} \u2022 {{ getPeriodLabel(goal) }}
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
                <input type="text" class="form-control" [(ngModel)]="form.name" placeholder="Ex: Gastos com alimenta\xE7\xE3o" />
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
                    <label class="form-label">M\xEAs de Refer\xEAncia</label>
                    <input type="month" class="form-control" [(ngModel)]="form.monthStr" />
                  </div>
                } @else {
                  <div class="form-group">
                    <label class="form-label">Ano de Refer\xEAncia</label>
                    <input type="number" class="form-control" [(ngModel)]="form.year" min="2000" max="2100" />
                  </div>
                }
              </div>

              @if (!editingGoal()) {
                <div class="form-group" style="background:rgba(255,255,255,0.03);padding:0.75rem;border-radius:12px;border:1px solid var(--color-border);">
                  <label style="display:flex;align-items:center;gap:0.75rem;font-size:0.875rem;cursor:pointer;color:var(--color-text-secondary);">
                    <input type="checkbox" [(ngModel)]="form.calculateFromExisting" style="width:18px;height:18px;accent-color:var(--color-accent);" />
                    Calcular valor atual usando gastos j\xE1 existentes do per\xEDodo
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
  `, styles: ["/* angular:styles/component:scss;a37d4379dfbe5e7c8e744ef5067ef9b307daf3373e868ebe34e4455597a6f826;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/goals/goals.component.ts */\n.app-container {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon .material-icons-round {\n  font-size: 20px;\n}\n.goals-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.goal-card {\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 20px;\n  padding: 1.25rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.goal-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.goal-card.status-safe {\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.goal-card.status-warning {\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.goal-card.status-danger {\n  border-color: rgba(239, 68, 68, 0.25);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(239, 68, 68, 0.05) 0%,\n      #0f0f0f 100%);\n}\n.goal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.goal-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n.goal-pct {\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.goal-pct.pct-safe {\n  color: var(--color-green);\n}\n.goal-pct.pct-warning {\n  color: var(--color-yellow);\n}\n.goal-pct.pct-danger {\n  color: var(--color-red);\n}\n.goal-amounts {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.goal-current {\n  font-weight: 700;\n  color: var(--color-text-primary);\n}\n.goal-sep {\n  color: var(--color-text-muted);\n}\n.goal-limit {\n  color: var(--color-text-secondary);\n}\n.goal-prediction {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  color: var(--color-yellow);\n  background: rgba(245, 158, 11, 0.08);\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.goal-prediction .material-icons-round {\n  font-size: 14px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 85vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions .btn-primary {\n  flex: 1;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay {\n    align-items: center;\n  }\n  .modal-sheet {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle {\n    display: none;\n  }\n  .goals-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=goals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoalsComponent, { className: "GoalsComponent", filePath: "src/app/features/goals/goals.component.ts", lineNumber: 192 });
})();
export {
  GoalsComponent
};
//# sourceMappingURL=chunk-PT6BYN24.js.map
