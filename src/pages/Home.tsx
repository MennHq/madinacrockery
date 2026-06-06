import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Users, MapPin, Phone, Clock, Award, Quote, Package } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const reviews = [
    {
      name: 'Babar Hassan',
      role: 'Local Guide',
      text: 'One of the best wholesale suppliers of steel crockery in town. Also supply to surrounding towns in bulk. Prices are moderate and very fine quality.',
      rating: 5
    },
    {
      name: 'Usman',
      role: 'Local Guide',
      text: 'Average variety but Good Rates. Reliable wholesale partner for many years.',
      rating: 4
    },
    {
      name: 'Ahsan Haroon',
      role: 'Customer',
      text: 'Good dealing. Mature variety. The quality of steel crockery is exceptional.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000" 
            alt="Heritage Crockery" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-brand-blue/10">
              Established Since 1949
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter text-text-primary">
              Madina <br />
              <span className="text-brand-red">Crockery Store</span>
            </h1>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-xl font-medium">
              Sargodha's most oldest and best shop for steel crockery. We are selling quality items for more than 75 years.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <a href="#contact" className="px-12 py-5 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/10 flex items-center gap-2 text-sm uppercase tracking-widest">
                Visit Our Shop <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-3">
                <div className="flex text-brand-red">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">4.0 Rating (35+ Reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-40 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                <img 
                  src="https://avatars.mds.yandex.net/get-altay/19681410/2a0000019e9bc1f66c937bbb39b5dde43c02/XXXL" 
                  alt="Madina Crockery Store" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red text-white p-12 rounded-3xl shadow-2xl hidden md:block border border-white/10">
                <p className="text-6xl font-serif font-bold mb-2">75+</p>
                <p className="text-white/80 uppercase tracking-[0.2em] text-[10px] font-bold">Years of Trust</p>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary tracking-tight leading-tight">A Legacy of Quality in Sargodha</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Founded in 1949, Madina Crockery Store has grown from a local shop in Karkhana Bazar to one of the most respected wholesale suppliers in the region. We specialize in high-quality steel crockery, supplying both local households and surrounding towns in bulk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue border border-brand-blue/10">
                    <Award size={28} />
                  </div>
                  <h4 className="font-bold text-text-primary text-xl">Wholesale Rates</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">We offer the most competitive wholesale prices in the market, ensuring value for every customer.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue border border-brand-blue/10">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="font-bold text-text-primary text-xl">Premium Quality</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">Our steel crockery is known for its durability and fine finish, trusted by generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-40 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-8">Our Specialties</h2>
            <p className="text-lg text-text-secondary">We focus on what we do best: providing high-quality crockery at wholesale prices directly from our offline store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                icon: <Package className="text-brand-blue" size={32} />, 
                title: 'Steel Crockery', 
                desc: 'We sell high quality steel plates, trays, and kitchen tools that last for many years.' 
              },
              { 
                icon: <Award className="text-brand-red" size={32} />, 
                title: '75+ Years Experience', 
                desc: 'We are Sargodha\'s best and oldest shop. We have been serving customers since 1949.' 
              },
              { 
                icon: <Users className="text-brand-blue" size={32} />, 
                title: 'Wholesale Rates', 
                desc: 'Our prices are very low because we sell at wholesale rates. Best for bulk buyers.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-14 rounded-[2.5rem] border border-border hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-bg-secondary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-blue/5 transition-colors border border-border">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-40 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex text-brand-red">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">4.0 on Google Maps</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-bg-secondary p-12 rounded-[2rem] relative border border-border">
                <Quote className="absolute top-10 right-10 text-text-primary/5" size={48} />
                <div className="flex text-brand-red mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-text-primary italic mb-10 leading-relaxed text-lg">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-text-primary">{review.name}</h4>
                  <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-bold mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-40 bg-bg-secondary text-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-14">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight text-text-primary">Visit Our Wholesale Store</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Experience our legacy in person. We invite you to visit our main wholesale shop in the historic Karkhana Bazaar of Sargodha.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-text-primary">Address</h4>
                    <p className="text-text-secondary">Karkhana Bazaar, Sargodha, Punjab, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-text-primary">Phone</h4>
                    <a href="tel:+92483723597" className="text-text-secondary hover:text-brand-blue transition-colors">+92 48 3723597</a>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <Clock size={32} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-text-primary">Store Hours</h4>
                    <div className="grid grid-cols-2 gap-12">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary mb-1">Sat - Thu</span>
                        <span className="text-text-primary font-bold">9:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary mb-1">Friday</span>
                        <span className="text-brand-red font-bold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border-[1px] border-border">
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
