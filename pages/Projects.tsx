
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { ExternalLink, ArrowRight, Github, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

import ProyectopoliImg from '../Fotos/PoliPagina.jpg';

import ShinseilabImg from '../Fotos/Shinseilab.png';
import CrecerConBrilloImg from '../Fotos/Crecerconbrillo.png';
import GloriarteImg from '../Fotos/gloriarte.jpeg';

const projects = [
  {
    client: "Shinseilab",
    category: "Restaurante de Sushi",
    image: ShinseilabImg,
    size: "large",
    link: "https://shinseisushilab.onrender.com/"
  },
  {
    client: "Gloriarte",
    category: "Tienda de crochet",
    image: GloriarteImg,
    size: "normal",
    link: "https://www.gloriartemanualidades.com"
  },
  {
    client: "Semillero de comunicación y prácticas digitales",
    category: "SEMILLERO POLITECNICO GRANCOLOMBIANO",
    image: ProyectopoliImg,
    size: "normal",
    link: "https://semillero-comunicaci-n-digitales.onrender.com/index.html"
  },
  {
    client: "Crecer con brillo propio",
    category: "Concientización Social",
    image: CrecerConBrilloImg,
    size: "large",
    link: "https://brillopropio.onrender.com/"
  }
];

const Projects: React.FC = () => {
  return (
    <PageWrapper className="pt-32 pb-20">
      <SEO
        title="Portafolio | RHEON® Diseño Web"
        description="Explora nuestros proyectos de diseño y desarrollo web. Casos de éxito de empresas en Bogotá y Colombia que han transformado su presencia digital."
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Webs <span className="text-brand-primary">Realizadas</span></h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Una colección de experiencias digitales diseñadas para impactar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CardComponent = project.link ? motion.a : motion.div;
            return (
              <CardComponent
                key={index}
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

                className={`group relative rounded-3xl overflow-hidden ${project.link ? 'cursor-pointer' : ''} ${project.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                  } `}
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
                    {project.link && (
                      <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                        <ArrowUpRight size={24} />
                      </div>
                    )}
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;