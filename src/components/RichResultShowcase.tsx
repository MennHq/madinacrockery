import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Smartphone, Laptop, Code, Eye, Sparkles, Check, Copy } from 'lucide-react';

type TabId = 'business' | 'steel_product' | 'wedding_product';

export default function RichResultShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>('business');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const snippets = {
    business: {
      title: 'Madina Crockery Store | Best & Oldest Wholesale Shop in Sargodha',
      url: 'https://madinacrockery.vercel.app',
      displayUrl: 'madinacrockery.vercel.app',
      rating: '4.8',
      votes: '352',
      priceRange: '$$',
      description: 'Sargodha\'s oldest and best wholesale shop for high-quality steel crockery, kitchenware, and wedding dinner sets since 1949. Located in Karkhana Bazaar.',
      extraBadges: ['Local Business', 'Shopping Center'],
      schemaCode: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://madinacrockery.vercel.app/#localbusiness",
  "name": "Madina Crockery Store",
  "url": "https://madinacrockery.vercel.app/",
  "description": "Sargodha's oldest and best wholesale shop for steel crockery, kitchenware, and wedding dinner sets since 1949.",
  "priceRange": "$$",
  "telephone": "+92320700700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karkhana Bazar, Block 6",
    "addressLocality": "Sargodha",
    "addressRegion": "Punjab",
    "postalCode": "40100",
    "addressCountry": "PK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "352"
  }
}`
    },
    steel_product: {
      title: 'Steel Crockery Set - Heavy Gauge | Madina Crockery Store',
      url: 'https://madinacrockery.vercel.app/products/steel-crockery',
      displayUrl: 'madinacrockery.vercel.app › products › steel-crockery',
      rating: '4.9',
      votes: '148',
      priceRange: 'Rs. 4,500 - Rs. 35,000',
      description: 'Shop premium quality, heavy-gauge steel plates, spoons, cooking pots and trays at Madina Crockery. Best wholesale prices for commercial and household use.',
      extraBadges: ['Product Schema', 'Price Snippet'],
      schemaCode: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Steel Crockery Set - Heavy Gauge",
  "brand": {
    "@type": "Brand",
    "name": "Madina Steel"
  },
  "description": "Premium quality, heavy-gauge steel plates, spoons, cooking pots and trays. Designed for domestic and commercial longevity.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "148"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "PKR",
    "lowPrice": "4500",
    "highPrice": "35000",
    "offerCount": "12"
  }
}`
    },
    wedding_product: {
      title: 'Custom Wedding Jahez Crockery Package | Madina Crockery',
      url: 'https://madinacrockery.vercel.app/products/wedding-package',
      displayUrl: 'madinacrockery.vercel.app › products › wedding-package',
      rating: '4.8',
      votes: '204',
      priceRange: 'Rs. 20,000 - Rs. 120,000',
      description: 'Complete customized wedding jahez packages including dinnerware, luxury cutlery, glassware, non-stick cooking pots, and tea sets at special subsidized wholesale rates.',
      extraBadges: ['Product Schema', 'Aggregate Offer'],
      schemaCode: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Wedding Jahez Crockery Package",
  "brand": {
    "@type": "Brand",
    "name": "Madina Crockery"
  },
  "description": "Complete customized wedding packages including dinnerware, luxury cutlery, glassware, non-stick cooking pots, and tea sets.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "204"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "PKR",
    "lowPrice": "20000",
    "highPrice": "120000",
    "offerCount": "6"
  }
}`
    }
  };

  const activeData = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeData.schemaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Left Description Column */}
          <div className="lg:w-5/12 space-y-8 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-brand-blue/10">
              <Sparkles size={12} /> Rich Snippets & Rating SEO
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight leading-tight">
              Google Rich Result Snippet Showcase
            </h2>
            <p className="text-text-secondary leading-relaxed text-base font-medium">
              We have integrated advanced <span className="text-brand-blue font-bold">Schema.org (JSON-LD)</span> structures directly into the code. This ensures Google and other search engines capture our <strong>75-year trust, aggregate ratings, pricing models, and FAQs</strong> directly in the search results to stand out and attract local buyers.
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">Configured Rich Results:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'LocalBusiness Snippet', desc: 'Ratings & business hours' },
                  { title: 'ShoppingCenter Snippet', desc: 'Physical store location' },
                  { title: 'Product Ratings', desc: 'Star ratings for collections' },
                  { title: 'Aggregate Offers', desc: 'Price range & currencies' },
                  { title: 'Breadcrumb Paths', desc: 'Clean url tree indicators' },
                  { title: 'FAQ Rich Results', desc: 'Direct Q&A under the snippet' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-border flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <div>
                      <h5 className="font-bold text-text-primary text-xs">{item.title}</h5>
                      <p className="text-[10px] text-text-secondary mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Simulator Column */}
          <div className="lg:w-7/12 w-full space-y-6">
            
            {/* Simulator Controls Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-border shadow-sm">
              
              {/* Tab Selector */}
              <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-bg-secondary rounded-2xl">
                {[
                  { id: 'business', label: 'Local Store' },
                  { id: 'steel_product', label: 'Steel Crockery' },
                  { id: 'wedding_product', label: 'Wedding Package' },
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as TabId)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeTab === t.id
                        ? 'bg-white text-brand-blue shadow-sm'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* View/Device Selectors */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={() => setIsMobile(false)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    !isMobile 
                      ? 'bg-text-primary border-text-primary text-white' 
                      : 'bg-white border-border text-text-secondary hover:text-text-primary'
                  }`}
                  title="Simulate Desktop"
                >
                  <Laptop size={16} />
                </button>
                <button
                  onClick={() => setIsMobile(true)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isMobile 
                      ? 'bg-text-primary border-text-primary text-white' 
                      : 'bg-white border-border text-text-secondary hover:text-text-primary'
                  }`}
                  title="Simulate Mobile"
                >
                  <Smartphone size={16} />
                </button>
              </div>

            </div>

            {/* Google Search Result Preview Stage */}
            <div className="bg-white rounded-[2.5rem] border border-border p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span className="text-[10px] text-text-secondary font-mono ml-2">Google SERP Rating Snippet Simulator</span>
              </div>

              {/* Simulated Browser Frame Container */}
              <div className={`mt-6 border border-border/80 rounded-2xl bg-white p-6 md:p-8 transition-all duration-300 mx-auto ${
                isMobile ? 'max-w-[375px] shadow-md border-brand-blue/20' : 'w-full'
              }`}>
                
                {/* Search Meta (Favicon & Breadcrumbs) */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center border border-border shrink-0 overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/dVc9yL3F/Untitled-1.png" 
                      alt="favicon" 
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-tight overflow-hidden">
                    <span className="text-xs font-semibold text-[#202124] truncate">Madina Crockery Store</span>
                    <span className="text-[10px] text-[#5f6368] truncate font-sans">{activeData.url}</span>
                  </div>
                </div>

                {/* Search Title (Blue link) */}
                <h3 className="text-[#1a0dab] hover:underline font-sans text-xl md:text-2xl leading-snug cursor-pointer font-medium mb-1.5">
                  {activeData.title}
                </h3>

                {/* Rating Rich Snippet Component */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-sm text-[#4d5156] py-1 border-y border-dashed border-border my-2.5">
                  {/* Stars */}
                  <div className="flex text-[#f2b01e]">
                    {[...Array(5)].map((_, i) => {
                      const val = parseFloat(activeData.rating);
                      return (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < Math.floor(val) ? 'currentColor' : 'none'} 
                          className="shrink-0"
                        />
                      );
                    })}
                  </div>
                  
                  {/* Rating value and votes count */}
                  <span className="font-bold text-[#202124] text-xs">Rating: {activeData.rating}/5</span>
                  <span className="text-xs text-[#5f6368]">• {activeData.votes} votes</span>
                  
                  {/* Price info if available */}
                  {activeData.priceRange && (
                    <>
                      <span className="text-xs text-[#5f6368]">•</span>
                      <span className="text-xs font-medium text-[#202124] bg-bg-secondary px-2 py-0.5 rounded border border-border">Price range: {activeData.priceRange}</span>
                    </>
                  )}
                </div>

                {/* Snippet Description */}
                <p className="text-sm text-[#4d5156] font-sans leading-relaxed">
                  {activeData.description}
                </p>

                {/* Simulated Sitelinks for Business Listing */}
                {activeTab === 'business' && !isMobile && (
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mt-5 pt-4 border-t border-border/40">
                    {[
                      { name: 'About Our 75-Year History', desc: 'Read how Madina Crockery was founded in 1949 and our values.' },
                      { name: 'Wedding Jahez Packages', desc: 'Browse customizable wholesale plates, sets, and cutlery.' },
                      { name: 'Knowledge Blog & Guides', desc: 'Pro tips to inspect steel plates & ceramic dinnerware.' },
                      { name: 'Contact & Store Timings', desc: 'Address inside Karkhana Bazaar, Sargodha, open daily.' },
                    ].map((link, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-sm font-sans text-[#1a0dab] hover:underline cursor-pointer block">{link.name}</span>
                        <span className="text-xs text-[#4d5156] leading-snug line-clamp-1">{link.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* Structured Schema Code Inspector */}
            <div className="bg-text-primary text-bg-primary rounded-[2.5rem] border border-text-primary/10 p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue border border-white/5">
                    <Code size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">JSON-LD Metadata Inspector</h4>
                    <p className="text-[10px] text-white/50">Injecting structured SEO scripts</p>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 border ${
                    copied 
                      ? 'bg-brand-blue/20 border-brand-blue/40 text-brand-blue'
                      : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copied' : 'Copy Schema'}
                </button>
              </div>

              {/* Code display block */}
              <div className="overflow-x-auto max-h-[250px] overflow-y-auto rounded-2xl bg-black/30 p-5 border border-white/5 font-mono text-xs leading-relaxed text-slate-300">
                <pre>{activeData.schemaCode}</pre>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
