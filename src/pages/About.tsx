import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Target, Zap, Heart } from 'lucide-react';
import { PageSkyHeader } from '../components/ui/page-sky-header';
import { FadeText } from '../components/ui/fade-text';

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
      <PageSkyHeader />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6 overflow-hidden">
            <FadeText
              direction="up"
              text="vores virksomhed."
              className="inline-block bg-bison-dark/5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bison-dark/60"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter font-display uppercase leading-[0.9] mb-8 w-full">
            <FadeText
              direction="right"
              text="Vi bygger fremtidens"
              framerProps={{ show: { transition: { delay: 1.0 } } }}
            />
            <FadeText
              direction="down"
              text="digitale oplevelser."
              className="italic font-serif normal-case font-medium text-bison-brown"
              framerProps={{ show: { transition: { delay: 1.2 } } }}
            />
          </h1>
          
          <div className="overflow-hidden w-full max-w-2xl">
            <FadeText
              direction="left"
              text="Bison Company startede med en simpel vision: At gøre high-end digitalt design tilgængeligt for ambitiøse virksomheder, der tør skille sig ud."
              className="text-xl text-bison-dark/60 leading-relaxed inline-block"
              framerProps={{ show: { transition: { delay: 1.4 } } }}
            />
          </div>
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

      {/* Values & Team Section */}
      <section className="py-32 bg-white px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Left Column: Values & Foundation */}
            <div className="lg:col-span-5 lg:sticky lg:top-40 self-start">
              <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-tight mb-8">
                Vores værdier er <br />
                <span className="italic font-serif normal-case font-medium text-bison-brown">vores fundament</span>
              </h2>
              <p className="text-lg text-bison-dark/60 mb-10 leading-relaxed">
                Vi tror på ærlighed, gennemsigtighed og hårdt arbejde. Når vi ikke sidder bag computeren, tager vi det hele ekstremt personligt, for vi er investeret i din succes - helt ind til benet.
              </p>
              <div className="bison-stripes w-24 h-2 rounded-full mb-12" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 bg-bison-bg rounded-3xl border border-bison-dark/5 cursor-pointer transition-colors duration-300"
                  >
                    <div className="mb-3 scale-90 origin-left">{v.icon}</div>
                    <h3 className="text-lg font-black font-display uppercase mb-2 tracking-tight">{v.title}</h3>
                    <p className="text-xs text-bison-dark/60 leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scrolling Right Column: The Team */}
            <div className="lg:col-span-7 flex flex-col space-y-32">
              {[
                {
                  name: "Oliver",
                  role: "Creative Director & Co-Founder",
                  desc: "Med en dybtfølt passion for design, farver og brugeradfærd sikrer Oliver, at jeres brand ikke bare ser unikt ud på overfladen, men konverterer helt rent ned igennem tragten. Han fanger det usynlige rum mellem brugernes forventninger og brandets løfter.",
                  img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  name: "Emil",
                  role: "Tech Lead & Co-Founder",
                  desc: "Hjernen nede i maskinrummet. Emil sørger minutiøst for, at alt backend, frameworks og performance spiller 100% sammen med designernes skøre påfund. Alt fra en robust arkitektur til lynhurtige loadingtider på alle tænkelige skærme ligger fast i hans kode.",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  name: "Mathias",
                  role: "UX Strategist & Partner",
                  desc: "Mathias er stædig. Han dykker uophørligt ned i jeres data, heatmaps og formler, indtil han kan forstå jeres kernebrugere ud og ind. For ham er den gode løsning ikke tilfældigt gætværk eller løse mavefornemmelser - det er den rendyrkede disciplin af datadrevet viden.",
                  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000"
                }
              ].map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex flex-col group"
                >
                  <div className="aspect-[3/4] md:aspect-square w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl relative">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-bison-dark/10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                    
                    {/* Glassy nameplate overlay on hover */}
                    <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-bison-dark/80 border border-white/10 p-6 rounded-3xl flex justify-between items-end shadow-xl transition-all duration-500 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <div>
                        <h3 className="text-2xl font-black font-display tracking-tight text-white mb-1 uppercase drop-shadow-md">{member.name}</h3>
                        <p className="text-bison-brown font-bold tracking-widest text-xs uppercase drop-shadow-md">{member.role}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white shadow-inner">
                        <Users size={16} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-2 group-hover:text-bison-brown transition-colors">{member.name}</h3>
                  <p className="text-bison-dark/40 font-bold uppercase tracking-widest text-sm mb-6 pb-6 border-b border-bison-dark/10 inline-block">{member.role}</p>
                  <p className="text-xl text-bison-dark/60 leading-relaxed font-medium max-w-lg">{member.desc}</p>
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
