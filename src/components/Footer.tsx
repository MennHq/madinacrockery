import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, X } from 'lucide-react';

export default function Footer() {
  const [showPending, setShowPending] = useState(false);

  return (
    <footer className="bg-bg-primary text-text-secondary py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://i.postimg.cc/dVc9yL3F/Untitled-1.png" alt="Madina Crockery Store Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-text-primary font-serif font-bold text-xl tracking-tight uppercase">Madina Crockery Store</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-md font-medium">
              Sargodha's best and oldest shop for steel crockery. We have been selling quality items since 1949. We sell at wholesale prices.
            </p>
            <div className="flex gap-6">
              <button onClick={() => setShowPending(true)} className="text-text-secondary hover:text-brand-blue transition-colors" aria-label="Facebook"><Facebook size={20} /></button>
              <a href="https://www.instagram.com/madinacrockerystore/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-blue transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-serif font-bold text-xl mb-8">Contact Info</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-blue shrink-0" />
                <span>Karkhana Bazaar, Sargodha, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <a href="tel:+92483723597" className="hover:text-brand-blue transition-colors">+92 48 3723597</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <a href="mailto:madinacrockerystore.hq@gmail.com" className="hover:text-brand-blue transition-colors">madinacrockerystore.hq@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-border text-center text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Madina Crockery Store. All rights reserved.</p>
        </div>
      </div>

      {/* Pending Dialog */}
      {showPending && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-10 rounded-[2.5rem] max-w-sm w-full shadow-2xl text-center relative border border-border">
            <button 
              onClick={() => setShowPending(false)}
              className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-20 h-20 bg-brand-blue/5 text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-blue/10">
              <Instagram size={36} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-text-primary mb-3">Coming Soon</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">Our social media pages are being prepared. We will be online soon!</p>
            <button 
              onClick={() => setShowPending(false)}
              className="w-full py-4 bg-accent text-white rounded-2xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/10 uppercase tracking-widest text-xs"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
