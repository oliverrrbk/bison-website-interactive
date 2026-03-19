import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, MessageSquare, ArrowRight } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';

const BookCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32">
      <PageSkyHeader />
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Mission & Features */}
            <div className="relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60 mb-6"
              >
                Book et opkald
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-[0.9] mb-4 text-bison-dark"
              >
                Lad os tale om din <br />
                <span className="italic font-serif normal-case font-medium text-bison-brown pt-2 inline-block">vækst</span>
              </motion.h1>
              
              {/* Expanding text section pushing items physically down */}
              <motion.div
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-xl text-bison-dark/60 max-w-md leading-relaxed mt-4 mb-12">
                  Vælg et tidspunkt der passer dig, så tager vi en uforpligtende snak om dine mål og hvordan vi kan hjælpe dig med at nå dem.
                </p>
              </motion.div>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <Calendar className="text-bison-green" />, title: "Gratis Strategisession", desc: "30 minutters fokuseret rådgivning." },
                  { icon: <Video className="text-bison-pink" />, title: "Online Møde", desc: "Vi mødes via Google Meet eller Zoom." },
                  { icon: <MessageSquare className="text-bison-blue" />, title: "Ingen Binding", desc: "Bare en god snak om dine muligheder." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 2.0 + (i * 0.15), duration: 0.5, ease: "easeOut" }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-bison-dark/5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black font-display uppercase tracking-tight">{item.title}</h3>
                      <p className="text-bison-dark/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-bison-bg rounded-3xl border border-bison-dark/5">
                <h3 className="text-xl font-black font-display uppercase mb-4 tracking-tight">Hvad sker der nu?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-bison-dark/60 items-start">
                    <ArrowRight size={18} className="text-bison-brown shrink-0 mt-0.5" />
                    Du vælger et tidspunkt der passer dig i kalenderen.
                  </li>
                  <li className="flex gap-3 text-sm text-bison-dark/60 items-start">
                    <ArrowRight size={18} className="text-bison-brown shrink-0 mt-0.5" />
                    Du modtager en bekræftelse og et link til mødet.
                  </li>
                  <li className="flex gap-3 text-sm text-bison-dark/60 items-start">
                    <ArrowRight size={18} className="text-bison-brown shrink-0 mt-0.5" />
                    Vi tager en snak om dine mål og lægger en plan.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 relative w-full z-10">
              <div className="relative w-full">
                {/* Main Calendar Widget */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="bg-white rounded-[3rem] shadow-2xl relative z-10 w-full overflow-hidden border border-bison-dark/5 min-h-[500px] flex flex-col"
                >
                  <div className="p-8 bg-bison-dark text-white text-center">
                    <h2 className="text-2xl font-black font-display uppercase tracking-tight">Vælg tidspunkt</h2>
                    <div className="flex justify-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-bison-green" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Ledige tider i dag</span>
                    </div>
                  </div>

                  <div className="flex-1 p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-bison-bg rounded-full flex items-center justify-center mb-6">
                      <Clock className="text-bison-dark/20" size={40} />
                    </div>
                    <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-4 text-bison-dark">Booking Widget</h3>
                    <p className="text-bison-dark/40 max-w-xs mb-8">Her ville din Calendly eller lignende booking-widget blive indlejret.</p>
                    <div className="w-full space-y-4">
                      <div className="h-12 bg-bison-bg rounded-xl animate-pulse" />
                      <div className="h-12 bg-bison-bg rounded-xl animate-pulse" />
                    </div>
                  </div>

                  <div className="p-6 bg-bison-bg border-t border-bison-dark/5 text-center">
                    <p className="text-xs font-bold text-bison-dark/40 uppercase tracking-widest">Sikkert & Fortroligt</p>
                  </div>
                </motion.div>

                {/* The 3 Floating Ovals - The Team */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
                  <motion.div 
                    initial={{ opacity: 0, x: -50, rotate: -15 }}
                    animate={{ opacity: 1, x: 0, rotate: 6 }}
                    transition={{ delay: 2.2, type: "spring", bounce: 0.4, stiffness: 60 }}
                    style={{ borderRadius: "45% 55% 42% 58% / 55% 45% 58% 42%" }}
                    className="absolute top-[5%] -right-12 md:-right-24 lg:-right-36 w-32 h-44 md:w-40 md:h-56 shadow-2xl overflow-hidden"
                  >
                    <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover scale-105" alt="Oliver" referrerPolicy="no-referrer" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -50, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: -4 }}
                    transition={{ delay: 2.4, type: "spring", bounce: 0.4, stiffness: 60 }}
                    style={{ borderRadius: "55% 45% 60% 40% / 40% 60% 45% 55%" }}
                    className="absolute top-[35%] -right-16 md:-right-32 lg:-right-44 w-32 h-44 md:w-40 md:h-56 shadow-2xl overflow-hidden"
                  >
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover scale-105" alt="Emil" referrerPolicy="no-referrer" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -50, rotate: -20 }}
                    animate={{ opacity: 1, x: 0, rotate: 10 }}
                    transition={{ delay: 2.6, type: "spring", bounce: 0.4, stiffness: 60 }}
                    style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%" }}
                    className="absolute top-[65%] -right-8 md:-right-20 lg:-right-28 w-32 h-44 md:w-40 md:h-56 shadow-2xl overflow-hidden"
                  >
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover scale-105" alt="Mathias" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>

              {/* Passer tiderne ikke (Bottom Section of Right Column) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-bison-blue/10 p-10 rounded-[2.5rem] border border-bison-blue/20"
              >
                <h3 className="text-xl font-black font-display uppercase mb-4 tracking-tight">Passer tiderne ikke?</h3>
                <p className="text-sm text-bison-dark/60 mb-6">Send os en direkte besked, så finder vi et tidspunkt der fungerer for dig.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <a href="mailto:or@bisoncompany.dk" className="inline-block bg-bison-dark text-white px-8 py-3 rounded-full font-bold text-sm shadow-md transition-shadow hover:shadow-lg">
                    Send en mail
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookCall;
