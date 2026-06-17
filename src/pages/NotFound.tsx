import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-sm font-bold tracking-widest text-brand-red uppercase mb-4">
          Error 404
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tighter text-text-primary">
          Page Not Found
        </h1>
        <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-text-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-brand-red hover:text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Explore Madina Crockery
        </Link>
      </motion.div>
    </div>
  );
}
