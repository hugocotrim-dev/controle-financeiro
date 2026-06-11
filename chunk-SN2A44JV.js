// src/app/core/models/goal.model.ts
function getGoalStatus(current, limit) {
  const pct = current / limit * 100;
  if (pct >= 100)
    return "danger";
  if (pct >= 80)
    return "warning";
  return "safe";
}

export {
  getGoalStatus
};
//# sourceMappingURL=chunk-SN2A44JV.js.map
