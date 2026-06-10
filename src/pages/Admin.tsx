import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Inquiry, UserProfile } from '../types';
import { MessageSquare, LayoutDashboard, Clock, CheckCircle, Phone, Mail, Package, Settings, Undo2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminProps {
  user: UserProfile | null;
  onLogin: (email: string) => void;
}

interface PendingDeletion {
  inquiry: Inquiry;
  timeoutId: NodeJS.Timeout;
}

export default function Admin({ user, onLogin }: AdminProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inquiries'>('dashboard');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [pendingDeletion, setPendingDeletion] = useState<PendingDeletion | null>(null);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pendingDeletion) {
      setCountdown(5);
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [pendingDeletion]);

  useEffect(() => {
    if (user?.role !== 'admin') {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setInquiries((data || []).map(d => ({ ...d, customerName: d.customer_name }) as Inquiry));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    onLogin(emailInput);
  };

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-secondary p-10 rounded-3xl shadow-xl border border-border text-center"
        >
          <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-blue/20">
            <Settings size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 tracking-tight">Admin Access</h2>
          <p className="text-secondary mb-8">Please enter your admin email to manage the shop.</p>
          
          <form onSubmit={handleLogin} className="space-y-4 mb-8">
            <input
              type="email"
              placeholder="Enter admin email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-6 py-4 bg-primary border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-primary"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
            >
              Login to Manage
            </button>
          </form>
          
          <Link to="/" className="text-brand-blue font-bold hover:underline">Go back to Home</Link>
        </motion.div>
      </div>
    );
  }

  const handleMarkContacted = (inquiry: Inquiry) => {
    // If there's already a pending deletion, finalize it immediately
    if (pendingDeletion) {
      finalizeDeletion(pendingDeletion);
    }

    // Remove from local list
    setInquiries(prev => prev.filter(i => i.id !== inquiry.id));

    // Set up timeout for permanent deletion
    const timeoutId = setTimeout(() => {
      finalizeDeletion({ inquiry, timeoutId });
    }, 5000);

    setPendingDeletion({ inquiry, timeoutId });
  };

  const finalizeDeletion = async (pd: PendingDeletion) => {
    try {
      const { error } = await supabase.from('inquiries').delete().eq('id', pd.inquiry.id);
      if (error) throw error;
      if (pendingDeletion?.inquiry.id === pd.inquiry.id) {
        setPendingDeletion(null);
      }
    } catch (err) {
      console.error("Error deleting inquiry:", err);
    }
  };

  const handleUndoDeletion = () => {
    if (!pendingDeletion) return;

    clearTimeout(pendingDeletion.timeoutId);
    setInquiries(prev => [pendingDeletion.inquiry, ...prev].sort((a, b) => {
      const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return dateB - dateA;
    }));
    setPendingDeletion(null);
  };

  const handleUpdateInquiryStatus = async (id: string, status: Inquiry['status']) => {
    try {
      const { error } = await supabase.from('inquiries').update({ status }).eq('id', id);
      if (error) throw error;
      setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status } : inq));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-primary min-h-screen flex text-primary">
      {/* Sidebar */}
      <div className="w-64 bg-secondary border-r border-border hidden md:block">
        <div className="p-8">
          <h2 className="text-brand-blue font-serif font-bold text-xl mb-8 tracking-tighter">Admin Panel</h2>
          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
              { id: 'inquiries', icon: <MessageSquare size={20} />, label: 'Inquiries' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'text-secondary hover:bg-primary hover:text-primary'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 relative">
        {/* Undo Toast */}
        <AnimatePresence>
          {pendingDeletion && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed bottom-8 right-8 z-50 bg-primary text-primary px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-6 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-brand-blue/20 flex items-center justify-center text-xs font-bold text-brand-blue">
                  {countdown}
                </div>
                <p className="font-medium">Inquiry marked as contacted</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleUndoDeletion}
                  className="flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 rounded-xl text-sm font-bold transition-colors"
                >
                  <Undo2 size={16} /> Undo
                </button>
                <button
                  onClick={() => {
                    finalizeDeletion(pendingDeletion);
                    setPendingDeletion(null);
                  }}
                  className="p-2 hover:bg-secondary rounded-xl transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <h1 className="text-3xl font-serif font-bold text-primary tracking-tight">Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-secondary p-8 rounded-3xl border border-border">
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">New Inquiries</p>
                    <p className="text-4xl font-serif font-bold text-brand-blue">{inquiries.filter(i => i.status === 'new').length}</p>
                  </div>
                  <div className="bg-secondary p-8 rounded-3xl border border-border">
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Contacted</p>
                    <p className="text-4xl font-serif font-bold text-amber-500">{inquiries.filter(i => i.status === 'contacted').length}</p>
                  </div>
                  <div className="bg-secondary p-8 rounded-3xl border border-border">
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Total Inquiries</p>
                    <p className="text-4xl font-serif font-bold text-primary">{inquiries.length}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div className="space-y-8">
                <h1 className="text-3xl font-serif font-bold text-primary tracking-tight">Wholesale Inquiries</h1>
                <div className="grid grid-cols-1 gap-6">
                  {inquiries.length === 0 ? (
                    <div className="bg-secondary p-12 rounded-3xl text-center border border-border">
                      <p className="text-secondary font-medium">No inquiries found.</p>
                    </div>
                  ) : (
                    inquiries.map(inq => (
                      <div key={inq.id} className="bg-secondary p-8 rounded-3xl flex flex-col md:flex-row justify-between gap-6 hover:border-brand-blue/30 transition-colors border border-border">
                        <div className="space-y-4 flex-grow">
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                              inq.status === 'new' ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20' : 
                              inq.status === 'contacted' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' : 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20'
                            }`}>
                              {inq.status}
                            </span>
                            <span className="text-xs text-secondary">{inq.created_at ? new Date(inq.created_at).toLocaleDateString() : (inq.createdAt ? inq.createdAt.toDate().toLocaleDateString() : '')}</span>
                          </div>
                          <h3 className="text-xl font-bold text-primary">{inq.customerName}</h3>
                          <div className="flex flex-wrap gap-6 text-sm text-secondary">
                            <span className="flex items-center gap-2"><Phone size={14} className="text-brand-blue" /> {inq.phone}</span>
                          </div>
                          <p className="text-secondary bg-primary p-6 rounded-2xl text-sm italic border border-border">
                            "{inq.message}"
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 justify-center min-w-[160px]">
                          {inq.status !== 'contacted' && inq.status !== 'closed' && (
                            <button
                              onClick={() => handleMarkContacted(inq)}
                              className="px-4 py-3 bg-brand-blue text-white rounded-xl text-xs font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                              <CheckCircle size={14} /> Mark Contacted
                            </button>
                          )}
                          {inq.status !== 'closed' && (
                            <button
                              onClick={() => handleUpdateInquiryStatus(inq.id, 'closed')}
                              className="px-4 py-3 bg-primary text-primary rounded-xl text-xs font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 border border-border"
                            >
                              <CheckCircle size={14} /> Mark Closed
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
