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

// src/app/core/services/goal.service.ts
var GoalService = class _GoalService {
  supabase;
  auth;
  constructor(supabase, auth) {
    this.supabase = supabase;
    this.auth = auth;
  }
  async getAll() {
    const { data, error } = await this.supabase.client.from("goals").select("*").eq("user_id", this.auth.getCurrentUserId()).order("created_at", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  async getForPeriod(month, year) {
    const { data, error } = await this.supabase.client.from("goals").select("*").eq("user_id", this.auth.getCurrentUserId()).or(`and(type.eq.mensal,month.eq.${month},year.eq.${year}),and(type.eq.anual,year.eq.${year})`);
    if (error)
      throw error;
    return data ?? [];
  }
  async create(goal) {
    const { data, error } = await this.supabase.client.from("goals").insert(__spreadProps(__spreadValues({}, goal), { user_id: this.auth.getCurrentUserId() })).select().single();
    if (error)
      throw error;
    return data;
  }
  async update(id, goal) {
    const { data, error } = await this.supabase.client.from("goals").update(goal).eq("id", id).eq("user_id", this.auth.getCurrentUserId()).select().single();
    if (error)
      throw error;
    return data;
  }
  async delete(id) {
    const { error } = await this.supabase.client.from("goals").delete().eq("id", id).eq("user_id", this.auth.getCurrentUserId());
    if (error)
      throw error;
  }
  // Simple linear projection: predict days until goal is reached
  predictOverflow(currentAmount, limitAmount, daysInMonth = 30) {
    if (currentAmount >= limitAmount)
      return "Meta j\xE1 ultrapassada!";
    const today = (/* @__PURE__ */ new Date()).getDate();
    if (today === 0)
      return null;
    const dailyAvg = currentAmount / today;
    const remaining = limitAmount - currentAmount;
    const daysLeft = Math.ceil(remaining / dailyAvg);
    if (daysLeft <= 7)
      return `Voc\xEA deve ultrapassar a meta em ~${daysLeft} dias se continuar neste ritmo`;
    return null;
  }
  static \u0275fac = function GoalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoalService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoalService, factory: _GoalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: AuthService }], null);
})();

export {
  GoalService
};
//# sourceMappingURL=chunk-UMEOT4EK.js.map
