import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorObj, setErrorObj] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validatePakistaniPhone = (phone: string) => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    const pkPhoneRegex = /^(?:(?:\+92)|(?:0092)|(?:92)|0)?3\d{9}$/;
    return pkPhoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrorObj('');

    if (!validatePakistaniPhone(formData.phone)) {
      setErrorObj('Please enter a valid Pakistani phone or WhatsApp number (e.g. 03001234567).');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          customer_name: formData.name,
          phone: formData.phone,
          message: formData.message,
          type: 'general_inquiry',
          status: 'new'
        }
      ]);
      
      if (error) throw error;
      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again. Make sure your Supabase URL is correct.");
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
            Looking for something specific? Need a repair or have a query? We are here to help you.
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
              <p className="text-secondary mb-6">Call us regarding any query directly</p>
              <a href="tel:+92320700700" className="text-brand-blue font-bold text-xl hover:text-brand-blue/80 transition-colors">0320-700700</a>
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
                      placeholder="Enter your phone number (e.g. 03001234567)"
                      className="w-full px-8 py-5 bg-primary border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-lg text-primary placeholder:text-secondary/50"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({...formData, phone: e.target.value});
                        if (errorObj) setErrorObj('');
                      }}
                    />
                    {errorObj && <p className="text-brand-red text-sm font-medium">{errorObj}</p>}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">What do you need?</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what you are looking for..."
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.27508401881164!2d72.66328893739967!3d32.08543700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177a9c457be69%3A0xf6777d7327b3ec71!2sMadina%20Crockery%20Store!5e0!3m2!1sen!2sus!4v1780751089194!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Madina Crockery Store Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
