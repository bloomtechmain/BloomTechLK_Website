export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  google_id?: string;
  role?: string;
  created_at?: Date;
}

export interface AuthPayload {
  id: number;
  email: string;
  name: string;
}
