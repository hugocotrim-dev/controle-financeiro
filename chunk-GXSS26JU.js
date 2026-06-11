import {
  NG_VALUE_ACCESSOR
} from "./chunk-NY2MEXEQ.js";
import {
  Directive,
  ElementRef,
  HostListener,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-R7DS5LVY.js";

// src/app/shared/directives/currency-format.directive.ts
var CurrencyFormatDirective = class _CurrencyFormatDirective {
  el;
  onChange = () => {
  };
  onTouched = () => {
  };
  constructor(el) {
    this.el = el;
  }
  writeValue(value) {
    if (value !== void 0 && value !== null) {
      this.el.nativeElement.value = this.formatNumber(value);
    } else {
      this.el.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onInput() {
    const value = this.el.nativeElement.value;
    const rawValue = value.replace(/\D/g, "");
    const numberValue = rawValue ? parseInt(rawValue, 10) / 100 : 0;
    this.el.nativeElement.value = this.formatNumber(numberValue);
    this.onChange(numberValue);
  }
  onFocus() {
    const value = this.el.nativeElement.value;
    if (value === "0,00" || value === "0.00" || value === "") {
      this.el.nativeElement.value = "";
    } else {
      setTimeout(() => {
        const len = this.el.nativeElement.value.length;
        this.el.nativeElement.setSelectionRange(len, len);
      });
    }
  }
  onBlur() {
    this.onTouched();
    const currentVal = this.el.nativeElement.value.replace(/\D/g, "");
    if (!currentVal) {
      this.el.nativeElement.value = "0,00";
      this.onChange(0);
    }
  }
  formatNumber(value) {
    return new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  }
  static \u0275fac = function CurrencyFormatDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencyFormatDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CurrencyFormatDirective, selectors: [["", "appCurrencyFormat", ""]], hostBindings: function CurrencyFormatDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function CurrencyFormatDirective_input_HostBindingHandler() {
        return ctx.onInput();
      })("focus", function CurrencyFormatDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function CurrencyFormatDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
  }, features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _CurrencyFormatDirective),
    multi: true
  }])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyFormatDirective, [{
    type: Directive,
    args: [{
      selector: "[appCurrencyFormat]",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CurrencyFormatDirective),
        multi: true
      }]
    }]
  }], () => [{ type: ElementRef }], { onInput: [{
    type: HostListener,
    args: ["input"]
  }], onFocus: [{
    type: HostListener,
    args: ["focus"]
  }], onBlur: [{
    type: HostListener,
    args: ["blur"]
  }] });
})();

export {
  CurrencyFormatDirective
};
//# sourceMappingURL=chunk-GXSS26JU.js.map
