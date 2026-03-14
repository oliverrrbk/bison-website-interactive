import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  PenTool,
  Code,
  LineChart,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Meteors } from '../components/ui/meteors';

const StripeDecorator = ({ vertical = false, className = "" }) => (
  <div className={`${vertical ? 'bison-stripes-vertical w-1.5 h-full' : 'bison-stripes h-1.5 w-full'} ${className}`} />
);

const Hero = () => {
  return (
    <section
      className="relative min-h-[110vh] flex items-center pt-32 pb-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 20%)',
          WebkitClipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 20%)'
        }}
      >
        <Meteors number={40} />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 font-display uppercase text-white drop-shadow-lg">
            Den Ultimative <br />
            <span className="italic font-serif normal-case font-medium text-bison-pink drop-shadow-md">UX Oplevelse</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-md">
            Vi kombinerer strategi, design og teknologi for at skabe hjemmesider, der ikke bare ser godt ud, men konverterer dine besøgende til loyale kunder.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 4 // Hops every 4 seconds
            }}
          >
            <Link to="/book-et-opkald" className="relative overflow-hidden bg-white text-bison-dark px-10 py-5 rounded-full text-lg font-bold flex items-center gap-2 transition-all group cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]">
              <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Kom i gang <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-bison-blue/20 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "UX Design",
      desc: "Vi designer brugeroplevelser, der føles naturlige og intuitive.",
      color: "bg-bison-blue/20",
      icon: <PenTool className="text-[#0284c7] drop-shadow-sm" size={28} />
    },
    {
      title: "Webudvikling",
      desc: "Lynhurtige og responsive hjemmesider bygget med den nyeste teknologi.",
      color: "bg-bison-pink/20",
      icon: <Code className="text-[#db2777] drop-shadow-sm" size={28} />
    },
    {
      title: "Digital Strategi",
      desc: "Vi lægger planen for din vækst og sikrer at du når dine mål.",
      color: "bg-bison-green/20",
      icon: <LineChart className="text-[#4d7c0f] drop-shadow-sm" size={28} />
    }
  ];

  return (
    <section id="services" className="pt-32 pb-32 bg-white relative z-20 -mt-20">
      <div className="absolute top-0 left-0 w-full h-2 bison-stripes" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-display uppercase">Hvordan vi hjælper dig med at <span className="italic font-serif normal-case font-medium text-bison-brown">vokse</span></h2>
          <p className="text-lg text-bison-dark/60">Vores proces er skræddersyet til at skabe resultater, der kan mærkes på bundlinjen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`${s.color} p-10 rounded-3xl border border-bison-dark/5 flex flex-col gap-6 transition-colors duration-300`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight">{s.title}</h3>
              <p className="text-bison-dark/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => (
  <section className="py-32 bg-bison-bg relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-12 md:p-20 rounded-3xl shadow-xl relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-bison-dark rounded-2xl flex items-center justify-center shadow-lg rotate-3">
          <Quote className="text-white" size={40} />
        </div>

        <div className="mb-10">
          <div className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60 mb-4">Vores Mission</div>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-tight">
            Vi forvandler digitalt kaos til <span className="italic font-serif normal-case font-medium text-bison-brown">konstant</span> vækst
          </h2>
        </div>

        <div className="space-y-6 text-lg text-bison-dark/70 leading-relaxed">
          <p>Vi arbejder med brands, der er klar til at tage deres digitale tilstedeværelse seriøst.</p>
          <p>Ikke bare for at have en hjemmeside, men for at opbygge noget, der rent faktisk skaber værdi og engagement.</p>
          <p>For os er design kun begyndelsen. Vores tilgang kombinerer strategi, eksekvering og konsistens. Vi håndterer planlægning, design og teknisk vedligeholdelse, så du kan fokusere på at drive din forretning.</p>
          <p className="font-bold text-bison-dark">Hvis du er klar til at vokse med intention, vil vi elske at hjælpe.</p>
        </div>

        <div className="mt-12 pt-12 border-t border-bison-dark/5 flex items-center gap-4">
          <div className="w-12 h-12 bg-bison-dark rounded-full overflow-hidden">
            <img src="https://picsum.photos/seed/oliver/100/100" alt="Oliver Rørbæk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <p className="font-black font-display uppercase text-sm text-bison-dark">Oliver Rørbæk</p>
            <p className="text-xs text-bison-dark/40 font-bold uppercase tracking-widest">Adm. Direktør, Bison Company</p>
          </div>
        </div>
      </motion.div>
    </div>

    <StripeDecorator className="absolute left-0 top-1/4 w-32 h-2 opacity-20" />
    <StripeDecorator className="absolute right-0 top-3/4 w-48 h-2 opacity-20" />
  </section>
);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Mission />

      {/* Case Preview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter font-display uppercase">Udvalgte <span className="italic font-serif normal-case font-medium text-bison-brown">cases</span></h2>
            <Link to="/cases" className="text-lg font-bold text-bison-dark hover:text-bison-brown flex items-center gap-2 transition-colors">
              Se alle cases <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Glowhaus", category: "E-commerce & UX", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" },
              { title: "Theo Apparel", category: "Brand Identity", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" }
            ].map((caseItem, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -10 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                  <img src={caseItem.img} alt={caseItem.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-bison-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <ArrowRight className="text-bison-dark" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black font-display uppercase">{caseItem.title}</h3>
                <p className="text-bison-dark/40 font-bold uppercase tracking-widest text-xs mt-2">{caseItem.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-bison-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-white leading-[0.9] mb-10">
              Klar til at starte din <br />
              <span className="italic font-serif normal-case font-medium text-bison-blue">digitale rejse?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-12">
              Book et gratis 30-minutters strategimøde, og lad os vise dig, hvordan vi kan løfte din forretning.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/book-et-opkald" className="relative group overflow-hidden bg-white text-bison-dark px-12 py-5 rounded-full text-xl font-black uppercase tracking-tight shadow-2xl transition-all duration-300 flex items-center justify-center">
                <span className="relative z-10 transition-colors group-hover:text-white duration-300">Book dit møde nu</span>
                <div className="absolute inset-0 bg-bison-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
            </motion.div>          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="bison-stripes w-full h-full rotate-45 scale-150" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
