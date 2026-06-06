import React from 'react';
import { ShieldCheck, Target, History, Award, MapPin, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      {/* Hero */}
      <section className="py-40 bg-bg-primary text-text-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000" 
            alt="Heritage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-brand-blue/10">
              Established Since 1949
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 tracking-tighter leading-[0.9]">
              Our <span className="text-brand-red">History</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Sargodha's best and oldest shop for steel crockery. We have been selling quality items for over 75 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-40 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-brand-blue/10">
                <History size={14} /> 75+ Years of Trust
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary tracking-tight leading-tight">Oldest Shop in Karkhana Bazaar</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Madina Crockery Store was started in 1949 in Karkhana Bazaar, Sargodha. We are the oldest shop in the area. We sell high quality steel items at wholesale prices.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We always give the best rates to our customers. We sell in bulk to people from Sargodha and nearby cities. Our items are strong and last for a long time.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-10">
                <div>
                  <p className="text-5xl font-serif font-bold text-brand-blue mb-2">1949</p>
                  <p className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">Founded</p>
                </div>
                <div>
                  <p className="text-5xl font-serif font-bold text-brand-red mb-2">4.0</p>
                  <p className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">Google Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1584990333910-ef908182df83?auto=format&fit=crop&q=80&w=1000" 
                  alt="Store Heritage" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-red text-white p-12 rounded-3xl shadow-2xl hidden md:block border border-white/10">
                <p className="text-5xl font-serif font-bold mb-1">75+</p>
                <p className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-40 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">Our Core Values</h2>
            <p className="text-text-secondary font-medium uppercase tracking-widest text-xs">The principles that guide our wholesale business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Premium Quality', desc: 'We source only the finest steel crockery, ensuring durability and a fine finish for every item.' },
              { icon: <Target size={32} />, title: 'Wholesale Pricing', desc: 'Our prices are strictly wholesale, providing the best value for bulk buyers in the region.' },
              { icon: <Users size={32} />, title: 'Trusted Service', desc: 'With over 75 years of experience, we provide mature variety and reliable dealing.' },
            ].map((val, i) => (
              <div key={i} className="bg-white p-14 rounded-[2.5rem] text-center border border-border hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-bg-secondary text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-10 border border-border">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">{val.title}</h3>
                <p className="text-text-secondary leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-40 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-14">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-8 tracking-tight">Visit Our Store</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Experience our legacy in person. We invite you to visit our wholesale shop in the historic Karkhana Bazar of Sargodha.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center border border-border shadow-sm">
                    <MapPin size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">Address</h4>
                  <p className="text-text-secondary leading-relaxed font-medium">
                    Karkhana Bazaar,<br />
                    Sargodha, Punjab,<br />
                    Pakistan
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center border border-border shadow-sm">
                    <Clock size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">Store Timings</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary mb-1">Sat - Thu</span>
                      <span className="font-bold text-text-primary">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary mb-1">Friday</span>
                      <span className="text-brand-red font-bold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.511111111111!2d72.6747222!3d32.0766667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921770000000000%3A0x0!2zMzLCsDA0JzM2LjAiTiA3MsKwNDAnMjkuMCJF!5e0!3m2!1sen!2s!4v1647330000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Madina Crockery Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
