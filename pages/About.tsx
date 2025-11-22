import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Layout, TrendingUp } from 'lucide-react';

import JuanImg from '../Fotos/JuanNeuta.jpeg';
import SamuelImg from '../Fotos/SamuelBocanegra.jpeg';
import MichelImg from '../Fotos/MichelPlazas.jpeg';

const team = [
  {
    name: "Juan David Neuta León",
    role: "Fundador y Diseñador",
    desc: "Estratega digital enfocado en la usabilidad.",
    image: JuanImg
  },
  {
    name: "Samuel Bocanegra",
    role: "Desarrollador Web",
    desc: "Experto en código limpio y rendimiento.",
    image: SamuelImg
  },
  {
    name: "Michel Plazas",
    role: "UI & Branding",
    desc: "Creador de identidad visual y estética.",
    image: MichelImg
  }
];

const About: React.FC = () => {
  return (
    <PageWrapper className="pt-32 pb-20">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Nosotros
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Creando el futuro <br /> digital desde <span className="text-brand-primary">Colombia</span>.
          </motion.h1>
        </div>

        {/* New "Our Approach" Micro-Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-brand-primary/20 blur-[100px] rounded-full -z-10"></div>
            <h2 className="text-3xl font-bold mb-6">Nuestro Enfoque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Rapidez Técnica</h3>
                <p className="text-gray-400 text-sm">Sitios optimizados para cargar al instante.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <Layout size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Diseño Estratégico</h3>
                <p className="text-gray-400 text-sm">Estética que guía al usuario a la acción.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Conversión</h3>
                <p className="text-gray-400 text-sm">No solo visitas, buscamos clientes para ti.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Redesigned Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2rem] bg-[#12101E] border border-white/5 flex flex-col items-start justify-between min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors"></div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
              <Target size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Misión</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Crear experiencias web que impulsen marcas hacia su mejor versión digital, entregando resultados tangibles a través de diseño funcional y tecnología moderna.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2rem] bg-[#12101E] border border-white/5 flex flex-col items-start justify-between min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
              <Eye size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Visión</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Ser la referencia en diseño web en Latinoamérica, reconocidos por elevar el estándar visual y técnico de la industria para emprendedores y empresas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Redesigned Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-16 text-center">Equipo <span className="text-brand-primary">RHEON®</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#12101E] p-6 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/10 mb-6 group-hover:border-brand-primary transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default About;