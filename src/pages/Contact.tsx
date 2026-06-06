import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await addDoc(collection(db, 'inquiries'), {
        customerName: formData.name,
        phone: formData.phone,
        message: formData.message,
        type: 'wholesale_inquiry',
        status: 'new',
        createdAt: serverTimestamp()
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen py-24 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-brand-blue mb-6 tracking-tighter"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-secondary max-w-2xl mx-auto text-xl font-medium"
          >
            Do you want to buy in wholesale? Or want to visit our shop? We are here to help you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-secondary p-10 rounded-3xl border border-border"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <Phone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Call Us</h3>
              <p className="text-secondary mb-6">Call our wholesale team directly</p>
              <a href="tel:+92483723597" className="text-brand-blue font-bold text-xl hover:text-brand-blue/80 transition-colors">+92 48 3723597</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary p-10 rounded-3xl border border-border"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Visit Us</h3>
              <p className="text-secondary mb-6">Karkhana Bazaar, Sargodha, Punjab, Pakistan</p>
              <p className="text-brand-blue font-bold text-xl">Open until 9 PM</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary p-10 rounded-3xl border border-border"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">Shop Timings</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-1">Sat - Thu</span>
                  <span className="text-primary font-bold text-lg">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-1">Friday</span>
                  <span className="text-brand-red font-bold text-lg">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-secondary p-10 md:p-16 rounded-3xl border border-border"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-24 h-24 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
                <p className="text-secondary text-lg">Thank you for contacting us. Our team will talk to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-10 text-brand-blue font-bold text-lg hover:text-brand-blue/80">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest">Your Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-8 py-5 bg-primary border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-lg text-primary placeholder:text-secondary/50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-8 py-5 bg-primary border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-lg text-primary placeholder:text-secondary/50"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">What do you need?</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what you want to buy in bulk..."
                    className="w-full px-8 py-5 bg-primary border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-lg text-primary placeholder:text-secondary/50"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-brand-blue text-white rounded-2xl font-bold hover:bg-brand-blue/80 transition-all shadow-xl flex items-center justify-center gap-3 text-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.511111111111!2d72.6747222!3d32.0766667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921770000000000%3A0x0!2zMzLCsDA0JzM2LjAiTiA3MsKwNDAnMjkuMCJF!5e0!3m2!1sen!2s!4v1647330000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Madina Crockery Store Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
