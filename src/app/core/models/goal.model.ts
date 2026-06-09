export type GoalType = 'mensal' | 'anual';
export type GoalStatus = 'safe' | 'warning' | 'danger';

export interface Goal {
  id: string;
  user_id: string;
  name: string;
  limit_amount: number;
  type: GoalType;
  current_amount: number;
  created_at: string;
}

export function getGoalStatus(current: number, limit: number): GoalStatus {
  const pct = (current / limit) * 100;
  if (pct >= 100) return 'danger';
  if (pct >= 80) return 'warning';
  return 'safe';
}
