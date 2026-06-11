import {
  AuthService,
  Injectable,
  SupabaseService,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R7DS5LVY.js";

// src/app/core/services/income.service.ts
var IncomeService = class _IncomeService {
  supabase;
  auth;
  constructor(supabase, auth) {
    this.supabase = supabase;
    this.auth = auth;
  }
  async getByMonth(month, year) {
    const { data, error } = await this.supabase.client.from("incomes").select("*").eq("user_id", this.auth.getCurrentUserId()).eq("month", month).eq("year", year).order("date", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  async getForLast12Months(year, month) {
    const startDate = new Date(year - 1, month, 1);
    const endDate = new Date(year, month, 0);
    const { data, error } = await this.supabase.client.from("incomes").select("*").eq("user_id", this.auth.getCurrentUserId()).gte("date", startDate.toISOString().split("T")[0]).lte("date", endDate.toISOString().split("T")[0]).order("date", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  async create(income) {
    const { data, error } = await this.supabase.client.from("incomes").insert(__spreadProps(__spreadValues({}, income), { user_id: this.auth.getCurrentUserId() })).select().single();
    if (error)
      throw error;
    return data;
  }
  async update(id, income) {
    const { data, error } = await this.supabase.client.from("incomes").update(income).eq("id", id).eq("user_id", this.auth.getCurrentUserId()).select().single();
    if (error)
      throw error;
    return data;
  }
  async delete(id) {
    const { error } = await this.supabase.client.from("incomes").delete().eq("id", id).eq("user_id", this.auth.getCurrentUserId());
    if (error)
      throw error;
  }
  async getTotalByMonth(month, year) {
    const incomes = await this.getByMonth(month, year);
    return incomes.reduce((sum, i) => sum + i.amount, 0);
  }
  static \u0275fac = function IncomeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IncomeService, factory: _IncomeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: AuthService }], null);
})();

export {
  IncomeService
};
//# sourceMappingURL=chunk-CHX73ELO.js.map
