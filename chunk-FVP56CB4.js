import {
  AuthService,
  Injectable,
  SupabaseService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R7DS5LVY.js";

// src/app/core/services/budget.service.ts
var BudgetService = class _BudgetService {
  supabase;
  auth;
  constructor(supabase, auth) {
    this.supabase = supabase;
    this.auth = auth;
  }
  async getByMonth(month, year) {
    const { data } = await this.supabase.client.from("budgets").select("*").eq("user_id", this.auth.getCurrentUserId()).eq("month", month).eq("year", year).maybeSingle();
    return data;
  }
  async upsert(month, year, amount) {
    const existing = await this.getByMonth(month, year);
    const userId = this.auth.getCurrentUserId();
    if (existing) {
      const { data, error } = await this.supabase.client.from("budgets").update({ amount }).eq("id", existing.id).select().single();
      if (error)
        throw error;
      return data;
    } else {
      const { data, error } = await this.supabase.client.from("budgets").insert({ user_id: userId, month, year, amount }).select().single();
      if (error)
        throw error;
      return data;
    }
  }
  static \u0275fac = function BudgetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BudgetService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BudgetService, factory: _BudgetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: AuthService }], null);
})();

export {
  BudgetService
};
//# sourceMappingURL=chunk-FVP56CB4.js.map
