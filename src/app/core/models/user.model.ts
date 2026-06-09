export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar_url?: string;
  created_at: string;
}

export interface UserSession {
  id: string;
  user_id: string;
  device_info: string;
  last_active: string;
  created_at: string;
}
