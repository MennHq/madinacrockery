import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Settings, LogOut, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export default function Navbar({ user, onLogin, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    onLogin(emailInput);
    setShowLoginForm(false);
    setEmailInput('');
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-bg-primary/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://i.postimg.cc/dVc9yL3F/Untitled-1.png" alt="Madina Crockery Store Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-text-primary font-serif font-bold text-lg leading-none tracking-tight">MADINA</span>
                <span className="text-brand-red text-[10px] uppercase tracking-[0.2em] font-bold">Crockery Store</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 pl-6 border-l border-border">
              {user ? (
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider">{user.email}</span>
                    <span className="text-[10px] text-brand-red uppercase font-bold tracking-tighter">{user.role}</span>
                  </div>
                  {user.role === 'admin' && (
                    <Link to="/madinacrockerymanage" className="p-2 text-text-secondary hover:text-brand-blue transition-colors">
                      <Settings size={18} />
                    </Link>
                  )}
                  <button onClick={handleLogout} className="p-2 text-text-secondary hover:text-brand-red transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-5 text-sm font-bold uppercase tracking-widest rounded-xl ${
                    location.pathname === link.path ? 'text-brand-blue bg-bg-secondary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 mt-6 border-t border-border flex flex-col gap-6">
                {user ? (
                  <>
                    <div className="px-4 py-2">
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">Logged in as</p>
                      <p className="text-sm font-bold text-text-primary">{user.email}</p>
                    </div>
                    {user.role === 'admin' && (
                      <Link
                        to="/madinacrockerymanage"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 text-text-secondary font-bold text-xs uppercase tracking-widest hover:text-brand-blue"
                      >
                        <Settings size={20} /> Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 px-4 py-4 text-brand-red font-bold text-xs uppercase tracking-widest"
                    >
                      <LogOut size={20} /> Logout
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
