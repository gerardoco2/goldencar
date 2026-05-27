"use client";

import { motion } from "framer-motion";
import { Settings, Cog, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-8 h-8 text-gold" />,
    title: "Diagnóstico de Motor",
    description: "Diagnóstico computarizado de última generación para identificar y resolver con precisión cualquier problema del motor.",
  },
  {
    icon: <Cog className="w-8 h-8 text-gold" />,
    title: "Frenos y Suspensión",
    description: "Inspección, reparación y reemplazo de sistemas de frenos y suspensión para garantizar una conducción segura y estable.",
  },
  {
    icon: <Zap className="w-8 h-8 text-gold" />,
    title: "Ajuste de Rendimiento",
    description: "Mejore la potencia y eficiencia de su vehículo con nuestros servicios de ajuste personalizado y piezas de alto rendimiento.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-gold" />,
    title: "Mantenimiento General",
    description: "Revisiones de rutina, cambios de aceite y servicios de frenos para asegurar que su auto opere de manera suave y segura.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Nuestra Experiencia</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                Calidad <br /> Sin Concesiones
              </h3>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                En Golden Car Center, combinamos tecnología avanzada con una artesanía magistral. Nuestros técnicos certificados están dedicados a brindar un cuidado de élite para su vehículo de lujo o de alto rendimiento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-gray-dark border border-white/5 p-6 rounded-2xl hover:border-gold/30 hover:bg-gray-medium transition-all group"
                  >
                    <div className="mb-4 bg-black w-16 h-16 rounded-full flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-gold/50 transition-all">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/service-mechanic.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-gold font-bold text-2xl mb-1 text-center">Más de 15 Años</h4>
                  <p className="text-white text-center text-sm font-medium uppercase tracking-wider">De Experiencia Magistral</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px] rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
