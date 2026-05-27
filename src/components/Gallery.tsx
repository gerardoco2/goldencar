"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2"
          >
            Portafolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Nuestras Obras Maestras
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative group rounded-2xl overflow-hidden aspect-video cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/hero-bg.png')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Instalaciones
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group rounded-2xl overflow-hidden aspect-square md:aspect-auto cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/gallery-close-up.png')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Detallado
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/service-mechanic.png')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Mantenimiento
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 relative group rounded-2xl overflow-hidden aspect-video md:aspect-[21/9] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-dark to-black flex flex-col items-center justify-center border border-white/5 group-hover:border-gold/30 transition-colors">
              <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest mb-4">Ver Todos los Proyectos</h4>
              <a href="#" className="text-gold font-medium flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4">
                Explorar Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
