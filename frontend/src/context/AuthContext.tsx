import { createContext, useState, useEffect, useContext, ReactNode, useMemo, useCallback } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, company?: string, job_title?: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Use environment variable for API URL with fallback
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token: string): Promise<void> => {
    try {
      const res = await axios.get<User>(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = useCallback(async (email: string, password: string): Promise<void> => {
    const res = await axios.post<{ token: string; user: User }>(
      `${API_URL}/api/auth/login`,
      { email, password }
    );
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  }, []);

  const googleLogin = useCallback(async (token: string): Promise<void> => {
    const res = await axios.post<{ token: string; user: User }>(
      `${API_URL}/api/auth/google-login`,
      { token }
    );
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  }, []);

  const register = useCallback(async (name: string, email: string, password: string, company?: string, job_title?: string): Promise<void> => {
    await axios.post(`${API_URL}/api/auth/register`, { name, email, password, company, job_title });
  }, []);

  const logout = useCallback((): void => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ user, login, register, googleLogin, logout, loading }),
    [user, login, register, googleLogin, logout, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
