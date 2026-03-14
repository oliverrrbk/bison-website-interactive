import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';

const BookCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32">
      <PageSkyHeader />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60 mb-6"
              >
                Book et opkald
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-[0.9] mb-8"
              >
                Lad os tale om din <br />
                <span className="italic font-serif normal-case font-medium text-bison-brown">vækst</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-bison-dark/60 max-w-md leading-relaxed mb-12"
              >
                Vælg et tidspunkt der passer dig, så tager vi en uforpligtende snak om dine mål og hvordan vi kan hjælpe dig med at nå dem.
              </motion.p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <Calendar className="text-bison-brown" />, title: "Gratis Strategisession", desc: "30 minutters fokuseret rådgivning." },
                  { icon: <Video className="text-bison-brown" />, title: "Online Møde", desc: "Vi mødes via Google Meet eller Zoom." },
                  { icon: <MessageSquare className="text-bison-brown" />, title: "Ingen Binding", desc: "Bare en god snak om dine muligheder." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
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
                <ol className="space-y-4">
                  <li className="flex gap-3 text-sm text-bison-dark/60">
                    <span className="w-6 h-6 bg-bison-dark text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                    Du vælger et tidspunkt der passer dig i kalenderen.
                  </li>
                  <li className="flex gap-3 text-sm text-bison-dark/60">
                    <span className="w-6 h-6 bg-bison-dark text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                    Du modtager en bekræftelse og et link til mødet.
                  </li>
                  <li className="flex gap-3 text-sm text-bison-dark/60">
                    <span className="w-6 h-6 bg-bison-dark text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                    Vi tager en snak om dine mål og lægger en plan.
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-bison-dark/5 min-h-[500px] flex flex-col"
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
