import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Clock, User, X } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';
import { BlurredStagger } from '../components/ui/blurred-stagger-text';
import { TextEffect } from '../components/ui/text-effect';
import { FadeText } from '../components/ui/fade-text';
import { GrassWind } from '../components/ui/grass-wind';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

  const posts = [
    {
      title: "Hvorfor UX er vigtigere end nogensinde i 2026",
      excerpt: "Vi dykker ned i de nyeste trends inden for brugeroplevelse og hvordan de påvirker din konvertering, dit brand og din evne til at fastholde kunder i en ekstremt uforudsigelig digital verden.",
      content: "Brugeroplevelse (UX) er ikke blot en luksus; det er fuldstændig afgørende for moderne forretningsdrift. I en verden, hvor opmærksomhedsspændet bliver kortere, og konkurrencen hårdere, er det de brands, der formår at fjerne friktion, som vinder.\n\nI 2026 handler det ikke længere kun om flotte farver og dynamiske knapper, men om holistiske digitale oplevelser, der understøtter kundens rejse fra start til slut. Hos Bison ser vi en massiv stigning i konverteringsrater hos de virksomheder, der investerer dedikeret i god UX struktur. Det kræver dog, at man forstår den moderne psykologi, der dikterer, at en bruger lynhurtigt zoner ud, hvis en landing page loader sløvt, eller flowet er uoverskueligt.\n\nFokuser på mikroskopiske forbedringer: En knap, der interagerer bedre, eller et layout der reducerer visuel støj. Disse ting skaber samlet set et afkast, som marketingbudgettet til enhver tid vil elske dig for.\n\nUanset hvilken branche du befinder dig i, peger al data på, at en bruger lynhurtigt forbinder det digitale design med kvaliteten af din egentlige service. En rodet hjemmeside opfattes som en rodet forretning. Derfor starter moderne vækst i maskinrummet, ved koden, før den rammer marketing-kanalerne.",
      date: "12. Marts, 2026",
      author: "Sofia Little",
      readTime: "5 min",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      category: "Design"
    },
    {
      title: "5 tips til at optimere din webshop til mobil",
      excerpt: "Over 70% af dine kunder handler fra mobilen nu til dags. Er din digitale shop og kunderejse fuldstændigt klar til at gribe og fastholde dem?",
      content: "Flere tal og analyser viser gang på gang: Den store vækst sker udelukkende på mobil shopping. Hvis din e-commerce forretning stadig primært er designet til det vante desktop-look, smider du dagligt seriøs omsætning ud ad vinduet.\n\nHer er fem tips til at ramme mobilmålgruppen klokkerent:\n\n1. Reducer billede-filstørrelser massivt. Mobiler kører tit på plettede netværksforbindelser.\n2. Design til tommelfingeren: Det hedder 'Thumb-zone design', og alle vigtige knapper (særligt køb) skal sidde nede i bunden.\n3. Apple Pay og MobilePay ER et krav. Vi gider ikke finde vores kort frem, når vi ligger på sofaen.\n4. Hold menuerne simple. Du behøver ikke skjule alt i en dropdown, men prioriter en lynhurtig 'søg'-funktion i toppen.\n5. Overvej Micro-animationer, når varer lægges i kurven, så brugeren kan mærke en visuel bekræftelse.",
      date: "8. Marts, 2026",
      author: "James Cohen",
      readTime: "8 min",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000",
      category: "E-commerce"
    },
    {
      title: "Fra følger til kunde: Den ultimative guide",
      excerpt: "Hvordan du bruger sociale medier til at drive kvalificeret og engageret trafik direkte til din digitale kasse uden at brænde budgettet.",
      content: "Problemet med sociale media-følgere i dag er, at de scroller hurtigere end nogensinde. De ser dit brand og liker dit post, men du tjener ingen penge på likes. Så hvordan flytter man dem logisk over i ens webshop, og endnu vigtigere, hvordan lukkes ordren?\n\nStrategier du bør bygge din marketing efter:\n\nHooks, Hooks, Hooks! De første to sekunder af dit videocontent er ubeskriveligt vitale.\nLanding-pages dedikeret til SoMe målgruppen. Led aldrig folk fra Instagram direkte ind på en rodet, tæt-pakket forside.\nFortæl en historie snarere end at skabe en uendelig 'sælg sælg sælg'-attitude på profilen. Folk investerer meget lettere i virksomheder, de føler de kender og stoler på.\n\nVær bevidst om the 'Post-click experience', dvs. sekundet de rent faktisk lander på dit site og skal skifte miljø fra app til en browser-rejse.",
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
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(59, 45, 40, 0.15);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 45, 40, 0.3);
        }
      `}</style>

      {/* Blog Modal Popup */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              className="custom-scrollbar w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/70 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-20"
              >
                <X size={24} className="text-bison-dark" />
              </button>
                
                <div className="aspect-[21/9] md:aspect-[25/9] w-full relative shrink-0">
                  <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-bison-dark/20" />
                  <div className="absolute bottom-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                    {selectedPost.category}
                  </div>
                </div>

              <div className="p-8 md:p-16">
                <div className="flex items-center gap-6 text-sm font-bold text-bison-dark/40 uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-2"><User size={16} /> {selectedPost.author}</span>
                  <span className="flex items-center gap-2"><Clock size={16} /> {selectedPost.readTime}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter mb-10 leading-[0.9]">
                  {selectedPost.title}
                </h2>
                <div className="prose prose-lg max-w-none text-bison-dark/70">
                  <p className="whitespace-pre-line leading-relaxed font-medium text-lg md:text-xl">
                    {selectedPost.content}
                  </p>
                </div>
                
                <div className="mt-16 pt-16 border-t border-bison-dark/10 flex justify-center">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="px-10 py-5 rounded-full bg-bison-dark text-white font-bold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex items-center gap-3"
                  >
                    Luk artiklen <X size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6 overflow-hidden">
              <FadeText
                direction="up"
                text="Vores Tanker"
                className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60"
                framerProps={{ show: { transition: { delay: 0.8 } } }}
              />
            </div>
            <BlurredStagger 
              text="Bison Insights" 
              className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-none mb-8"
              delay={0.8}
            />
            <TextEffect
              per="word"
              preset="fade"
              delay={0.8}
              className="text-xl text-bison-dark/60 max-w-2xl mx-auto leading-relaxed"
            >
              Vi deler vores viden om design, teknologi og vækst for at hjælpe dig med at blive klogere på den digitale verden.
            </TextEffect>
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
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-bison-dark/40 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-4 group-hover:text-bison-brown transition-colors leading-tight line-clamp-2 min-h-[3rem]">
                  {post.title}
                </h3>
                
                {/* 3 lines precisely, visually locked height */}
                <p className="text-bison-dark/60 leading-relaxed mb-6 line-clamp-3 h-[4.875rem] overflow-hidden">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-bison-dark/5 flex items-center justify-between font-bold text-bison-dark group-hover:text-bison-brown transition-colors">
                  Læs artiklen 
                  <div className="w-10 h-10 rounded-full bg-bison-dark/5 flex items-center justify-center group-hover:bg-bison-brown/10 transition-colors">
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto backdrop-blur-[40px] bg-white/40 bg-gradient-to-br from-white/60 to-white/20 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
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
          {/* Animated diffuse rainbow border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="snake-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-bison-pink)" />
                <stop offset="25%" stopColor="var(--color-bison-pink)" />
                <stop offset="25%" stopColor="var(--color-bison-blue)" />
                <stop offset="50%" stopColor="var(--color-bison-blue)" />
                <stop offset="50%" stopColor="var(--color-bison-brown)" />
                <stop offset="75%" stopColor="var(--color-bison-brown)" />
                <stop offset="75%" stopColor="var(--color-bison-green)" />
                <stop offset="100%" stopColor="var(--color-bison-green)" />
              </linearGradient>
            </defs>
            <motion.rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              rx="46"
              ry="46"
              fill="none"
              stroke="url(#snake-gradient)"
              strokeWidth="8"
              pathLength="100"
              strokeDasharray="30 70"
              filter="url(#soft-glow)"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </section>

      {/* Grass Animation separating footer */}
      <div className="pt-16 md:pt-24">
        <GrassWind />
      </div>
    </main>
  );
};

export default Blog;
