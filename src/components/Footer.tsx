import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const StripeDecorator = ({ vertical = false, className = "" }) => (
  <div className={`${vertical ? 'bison-stripes-vertical w-1.5 h-full' : 'bison-stripes h-1.5 w-full'} ${className}`} />
);

const Footer = () => (
  <footer className="text-white pt-32 pb-12 overflow-hidden relative">
    {/* Background Mesh Gradient with Noise Texture */}
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#2c1a11]">
      <div 
        className="absolute inset-0 w-full h-full opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 0%, #f3d8c1 0%, rgba(243, 216, 193, 0) 55%),
            radial-gradient(ellipse at 50% 80%, #030201 0%, rgba(3, 2, 1, 0) 80%),
            radial-gradient(circle at 95% 45%, #a86c47 0%, rgba(168, 108, 71, 0) 55%),
            radial-gradient(circle at 0% 100%, #5e3522 0%, rgba(94, 53, 34, 0) 50%)
          `
        }}
      />
      {/* Grainy Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-8 group inline-flex">
            <motion.div
              whileHover={{ rotate: -15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-white/20 transition-all duration-300"
            >
              <span className="text-bison-dark font-black text-xl">B</span>
            </motion.div>
            <span className="text-2xl font-black tracking-tighter font-display uppercase group-hover:text-bison-blue transition-colors duration-300">Bison Company</span>
          </Link>
          <h2 className="text-4xl font-black font-display uppercase tracking-tighter leading-tight mb-8 max-w-md">
            Digitalt design der skaber <span className="italic font-serif normal-case font-medium text-bison-blue">rigtige</span> resultater
          </h2>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#ffffff", color: "var(--color-bison-dark)" }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6">Naviger</h4>
          <ul className="space-y-4 font-bold">
            {[
              { name: 'Hjem', path: '/' },
              { name: 'Om os', path: '/om-os' },
              { name: 'Cases', path: '/cases' },
              { name: 'Blog', path: '/blog' },
              { name: 'Book et opkald', path: '/book-et-opkald' }
            ].map(item => (
              <li key={item.name}>
                <Link to={item.path} className="inline-block hover:text-bison-blue transition-all duration-300 hover:translate-x-2">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6">Kontakt</h4>
          <ul className="space-y-4 font-bold">
            <li className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}><Mail size={20} className="text-bison-green group-hover:text-white transition-colors" /></motion.div>
              <a href="mailto:or@bisoncompany.dk" className="hover:text-bison-green transition-colors">or@bisoncompany.dk</a>
            </li>
            <li className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}><Phone size={20} className="text-bison-pink group-hover:text-white transition-colors" /></motion.div>
              <a href="tel:+4520323144" className="hover:text-bison-pink transition-colors">+45 20 32 31 44</a>
            </li>
            <li className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}><MapPin size={20} className="text-bison-blue group-hover:text-white transition-colors" /></motion.div>
              <span>Aarhus, Danmark</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-bold">
        <p>© 2026 Bison Company ApS. Alle rettigheder forbeholdes.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a>
          <a href="#" className="hover:text-white transition-colors">Handelsbetingelser</a>
        </div>
      </div>
    </div>

    {/* Large background text */}
    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 opacity-[0.05] pointer-events-none select-none text-center z-10 mix-blend-overlay">
      <h1 className="text-[25vw] font-black font-display uppercase tracking-tighter leading-none">BISON</h1>
    </div>

    {/* Top stripe acting as border */}
    <StripeDecorator className="absolute top-0 left-0 right-0 h-2 z-20" />
  </footer>
);

export default Footer;
