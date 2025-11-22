import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import ProyectopoliImg from '../Fotos/PoliPagina.jpg';

const projects = [
  {
    client: "Semillero de comunicación y prácticas digitales",
    category: "SEMILLERO POLITECNICO GRANCOLOMBIANO",
    image: ProyectopoliImg,
    size: "large",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Semillero x RHEON®",
    category: "EDUCACIÓN / COMUNIDAD",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    size: "normal",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Aura Wellness",
    category: "E-COMMERCE SPA",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
    size: "normal",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Cyberpunk Hub",
    category: "WEB3 & NFT",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    size: "large",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Botanica",
    category: "LIFESTYLE",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2670&auto=format&fit=crop",
    size: "normal",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Future Arch",
    category: "PORTFOLIO",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
    size: "normal",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  }
];

const Projects: React.FC = () => {
  return (
    <PageWrapper className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Nuestro <span className="text-brand-primary">Trabajo</span></h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Una colección de experiencias digitales diseñadas para impactar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${project.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end">
                  <div>
                    <span className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{project.client}</h3>
                  </div>
                  <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;