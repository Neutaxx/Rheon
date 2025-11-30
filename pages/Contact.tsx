
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Globe, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', plan: 'Básico', message: '' });

  const handleWhatsApp = () => {
    // Basic validation
    if (!formState.name || !formState.message) {
      alert("Por favor completa todos los campos para continuar.");
      return;
    }

    const text = `Hola, quiero una cotización para mi página web.\n\nNombre: ${formState.name} \nPlan de interés: ${formState.plan} \nMensaje: ${formState.message} \n\nEnviado desde el formulario de RHEON®.`;
    const url = `https://wa.me/573102885209?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <PageWrapper className="pt-32 pb-20">
      <SEO
        title="Contacto | RHEON® Agencia Web Bogotá"
        description="¿Necesitas una página web? Contáctanos. Estamos en Bogotá y trabajamos con clientes en toda Colombia. Asesoría gratuita."
      />
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #0B0915 inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Contáctanos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Quiero que mi proyecto <br />
              fluya con <span className="text-brand-primary">RHEON®</span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
              Estamos listos para escuchar tu idea grande. Agenda una reunión o escríbenos directamente.
            </p>

            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Ubicación</div>
                <div className="text-white">Bogotá, Colombia (Remoto Global)</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="bg-[#12101E] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <form className="relative z-10 space-y-6">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#0B0915] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:bg-white/5 transition-all placeholder:text-gray-600"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">¿Cuál plan necesitas?</label>
                  <div className="relative">
                    <select
                      value={formState.plan}
                      onChange={(e) => setFormState({ ...formState, plan: e.target.value })}
                      className="w-full bg-[#0B0915] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:bg-white/5 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Básico" className="bg-[#0B0915] text-white">Plan Básico</option>
                      <option value="Premium" className="bg-[#0B0915] text-white">Plan Premium</option>
                      <option value="Personalizado" className="bg-[#0B0915] text-white">Plan Personalizado</option>
                      <option value="Otro" className="bg-[#0B0915] text-white">Otro / No estoy seguro</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full bg-[#0B0915] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:bg-white/5 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
                  >
                    <MessageCircle size={24} /> Enviar por WhatsApp
                  </button>
                </div>

              </form>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;