import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NY2MEXEQ.js";
import {
  AuthService,
  CommonModule,
  Component,
  Router,
  RouterLink,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R7DS5LVY.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Campo obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275text(1, " Entrando... ");
  }
}
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Entrar ");
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  emailOrUsername = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  async onSubmit(form) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.error.set("");
    try {
      await this.authService.signIn(this.emailOrUsername, this.password);
      this.router.navigate(["/dashboard"]);
    } catch (err) {
      this.error.set(err.message ?? "Erro ao entrar. Verifique suas credenciais.");
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 48, vars: 9, consts: [["loginForm", "ngForm"], ["emailInput", "ngModel"], ["passwordInput", "ngModel"], [1, "auth-page"], [1, "auth-bg"], [1, "auth-glow"], [1, "auth-content"], [1, "auth-logo", "animate-fade-in"], [1, "logo-icon"], [1, "material-icons-round"], [1, "logo-name"], [1, "logo-tagline"], [1, "auth-card", "animate-slide-up"], [1, "auth-title"], [1, "auth-subtitle"], [1, "auth-error"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "emailOrUsername", 1, "form-label"], [1, "input-wrapper"], [1, "material-icons-round", "input-icon"], ["id", "emailOrUsername", "name", "emailOrUsername", "type", "text", "placeholder", "nomedeusuario ou seu@email.com", "required", "", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "field-error"], [1, "form-group", 2, "margin-top", "1rem"], ["for", "password", 1, "form-label"], ["id", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "minlength", "6", 1, "form-control", "with-icon", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "input-toggle", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-top", "1.5rem", 3, "disabled"], [1, "auth-link"], ["routerLink", "/auth/register"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275element(2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "span", 9);
      \u0275\u0275text(7, "account_balance_wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1", 10);
      \u0275\u0275text(9, "FinanceFlow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 11);
      \u0275\u0275text(11, "Seu dinheiro, sob controle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 12)(13, "h2", 13);
      \u0275\u0275text(14, "Entrar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 14);
      \u0275\u0275text(16, "Bem-vindo de volta! \u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 4, 1, "div", 15);
      \u0275\u0275elementStart(18, "form", 16, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r3 = \u0275\u0275reference(19);
        return \u0275\u0275resetView(ctx.onSubmit(loginForm_r3));
      });
      \u0275\u0275elementStart(20, "div", 17)(21, "label", 18);
      \u0275\u0275text(22, "Username ou E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 19)(24, "span", 20);
      \u0275\u0275text(25, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 21, 1);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.emailOrUsername, $event) || (ctx.emailOrUsername = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(28, LoginComponent_Conditional_28_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 23)(30, "label", 24);
      \u0275\u0275text(31, "Senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 19)(33, "span", 20);
      \u0275\u0275text(34, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 25, 2);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 26);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_37_listener() {
        return ctx.showPassword.set(!ctx.showPassword());
      });
      \u0275\u0275elementStart(38, "span", 9);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(40, LoginComponent_Conditional_40_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 27);
      \u0275\u0275conditionalCreate(42, LoginComponent_Conditional_42_Template, 2, 0)(43, LoginComponent_Conditional_43_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 28);
      \u0275\u0275text(45, " N\xE3o tem conta? ");
      \u0275\u0275elementStart(46, "a", 29);
      \u0275\u0275text(47, "Cadastre-se gr\xE1tis");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const emailInput_r4 = \u0275\u0275reference(27);
      const passwordInput_r5 = \u0275\u0275reference(36);
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.error() ? 17 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.emailOrUsername);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(emailInput_r4.invalid && emailInput_r4.touched ? 28 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(passwordInput_r5.invalid && passwordInput_r5.touched ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 42 : 43);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], styles: ["\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background: #000;\n  overflow: hidden;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 85, 247, 0.2) 0%,\n      transparent 70%);\n  filter: blur(40px);\n}\n.auth-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem 1.5rem;\n  gap: 2rem;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .auth-content[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n.auth-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.4);\n  animation: pulse-glow 3s infinite;\n}\n.logo-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n}\n.logo-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.logo-tagline[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  padding: 2rem;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-red);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-error[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  color: var(--color-text-muted);\n  font-size: 20px;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control.with-icon[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n}\n.input-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 150ms;\n}\n.input-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-secondary);\n}\n.input-toggle[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-red);\n  margin-top: 0.25rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-accent-light);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `
    <div class="auth-page">
      <div class="auth-bg">
        <div class="auth-glow"></div>
      </div>

      <div class="auth-content">
        <!-- Logo -->
        <div class="auth-logo animate-fade-in">
          <div class="logo-icon">
            <span class="material-icons-round">account_balance_wallet</span>
          </div>
          <h1 class="logo-name">FinanceFlow</h1>
          <p class="logo-tagline">Seu dinheiro, sob controle</p>
        </div>

        <!-- Form -->
        <div class="auth-card animate-slide-up">
          <h2 class="auth-title">Entrar</h2>
          <p class="auth-subtitle">Bem-vindo de volta! \u{1F44B}</p>

          @if (error()) {
            <div class="auth-error">
              <span class="material-icons-round">error_outline</span>
              {{ error() }}
            </div>
          }

          <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)" novalidate>
            <div class="form-group">
              <label class="form-label" for="emailOrUsername">Username ou E-mail</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">person</span>
                <input
                  id="emailOrUsername"
                  name="emailOrUsername"
                  type="text"
                  class="form-control with-icon"
                  placeholder="nomedeusuario ou seu@email.com"
                  [(ngModel)]="emailOrUsername"
                  required
                  #emailInput="ngModel"
                />
              </div>
              @if (emailInput.invalid && emailInput.touched) {
                <span class="field-error">Campo obrigat\xF3rio</span>
              }
            </div>

            <div class="form-group" style="margin-top: 1rem">
              <label class="form-label" for="password">Senha</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">lock</span>
                <input
                  id="password"
                  name="password"
                  [type]="showPassword() ? 'text' : 'password'"
                  class="form-control with-icon"
                  placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  [(ngModel)]="password"
                  required
                  minlength="6"
                  #passwordInput="ngModel"
                />
                <button type="button" class="input-toggle" (click)="showPassword.set(!showPassword())">
                  <span class="material-icons-round">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
              @if (passwordInput.invalid && passwordInput.touched) {
                <span class="field-error">M\xEDnimo 6 caracteres</span>
              }
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style="margin-top: 1.5rem"
              [disabled]="loading()"
            >
              @if (loading()) {
                <span class="spinner"></span>
                Entrando...
              } @else {
                <span class="material-icons-round">login</span>
                Entrar
              }
            </button>
          </form>

          <p class="auth-link">
            N\xE3o tem conta?
            <a routerLink="/auth/register">Cadastre-se gr\xE1tis</a>
          </p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;0d9b28afd0a515f2075a36a1823fa8a46599dc80232bfa8cb43f66cf620dd231;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/auth/login/login.component.ts */\n.auth-page {\n  min-height: 100vh;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background: #000;\n  overflow: hidden;\n}\n.auth-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-glow {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 85, 247, 0.2) 0%,\n      transparent 70%);\n  filter: blur(40px);\n}\n.auth-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem 1.5rem;\n  gap: 2rem;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .auth-content {\n    max-width: 600px;\n  }\n}\n.auth-logo {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.4);\n  animation: pulse-glow 3s infinite;\n}\n.logo-icon .material-icons-round {\n  font-size: 36px;\n  color: white;\n}\n.logo-name {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.logo-tagline {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.auth-card {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  padding: 2rem;\n}\n.auth-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.auth-subtitle {\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-red);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-error .material-icons-round {\n  font-size: 18px;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  color: var(--color-text-muted);\n  font-size: 20px;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control.with-icon {\n  padding-left: 3rem;\n}\n.input-toggle {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 150ms;\n}\n.input-toggle:hover {\n  color: var(--color-text-secondary);\n}\n.input-toggle .material-icons-round {\n  font-size: 20px;\n}\n.field-error {\n  font-size: 0.75rem;\n  color: var(--color-red);\n  margin-top: 0.25rem;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-link {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n}\n.auth-link a {\n  font-weight: 600;\n  color: var(--color-accent-light);\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 283 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-45Y4SCBK.js.map
