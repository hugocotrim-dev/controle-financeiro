import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CurrencyFormatDirective),
    multi: true
  }]
})
export class CurrencyFormatDirective implements ControlValueAccessor {
  private onChange: (val: number) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef<HTMLInputElement>) {}

  writeValue(value: number): void {
    if (value !== undefined && value !== null) {
      this.el.nativeElement.value = this.formatNumber(value);
    } else {
      this.el.nativeElement.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.value;
    const rawValue = value.replace(/\D/g, '');
    const numberValue = rawValue ? parseInt(rawValue, 10) / 100 : 0;
    this.el.nativeElement.value = this.formatNumber(numberValue);
    this.onChange(numberValue);
  }

  @HostListener('focus')
  onFocus() {
    const value = this.el.nativeElement.value;
    if (value === '0,00' || value === '0.00' || value === '') {
      this.el.nativeElement.value = '';
    } else {
      setTimeout(() => {
        const len = this.el.nativeElement.value.length;
        this.el.nativeElement.setSelectionRange(len, len);
      });
    }
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
    const currentVal = this.el.nativeElement.value.replace(/\D/g, '');
    if (!currentVal) {
       this.el.nativeElement.value = '0,00';
       this.onChange(0);
    }
  }

  private formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  }
}
