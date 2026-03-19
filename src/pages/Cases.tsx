import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { FadeText } from '../components/ui/fade-text';
import { GrassWind } from '../components/ui/grass-wind';

const Cases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      title: "Glowhaus",
      category: "E-commerce & UX",
      desc: "En komplet re-design af deres webshop, der resulterede i en 45% stigning i konverteringsraten.",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      stats: ["+45% Konvertering", "2.1s Load time"]
    },
    {
      title: "Theo Apparel",
      category: "Brand Identity",
      desc: "Vi skabte en visuel identitet og en high-end portfolio side for dette moderne tøjmærke.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      stats: ["10k+ Følgere", "Mobile First"]
    },
    {
      title: "Nordic Tech",
      category: "SaaS Platform",
      desc: "Udvikling af en kompleks dashboard-løsning med fokus på datavisualisering og brugervenlighed.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      stats: ["Enterprise Ready", "React/Next.js"]
    },
    {
      title: "Lumina Wellness",
      category: "Service Design",
      desc: "Booking-system og brand-univers for en af landets førende wellness-kæder.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000",
      stats: ["Automatiseret booking", "Brand Story"]
    }
  ];

  return (
    <main className="pt-32">
      <PageSkyHeader />
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 overflow-hidden">
            <FadeText
              direction="up"
              text="Vores Arbejde"
              className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60"
              framerProps={{ show: { transition: { delay: 1.6 } } }}
            />
          </div>
          <WordFadeIn 
            words="Udvalgte cases" 
            className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-none mb-12 text-bison-dark text-left md:text-left drop-shadow-none"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i: number) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.15 + 0.8 }, // Delay offset for the sky curtain
              }),
            }}
          />

          <div className="grid md:grid-cols-2 gap-16">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-8 relative shadow-xl">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-bison-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-bison-dark px-8 py-3 rounded-full font-bold flex items-center gap-2">
                      Se case <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black font-display uppercase tracking-tight">{c.title}</h3>
                    <p className="text-bison-dark/40 font-bold uppercase tracking-widest text-xs mt-1">{c.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {c.stats.map((s, si) => (
                      <span key={si} className="text-[10px] font-black uppercase tracking-tighter bg-bison-green px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-bison-dark/60 leading-relaxed max-w-xl">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grass Animation separating footer */}
      <div className="pt-24 md:pt-48">
        <GrassWind />
      </div>
    </main>
  );
};

export default Cases;
