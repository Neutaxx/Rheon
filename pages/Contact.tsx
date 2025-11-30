
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Globe, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      alert("Por favor completa todos los campos para continuar.");
      return;
    }

    const text = `Hola, quiero una cotización para mi página web.\n\nNombre: ${formState.name} \nCorreo: ${formState.email} \nMensaje: ${formState.message} \n\nEnviado desde el formulario de RHEON®.`;
    const url = `https://wa.me/573102885209?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay for UX, then open mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = "Cotización web RHEON®";
      const body = `Hola Juan David,\nQuiero una cotización para mi proyecto.\n\nNombre: ${formState.name}\nCorreo: ${formState.email}\nMensaje: ${formState.message}\n\nEnviado desde el formulario de RHEON®.`;
      window.location.href = `mailto:juand.neuta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <PageWrapper className="pt-32 pb-20">
      <SEO
        title="Contacto | RHEON® Agencia Web Bogotá"
        description="¿Necesitas una página web? Contáctanos. Estamos en Bogotá y trabajamos con clientes en toda Colombia. Asesoría gratuita."
      />
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
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="min-h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                    <MessageCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-400">Se ha abierto tu cliente de correo para finalizar el envío.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-primary hover:text-white transition-colors underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleEmail} className="relative z-10 space-y-6">

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
                    <label className="text-sm font-medium text-gray-400 ml-1">Correo</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#0B0915] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:bg-white/5 transition-all placeholder:text-gray-600"
                      placeholder="tu@empresa.com"
                      required
                    />
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

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} /> Enviar por WhatsApp
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <Mail size={20} /> Enviar por Correo
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;