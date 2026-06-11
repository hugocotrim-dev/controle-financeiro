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

// src/app/core/services/expense.service.ts
var ExpenseService = class _ExpenseService {
  supabase;
  auth;
  constructor(supabase, auth) {
    this.supabase = supabase;
    this.auth = auth;
  }
  async getByMonth(month, year) {
    const { data, error } = await this.supabase.client.from("expenses").select("*, category:categories(*)").eq("user_id", this.auth.getCurrentUserId()).eq("month", month).eq("year", year).order("date", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  async getForLast12Months(year, month) {
    const startDate = new Date(year - 1, month, 1);
    const endDate = new Date(year, month, 0);
    const { data, error } = await this.supabase.client.from("expenses").select("*, category:categories(*)").eq("user_id", this.auth.getCurrentUserId()).gte("date", startDate.toISOString().split("T")[0]).lte("date", endDate.toISOString().split("T")[0]).order("date", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  async create(expense) {
    const { data, error } = await this.supabase.client.from("expenses").insert(__spreadProps(__spreadValues({}, expense), { user_id: this.auth.getCurrentUserId() })).select("*, category:categories(*)").single();
    if (error)
      throw error;
    return data;
  }
  async createInstallments(group, startDate, categoryId) {
    const userId = this.auth.getCurrentUserId();
    const { data: groupData, error: groupError } = await this.supabase.client.from("installment_groups").insert(__spreadProps(__spreadValues({}, group), { user_id: userId })).select().single();
    if (groupError)
      throw groupError;
    const installments = [];
    for (let i = 0; i < group.total_installments; i++) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);
      installments.push({
        user_id: userId,
        description: `${group.description} (${i + 1}/${group.total_installments})`,
        amount: group.installment_amount,
        date: date.toISOString().split("T")[0],
        category_id: categoryId,
        type: "parcelado",
        installment_group_id: groupData.id,
        installment_number: i + 1,
        total_installments: group.total_installments,
        month: date.getMonth() + 1,
        year: date.getFullYear()
      });
    }
    const { error } = await this.supabase.client.from("expenses").insert(installments);
    if (error)
      throw error;
  }
  async update(id, expense) {
    const { data, error } = await this.supabase.client.from("expenses").update(expense).eq("id", id).eq("user_id", this.auth.getCurrentUserId()).select("*, category:categories(*)").single();
    if (error)
      throw error;
    return data;
  }
  async delete(id) {
    const { error } = await this.supabase.client.from("expenses").delete().eq("id", id).eq("user_id", this.auth.getCurrentUserId());
    if (error)
      throw error;
  }
  async getTotalByMonth(month, year) {
    const expenses = await this.getByMonth(month, year);
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }
  async getLast6MonthsTotals() {
    const results = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      const total = await this.getTotalByMonth(month, year);
      const label = d.toLocaleDateString("pt-BR", { month: "short" });
      results.push({ month, year, total, label });
    }
    return results;
  }
  async getByCategory(month, year) {
    const expenses = await this.getByMonth(month, year);
    const map = /* @__PURE__ */ new Map();
    for (const e of expenses) {
      const name = e.category?.name ?? "Outros";
      const color = e.category?.color ?? "#a1a1aa";
      const existing = map.get(name) ?? { total: 0, color };
      map.set(name, { total: existing.total + e.amount, color });
    }
    return Array.from(map.entries()).map(([category, v]) => __spreadValues({ category }, v));
  }
  static \u0275fac = function ExpenseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpenseService, factory: _ExpenseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: AuthService }], null);
})();

export {
  ExpenseService
};
//# sourceMappingURL=chunk-B7SYATWQ.js.map
