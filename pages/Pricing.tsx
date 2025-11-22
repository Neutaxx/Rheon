import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { Check, Sparkles, ShieldCheck, HelpCircle, Calculator } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Pricing: React.FC = () => {

  return (
    <PageWrapper className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Planes <span className="text-brand-primary">transparentes</span></h1>
          <p className="text-xl text-gray-400 mb-8">Diseño profesional y estructura técnica de alto nivel.</p>

          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10">
            <button className="px-6 py-2 rounded-full bg-brand-primary text-white text-sm font-bold">Pago Único</button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-32">

          {/* Basic Plan */}
          <TiltCard className="group relative bg-[#110e22] border border-white/10 rounded-[2rem] p-8 hover:border-brand-primary/30 transition-all duration-300">
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="text-xl text-gray-300 font-medium mb-2">Básico</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">$400.000</span>
                <span className="text-gray-500 mb-1 font-bold text-sm">COP</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Perfecto para landing pages (una sola página) de alta conversión.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Página web de una sección",
                "Diseño responsive (Móvil/PC)",
                "Botón flotante de WhatsApp",
                "Formulario de contacto funcional",
                "Optimización básica (Velocidad + SEO)",
                "Tiempo de entrega: 1-2 días hábiles"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-all mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contacto" className="block w-full py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors">
              Solicitar este plan
            </Link>
          </TiltCard>

          {/* Premium Plan - Highlighted */}
          <TiltCard className="group relative bg-[#1c1636] border border-brand-primary/50 rounded-[2rem] p-8 shadow-2xl shadow-brand-primary/20 transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-brand-primary/40">
              <Sparkles size={12} /> Recomendado
            </div>
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="text-xl text-brand-primary font-medium mb-2">Premium</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">$600.000</span>
                <span className="text-gray-500 mb-1 font-bold text-sm">COP</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Sitio web multipágina completo con diseño y funciones avanzadas.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Sitio multipágina (Hasta 5 págs)",
                "Rediseño de sitios existentes",
                "Diseño Visual Avanzado",
                "Formularios personalizados",
                "Microinteracciones y Animaciones",
                "Optimización de velocidad avanzada",
                "Soporte prioritario por 1 mes",
                "Tiempo de entrega: 2 – 3 días hábiles"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contacto" className="block w-full py-4 rounded-xl bg-brand-primary text-white font-bold text-center hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/25">
              Elegir plan Premium
            </Link>
          </TiltCard>

          {/* Custom Plan */}
          <TiltCard className="group relative bg-[#110e22] border border-white/10 rounded-[2rem] p-8 hover:border-brand-primary/30 transition-all duration-300">
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="text-xl text-gray-300 font-medium mb-2">Personalizado</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">Cotizar</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Para proyectos a gran escala que requieren soluciones a medida.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Sitios a gran escala",
                "Animaciones avanzadas (WebGL/3D)",
                "Paneles administrativos a medida",
                "Integraciones API complejas",
                "Consultoría de marca completa",
                "Estrategia UX Profunda"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-all mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contacto" className="block w-full py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors">
              Agendar reunión
            </Link>
          </TiltCard>
        </div>

        {/* VALUE ADDED SECTION */}
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-[#16132b] to-[#0E0B1E] border border-white/10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6 text-brand-primary">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestro valor <span className="text-brand-primary">añadido</span></h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Más allá del diseño, somos tus consultores técnicos. Te asesoramos para contratar el mejor servicio de hosting y dominio (para que siempre tengas el control), y te entregamos el sitio optimizado con las mejores prácticas de seguridad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* COST INFO & ADVISORY */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 text-brand-primary">
              <Calculator size={24} />
              <h3 className="text-xl font-bold uppercase tracking-wider">¿Cuánto cuesta realmente una página web?</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              El costo final depende del alcance: número de secciones, funcionalidades personalizadas (reservas, pagos, usuarios) y nivel de diseño. Nuestros planes están estructurados para cubrir las necesidades más comunes con la mejor relación calidad-precio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 text-brand-primary">
              <Sparkles size={24} />
              <h3 className="text-xl font-bold uppercase tracking-wider">Te asesoramos antes de empezar</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Cada proyecto es único. Si no estás seguro de qué plan técnico se adapta a tu negocio, escríbenos. Analizaremos tus requerimientos para ofrecerte una solución justa y escalable.
            </p>
            <Link to="/contacto" className="text-white border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors font-bold inline-flex items-center gap-2">
              Hablar con un experto <Check size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Pricing;