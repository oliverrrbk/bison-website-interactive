import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: "Hvorfor UX er vigtigere end nogensinde i 2026",
      excerpt: "Vi dykker ned i de nyeste trends inden for brugeroplevelse og hvordan de påvirker din konvertering.",
      date: "12. Marts, 2026",
      author: "Sofia Little",
      readTime: "5 min",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1000",
      category: "Design"
    },
    {
      title: "5 tips til at optimere din webshop til mobil",
      excerpt: "Over 70% af dine kunder handler fra mobilen. Er din shop klar til dem?",
      date: "8. Marts, 2026",
      author: "James Cohen",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000",
      category: "E-commerce"
    },
    {
      title: "Fra følger til kunde: Den ultimative guide",
      excerpt: "Hvordan du bruger sociale medier til at drive trafik direkte til din kasse.",
      date: "1. Marts, 2026",
      author: "Maya Rodriguez",
      readTime: "12 min",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
      category: "Strategi"
    }
  ];

  return (
    <main className="pt-32">
      <PageSkyHeader />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60 mb-6"
            >
              Vores Tanker
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-none mb-8"
            >
              Bison <span className="italic font-serif normal-case font-medium text-bison-brown">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-bison-dark/60 max-w-2xl mx-auto leading-relaxed"
            >
              Vi deler vores viden om design, teknologi og vækst for at hjælpe dig med at blive klogere på den digitale verden.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-bison-dark/40 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-4 group-hover:text-bison-brown transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-bison-dark/60 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-bold text-bison-dark group-hover:gap-4 transition-all">
                  Læs mere <ArrowRight size={18} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-bison-blue/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter mb-6">Få de nyeste insights direkte i din indbakke</h2>
          <p className="text-lg text-bison-dark/60 mb-10 max-w-xl mx-auto">Vi sender kun guld. Ingen spam, kun viden der hjælper din forretning med at vokse.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Din e-mail adresse"
              className="flex-1 bg-white border-none px-6 py-4 rounded-full text-bison-dark focus:ring-2 focus:ring-bison-brown outline-none font-bold"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bison-dark text-white px-8 py-4 rounded-full font-bold shadow-lg transition-shadow hover:shadow-xl"
            >
              Tilmeld
            </motion.button>
          </form>
          <div className="absolute top-0 left-0 w-full h-1.5 bison-stripes" />
        </div>
      </section>
    </main>
  );
};

export default Blog;
