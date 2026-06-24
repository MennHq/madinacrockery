import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FAQSection from '../components/FAQSection';

export default function FAQ() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-fade-in">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-xs font-bold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors mb-4"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
      
      {/* Renders all FAQs */}
      <FAQSection />
    </div>
  );
}
