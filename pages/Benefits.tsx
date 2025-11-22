import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Banknote, MessageSquare, Clock, ShieldCheck, Rocket } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Benefits: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <PageWrapper className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Promesa</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Por qué elegir <span className="text-brand-primary">RHEON®</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No solo diseñamos sitios web. Construimos herramientas digitales optimizadas para velocidad, conversión y crecimiento.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="group p-10 rounded-[2rem] bg-[#16132b] border border-white/5 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
            <div className="mb-8 w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Banknote size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Precios Flexibles</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Planes claros para cada etapa de tu negocio. Sin sorpresas ni costos ocultos al final del proyecto.
            </p>
            <div className="px-4 py-2 bg-white/5 rounded-lg inline-block text-sm font-mono text-brand-primary">Desde $400.000 COP</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="group p-10 rounded-[2rem] bg-[#16132b] border border-white/5 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
            <div className="mb-8 w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Soporte Prioritario</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Comunicación directa con los diseñadores. Sin intermediarios que retrasen tu visión.
            </p>
            <div className="px-4 py-2 bg-white/5 rounded-lg inline-block text-sm font-mono text-blue-400">Respuesta &lt; 1 hora</div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="group p-10 rounded-[2rem] bg-[#16132b] border border-white/5 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
            <div className="mb-8 w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Entregas Rápidas</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sistemas de diseño optimizados para entregar tu web en tiempo récord sin sacrificar calidad.
            </p>
            <div className="px-4 py-2 bg-white/5 rounded-lg inline-block text-sm font-mono text-orange-400">24 a 36 horas</div>
          </motion.div>
        </motion.div>

        {/* Secondary Benefits Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-start gap-6"
            >
              <ShieldCheck className="text-brand-primary shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2">Seguridad Garantizada</h4>
                <p className="text-gray-400 text-sm">Implementamos certificados SSL y buenas prácticas de seguridad en cada entrega.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-start gap-6"
            >
              <Rocket className="text-brand-primary shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2">SEO Ready</h4>
                <p className="text-gray-400 text-sm">Tu sitio nace optimizado para Google. Estructura semántica correcta y carga rápida.</p>
              </div>
            </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Benefits;