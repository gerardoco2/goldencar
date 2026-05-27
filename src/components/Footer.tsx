"use client";

import { Car, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="bg-gold p-2 rounded-lg">
                <Car className="text-black w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-wider uppercase text-white">
                Golden <span className="text-gold">Car Center</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              El destino principal para reparación y detallado automotriz de lujo. Experimente una calidad y precisión inigualables en cada servicio que ofrecemos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors font-bold text-xs uppercase">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors font-bold text-xs uppercase">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors font-bold text-xs uppercase">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors text-sm">Nuestros Servicios</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold transition-colors text-sm">Galería</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors text-sm">Testimonios</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Luxury Drive, Miami, FL 33101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-gray-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-gray-400 text-sm">booking@goldencar.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Horario</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-400 text-sm">Lun - Vie</span>
                <span className="text-white text-sm font-medium">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-400 text-sm">Sábado</span>
                <span className="text-white text-sm font-medium">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="text-gray-400 text-sm">Domingo</span>
                <span className="text-gold text-sm font-bold uppercase tracking-wider">Cerrado</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Golden Car Center. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
