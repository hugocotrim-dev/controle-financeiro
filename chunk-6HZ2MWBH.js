import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PatternValidator,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NY2MEXEQ.js";
import {
  AuthService,
  CommonModule,
  Component,
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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 11);
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
function RegisterComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Conta criada! Verifique seu e-mail para confirmar. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Username inv\xE1lido (m\xEDnimo 3 caracteres, sem espa\xE7os)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Nome obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "E-mail inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
    \u0275\u0275text(1, " Criando conta... ");
  }
}
function RegisterComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Criar conta ");
  }
}
var RegisterComponent = class _RegisterComponent {
  authService;
  username = "";
  name = "";
  email = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : (
    /* istanbul ignore next */
    []
  ));
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(authService) {
    this.authService = authService;
  }
  async onSubmit(form) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.error.set("");
    try {
      await this.authService.signUp(this.username, this.email, this.password, this.name);
      this.success.set(true);
    } catch (err) {
      this.error.set(err.message ?? "Erro ao criar conta.");
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 67, vars: 14, consts: [["registerForm", "ngForm"], ["usernameInput", "ngModel"], ["nameInput", "ngModel"], ["emailInput", "ngModel"], ["passwordInput", "ngModel"], [1, "auth-page"], [1, "auth-bg"], [1, "auth-glow"], [1, "auth-content"], [1, "auth-logo", "animate-fade-in"], [1, "logo-icon"], [1, "material-icons-round"], [1, "logo-name"], [1, "logo-tagline"], [1, "auth-card", "animate-slide-up"], [1, "auth-title"], [1, "auth-subtitle"], [1, "auth-error"], [1, "auth-success"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "username", 1, "form-label"], [1, "input-wrapper"], [1, "material-icons-round", "input-icon"], ["id", "username", "name", "username", "type", "text", "placeholder", "nomedeusuario", "required", "", "minlength", "3", "pattern", "^[a-zA-Z0-9_]+$", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "field-error"], [1, "form-group", 2, "margin-top", "1rem"], ["for", "name", 1, "form-label"], ["id", "name", "name", "name", "type", "text", "placeholder", "Jo\xE3o Silva", "required", "", "minlength", "2", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "form-label"], ["id", "email", "name", "email", "type", "email", "placeholder", "seu@email.com", "required", "", "email", "", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "form-label"], ["id", "password", "name", "password", "placeholder", "M\xEDnimo 6 caracteres", "required", "", "minlength", "6", 1, "form-control", "with-icon", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "input-toggle", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-top", "1.5rem", 3, "disabled"], [1, "auth-link"], ["routerLink", "/auth/login"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
      \u0275\u0275element(2, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "span", 11);
      \u0275\u0275text(7, "account_balance_wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1", 12);
      \u0275\u0275text(9, "FinanceFlow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 13);
      \u0275\u0275text(11, "Crie sua conta gr\xE1tis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 14)(13, "h2", 15);
      \u0275\u0275text(14, "Cadastro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 16);
      \u0275\u0275text(16, "Comece a controlar suas finan\xE7as hoje \u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, RegisterComponent_Conditional_17_Template, 4, 1, "div", 17);
      \u0275\u0275conditionalCreate(18, RegisterComponent_Conditional_18_Template, 4, 0, "div", 18);
      \u0275\u0275elementStart(19, "form", 19, 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_19_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r3 = \u0275\u0275reference(20);
        return \u0275\u0275resetView(ctx.onSubmit(registerForm_r3));
      });
      \u0275\u0275elementStart(21, "div", 20)(22, "label", 21);
      \u0275\u0275text(23, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 22)(25, "span", 23);
      \u0275\u0275text(26, "alternate_email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 24, 1);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, RegisterComponent_Conditional_29_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 26)(31, "label", 27);
      \u0275\u0275text(32, "Nome completo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 22)(34, "span", 23);
      \u0275\u0275text(35, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 28, 2);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, RegisterComponent_Conditional_38_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 26)(40, "label", 29);
      \u0275\u0275text(41, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 22)(43, "span", 23);
      \u0275\u0275text(44, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 30, 3);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(47, RegisterComponent_Conditional_47_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 26)(49, "label", 31);
      \u0275\u0275text(50, "Senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 22)(52, "span", 23);
      \u0275\u0275text(53, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 32, 4);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 33);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_56_listener() {
        return ctx.showPassword.set(!ctx.showPassword());
      });
      \u0275\u0275elementStart(57, "span", 11);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(59, RegisterComponent_Conditional_59_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 34);
      \u0275\u0275conditionalCreate(61, RegisterComponent_Conditional_61_Template, 2, 0)(62, RegisterComponent_Conditional_62_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "p", 35);
      \u0275\u0275text(64, " J\xE1 tem conta? ");
      \u0275\u0275elementStart(65, "a", 36);
      \u0275\u0275text(66, "Entrar");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const usernameInput_r4 = \u0275\u0275reference(28);
      const nameInput_r5 = \u0275\u0275reference(37);
      const emailInput_r6 = \u0275\u0275reference(46);
      const passwordInput_r7 = \u0275\u0275reference(55);
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.error() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 18 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(usernameInput_r4.invalid && usernameInput_r4.touched ? 29 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(nameInput_r5.invalid && nameInput_r5.touched ? 38 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(emailInput_r6.invalid && emailInput_r6.touched ? 47 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(passwordInput_r7.invalid && passwordInput_r7.touched ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 61 : 62);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm, RouterLink], styles: ["\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background: #000;\n  overflow: hidden;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.2) 0%,\n      transparent 70%);\n  filter: blur(40px);\n}\n.auth-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem 1.5rem;\n  gap: 2rem;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .auth-content[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n.auth-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);\n}\n.logo-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n}\n.logo-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.logo-tagline[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  padding: 2rem;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-red);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-error[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.auth-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-green);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-success[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  color: var(--color-text-muted);\n  font-size: 20px;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control.with-icon[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n}\n.input-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 150ms;\n}\n.input-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-secondary);\n}\n.input-toggle[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-red);\n  margin-top: 0.25rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-accent-light);\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `
    <div class="auth-page">
      <div class="auth-bg">
        <div class="auth-glow"></div>
      </div>

      <div class="auth-content">
        <div class="auth-logo animate-fade-in">
          <div class="logo-icon">
            <span class="material-icons-round">account_balance_wallet</span>
          </div>
          <h1 class="logo-name">FinanceFlow</h1>
          <p class="logo-tagline">Crie sua conta gr\xE1tis</p>
        </div>

        <div class="auth-card animate-slide-up">
          <h2 class="auth-title">Cadastro</h2>
          <p class="auth-subtitle">Comece a controlar suas finan\xE7as hoje \u{1F680}</p>

          @if (error()) {
            <div class="auth-error">
              <span class="material-icons-round">error_outline</span>
              {{ error() }}
            </div>
          }

          @if (success()) {
            <div class="auth-success">
              <span class="material-icons-round">check_circle</span>
              Conta criada! Verifique seu e-mail para confirmar.
            </div>
          }

          <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)" novalidate>
            <div class="form-group">
              <label class="form-label" for="username">Username</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">alternate_email</span>
                <input id="username" name="username" type="text" class="form-control with-icon"
                  placeholder="nomedeusuario" [(ngModel)]="username" required minlength="3" pattern="^[a-zA-Z0-9_]+$" #usernameInput="ngModel" />
              </div>
              @if (usernameInput.invalid && usernameInput.touched) {
                <span class="field-error">Username inv\xE1lido (m\xEDnimo 3 caracteres, sem espa\xE7os)</span>
              }
            </div>

            <div class="form-group" style="margin-top:1rem">
              <label class="form-label" for="name">Nome completo</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">person</span>
                <input id="name" name="name" type="text" class="form-control with-icon"
                  placeholder="Jo\xE3o Silva" [(ngModel)]="name" required minlength="2" #nameInput="ngModel" />
              </div>
              @if (nameInput.invalid && nameInput.touched) {
                <span class="field-error">Nome obrigat\xF3rio</span>
              }
            </div>

            <div class="form-group" style="margin-top:1rem">
              <label class="form-label" for="email">E-mail</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">email</span>
                <input id="email" name="email" type="email" class="form-control with-icon"
                  placeholder="seu@email.com" [(ngModel)]="email" required email #emailInput="ngModel" />
              </div>
              @if (emailInput.invalid && emailInput.touched) {
                <span class="field-error">E-mail inv\xE1lido</span>
              }
            </div>

            <div class="form-group" style="margin-top:1rem">
              <label class="form-label" for="password">Senha</label>
              <div class="input-wrapper">
                <span class="material-icons-round input-icon">lock</span>
                <input id="password" name="password" [type]="showPassword() ? 'text' : 'password'"
                  class="form-control with-icon" placeholder="M\xEDnimo 6 caracteres"
                  [(ngModel)]="password" required minlength="6" #passwordInput="ngModel" />
                <button type="button" class="input-toggle" (click)="showPassword.set(!showPassword())">
                  <span class="material-icons-round">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
              @if (passwordInput.invalid && passwordInput.touched) {
                <span class="field-error">M\xEDnimo 6 caracteres</span>
              }
            </div>

            <button type="submit" class="btn btn-primary btn-lg" style="margin-top:1.5rem" [disabled]="loading()">
              @if (loading()) {
                <span class="spinner"></span> Criando conta...
              } @else {
                <span class="material-icons-round">person_add</span> Criar conta
              }
            </button>
          </form>

          <p class="auth-link">
            J\xE1 tem conta? <a routerLink="/auth/login">Entrar</a>
          </p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;39f9d27a4002fd1d184053ca872215b2a8f7713ad874417069b47fa03d433718;C:/Users/069027991147/Documents/controle-financeiro/src/app/features/auth/register/register.component.ts */\n.auth-page {\n  min-height: 100vh;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background: #000;\n  overflow: hidden;\n}\n.auth-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-glow {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.2) 0%,\n      transparent 70%);\n  filter: blur(40px);\n}\n.auth-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem 1.5rem;\n  gap: 2rem;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .auth-content {\n    max-width: 600px;\n  }\n}\n.auth-logo {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);\n}\n.logo-icon .material-icons-round {\n  font-size: 36px;\n  color: white;\n}\n.logo-name {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.logo-tagline {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.auth-card {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  padding: 2rem;\n}\n.auth-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.auth-subtitle {\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-red);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-error .material-icons-round {\n  font-size: 18px;\n}\n.auth-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: var(--color-green);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.auth-success .material-icons-round {\n  font-size: 18px;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 1rem;\n  color: var(--color-text-muted);\n  font-size: 20px;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control.with-icon {\n  padding-left: 3rem;\n}\n.input-toggle {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 150ms;\n}\n.input-toggle:hover {\n  color: var(--color-text-secondary);\n}\n.input-toggle .material-icons-round {\n  font-size: 20px;\n}\n.field-error {\n  font-size: 0.75rem;\n  color: var(--color-red);\n  margin-top: 0.25rem;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-link {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: var(--color-text-secondary);\n  font-size: 0.875rem;\n}\n.auth-link a {\n  font-weight: 600;\n  color: var(--color-accent-light);\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 137 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-6HZ2MWBH.js.map
