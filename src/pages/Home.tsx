import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  PenTool,
  Code,
  LineChart,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Meteors } from '../components/ui/meteors';
import { ModernPricingPage, PricingCardProps } from '../components/ui/animated-glassy-pricing';
import { ContainerScroll } from '../components/ui/container-scroll-animation';

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
          maskImage: 'linear-gradient(195deg, black 35%, transparent 44%)',
          WebkitMaskImage: 'linear-gradient(195deg, black 35%, transparent 44%)'
        }}
      >
        <Meteors number={28} />
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
      color: "bg-bison-blue/10 backdrop-blur-xl border-white/50",
      cloudColor: "bg-[#0284c7]",
      icon: <PenTool className="text-[#0284c7] drop-shadow-sm relative z-10" size={28} />
    },
    {
      title: "Webudvikling",
      desc: "Lynhurtige og responsive hjemmesider bygget med den nyeste teknologi.",
      color: "bg-bison-pink/10 backdrop-blur-xl border-white/50",
      cloudColor: "bg-[#db2777]",
      icon: <Code className="text-[#db2777] drop-shadow-sm relative z-10" size={28} />
    },
    {
      title: "Digital Strategi",
      desc: "Vi lægger planen for din vækst og sikrer at du når dine mål.",
      color: "bg-bison-green/10 backdrop-blur-xl border-white/50",
      cloudColor: "bg-[#4d7c0f]",
      icon: <LineChart className="text-[#4d7c0f] drop-shadow-sm relative z-10" size={28} />
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
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative isolate"
            >
              {/* Fuzzy svævende skyer UDENOM kortet */}
              <div className="absolute -inset-8 pointer-events-none opacity-40 z-[-1] transition-opacity duration-500 group-hover:opacity-70">
                <div className={`absolute top-[-10%] left-[-15%] w-[80%] h-[80%] rounded-full blur-[40px] ${s.cloudColor} animate-cloud-1 group-hover:[animation-play-state:paused]`} />
                <div className={`absolute bottom-[-10%] right-[-15%] w-[90%] h-[90%] rounded-full blur-[50px] ${s.cloudColor} animate-cloud-2 group-hover:[animation-play-state:paused]`} />
              </div>

              {/* Selve kortkroppen, der hviler 'på' skyerne */}
              <div className={`h-full ${s.color} p-10 rounded-3xl border flex flex-col gap-6 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]`}>
                <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg relative z-10">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight relative z-10">{s.title}</h3>
                <p className="text-bison-dark/60 leading-relaxed relative z-10">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 80%", "end start"]
  });
  
  // Parallax bevægelse fra -15% til 15% af vinduets bredde (starter venstre, slutter højre)
  const xScroll = useTransform(scrollYProgress, [0, 1], ["-15vw", "15vw"]);

  return (
    <section ref={scrollRef} className="py-32 bg-bison-bg relative overflow-hidden">
      {/* Togskinner: To tværgående linjer der agerer spor */}
      <StripeDecorator className="absolute left-0 top-[20%] w-full h-2 opacity-20" />
      <StripeDecorator className="absolute left-0 bottom-[20%] w-full h-2 opacity-20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full overflow-visible">
        <motion.div
          style={{ x: xScroll }}
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
  </section>
  );
};

const myPricingPlans: PricingCardProps[] = [
  { 
    planName: 'Basic', 
    description: 'Perfekt til mindre projekter eller selvstændige.', 
    price: '4.900', 
    features: ['Skræddersyet design', 'Lynhurtig performance', 'Mobiloptimeret', 'Grundlæggende SEO', 'Kontaktformular', '1 times træning'], 
    buttonText: 'Kom i gang', 
    buttonVariant: 'secondary',
    themeColor: 'green'
  },
  { 
    planName: 'Pro', 
    description: 'For virksomheder med ambitioner om bæredygtig vækst.', 
    price: '12.500', 
    features: ['Alt i Basic plan', 'Ubegrænset brugerdefinering', 'Integreret blog', 'Premium animationer', 'Udvidet SEO', 'Månedlig vedligehold'], 
    buttonText: 'Vælg Pro', 
    isPopular: true, 
    buttonVariant: 'primary',
    themeColor: 'pink'
  },
  { 
    planName: 'Enterprise', 
    description: 'Fuldautomatiseret og skalerbar løsning til de største.', 
    price: '35.000', 
    features: ['Alt i Pro plan', 'E-commerce platform', 'Komplekse integrationer', 'A/B Test muligheder', '24/7 Premium support', 'Fuld ejerskab af kode'], 
    buttonText: 'Kontakt os', 
    buttonVariant: 'primary',
    themeColor: 'blue'
  },
];

const StepItem = ({ step, title1, title2, desc, align, bgColor, textColor }) => {
  return (
    <motion.div
      initial="inactive"
      whileInView="active"
      viewport={{ once: false, margin: "-35% 0px -35% 0px" }}
      variants={{
        inactive: { opacity: 0.15, y: 30, scale: 0.95 },
        active: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex w-full ${align === 'left' ? 'justify-start' : 'justify-end'} relative`}
    >
       <div className={`w-full md:w-[45%] flex flex-col items-start ${align === 'right' ? 'md:pl-16 md:pr-4' : 'md:pr-16 md:pl-4'}`}>
         <div className="mb-6">
           <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest shadow-[0_2px_10px_rgba(0,0,0,0.05)]" style={{ backgroundColor: bgColor, color: textColor }}>
             Step {step}
           </span>
         </div>
         <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-[#1b1b1b]">
           <span className="italic font-serif normal-case font-medium">{title1}</span>{title2}
         </h3>
         <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed max-w-[400px]">
           {desc}
         </p>
       </div>
    </motion.div>
  )
}

const SmoothLiftoff = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the middle section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="bg-[#FAF9F6] relative border-t border-black/5 overflow-hidden" id="smooth-liftoff">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-40 z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl tracking-tight mb-6 text-[#1b1b1b]"
          >
            A smooth liftoff into <span className="italic font-serif normal-case font-medium text-bison-brown">Air.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-[21px] text-black/60 font-medium leading-relaxed"
          >
            Enjoy hands-on support from experts in creative operations, file digitization, systemization, and streamlining.
          </motion.p>
        </div>

        {/* Workflow steps */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-12">
          {/* subtle background track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-black/5 hidden md:block" />
          
          {/* scroll-revealed brightly colored gradient track */}
          <motion.div 
            className="absolute left-1/2 w-[4px] -translate-x-1/2 hidden md:block rounded-full"
            style={{ 
              backgroundImage: useMotionTemplate`linear-gradient(to bottom, ${useTransform(
                scrollYProgress,
                [0, 0.35, 0.55, 0.75, 0.95, 1],
                ["#b2d08d", "#b2d08d", "#e5aad8", "#e5aad8", "#1095ed", "#1095ed"]
              )}, ${useTransform(
                scrollYProgress,
                [0, 0.15, 0.45, 0.65, 0.85, 1],
                ["#b2d08d", "#e5aad8", "#e5aad8", "#1095ed", "#1095ed", "#1095ed"]
              )})`,
              top: useMotionTemplate`calc(${useTransform(scrollYProgress, [0, 1], [0, 100])}% - ${useTransform(scrollYProgress, [0, 1], [0, 350])}px)`,
              height: '350px',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)'
            }}
          />
          
          <div className="flex flex-col gap-32 md:gap-40 lg:gap-48 relative z-10 md:py-24">
            <StepItem 
              step="01" 
              title1="Book " title2="a demo" 
              desc="Get a personalized walkthrough from a real human, tailored to your team’s bespoke needs."
              align="left"
              bgColor="#b2d08d"
              textColor="#000"
            />
            <StepItem 
              step="02" 
              title1="Move " title2="your content" 
              desc="Get in-person support moving your content from legacy systems—metadata, rights, and version history preserved."
              align="right"
              bgColor="#e5aad8"
              textColor="#000"
            />
            <StepItem 
              step="03" 
              title1="Take " title2="flight" 
              desc="Get ongoing guidance from a dedicated expert to structure and scale your workflow through best practices."
              align="left"
              bgColor="#1095ed"
              textColor="#fff"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center max-w-3xl mx-auto mt-40 z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl tracking-tight mb-8 text-[#1b1b1b]"
          >
            We're here to <span className="italic font-serif normal-case font-semibold">help</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed mb-12"
          >
            Our team will collect your legacy storage—from physical hard drives and film reels to digital cloud archives and outdated systems—and transforms it with AI, making everything searchable from one place in seconds.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/demo" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/20 text-[#1b1b1b] font-medium text-lg hover:border-black transition-all duration-300">
              Get started with Enterprise
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const cases = [
    "/case4.png",
    "/case3.png",
    "/case2.png",
    "/case1.png"
  ];

  const nextCase = () => setActiveCaseIndex((prev) => (prev + 1) % cases.length);
  const prevCase = () => setActiveCaseIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <main>
      <Hero />
      <Services />
      <Mission />

      {/* Case Preview Section via Container Scroll Animation */}
      <section className="bg-white overflow-hidden relative z-20">
        <div className="flex flex-col overflow-hidden py-4 md:py-6">
          <ContainerScroll
            titleComponent={
              <div className="text-center drop-shadow-sm">
                <h2 className="text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter font-display uppercase text-bison-dark whitespace-nowrap">
                  Udvalgte <span className="italic font-serif normal-case text-bison-brown">cases</span>
                </h2>
              </div>
            }
            leftArrow={
              <button 
                onClick={prevCase}
                className="w-16 h-16 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-bison-dark/5 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform text-bison-dark hover:text-bison-brown z-50 cursor-pointer"
              >
                <ChevronLeft size={32} strokeWidth={2.5} />
              </button>
            }
            rightArrow={
              <button 
                onClick={nextCase}
                className="w-16 h-16 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-bison-dark/5 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform text-bison-dark hover:text-bison-brown z-50 cursor-pointer"
              >
                <ChevronRight size={32} strokeWidth={2.5} />
              </button>
            }
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCaseIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src={cases[activeCaseIndex]}
                alt="Udvalgt Case"
                className="mx-auto rounded-2xl object-cover h-full w-full max-h-full object-center"
                draggable={false}
              />
            </AnimatePresence>
          </ContainerScroll>
          

          <div className="flex justify-center mt-4 md:mt-8 pb-16 relative z-30">
            <Link 
              to="/cases" 
              className="px-10 py-5 rounded-full bg-bison-dark text-white font-bold tracking-wide text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex items-center gap-3"
            >
              Se alle vores cases
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Smooth Liftoff Section */}
      <SmoothLiftoff />

      {/* Modern Pricing Section */}
      <ModernPricingPage
        title={
          <>
            Find the <span className="italic font-serif normal-case font-medium text-bison-brown">Perfect Plan</span> for Your Business
          </>
        }
        subtitle="Start for free, then grow with us. Flexible plans for projects of all sizes."
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
      {/* Final CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-bison-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-white leading-[0.9] mb-10">
              Klar til at starte din <br />
              <span className="italic font-serif normal-case font-medium text-bison-pink">digitale rejse?</span>
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
