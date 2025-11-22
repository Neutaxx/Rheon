import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Banknote, Smartphone, LifeBuoy, MapPin, Globe, ShieldCheck, Zap, Layout } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';

import IntroVideo from '../Fotos/rheonintrovideo.mp4';
import ProyectopoliImg from '../Fotos/PoliPagina.jpg';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const featuredProjects = [
    {
      client: "Semillero de comunicación y prácticas digitales",
      category: "SEMILLERO POLITECNICO GRANCOLOMBIANO",
      image: ProyectopoliImg,
      link: "/proyectos"
    },
    {
      title: "Aura Wellness",
      category: "E-Commerce SPA",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
      link: "/proyectos"
    },
    {
      title: "Cyberpunk Hub",
      category: "Web3 & NFT",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      link: "/proyectos"
    },
    {
      title: "RHEON® Labs",
      category: "Experimental",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      link: "/proyectos"
    }
  ];

  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              No somos otros <br />
              <span className="text-gray-400">diseñadores.</span> <br />
              <span className="text-brand-primary">No somos otra agencia más.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              En RHEON® diseñamos experiencias web rápidas, claras y listas para convertir visitas en clientes.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Realizar cotización
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group"
          >
            <video
              src={IntroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION: WHY WORK WITH US (RELOCATED BENEFITS) */}
      <section className="py-24 bg-[#0E0B1E] relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué trabajar con <span className="text-brand-primary">nosotros</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">No entregamos problemas, entregamos soluciones digitales que funcionan.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speed */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#16132b] border border-white/5 hover:border-brand-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Velocidad de Entrega</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sitios web profesionales listos en días, no en meses. Optimizamos nuestros procesos para entregas ágiles.
              </p>
            </motion.div>

            {/* Price */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#16132b] border border-white/5 hover:border-brand-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
                <Banknote size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Precios Claros</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Planes adaptados a emprendedores y empresas. Sabes exactamente qué pagas y qué obtienes desde el inicio.
              </p>
            </motion.div>

            {/* Mobile */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#16132b] border border-white/5 hover:border-brand-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Diseño Adaptable</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cada sitio se ve perfecto en celulares, tablets y computadores. Priorizamos la experiencia móvil.
              </p>
            </motion.div>

            {/* Support */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#16132b] border border-white/5 hover:border-brand-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-6">
                <LifeBuoy size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Soporte Real</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No desaparecemos tras la entrega. Te acompañamos para asegurar que tu web siga funcionando perfecto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: INTRO BOGOTÁ */}
      <section className="py-24 bg-[#110e22]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-300 mb-6">
                <MapPin size={14} className="text-brand-primary" /> Bogotá - Colombia
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Diseño de páginas web <br />
                <span className="text-brand-primary">Profesionales y Efectivas</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                En RHEON® entendemos el mercado local y global. Creamos sitios web que no solo son una vitrina bonita, sino una herramienta de ventas abierta 24/7.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Ya sea que necesites una landing page para una campaña específica o un sitio corporativo completo, nuestra metodología garantiza calidad, velocidad y resultados medibles.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  Estrategia digital enfocada en conversión.
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  Tecnologías modernas (React, Tailwind, Astro).
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  Optimización para motores de búsqueda (SEO).
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="Equipo RHEON trabajando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110e22] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REMOTE WORK STRIP */}
      <section className="py-12 bg-gradient-to-r from-brand-primary/20 via-[#0E0B1E] to-brand-primary/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-bold">
            <Globe className="text-brand-primary animate-pulse" size={32} />
            <span>Trabajamos con clientes en <span className="text-white">Bogotá</span> y en el <span className="text-brand-primary">exterior</span>.</span>
          </div>
          <p className="mt-2 text-gray-400">Metodología 100% remota y eficiente.</p>
        </div>
      </section>

      {/* WHY CHOOSE US DETAILED LIST */}
      <section className="py-24 bg-[#0E0B1E]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Qué nos hace <span className="text-brand-primary">diferentes</span>?</h2>
            <p className="text-gray-400">Más allá del diseño bonito, nos enfocamos en la parte técnica que impulsa tu negocio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary border border-white/10">
                <Layout size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diseño 100% Personalizado</h3>
                <p className="text-gray-400 text-sm leading-relaxed">No usamos plantillas genéricas. Diseñamos la estructura y la experiencia visual pensando exclusivamente en tu marca y tus objetivos.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary border border-white/10">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seguridad y Confianza</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Implementamos certificados SSL, protección contra spam en formularios y buenas prácticas de desarrollo para mantener tu sitio seguro.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary border border-white/10">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rendimiento Extremo</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Optimizamos imágenes, código y servidores para que tu página cargue en milisegundos. Google ama los sitios rápidos.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary border border-white/10">
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">SEO Ready</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Entregamos tu sitio con la estructura semántica correcta (H1, Meta tags, Alt texts) para que empiece a posicionar en buscadores desde el día 1.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL PROJECTS (SCROLL HIJACKING) */}
      <section ref={targetRef} className="relative h-[300vh] bg-brand-bg">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-16 px-16">
            <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[40vw] pr-12">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl md:text-8xl font-bold mb-6"
              >
                Trabajo <br />
                <span className="text-brand-primary">Reciente</span>
              </motion.h2>
              <p className="text-gray-400 text-xl max-w-md mb-8">
                Explora cómo transformamos ideas en experiencias digitales tangibles.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <ArrowUpRight size={20} /> Desliza para ver más
              </div>
            </div>

            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative h-[60vh] min-w-[80vw] md:min-w-[45vw] rounded-3xl overflow-hidden border border-white/10 group cursor-none"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2 block">{project.category}</span>
                  <h3 className="text-4xl font-bold text-white mb-6">{project.title}</h3>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
                  >
                    Ver más <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-col justify-center min-w-[30vw] pl-12">
              <Link to="/proyectos" className="text-6xl font-bold text-gray-700 hover:text-white transition-colors duration-300">
                Ver todos <br /> los proyectos &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MINI PRICING PREVIEW */}
      <section className="py-32 container mx-auto px-6 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-brand-primary/5 blur-[100px] rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes diseñados <br /> para escalar</h2>
            <p className="text-gray-400">Soluciones transparentes, sin costos ocultos.</p>
          </div>
          <Link to="/precios" className="text-brand-primary font-bold flex items-center gap-2 mt-4 md:mt-0 hover:text-white transition-colors">
            Ver tabla completa <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="mb-4 text-gray-400 text-sm font-bold tracking-wide">BÁSICO</div>
            <div className="text-3xl font-bold mb-2">$400.000 <span className="text-sm font-normal text-gray-500">COP</span></div>
            <p className="text-sm text-gray-400 mb-6">Ideal para aterrizar tu primera idea en la web.</p>
            <ul className="text-sm space-y-3 text-gray-300 mb-8">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5"></div> Landing page</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5"></div> Diseño responsive</li>
            </ul>
            <Link to="/precios" className="block w-full py-3 text-center border border-white/20 rounded-xl hover:bg-white hover:text-black transition-colors font-semibold text-sm">
              Detalles
            </Link>
          </motion.div>

          {/* Card 2 - Highlighted */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/50 backdrop-blur-sm relative"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-brand-primary text-white text-[10px] font-bold rounded-full uppercase">Popular</div>
            <div className="mb-4 text-brand-primary text-sm font-bold tracking-wide">PREMIUM</div>
            <div className="text-3xl font-bold mb-2">$600.000 <span className="text-sm font-normal text-gray-500">COP</span></div>
            <p className="text-sm text-gray-400 mb-6">Para negocios que buscan crecer rápido.</p>
            <ul className="text-sm space-y-3 text-gray-300 mb-8">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5"></div> Multipágina</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5"></div> SEO Avanzado</li>
            </ul>
            <Link to="/precios" className="block w-full py-3 text-center bg-brand-primary text-white rounded-xl hover:bg-brand-primary/80 transition-colors font-semibold text-sm">
              Detalles
            </Link>
          </motion.div>

          {/* Call to Action Card */}
          <div className="flex items-center justify-center p-8 rounded-3xl border border-dashed border-white/10">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">¿Necesitas más?</h3>
              <p className="text-sm text-gray-400 mb-6">Creamos soluciones a la medida de tu ambición.</p>
              <Link to="/contacto" className="text-brand-primary font-bold text-sm hover:underline">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;