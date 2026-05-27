"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col items-center md:items-start mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
            Excelencia en Movimiento
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
            Cuidado <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Automotriz Premium
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Experimenta un servicio automotriz incomparable. Desde un detallado de élite hasta diagnósticos de alto rendimiento, tratamos a tu vehículo con el lujo que merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold text-black rounded-full font-bold uppercase tracking-wider hover:bg-gold-light transition-all flex items-center justify-center gap-2 group"
            >
              Agendar Servicio
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white/30 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              Explorar Servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Deslizar</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
