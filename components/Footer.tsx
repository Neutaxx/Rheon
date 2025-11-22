import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">RHEON<span className="text-brand-primary">®</span></h2>
            <p className="text-gray-400 max-w-md text-lg">
              Diseñamos el futuro digital de tu marca. Experiencias web que no solo se ven bien, sino que funcionan excepcionalmente.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6">Explorar</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/proyectos" className="hover:text-brand-primary transition-colors">Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/precios" className="hover:text-brand-primary transition-colors">Precios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hola@rheon.com" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RHEON®. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>Política de Privacidad</span>
            <span>Términos de Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;