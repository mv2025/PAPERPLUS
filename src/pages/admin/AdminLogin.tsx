import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Lock, Mail, ArrowRight, ShieldCheck, Loader2, AlertCircle, CheckCircle2, KeyRound } from 'lucide-react';
import paperPlusLogo from '@/assets/Paper Plus LOGO.png';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<'login' | 'reset'>('login');

  const { login, resetPassword, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin';

  // If already authenticated, redirect straight to admin dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email) {
      setErrorMsg('Please enter your admin email.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        if (!password) {
          setErrorMsg('Please enter your password.');
          setIsSubmitting(false);
          return;
        }
        const { error } = await login(email, password);
        if (error) {
          setErrorMsg(
            error.message.includes('Invalid login credentials')
              ? 'Invalid email or password. Please check your credentials.'
              : error.message
          );
        } else {
          navigate(from, { replace: true });
        }
      } else {
        // Reset Password Mode
        const { error, message } = await resetPassword(email);
        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg(message || 'Password reset email sent! Check your inbox.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] flex items-center justify-center p-6 text-[#141F42]">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DA2030]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white border border-[#E8E1D0] rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
        
        {/* Brand Logo & Header */}
        <div className="text-center flex flex-col items-center mb-6">
          <a href="/" className="mb-4 inline-block hover:scale-105 transition-transform">
            <img 
              src={paperPlusLogo} 
              alt="Paper Plus Premium Calendars" 
              className="h-12 w-auto object-contain" 
            />
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141F42] text-white text-[10px] font-extrabold uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DA2030]" /> Admin Portal
          </span>
          <h1 className="text-2xl font-extrabold text-[#141F42]">
            {mode === 'login' ? 'Sign In to Dashboard' : 'Reset Password'}
          </h1>
          <p className="text-xs text-[#5C6478] mt-1">
            {mode === 'login'
              ? 'Authorized administrator access only'
              : 'Enter your email to receive a password reset link'}
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-[#DA2030]/10 border border-[#DA2030]/20 flex items-start gap-3 text-xs text-[#DA2030] font-medium leading-relaxed">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-800 font-medium leading-relaxed">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8D96A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@paperplus.online"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] placeholder:text-[#8D96A8] focus:outline-none focus:border-[#DA2030] focus:ring-2 focus:ring-[#DA2030]/20 transition-all font-medium"
              />
            </div>
          </div>

          {mode === 'login' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMode('reset');
                    setErrorMsg(null);
                    setSuccessMsg(null);
                  }}
                  className="text-[11px] font-bold text-[#DA2030] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8D96A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] placeholder:text-[#8D96A8] focus:outline-none focus:border-[#DA2030] focus:ring-2 focus:ring-[#DA2030]/20 transition-all font-medium"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#141F42] text-white font-bold text-sm hover:bg-[#DA2030] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#141F42]/10 hover:shadow-[#DA2030]/30 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {mode === 'login' ? 'Authenticating...' : 'Sending Reset Email...'}
              </>
            ) : (
              <>
                {mode === 'login' ? 'Sign In to Admin Panel' : 'Send Password Reset Link'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Mode Switcher */}
        {mode === 'reset' && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className="text-xs font-bold text-[#141F42] hover:text-[#DA2030]"
            >
              ← Back to Sign In
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
