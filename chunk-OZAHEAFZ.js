import {
  BudgetService
} from "./chunk-FVP56CB4.js";
import {
  CurrencyFormatDirective
} from "./chunk-GXSS26JU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NY2MEXEQ.js";
import {
  AuthService,
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R7DS5LVY.js";

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Administrador");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
function SettingsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Or\xE7amento salvo com sucesso! ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SettingsComponent_For_40_Template_button_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTheme(opt_r2.value));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.theme() === opt_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r2.label);
  }
}
var SettingsComponent = class _SettingsComponent {
  authService = inject(AuthService);
  budgetService = inject(BudgetService);
  profile = this.authService.profile;
  budgetAmount = 0;
  savingBudget = signal(false, ...ngDevMode ? [{ debugName: "savingBudget" }] : (
    /* istanbul ignore next */
    []
  ));
  budgetSaved = signal(false, ...ngDevMode ? [{ debugName: "budgetSaved" }] : (
    /* istanbul ignore next */
    []
  ));
  theme = signal("dark", ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  themeOptions = [
    { value: "dark", label: "Escuro", icon: "dark_mode" },
    { value: "light", label: "Claro", icon: "light_mode" },
    { value: "system", label: "Sistema", icon: "computer" }
  ];
  async ngOnInit() {
    const saved = localStorage.getItem("ff-theme");
    if (saved)
      this.theme.set(saved);
    this.applyTheme(this.theme());
    const now = /* @__PURE__ */ new Date();
    const budget = await this.budgetService.getByMonth(now.getMonth() + 1, now.getFullYear());
    if (budget)
      this.budgetAmount = budget.amount;
  }
  setTheme(t) {
    this.theme.set(t);
    localStorage.setItem("ff-theme", t);
    this.applyTheme(t);
  }
  applyTheme(t) {
    const root = document.documentElement;
    if (t === "light")
      root.setAttribute("data-theme", "light");
    else if (t === "dark")
      root.removeAttribute("data-theme");
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark)
        root.removeAttribute("data-theme");
      else
        root.setAttribute("data-theme", "light");
    }
  }
  async saveBudget() {
    this.savingBudget.set(true);
    const now = /* @__PURE__ */ new Date();
    try {
      await this.budgetService.upsert(now.getMonth() + 1, now.getFullYear(), this.budgetAmount);
      this.budgetSaved.set(true);
      setTimeout(() => this.budgetSaved.set(false), 3e3);
    } catch (e) {
      console.error(e);
    } finally {
      this.savingBudget.set(false);
    }
  }
  signOut() {
    this.authService.signOut();
  }
  signOutAll() {
    if (confirm("Sair em todos os dispositivos?"))
      this.authService.signOutAll();
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 64, vars: 7, consts: [[1, "app-container"], [1, "page-header"], [1, "page-title"], [1, "page-content"], [1, "settings-section", "animate-fade-in"], [1, "profile-card"], [1, "avatar"], [1, "material-icons-round"], [1, "profile-info"], [1, "profile-name"], [1, "profile-email"], [1, "badge", "badge-accent", 2, "margin-top", "0.25rem"], [1, "section-title"], [1, "settings-card"], [1, "form-group"], [1, "form-label"], ["type", "text", "inputmode", "numeric", "appCurrencyFormat", "", "placeholder", "Ex: 3000,00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 2, "width", "100%", "margin-top", "0.75rem", 3, "click", "disabled"], [1, "spinner-sm"], [1, "success-toast"], [1, "theme-options"], [1, "theme-btn", 3, "active"], [1, "settings-item", "danger", 3, "click"], [1, "item-label"], [1, "item-desc"], [1, "material-icons-round", "arrow"], [1, "settings-section"], [1, "btn", "btn-ghost", 2, "width", "100%", "gap", "0.5rem", 3, "click"], [1, "app-version"], [1, "theme-btn", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Configura\xE7\xF5es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "main", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9, "person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, SettingsComponent_Conditional_15_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 4)(17, "h3", 12)(18, "span", 7);
      \u0275\u0275text(19, "account_balance_wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Or\xE7amento Mensal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "label", 15);
      \u0275\u0275text(24, "Or\xE7amento Total Desejado (R$)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.budgetAmount, $event) || (ctx.budgetAmount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 17);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_26_listener() {
        return ctx.saveBudget();
      });
      \u0275\u0275conditionalCreate(27, SettingsComponent_Conditional_27_Template, 1, 0, "span", 18);
      \u0275\u0275elementStart(28, "span", 7);
      \u0275\u0275text(29, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Salvar or\xE7amento ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, SettingsComponent_Conditional_31_Template, 4, 0, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 4)(33, "h3", 12)(34, "span", 7);
      \u0275\u0275text(35, "palette");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Apar\xEAncia ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 13)(38, "div", 20);
      \u0275\u0275repeaterCreate(39, SettingsComponent_For_40_Template, 5, 4, "button", 21, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 4)(42, "h3", 12)(43, "span", 7);
      \u0275\u0275text(44, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Seguran\xE7a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 13)(47, "button", 22);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_47_listener() {
        return ctx.signOutAll();
      });
      \u0275\u0275elementStart(48, "span", 7);
      \u0275\u0275text(49, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div")(51, "div", 23);
      \u0275\u0275text(52, "Sair em todos os dispositivos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 24);
      \u0275\u0275text(54, "Encerra todas as sess\xF5es ativas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "span", 25);
      \u0275\u0275text(56, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 26)(58, "button", 27);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_58_listener() {
        return ctx.signOut();
      });
      \u0275\u0275elementStart(59, "span", 7);
      \u0275\u0275text(60, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Sair desta sess\xE3o ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 28);
      \u0275\u0275text(63, "FinanceFlow v1.0.0");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(((tmp_0_0 = ctx.profile()) == null ? null : tmp_0_0.name) ?? "Usu\xE1rio");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.profile()) == null ? null : tmp_1_0.email) ?? "");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.profile()) == null ? null : tmp_2_0.role) === "admin" ? 15 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.budgetAmount);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.savingBudget());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.savingBudget() ? 27 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.budgetSaved() ? 31 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.themeOptions);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CurrencyFormatDirective], styles: ["\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.settings-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.625rem;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-accent);\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  padding: 1rem;\n  overflow: hidden;\n}\n.profile-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  padding: 1.25rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.avatar[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.theme-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n}\n.theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.75rem;\n  background: var(--color-bg-input);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: all 150ms;\n}\n.theme-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.theme-btn.active[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.15);\n  border-color: var(--color-accent);\n  color: var(--color-accent-light);\n}\n.settings-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  background: none;\n  border: none;\n  border-radius: 12px;\n  padding: 0.75rem;\n  cursor: pointer;\n  transition: all 150ms;\n  text-align: left;\n}\n.settings-item[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.settings-item[_ngcontent-%COMP%]   .item-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 2px;\n}\n.settings-item[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  font-size: 18px;\n}\n.settings-item.danger[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%]:first-child {\n  color: var(--color-red);\n}\n.settings-item.danger[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.settings-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-input);\n}\n.success-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-top: 0.625rem;\n  font-size: 0.8125rem;\n  color: var(--color-green);\n}\n.success-toast[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.app-version[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule, CurrencyFormatDirective], template: `
    <div class="app-container">
      <header class="page-header">
        <h1 class="page-title">Configura\xE7\xF5es</h1>
      </header>

      <main class="page-content">
        <!-- Profile Card -->
        <div class="settings-section animate-fade-in">
          <div class="profile-card">
            <div class="avatar">
              <span class="material-icons-round">person</span>
            </div>
            <div class="profile-info">
              <div class="profile-name">{{ profile()?.name ?? 'Usu\xE1rio' }}</div>
              <div class="profile-email">{{ profile()?.email ?? '' }}</div>
              @if (profile()?.role === 'admin') {
                <span class="badge badge-accent" style="margin-top:0.25rem">Administrador</span>
              }
            </div>
          </div>
        </div>

        <!-- Budget -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">account_balance_wallet</span>
            Or\xE7amento Mensal
          </h3>
          <div class="settings-card">
            <div class="form-group">
              <label class="form-label">Or\xE7amento Total Desejado (R$)</label>
              <input type="text" inputmode="numeric" class="form-control" appCurrencyFormat [(ngModel)]="budgetAmount" placeholder="Ex: 3000,00" />
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:0.75rem" (click)="saveBudget()" [disabled]="savingBudget()">
              @if (savingBudget()) { <span class="spinner-sm"></span> }
              <span class="material-icons-round">save</span>
              Salvar or\xE7amento
            </button>
            @if (budgetSaved()) {
              <div class="success-toast">
                <span class="material-icons-round">check_circle</span>
                Or\xE7amento salvo com sucesso!
              </div>
            }
          </div>
        </div>

        <!-- Theme -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">palette</span>
            Apar\xEAncia
          </h3>
          <div class="settings-card">
            <div class="theme-options">
              @for (opt of themeOptions; track opt.value) {
                <button class="theme-btn" [class.active]="theme() === opt.value" (click)="setTheme(opt.value)">
                  <span class="material-icons-round">{{ opt.icon }}</span>
                  <span>{{ opt.label }}</span>
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Sessions / Security -->
        <div class="settings-section animate-fade-in">
          <h3 class="section-title">
            <span class="material-icons-round">security</span>
            Seguran\xE7a
          </h3>
          <div class="settings-card">
            <button class="settings-item danger" (click)="signOutAll()">
              <span class="material-icons-round">logout</span>
              <div>
                <div class="item-label">Sair em todos os dispositivos</div>
                <div class="item-desc">Encerra todas as sess\xF5es ativas</div>
              </div>
              <span class="material-icons-round arrow">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Logout -->
        <div class="settings-section">
          <button class="btn btn-ghost" style="width:100%;gap:0.5rem" (click)="signOut()">
            <span class="material-icons-round">logout</span>
            Sair desta sess\xE3o
          </button>
        </div>

        <div class="app-version">FinanceFlow v1.0.0</div>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;d594ec6fbf1450b5e0acc02947314d86862493726519aaa114887124e93c022e;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/settings/settings.component.ts */\n.app-container {\n  min-height: 100vh;\n  background: var(--color-bg-primary);\n}\n.page-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem 1rem 4.5rem;\n}\n.page-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.settings-section {\n  margin-bottom: 1.25rem;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.625rem;\n}\n.section-title .material-icons-round {\n  font-size: 16px;\n  color: var(--color-accent);\n}\n.settings-card {\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  padding: 1rem;\n  overflow: hidden;\n}\n.profile-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: var(--gradient-card);\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  padding: 1.25rem;\n}\n.avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.avatar .material-icons-round {\n  font-size: 28px;\n  color: white;\n}\n.profile-name {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.profile-email {\n  font-size: 0.8125rem;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.theme-options {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n}\n.theme-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.75rem;\n  background: var(--color-bg-input);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: all 150ms;\n}\n.theme-btn .material-icons-round {\n  font-size: 22px;\n}\n.theme-btn.active {\n  background: rgba(168, 85, 247, 0.15);\n  border-color: var(--color-accent);\n  color: var(--color-accent-light);\n}\n.settings-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  background: none;\n  border: none;\n  border-radius: 12px;\n  padding: 0.75rem;\n  cursor: pointer;\n  transition: all 150ms;\n  text-align: left;\n}\n.settings-item .item-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.settings-item .item-desc {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 2px;\n}\n.settings-item .arrow {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  font-size: 18px;\n}\n.settings-item.danger .material-icons-round:first-child {\n  color: var(--color-red);\n}\n.settings-item.danger .item-label {\n  color: var(--color-red);\n}\n.settings-item:hover {\n  background: var(--color-bg-input);\n}\n.success-toast {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-top: 0.625rem;\n  font-size: 0.8125rem;\n  color: var(--color-green);\n}\n.success-toast .material-icons-round {\n  font-size: 16px;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.app-version {\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 128 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-OZAHEAFZ.js.map
