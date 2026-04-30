import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Activity, 
  Users, 
  Zap, 
  Settings, 
  Database,
  History,
  Lock,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#ff6b00] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-black text-xs uppercase tracking-widest">Loading identity Hub...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const identityStats = [
    { label: 'Security Score', val: '98', total: '100', icon: ShieldCheck, color: 'text-green-500' },
    { label: 'Active Sessions', val: '3', icon: Activity, color: 'text-blue-500' },
    { label: 'Sync Status', val: 'Stable', icon: Zap, color: 'text-yellow-500' },
    { label: 'Managed Secrets', val: '24', icon: Lock, color: 'text-[#ff6b00]' },
  ];

  const recentActivity = [
    { type: 'Auth', desc: 'Secure Login from Chrome / Mac OS', time: '2 mins ago', icon: ShieldCheck },
    { type: 'Access', desc: 'Enterprise SaaS Gateway accessed', time: '1 hour ago', icon: Database },
    { type: 'Security', desc: 'Key rotation successful', time: '4 hours ago', icon: History },
  ];

  return (
    <>
      <SEO config={seoConfigs.dashboard} noindex={true} />
      <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <div className="flex items-center gap-3 mb-4">
                 <span className="px-3 py-1 bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest rounded-full border border-blue-100">Verified Identity</span>
                 <Sparkles className="text-yellow-500 w-4 h-4" />
              </div>
              <h1 className="text-5xl font-black text-[#0c1a36] tracking-tighter">
                Identity Dashboard
              </h1>
              <p className="text-gray-500 font-medium text-lg mt-2">Welcome back, <span className="text-[#0c1a36] font-bold">{user.name}</span></p>
           </motion.div>
           
           <div className="flex gap-4">
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2 text-sm">
                 <Settings size={18} /> Settings
              </button>
              <button className="px-8 py-3 bg-[#ff6b00] text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-[#e65c00] transition-all active:scale-95">
                 Export Report
              </button>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {identityStats.map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl bg-gray-50 group-hover:bg-[#ff6b00]/5 transition-colors ${stat.color}`}>
                      <stat.icon size={24} />
                   </div>
                   <ArrowUpRight className="text-gray-300 group-hover:text-[#ff6b00] transition-colors" size={20} />
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</h4>
                <div className="flex items-end gap-1">
                   <span className="text-3xl font-black text-[#0c1a36]">{stat.val}</span>
                   {stat.total && <span className="text-gray-300 font-bold mb-1">/ {stat.total}</span>}
                </div>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Recent Activity Table */}
           <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                 <h3 className="text-xl font-black text-[#0c1a36]">Recent Identity Activity</h3>
                 <button className="text-[12px] font-black text-[#ff6b00] uppercase tracking-widest hover:underline">View All Logs</button>
              </div>
              <div className="p-4">
                 {recentActivity.map((activity, i) => (
                   <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                            <activity.icon size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-[#ff6b00] uppercase tracking-widest mb-0.5">{activity.type}</p>
                            <p className="text-sm font-bold text-[#0c1a36]">{activity.desc}</p>
                         </div>
                      </div>
                      <span className="text-xs font-medium text-gray-400">{activity.time}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Side Card */}
           <div className="space-y-8">
              <div className="bg-[#0c1a36] rounded-[32px] p-10 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                    <ShieldCheck className="text-[#ff6b00]" size={28} />
                 </div>
                 <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">Your Identity is <br/>Secure</h3>
                 <p className="text-gray-400 text-sm font-medium mb-8">Multi-Factor Authentication is currently active on your account across 3 regions.</p>
                 <button className="w-full bg-white text-[#0c1a36] py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-orange-50 transition-colors">Manage 2FA Protection</button>
              </div>

              <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                    <Users className="text-[#ff6b00]" size={20} />
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#0c1a36]">Account Details</h4>
                 </div>
                 <div className="space-y-6">
                    <div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Connection</p>
                       <p className="text-sm font-bold text-[#0c1a36] truncate">{user.email}</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Role</p>
                       <p className="text-sm font-bold text-[#0c1a36] uppercase tracking-widest">Enterprise Hub Member</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
