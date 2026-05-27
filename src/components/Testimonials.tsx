"use client";

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Michael R.",
    car: "Porsche 911 GT3",
    content: "El nivel de detalle y cuidado que pusieron en mi Porsche fue increíble. No solo reparan autos; los tratan como arte. Altamente recomendado.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    car: "Mercedes-Benz S-Class",
    content: "Golden Car Center es el único lugar en el que confío mi vehículo. Sus diagnósticos son exactos y el servicio al cliente es excepcionalmente premium.",
    rating: 5
  },
  {
    name: "David T.",
    car: "BMW M5 Competition",
    content: "Desde el momento en que entras, sabes que es una experiencia diferente. El ajuste de rendimiento que hicieron transformó por completo mi vehículo.",
    rating: 5
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-24 bg-gray-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Reseñas de Clientes</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Confiado por <br /> Entusiastas
            </h3>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 cursor-grab active:cursor-grabbing">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6">
                <div className="bg-black/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between hover:border-gold/30 transition-colors">
                  <div>
                    <div className="flex gap-1 mb-6 text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-gold text-sm font-medium">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
