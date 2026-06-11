import {
  ExpenseService
} from "./chunk-B7SYATWQ.js";
import {
  CurrencyFormatDirective
} from "./chunk-GXSS26JU.js";
import {
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
  AuthService,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  Injectable,
  SupabaseService,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R7DS5LVY.js";

// src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  supabase;
  auth;
  constructor(supabase, auth) {
    this.supabase = supabase;
    this.auth = auth;
  }
  async getAll() {
    const userId = this.auth.getCurrentUserId();
    const { data, error } = await this.supabase.client.from("categories").select("*").or(`is_default.eq.true,user_id.eq.${userId}`).order("name");
    if (error)
      throw error;
    return data ?? [];
  }
  async create(category) {
    const { data, error } = await this.supabase.client.from("categories").insert(__spreadProps(__spreadValues({}, category), { user_id: this.auth.getCurrentUserId(), is_default: false })).select().single();
    if (error)
      throw error;
    return data;
  }
  async delete(id) {
    const { error } = await this.supabase.client.from("categories").delete().eq("id", id).eq("user_id", this.auth.getCurrentUserId()).eq("is_default", false);
    if (error)
      throw error;
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: AuthService }], null);
})();

// src/app/features/expenses/expenses.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => [a0, "BRL", "symbol", "1.2-2", "pt-BR"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ExpensesComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function ExpensesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ExpensesComponent_Conditional_18_For_2_Template, 1, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ExpensesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Nenhum gasto encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Adicione um gasto para controlar suas finan\xE7as");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Novo gasto ");
    \u0275\u0275elementEnd()();
  }
}
function ExpensesComponent_Conditional_20_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_20_For_17_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCategory.set(cat_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory() === cat_r5.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cat_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r5.name, " ");
  }
}
function ExpensesComponent_Conditional_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 14);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Nenhum gasto nesta categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Escolha outra categoria ou adicione um novo gasto");
    \u0275\u0275elementEnd()();
  }
}
function ExpensesComponent_Conditional_20_Conditional_19_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expense_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", expense_r7.installment_number, "/", expense_r7.total_installments, "x");
  }
}
function ExpensesComponent_Conditional_20_Conditional_19_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Recorrente");
    \u0275\u0275elementEnd();
  }
}
function ExpensesComponent_Conditional_20_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_20_Conditional_19_For_2_Template_div_click_0_listener() {
      const expense_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(expense_r7));
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExpensesComponent_Conditional_20_Conditional_19_For_2_Conditional_10_Template, 2, 2, "span", 38);
    \u0275\u0275conditionalCreate(11, ExpensesComponent_Conditional_20_Conditional_19_For_2_Conditional_11_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 40);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 41);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const expense_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getCategoryColor(expense_r7) + "22");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getCategoryColor(expense_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryIcon(expense_r7), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(expense_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((expense_r7.category == null ? null : expense_r7.category.name) ?? "Sem categoria");
    \u0275\u0275advance();
    \u0275\u0275conditional(expense_r7.type === "parcelado" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(expense_r7.type === "recorrente" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 11, expense_r7.date, "dd/MM/yyyy", "", "pt-BR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(17, 16, \u0275\u0275pureFunction1(22, _c1, expense_r7.amount)));
  }
}
function ExpensesComponent_Conditional_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, ExpensesComponent_Conditional_20_Conditional_19_For_2_Template, 18, 24, "div", 31, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredExpenses());
  }
}
function ExpensesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5, "Total de gastos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_20_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Novo gasto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "button", 26);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCategory.set(null));
    });
    \u0275\u0275text(15, " Todos ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ExpensesComponent_Conditional_20_For_17_Template, 4, 6, "button", 27, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ExpensesComponent_Conditional_20_Conditional_18_Template, 7, 0, "div", 28)(19, ExpensesComponent_Conditional_20_Conditional_19_Template, 3, 0, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBindV(8, 4, \u0275\u0275pureFunction1(10, _c1, ctx_r1.totalExpenses())));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory() === null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredExpenses().length === 0 ? 18 : 19);
  }
}
function ExpensesComponent_Conditional_21_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    \u0275\u0275property("value", cat_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r9.name);
  }
}
function ExpensesComponent_Conditional_21_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_For_32_Template_button_click_0_listener() {
      const type_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.type = type_r11.value);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.form.type === type_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r11.label, " ");
  }
}
function ExpensesComponent_Conditional_21_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "label", 48);
    \u0275\u0275text(2, "N\xFAmero de parcelas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Conditional_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.total_installments, $event) || (ctx_r1.form.total_installments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 66);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.total_installments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Valor por parcela: ", \u0275\u0275pipeBindV(6, 2, \u0275\u0275pureFunction1(8, _c1, ctx_r1.getInstallmentValue())));
  }
}
function ExpensesComponent_Conditional_21_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteExpense());
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
function ExpensesComponent_Conditional_21_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
  }
}
function ExpensesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "h2", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46)(6, "div", 47)(7, "label", 48);
    \u0275\u0275text(8, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 50)(11, "div", 47)(12, "label", 48);
    \u0275\u0275text(13, "Valor (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amount, $event) || (ctx_r1.form.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 47)(16, "label", 48);
    \u0275\u0275text(17, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date, $event) || (ctx_r1.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 47)(20, "label", 48);
    \u0275\u0275text(21, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.category_id, $event) || (ctx_r1.form.category_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 54);
    \u0275\u0275text(24, "Selecionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, ExpensesComponent_Conditional_21_For_26_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 47)(28, "label", 48);
    \u0275\u0275text(29, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 56);
    \u0275\u0275repeaterCreate(31, ExpensesComponent_Conditional_21_For_32_Template, 2, 3, "button", 57, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, ExpensesComponent_Conditional_21_Conditional_33_Template, 7, 10, "div", 47);
    \u0275\u0275elementStart(34, "div", 47)(35, "label", 48);
    \u0275\u0275text(36, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Conditional_21_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.observation, $event) || (ctx_r1.form.observation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 59);
    \u0275\u0275conditionalCreate(39, ExpensesComponent_Conditional_21_Conditional_39_Template, 3, 1, "button", 60);
    \u0275\u0275elementStart(40, "button", 61);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(41, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 62);
    \u0275\u0275listener("click", function ExpensesComponent_Conditional_21_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveExpense());
    });
    \u0275\u0275conditionalCreate(43, ExpensesComponent_Conditional_21_Conditional_43_Template, 1, 0, "span", 63);
    \u0275\u0275text(44, " Salvar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingExpense() ? "Editar" : "Novo", " Gasto");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.category_id);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.expenseTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.type === "parcelado" ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.observation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingExpense() ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 43 : -1);
  }
}
var ExpensesComponent = class _ExpensesComponent {
  expenseService = inject(ExpenseService);
  categoryService = inject(CategoryService);
  expenses = signal([], ...ngDevMode ? [{ debugName: "expenses" }] : (
    /* istanbul ignore next */
    []
  ));
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
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
  editingExpense = signal(null, ...ngDevMode ? [{ debugName: "editingExpense" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCategory = signal(null, ...ngDevMode ? [{ debugName: "selectedCategory" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : (
    /* istanbul ignore next */
    []
  ));
  form = { description: "", amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], category_id: "", type: "fixo", observation: "", total_installments: 2 };
  expenseTypes = [
    { value: "fixo", label: "Fixo" },
    { value: "parcelado", label: "Parcelado" },
    { value: "recorrente", label: "Recorrente" }
  ];
  currentMonthLabel = () => this.currentDate().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  isCurrentMonth = () => {
    const now = /* @__PURE__ */ new Date();
    return this.currentDate().getMonth() === now.getMonth() && this.currentDate().getFullYear() === now.getFullYear();
  };
  filteredExpenses = () => this.selectedCategory() ? this.expenses().filter((e) => e.category_id === this.selectedCategory()) : this.expenses();
  totalExpenses = () => this.filteredExpenses().reduce((s, e) => s + e.amount, 0);
  getInstallmentValue = () => this.form.amount > 0 && this.form.total_installments > 0 ? this.form.amount / this.form.total_installments : 0;
  getCategoryColor = (e) => e.category?.color ?? "#a1a1aa";
  getCategoryIcon = (e) => e.category?.icon ?? "category";
  async ngOnInit() {
    const [, cats] = await Promise.all([this.loadExpenses(), this.categoryService.getAll()]);
    cats.sort((a, b) => {
      if (a.name.toLowerCase() === "outros")
        return 1;
      if (b.name.toLowerCase() === "outros")
        return -1;
      return a.name.localeCompare(b.name);
    });
    this.categories.set(cats);
  }
  async loadExpenses() {
    this.loading.set(true);
    const month = this.currentDate().getMonth() + 1;
    const year = this.currentDate().getFullYear();
    try {
      const data = await this.expenseService.getByMonth(month, year);
      this.expenses.set(data);
    } finally {
      this.loading.set(false);
    }
  }
  async prevMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() - 1);
    this.currentDate.set(d);
    await this.loadExpenses();
  }
  async nextMonth() {
    const d = new Date(this.currentDate());
    d.setMonth(d.getMonth() + 1);
    this.currentDate.set(d);
    await this.loadExpenses();
  }
  openAdd() {
    this.editingExpense.set(null);
    this.form = { description: "", amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], category_id: "", type: "fixo", observation: "", total_installments: 2 };
    this.showModal.set(true);
  }
  openEdit(expense) {
    this.editingExpense.set(expense);
    this.form = { description: expense.description, amount: expense.amount, date: expense.date, category_id: expense.category_id, type: expense.type, observation: expense.observation ?? "", total_installments: expense.total_installments ?? 2 };
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  async saveExpense() {
    if (!this.form.description || !this.form.amount || !this.form.category_id) {
      alert("Por favor, preencha a descri\xE7\xE3o, o valor e selecione uma categoria.");
      return;
    }
    this.saving.set(true);
    try {
      const month = this.currentDate().getMonth() + 1;
      const year = this.currentDate().getFullYear();
      if (this.form.type === "parcelado" && !this.editingExpense()) {
        const startDate = new Date(this.form.date);
        await this.expenseService.createInstallments({ description: this.form.description, total_amount: this.form.amount, total_installments: this.form.total_installments, installment_amount: this.form.amount / this.form.total_installments, start_date: this.form.date }, startDate, this.form.category_id);
      } else if (this.editingExpense()) {
        await this.expenseService.update(this.editingExpense().id, __spreadProps(__spreadValues({}, this.form), { category_id: this.form.category_id, month, year }));
      } else {
        await this.expenseService.create(__spreadProps(__spreadValues({}, this.form), { category_id: this.form.category_id, month, year }));
      }
      this.closeModal();
      await this.loadExpenses();
    } catch (e) {
      console.error(e);
    } finally {
      this.saving.set(false);
    }
  }
  async deleteExpense() {
    if (!this.editingExpense())
      return;
    if (!confirm("Excluir este gasto?"))
      return;
    this.saving.set(true);
    try {
      await this.expenseService.delete(this.editingExpense().id);
      this.closeModal();
      await this.loadExpenses();
    } catch (e) {
      console.error(e);
    } finally {
      this.saving.set(false);
    }
  }
  static \u0275fac = function ExpensesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpensesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesComponent, selectors: [["app-expenses"]], decls: 22, vars: 3, consts: [[1, "app-container"], [1, "page-header"], [1, "page-title"], [2, "display", "flex", "align-items", "center", "gap", "0.5rem"], [1, "month-selector"], [1, "month-btn", 3, "click"], [1, "material-icons-round"], [1, "month-label"], ["aria-label", "Adicionar gasto", 1, "btn-icon", 3, "click"], [1, "page-content"], [1, "loading-list"], [1, "empty-state", "animate-fade-in"], [1, "modal-overlay"], [1, "skeleton", 2, "height", "72px", "border-radius", "16px", "margin-bottom", "0.5rem"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "total-card", "animate-fade-in"], [1, "material-icons-round", "total-icon"], [2, "flex", "1"], [1, "total-label"], [1, "total-value"], [1, "btn", "btn-primary", 2, "border-radius", "12px", "padding", "0.5rem 1rem", "font-size", "0.875rem", 3, "click"], [1, "material-icons-round", 2, "font-size", "18px"], [1, "filter-chips"], [1, "chip", 3, "click"], [1, "chip", 3, "active"], [1, "empty-state"], [1, "expense-list", "stagger-children"], [1, "material-icons-round", 2, "font-size", "14px"], [1, "expense-item"], [1, "expense-item", 3, "click"], [1, "expense-icon"], [1, "expense-info"], [1, "expense-desc"], [1, "expense-meta"], [1, "badge", "badge-gray"], [1, "badge", "badge-accent"], [1, "badge", "badge-yellow"], [1, "expense-date"], [1, "expense-amount"], [1, "modal-overlay", 3, "click"], [1, "modal-sheet", "animate-slide-up", 3, "click"], [1, "modal-handle"], [1, "modal-title"], [1, "modal-form"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Ex: Supermercado", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "inputmode", "numeric", "appCurrencyFormat", "", "placeholder", "0,00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "type-selector"], ["type", "button", 1, "type-btn", 3, "active"], ["type", "text", "placeholder", "Detalhes adicionais...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "btn", "btn-danger", 3, "disabled"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], ["type", "button", 1, "type-btn", 3, "click"], ["type", "number", "placeholder", "Ex: 12", "min", "2", "max", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "btn", "btn-danger", 3, "click", "disabled"]], template: function ExpensesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Gastos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function ExpensesComponent_Template_button_click_6_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function ExpensesComponent_Template_button_click_11_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function ExpensesComponent_Template_button_click_14_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(15, "span", 6);
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "main", 9);
      \u0275\u0275conditionalCreate(18, ExpensesComponent_Conditional_18_Template, 3, 1, "div", 10)(19, ExpensesComponent_Conditional_19_Template, 11, 0, "div", 11)(20, ExpensesComponent_Conditional_20_Template, 20, 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ExpensesComponent_Conditional_21_Template, 45, 10, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.currentMonthLabel());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 18 : ctx.expenses().length === 0 ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 21 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, CurrencyFormatDirective, CurrencyPipe, DatePipe], styles: ["\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.month-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.25rem;\n}\n.month-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 8px;\n  transition: all 150ms;\n}\n.month-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--color-text-primary);\n}\n.month-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n}\n.month-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.month-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0 0.25rem;\n  min-width: 70px;\n  text-align: center;\n}\n.total-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1rem;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n}\n.total-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--color-red);\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--color-red);\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding: 0 1rem 0.75rem;\n  scrollbar-width: none;\n}\n.filter-chips[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.expense-list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.expense-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.expense-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-light);\n  transform: translateY(-1px);\n}\n.expense-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expense-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.expense-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.expense-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.expense-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  margin: 0.25rem 0;\n  flex-wrap: wrap;\n}\n.expense-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.expense-amount[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--color-red);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.loading-list[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 0.25rem;\n  display: block;\n}\n.type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  background: var(--color-bg-input);\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  color: var(--color-text-secondary);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 150ms;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.15);\n  border-color: var(--color-accent);\n  color: var(--color-accent-light);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .modal-sheet[_ngcontent-%COMP%] {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .expense-list[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=expenses.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpensesComponent, [{
    type: Component,
    args: [{ selector: "app-expenses", standalone: true, imports: [CommonModule, FormsModule, CurrencyFormatDirective], template: `
    <div class="app-container">
      <!-- Header -->
      <header class="page-header">
        <h1 class="page-title">Gastos</h1>
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
          <button class="btn-icon" (click)="openAdd()" aria-label="Adicionar gasto">
            <span class="material-icons-round">add</span>
          </button>
        </div>
      </header>

      <main class="page-content">
        @if (loading()) {
          <div class="loading-list">
            @for (i of [1,2,3,4,5]; track i) {
              <div class="skeleton" style="height:72px;border-radius:16px;margin-bottom:0.5rem"></div>
            }
          </div>
        } @else if (expenses().length === 0) {
          <div class="empty-state animate-fade-in">
            <span class="material-icons-round empty-icon">receipt_long</span>
            <p class="empty-title">Nenhum gasto encontrado</p>
            <p class="empty-desc">Adicione um gasto para controlar suas finan\xE7as</p>
            <button class="btn btn-primary" (click)="openAdd()" style="margin-top:1rem">
              <span class="material-icons-round">add</span> Novo gasto
            </button>
          </div>
        } @else {
          <!-- Total Card -->
          <div class="total-card animate-fade-in">
            <span class="material-icons-round total-icon">payments</span>
            <div style="flex: 1;">
              <div class="total-label">Total de gastos</div>
              <div class="total-value">{{ totalExpenses() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</div>
            </div>
            <button class="btn btn-primary" (click)="openAdd()" style="border-radius: 12px; padding: 0.5rem 1rem; font-size: 0.875rem;">
              <span class="material-icons-round" style="font-size: 18px;">add</span> Novo gasto
            </button>
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
          @if (filteredExpenses().length === 0) {
            <div class="empty-state">
              <span class="material-icons-round empty-icon">receipt_long</span>
              <p class="empty-title">Nenhum gasto nesta categoria</p>
              <p class="empty-desc">Escolha outra categoria ou adicione um novo gasto</p>
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
        }
      </main>



      <!-- Modal -->
      @if (showModal()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-sheet animate-slide-up" (click)="$event.stopPropagation()">
            <div class="modal-handle"></div>
            <h2 class="modal-title">{{ editingExpense() ? 'Editar' : 'Novo' }} Gasto</h2>

            <div class="modal-form">
              <div class="form-group">
                <label class="form-label">Descri\xE7\xE3o</label>
                <input type="text" class="form-control" [(ngModel)]="form.description" placeholder="Ex: Supermercado" />
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
                  <label class="form-label">N\xFAmero de parcelas</label>
                  <input type="number" class="form-control" [(ngModel)]="form.total_installments" placeholder="Ex: 12" min="2" max="60" />
                  <small class="form-hint">Valor por parcela: {{ getInstallmentValue() | currency:'BRL':'symbol':'1.2-2':'pt-BR' }}</small>
                </div>
              }

              <div class="form-group">
                <label class="form-label">Observa\xE7\xE3o (opcional)</label>
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
    </div>
  `, styles: ["/* angular:styles/component:scss;f08f554978f9fd7badf07805da63d6488f09cb10a68d8ce47e1ca761d3e8cddd;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/expenses/expenses.component.ts */\n.app-container {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.btn-icon {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: all 150ms;\n}\n.btn-icon:hover {\n  color: var(--color-text-primary);\n}\n.btn-icon .material-icons-round {\n  font-size: 20px;\n}\n.month-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.25rem;\n}\n.month-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 8px;\n  transition: all 150ms;\n}\n.month-btn:hover:not(:disabled) {\n  color: var(--color-text-primary);\n}\n.month-btn:disabled {\n  opacity: 0.3;\n}\n.month-btn .material-icons-round {\n  font-size: 18px;\n}\n.month-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0 0.25rem;\n  min-width: 70px;\n  text-align: center;\n}\n.total-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1rem;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n}\n.total-icon {\n  font-size: 28px;\n  color: var(--color-red);\n}\n.total-label {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.total-value {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--color-red);\n}\n.filter-chips {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding: 0 1rem 0.75rem;\n  scrollbar-width: none;\n}\n.filter-chips::-webkit-scrollbar {\n  display: none;\n}\n.expense-list {\n  padding: 0 1rem;\n}\n.expense-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.expense-item:hover {\n  border-color: var(--color-border-light);\n  transform: translateY(-1px);\n}\n.expense-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expense-icon .material-icons-round {\n  font-size: 22px;\n}\n.expense-info {\n  flex: 1;\n  min-width: 0;\n}\n.expense-desc {\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.expense-meta {\n  display: flex;\n  gap: 0.375rem;\n  margin: 0.25rem 0;\n  flex-wrap: wrap;\n}\n.expense-date {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.expense-amount {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--color-red);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.loading-list {\n  padding: 0 1rem;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal-sheet {\n  background: var(--color-bg-card);\n  border-radius: 24px 24px 0 0;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.modal-handle {\n  width: 36px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: 2px;\n  margin: 0 auto 1.25rem;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.form-hint {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 0.25rem;\n  display: block;\n}\n.type-selector {\n  display: flex;\n  gap: 0.5rem;\n}\n.type-btn {\n  flex: 1;\n  padding: 0.5rem;\n  background: var(--color-bg-input);\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  color: var(--color-text-secondary);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 150ms;\n}\n.type-btn.active {\n  background: rgba(168, 85, 247, 0.15);\n  border-color: var(--color-accent);\n  color: var(--color-accent-light);\n}\n.modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-actions .btn-primary {\n  flex: 1;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@media (min-width: 768px) {\n  .modal-overlay {\n    align-items: center;\n  }\n  .modal-sheet {\n    border-radius: 24px;\n    max-width: 500px;\n    padding: 2rem;\n    max-height: 85vh;\n  }\n  .modal-handle {\n    display: none;\n  }\n  .expense-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=expenses.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesComponent, { className: "ExpensesComponent", filePath: "src/app/features/expenses/expenses.component.ts", lineNumber: 239 });
})();
export {
  ExpensesComponent
};
//# sourceMappingURL=chunk-XJ364VUC.js.map
