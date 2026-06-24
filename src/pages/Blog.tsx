import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, MessageSquare, BookOpen, ChevronRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Buying Guide' | 'Materials' | 'Quality' | 'Events' | 'Local Legacy';
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: React.ReactNode;
  tags: string[];
}

export default function Blog() {
  const location = useLocation();
  const navigate = useNavigate();

  // Selected article slug from query param or state
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Local Legacy', 'Buying Guide', 'Materials', 'Quality', 'Events'];

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      slug: 'best-crockery-shop-sargodha',
      title: 'Which is the Best and Oldest Crockery Shop in Sargodha?',
      description: 'Discover why Madina Crockery Store, established in 1949, remains the ultimate legacy choice for generations in Karkhana Bazaar, Sargodha.',
      category: 'Local Legacy',
      readTime: '6 min read',
      date: 'June 24, 2026',
      author: 'M. Harun Khokhar',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      tags: ['Sargodha Crockery', 'Legacy Shop', 'Wholesale', 'Wedding Jahez'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="text-lg leading-relaxed mb-6 font-serif italic text-accent border-l-4 border-accent pl-4">
            "For over seven decades, families across Punjab have trusted one name for their wedding jahez packages, premium dinner sets, and durable steel crockery: Madina Crockery Store."
          </p>
          
          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">A Historic Legacy Since 1949</h3>
          <p className="mb-6 leading-relaxed">
            Established in 1949, just two years after the independence of Pakistan, <strong>Madina Crockery Store</strong> has grown to become the absolute benchmark of quality and reliability in Sargodha. Located in the heart of the historic <strong>Karkhana Bazaar</strong>, we have spent the last 75+ years building a reputation of offering premium dinnerware, kitchen utensils, and fancy imported crockery at unbeatable wholesale rates.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Why Madina Crockery Store is the Rated #1 Best Crockery Shop in Sargodha</h3>
          <p className="mb-6 leading-relaxed">
            When local shoppers, caterers, and bulk purchasers search for the best crockery shop in Sargodha, several unique factors place Madina Crockery at the very top:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Unmatched Heritage:</strong> Being the oldest shop in the region means we have deep-rooted relationships with premium international and national manufacturers, passing those cost savings directly to you.</li>
            <li><strong>Wedding Jahez Specialists:</strong> We customize complete marriage crockery sets (jahez packages) to fit all budgets, ensuring your family receives elegant, durable items for their new chapter.</li>
            <li><strong>Steel Crockery Pioneers:</strong> From heavy-gauge cooking pots to stainless steel spoons and serving trays, our selection of steel goods is unmatched in Punjab.</li>
            <li><strong>Genuine Wholesale Rates:</strong> Whether you are buying a single luxury dinner set or stocking an entire wholesale dealership, we maintain honest, transparent pricing.</li>
          </ul>

          <div className="bg-bg-secondary p-8 rounded-3xl my-8 border border-border">
            <h4 className="text-xl font-bold font-serif mb-2 text-text-primary">Pro Tip for Wedding Buyers:</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              When preparing a wedding jahez package, don't just focus on fancy designs. Mix delicate bone china or porcelain sets with durable, everyday melamine dinner sets and heavy-duty stainless steel cookware to ensure maximum utility for the newlyweds.
            </p>
          </div>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Where to Find Us</h3>
          <p className="mb-6 leading-relaxed">
            Our main wholesale showroom is situated in <strong>Karkhana Bazaar, Sargodha, Punjab, Pakistan</strong>. You can also easily access our customer support near <strong>Trust Plaza</strong>. For retail inquiries, bulk bookings, or to customize your wedding jahez package, feel free to visit us or contact our team directly at <a href="tel:+92483723597" className="text-accent underline font-bold">+92 48 3723597</a>.
          </p>
        </article>
      )
    },
    {
      id: 'post-2',
      slug: 'everyday-dishes-material-guide',
      title: 'What Material Should I Choose for Everyday Dishes?',
      description: 'Understanding which crockery materials work best for daily use. Learn the pros and cons of melamine, ceramic, glass, and steel.',
      category: 'Materials',
      readTime: '4 min read',
      date: 'June 23, 2026',
      author: 'Madina Buying Desk',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
      tags: ['Materials Guide', 'Melamine', 'Ceramics', 'Everyday Use'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            Choosing the perfect material for everyday family dinnerware is a balance between aesthetic appeal, budget, and durability. The ideal everyday plate must resist scratches, withstand frequent washing, be microwave-safe (ideally), and survive the occasional accidental slip.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">1. Melamine Crockery</h3>
          <p className="mb-4 leading-relaxed">
            <strong>Melamine</strong> is a hard plastic material known for being virtually shatterproof. It is lightweight, comes in endless stunning patterns, and is incredibly budget-friendly.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-sm text-text-secondary">
            <li><strong>Pros:</strong> Extremely shatterproof, perfect for households with children, lightweight, economical.</li>
            <li><strong>Cons:</strong> Not microwave-safe (can release chemicals at very high temperatures), prone to surface scratches over many years.</li>
          </ul>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">2. High-Fire Ceramics (Stoneware & Earthenware)</h3>
          <p className="mb-4 leading-relaxed">
            <strong>Stoneware</strong> and glazed ceramic dishes offer a lovely rustic warmth and organic feel. They are heavier than melamine and offer excellent heat retention.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-sm text-text-secondary">
            <li><strong>Pros:</strong> Microwave and oven-safe, beautiful glazed finishes, solid weight, premium dining feel.</li>
            <li><strong>Cons:</strong> Can chip if knocked together harshly, heavier to wash by hand.</li>
          </ul>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">3. Tempered Opal Glass</h3>
          <p className="mb-4 leading-relaxed">
            Commonly known under brands like Corelle, tempered opal glass is a fantastic everyday choice. It is made by heating glass to high temperatures and cooling it rapidly.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1 text-sm text-text-secondary">
            <li><strong>Pros:</strong> Thin and stackable (saves cabinet space), highly break and chip-resistant, microwave and dishwasher-safe.</li>
            <li><strong>Cons:</strong> Limited traditional textured patterns, can shatter completely into small pieces if it does break.</li>
          </ul>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">The Verdict</h3>
          <p className="mb-6 leading-relaxed">
            For active families with small children, high-grade <strong>Melamine</strong> or <strong>Opal Glass</strong> is highly recommended. For those who prioritize microwave utility and an elegant dining experience, go with <strong>Stoneware or Glazed Porcelain</strong>.
          </p>
        </article>
      )
    },
    {
      id: 'post-3',
      slug: 'how-to-identify-high-quality-plates',
      title: 'How Can I Tell If Plates Are Actually High Quality?',
      description: 'Stop getting fooled by cheap duplicates! Learn how to identify premium quality indicators in crockery before buying.',
      category: 'Quality',
      readTime: '5 min read',
      date: 'June 22, 2026',
      author: 'M. Harun Khokhar',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800',
      tags: ['Quality Standards', 'Expert Tips', 'Dinnerware Buying'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            Many retail outlets sell low-grade plates that look gorgeous on the shelf but chip, scratch, or fade within months. At Madina Crockery Store, we believe in educating our customers. Here are 4 professional tests you can perform right in the shop to identify premium crockery:
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">1. The "Ring" or Sound Test</h3>
          <p className="mb-6 leading-relaxed">
            Hold a plate on the tips of your fingers and gently tap the rim with a coin or a wooden utensil. 
            <br />
            <strong>High Quality:</strong> It will produce a clear, beautiful, resonant high-pitched ring (especially bone china and porcelain) indicating high density and zero structural micro-cracks.
            <br />
            <strong>Low Quality:</strong> It will produce a flat, dull "thud".
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">2. The Light Translucency Test</h3>
          <p className="mb-6 leading-relaxed">
            Hold a plate up to a bright light source (or your phone's flashlight) and place your hand behind it.
            <br />
            <strong>Premium Bone China:</strong> You should clearly see the outline of your fingers through the body of the plate. It has a beautiful translucent glow.
            <br />
            <strong>Cheap Ceramic/Stoneware:</strong> Completely opaque; no light passes through.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">3. Glaze Smoothness Inspection</h3>
          <p className="mb-6 leading-relaxed">
            Run your fingers slowly over the entire surface of the plate, paying close attention to the rim and the base. Look closely under a light source.
            <br />
            <strong>High Quality:</strong> The glaze must be perfectly uniform, glassy, and smooth. No tiny bubbles, pinholes, rough dry patches, or uneven waviness.
            <br />
            <strong>Low Quality:</strong> Pinholes or rough spots where the glaze didn't settle properly. These spots absorb moisture and food oils, leading to staining and bacteria growth.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">4. Perfectly Level Rim Test</h3>
          <p className="mb-6 leading-relaxed">
            Place the plate upside down on a flat, level glass counter or tabletop. Try to press on different edges to see if it wobbles.
            <br />
            <strong>High Quality:</strong> Lies perfectly flat with uniform contact across the table, showing it was fired under perfect, controlled kiln temperatures.
            <br />
            <strong>Low Quality:</strong> Wobbles because the plate warped slightly during the firing process due to uneven clay density.
          </p>
        </article>
      )
    },
    {
      id: 'post-4',
      slug: 'wedding-dishes-on-budget-guide',
      title: 'Best Dishes for a Wedding Reception on a Budget',
      description: 'How to choose gorgeous and durable wedding reception crockery or customized wedding jahez packages without breaking the bank.',
      category: 'Events',
      readTime: '5 min read',
      date: 'June 20, 2026',
      author: 'Madina Events Desk',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800',
      tags: ['Wedding Guide', 'Budget Friendly', 'Jahez Packages', 'Events'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            Hosting a beautiful wedding reception or setting up a comprehensive wedding jahez package for your daughter is a proud milestone. However, the costs of high-end crockery can accumulate rapidly. Here is our expert guide on securing stunning dinnerware on a budget:
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Opt for Premium Melamine with Embossed Patterns</h3>
          <p className="mb-6 leading-relaxed">
            If you want the luxurious look of fine ceramic dinnerware without the astronomical price tag, choose <strong>premium embossed melamine</strong>. High-end melamine dinnerware now replicates porcelain texture and glazes so perfectly that guests won't even notice the difference until they lift the plate. It is shatterproof, dishwasher-safe, and incredibly cost-effective.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">The Power of the 72-Piece Complete Set</h3>
          <p className="mb-6 leading-relaxed">
            Instead of buying plates, bowls, soup spoons, and serving platters individually, always opt for a comprehensive 72-piece or 83-piece coordinated dinner set. Purchasing these bulk packages from wholesale dealers like <strong>Madina Crockery Store</strong> saves up to 35% compared to open-stock individual items.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Classic White with Minimal Metallic Trims</h3>
          <p className="mb-6 leading-relaxed">
            Bold, colorful, seasonal patterns go out of style quickly and are difficult to replace if a plate breaks. We strongly advise choosing a timeless <strong>bright white plate with a subtle silver, gold, or clean embossed border</strong>. It looks immensely high-end, complements any tablecloth color, and remains forever elegant.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Sargodha Wedding Packages</h3>
          <p className="mb-6 leading-relaxed">
            At Madina Crockery Store, we customize wedding jahez packages starting from basic essential items to elite luxury sets. Our packages include high-quality cooking pot sets, non-stick cookware, luxury glassware, steel spoons, dinnerware, and tea sets at special subsidized wedding rates. Visit our Karkhana Bazaar branch to browse the packages!
          </p>
        </article>
      )
    },
    {
      id: 'post-5',
      slug: 'ceramic-vs-porcelain-plates-comparison',
      title: 'Are Ceramic Plates Better Than Porcelain Plates?',
      description: 'A comprehensive side-by-side comparison. Learn the differences in weight, heat retention, firing temperature, and durability.',
      category: 'Materials',
      readTime: '4 min read',
      date: 'June 18, 2026',
      author: 'Material Scientist Desk',
      image: 'https://images.unsplash.com/photo-1535401991746-da3d9055713e?auto=format&fit=crop&q=80&w=800',
      tags: ['Ceramics', 'Porcelain', 'Comparison', 'Dinnerware'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            Many shoppers use the terms "Ceramic" and "Porcelain" interchangeably, but they are actually distinct materials with unique clay compositions, manufacturing processes, and physical attributes.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse border border-border">
              <thead>
                <tr className="bg-bg-secondary font-serif">
                  <th className="p-4 border border-border font-bold">Feature</th>
                  <th className="p-4 border border-border font-bold">Ceramic (Stoneware)</th>
                  <th className="p-4 border border-border font-bold">Porcelain</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border border-border font-bold">Clay Type</td>
                  <td className="p-4 border border-border">Coarser, natural dark clay</td>
                  <td className="p-4 border border-border">Fine, pure white kaolin clay</td>
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold">Firing Temp</td>
                  <td className="p-4 border border-border">Medium-High (1100°C)</td>
                  <td className="p-4 border border-border">Extremely High (1300°C+)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold">Density</td>
                  <td className="p-4 border border-border">Thicker, porous body</td>
                  <td className="p-4 border border-border">Thinner, translucent, ultra-dense</td>
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold">Durability</td>
                  <td className="p-4 border border-border">Very durable but prone to rim chips</td>
                  <td className="p-4 border border-border">Extremely chip-resistant and hard</td>
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold">Appearance</td>
                  <td className="p-4 border border-border">Rustic, natural, thick rims</td>
                  <td className="p-4 border border-border">Elegant, bright white, refined</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">When to Choose Ceramic (Stoneware):</h3>
          <p className="mb-6 leading-relaxed">
            If you love a warm, heavy, rustic farmhouse look with thick walls and textured glazes, ceramic stoneware is perfect. It is excellent for heat retention, keeping your soups and gravies warm throughout the meal.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">When to Choose Porcelain:</h3>
          <p className="mb-6 leading-relaxed">
            If you prefer sophisticated, lightweight, formal dining sets with delicate profiles that can also handle daily dishwasher cycles, porcelain is the absolute winner. Due to being fired at ultra-high temperatures, porcelain is highly vitreous (glass-like), making it completely non-porous and incredibly scratch-resistant.
          </p>
        </article>
      )
    },
    {
      id: 'post-6',
      slug: 'durable-non-chipping-dishes-guide',
      title: 'How to Choose Dishes That Won\'t Chip or Break Easily',
      description: 'Tired of chipped edges? Read this definitive guide to selecting impact-resistant, rolled-rim dinnerware for heavy everyday use.',
      category: 'Quality',
      readTime: '5 min read',
      date: 'June 15, 2026',
      author: 'M. Harun Khokhar',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      tags: ['Durability', 'Kitchen Tips', 'Anti-Chipping'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            Chipped edges are the most common reason families have to replace their dinnerware sets, even if the plates themselves are perfectly clean. It is both a safety hazard (sharp edges can cut fingers) and visually unprofessional. Here is how to pick dishes engineered to fight chipping:
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Look for "Rolled Rims" or "Reinforced Edges"</h3>
          <p className="mb-6 leading-relaxed">
            When inspecting plates, look at the outer border. Cheap plates have sharp, thin tapered edges that crack on the slightest impact with other dishes or the sink. Quality commercial-grade crockery features a slightly thicker, curved <strong>rolled rim</strong>. This shape deflects mechanical shock and distributes the force of impacts, drastically reducing the risk of edge chips.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Prioritize Vitrified or Fully Glazed Footings</h3>
          <p className="mb-6 leading-relaxed">
            Turn the plate over and check the ring on the bottom where it sits on the table (the foot). If this ring is rough, unglazed raw clay, it will scratch the glazed tops of your other plates when you stack them. Ensure the base is either fully glazed or polished completely smooth to avoid micro-scratches that weaken the ceramic body over time.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Tempered Opalware is Your Best Friend</h3>
          <p className="mb-6 leading-relaxed">
            For standard domestic usage, modern <strong>Opalware</strong> (made from tempered glass) is virtually immune to the chipping that plagues standard ceramics. It can drop onto tile floors from low heights and survive without a single scratch.
          </p>
        </article>
      )
    },
    {
      id: 'post-7',
      slug: 'stoneware-vs-ceramic-crockery-difference',
      title: 'What\'s the Difference Between Stoneware and Ceramic Dishes?',
      description: 'Deep dive into firing temperatures, clay density, textures, and practical domestic uses of stoneware vs common ceramics.',
      category: 'Materials',
      readTime: '4 min read',
      date: 'June 12, 2026',
      author: 'Madina Ceramic Expert',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
      tags: ['Stoneware', 'Ceramics', 'Clay Guide'],
      content: (
        <article className="prose max-w-none text-text-primary">
          <p className="mb-6 leading-relaxed">
            While "ceramic" is the broad overarching term for any item made from clay and hardened by heat, <strong>stoneware</strong> is a highly specific, premium category within the ceramic family.
          </p>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">The Broad Spectrum: What is Ceramic?</h3>
          <p className="mb-6 leading-relaxed">
            Ceramics encompass three primary subcategories based on their firing temperatures and clay composition:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-4">
            <li><strong>Earthenware:</strong> Fired at low temperatures (under 1000°C). It is highly porous, thick, budget-friendly, but chips very easily and must be handwashed. Think of traditional terracotta pottery.</li>
            <li><strong>Stoneware:</strong> Fired at medium-high temperatures (1100°C - 1200°C). The clay becomes highly stone-like, dense, and opaque. It is extremely sturdy.</li>
            <li><strong>Porcelain & Bone China:</strong> Fired at ultra-high temperatures (1300°C+), yielding thin, light, vitreous, and translucent tableware.</li>
          </ol>

          <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Why Stoneware is Loved for Daily Home Dining</h3>
          <p className="mb-6 leading-relaxed">
            Stoneware possesses a natural earthy vibe. Because the clay contains diverse natural minerals, the glazes react beautifully inside the kiln, producing organic speckles, variegated colors, and rich matte or satin textures. It is incredibly durable, dishwasher-safe, microwave-safe, and retains heat wonderfully, making it a stellar choice for hot stews, pasta, and baked dishes.
          </p>
        </article>
      )
    }
  ];

  // Load selected post from URL query parameters if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const postSlug = params.get('post');
    if (postSlug) {
      const match = blogPosts.find(p => p.slug === postSlug);
      if (match) {
        setSelectedSlug(postSlug);
      } else {
        setSelectedSlug(null);
      }
    } else {
      setSelectedSlug(null);
    }
  }, [location.search]);

  // Handle setting active post and updating URL
  const selectPost = (slug: string | null) => {
    if (slug) {
      navigate(`?post=${slug}`);
      setSelectedSlug(slug);
    } else {
      navigate('');
      setSelectedSlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const activePost = blogPosts.find(p => p.slug === selectedSlug);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-bg-primary min-h-screen py-24 border-b border-border">
      {/* Blog Schema injection */}
      {activePost && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": activePost.title,
            "description": activePost.description,
            "image": activePost.image,
            "datePublished": "2026-06-24",
            "dateModified": "2026-06-24",
            "author": {
              "@type": "Person",
              "name": activePost.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Madina Crockery Store",
              "logo": {
                "@type": "ImageObject",
                "url": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://madinacrockery.vercel.app/blog?post=${activePost.slug}`
            }
          })}
        </script>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* BLOG LIST VIEW */
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-brand-blue/10">
                  Legacy & Knowledge
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-primary tracking-tight mb-4">
                  Crockery Knowledge Base
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                  Learn how to choose premium dinnerware, wedding jahez packages, and durable materials with tips from Sargodha's oldest expert store.
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 pb-8 border-b border-border">
                {/* Search */}
                <div className="relative w-full md:max-w-sm">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/60" size={18} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-3.5 bg-white border border-border rounded-full text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all font-medium"
                  />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 border ${
                        selectedCategory === cat
                          ? 'bg-accent border-accent text-white shadow-md shadow-accent/10'
                          : 'bg-white border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group bg-white border border-border rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:shadow-text-primary/2 hover:border-brand-blue/35 transition-all flex flex-col h-full"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative bg-bg-secondary">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-6 left-6 px-3.5 py-1.5 bg-white/90 backdrop-blur-md text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest border border-border/40">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow font-medium">
                          {post.description}
                        </p>
                        <button
                          onClick={() => selectPost(post.slug)}
                          className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest group-hover:translate-x-1.5 transition-transform self-start"
                        >
                          Read Article <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white border border-border rounded-[2.5rem]">
                  <p className="text-text-secondary text-lg font-medium">No articles match your search criteria.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-6 px-6 py-3 bg-bg-secondary border border-border text-text-primary rounded-full text-xs font-bold uppercase tracking-widest hover:bg-border transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* DETAILED READING VIEW */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Link */}
              <button
                onClick={() => selectPost(null)}
                className="inline-flex items-center gap-3.5 text-xs font-bold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors mb-12"
              >
                <ArrowLeft size={16} /> Back to all articles
              </button>

              {/* Cover Image */}
              <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-bg-secondary mb-12 border border-border relative">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-6 left-6 px-4 py-2 bg-white text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest border border-border shadow-md">
                  {activePost.category}
                </span>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-xs font-bold text-text-secondary uppercase tracking-widest mb-6">
                <span className="flex items-center gap-2"><Calendar size={14} /> {activePost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {activePost.readTime}</span>
                <span>•</span>
                <span className="flex items-center gap-2"><User size={14} /> By {activePost.author}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary leading-tight tracking-tight mb-8">
                {activePost.title}
              </h1>

              {/* Actions & Sharing */}
              <div className="flex flex-wrap items-center gap-4 justify-between py-6 border-y border-border mb-12">
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-full border border-border">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleShare}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                      copied
                        ? 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue'
                        : 'bg-white border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/40'
                    }`}
                  >
                    <Share2 size={14} /> {copied ? 'Copied Link!' : 'Share'}
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-stone max-w-none mb-16">
                {activePost.content}
              </div>

              {/* WhatsApp Call to Action Card */}
              <div className="bg-bg-secondary border border-border rounded-[2.5rem] p-10 md:p-12 mb-16 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-border shadow-sm text-accent">
                  <Award size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-3">Ready to Upgrade Your Kitchen?</h3>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed text-sm font-medium">
                  At Madina Crockery Store, we bring 75+ years of quality expertise straight to your home. Contact M. Harun Khokhar directly to customize wedding packages or buy steel crockery at genuine wholesale prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/923207000700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-accent/10"
                  >
                    Inquire on WhatsApp
                  </a>
                  <button
                    onClick={() => selectPost(null)}
                    className="px-8 py-4 bg-white hover:bg-bg-secondary border border-border text-text-primary rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    Back to Articles
                  </button>
                </div>
              </div>

              {/* Related/Next Article navigation */}
              <div className="border-t border-border pt-12 flex justify-between items-center">
                <button
                  onClick={() => selectPost(null)}
                  className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors"
                >
                  <ArrowLeft size={14} /> All Articles
                </button>

                {blogPosts.findIndex(p => p.slug === activePost.slug) < blogPosts.length - 1 && (
                  <button
                    onClick={() => selectPost(blogPosts[blogPosts.findIndex(p => p.slug === activePost.slug) + 1].slug)}
                    className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:text-accent/80 transition-colors"
                  >
                    Next Article <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
