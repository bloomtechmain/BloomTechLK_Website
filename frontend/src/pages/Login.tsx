import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Lock, Mail, Activity } from 'lucide-react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    try {
      await googleLogin(response.credential!);
      navigate('/');
    } catch {
      setError('Google login failed.');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Login failed. Please try again.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO config={seoConfigs.login} noindex={true} />
      <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
      >
        <div className="p-10 md:p-12">
          <div className="flex flex-col items-center mb-10 text-center">
             <div className="w-16 h-16 bg-[#ff6b00] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-100">
                <Lock className="text-white w-8 h-8" />
             </div>
             <h2 className="text-3xl font-black text-[#0c1a36] tracking-tighter">Welcome Back</h2>
             <p className="text-gray-500 font-medium text-sm mt-2">Access your secure identity hub</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-3">
              <Activity className="w-4 h-4" /> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 px-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/20 focus:border-[#ff6b00] transition-all font-semibold"
                  placeholder="name@company.com"
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 px-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/20 focus:border-[#ff6b00] transition-all font-semibold"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff6b00] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-[#e65c00] transition-all transform active:scale-[0.98]"
            >
              {loading ? 'Authenticating...' : 'Sign In Now'}
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google Authentication Failed')}
              theme="outline"
              size="large"
              shape="pill"
              width="100%"
            />
          </div>

          <div className="mt-10 pt-10 border-t border-gray-50 text-center">
            <p className="text-gray-500 text-sm font-semibold">
              Don't have an account? <Link to="/register" className="text-[#ff6b00] font-black hover:underline ml-1">Register Hub</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Login;
