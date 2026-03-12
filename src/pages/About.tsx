import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Target, Zap, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: <Target className="text-bison-brown" />, title: "Resultatorienteret", desc: "Vi måler vores succes på dine resultater. Ingen varm luft, kun data og vækst." },
    { icon: <Zap className="text-bison-brown" />, title: "Innovation", desc: "Vi bruger de nyeste teknologier for at sikre, at din løsning er fremtidssikret." },
    { icon: <Heart className="text-bison-brown" />, title: "Passion", desc: "Vi elsker det vi laver, og det afspejler sig i hver eneste pixel vi flytter." },
    { icon: <Users className="text-bison-brown" />, title: "Samarbejde", desc: "Vi ser os selv som en forlængelse af dit team, ikke bare en leverandør." }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60 mb-6"
          >
            Om Bison Company
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-none mb-8"
          >
            Vi bygger fremtidens <br />
            <span className="italic font-serif normal-case font-medium text-bison-brown">digitale oplevelser</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-bison-dark/60 max-w-2xl mx-auto leading-relaxed"
          >
            Bison Company startede med en simpel vision: At gøre high-end digitalt design tilgængeligt for ambitiøse virksomheder, der tør skille sig ud.
          </motion.p>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Vores team i arbejde"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-bison-dark/20" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-tight mb-8">
                Vores værdier er <br />
                <span className="italic font-serif normal-case font-medium text-bison-brown">vores fundament</span>
              </h2>
              <p className="text-lg text-bison-dark/60 mb-10 leading-relaxed">
                Vi tror på ærlighed, gennemsigtighed og hårdt arbejde. Når du vælger Bison Company, får du en partner, der er lige så investeret i din succes, som du selv er.
              </p>
              <div className="bison-stripes w-24 h-2 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-8 bg-bison-bg rounded-3xl border border-bison-dark/5 cursor-pointer transition-colors duration-300"
                >
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="text-xl font-black font-display uppercase mb-2 tracking-tight">{v.title}</h3>
                  <p className="text-sm text-bison-dark/60 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-bison-dark text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Projekter", val: "150+" },
            { label: "Kunder", val: "80+" },
            { label: "Kaffekopper", val: "12k" },
            { label: "Awards", val: "12" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-2">{s.val}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
