import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { service1, service2, service3, check, consulting, digital } from "../assets";
import { technologyIcons } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { getTranslatedContent } from "../constants";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { fadeIn, slideIn, zoomIn } from "../utils/animations.jsx";
import AnimatedSection from "./AnimatedSection";
import AnimatedElement from "./AnimatedElement";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const { language } = useContext(LanguageContext);
  const { consultingServices } = getTranslatedContent(language);
  
  const servicesList = language === 'en' 
    ? [
        'IT Strategy & Planning',
        'Cloud Solutions & Migration',
        'Digital Transformation',
        'Cybersecurity Services',
        'Data Analytics & Business Intelligence',
        'Custom Software Development'
      ]
    : [
        'Estrategia y Planificación de TI',
        'Soluciones en la Nube y Migración',
        'Transformación Digital',
        'Servicios de Ciberseguridad',
        'Análisis de Datos e Inteligencia Empresarial',
        'Desarrollo de Software a Medida'
      ];

  return (
    <Section id="services" className="overflow-hidden">
      <AnimatedSection 
        className="container"
        animation="fadeIn"
        delay={0.1}
        distance={20}
      >
        <AnimatedSection 
          className="mb-16 text-center"
          animation="fadeInUp"
          delay={0.1}
          distance={20}
        >
          <Heading
            title={language === 'en' 
              ? "Our Expert Consulting Services" 
              : "Nuestros Servicios de Consultoría"}
            text={language === 'en'
              ? "Empowering businesses with cutting-edge technology solutions"
              : "Potenciando negocios con soluciones tecnológicas de vanguardia"}
          />
        </AnimatedSection>

        <AnimatedSection 
          className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden bg-n-8 mb-5"
          animation="fadeInUp"
          delay={0.2}
          distance={30}
        >
            <AnimatedElement 
              as="div" 
              className="absolute inset-0"
              delay={0.3}
              direction="up"
            >
              <img
                src={consulting}
                className="h-full w-full object-cover object-center opacity-80"
                width={630}
                height={750}
                alt={language === 'en' ? "Technology Consulting" : "Consultoría Tecnológica"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/80 to-n-8/60" />
            </AnimatedElement>

            <AnimatedElement 
              as="div" 
              className="relative h-full flex flex-col justify-end p-8 lg:p-12"
              delay={0.4}
              direction="up"
            >
              <div className="max-w-md">
                <AnimatedElement 
                  as="h4" 
                  className="h3 mb-4"
                  delay={0.5}
                  direction="right"
                >
                  {language === 'en' 
                    ? "Strategic IT & Technology Consulting"
                    : "Consultoría Estratégica en TI y Tecnología"}
                </AnimatedElement>
                <AnimatedElement 
                  as="p" 
                  className="body-2 mb-6 text-n-3"
                  delay={0.6}
                  direction="right"
                >
                  {language === 'en'
                    ? "Transform your business with our expert technology consulting services tailored to your unique needs."
                    : "Transforme su negocio con nuestros servicios de consultoría tecnológica experta adaptados a sus necesidades únicas."}
                </AnimatedElement>
                <ul className="space-y-3">
                  {servicesList.map((item, index) => (
                    <AnimatedElement
                      key={index}
                      as="li"
                      className="flex items-center"
                      delay={0.7 + (index * 0.1)}
                      direction="right"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20 mr-3">
                        <svg 
                          className="w-3 h-3 text-purple-400" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-n-1 font-medium">{item}</span>
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </AnimatedSection>

          <AnimatedSection 
            className="relative z-1 grid gap-5 lg:grid-cols-2"
            delay={0.3}
            animation="fadeInUp"
          >
            <AnimatedElement 
              as="div" 
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden bg-n-8"
              delay={0.4}
              direction="up"
            >
              <AnimatedElement 
                as="div" 
                className="absolute inset-0"
                delay={0.5}
                direction="up"
                animation="fadeIn"
              >
                <AnimatedElement
                  as="img"
                  src={digital}
                  className="h-full w-full object-cover opacity-80"
                  width={630}
                  height={750}
                  alt={language === 'en' ? "Digital Transformation" : "Transformación Digital"}
                  delay={0.6}
                  direction="up"
                  animation="fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/80 to-n-8/60" />
              </AnimatedElement>

              <AnimatedElement 
                as="div" 
                className="relative h-full flex flex-col justify-end p-8 lg:p-12"
                delay={0.7}
                direction="up"
                animation="fadeInUp"
              >
                <div className="max-w-md">
                  <AnimatedElement 
                    as="h4" 
                    className="h3 mb-4"
                    delay={0.7}
                    direction="right"
                  >
                    {language === 'en' 
                      ? 'Digital Transformation' 
                      : 'Transformación Digital'}
                  </AnimatedElement>
                  <AnimatedElement 
                    as="p" 
                    className="body-2 mb-6 text-n-3"
                    delay={0.8}
                    direction="right"
                  >
                    {language === 'en'
                      ? 'Future-proof your business with our comprehensive digital transformation strategies and implementation services.'
                      : 'Proteja el futuro de su negocio con nuestras estrategias integrales de transformación digital y servicios de implementación.'}
                  </AnimatedElement>
                  <AnimatedElement 
                    as="ul" 
                    className="space-y-3"
                    delay={0.8}
                    direction="up"
                    animation="fadeIn"
                  >
                    {(language === 'en'
                      ? [
                          'Cloud Migration & Strategy',
                          'Enterprise Architecture',
                          'Process Automation',
                          'Customer Experience Transformation',
                          'Legacy System Modernization',
                          'Digital Workplace Solutions'
                        ]
                      : [
                          'Migración y Estrategia en la Nube',
                          'Arquitectura Empresarial',
                          'Automatización de Procesos',
                          'Transformación de la Experiencia del Cliente',
                          'Modernización de Sistemas Heredados',
                          'Soluciones de Espacio de Trabajo Digital'
                        ]
                    ).map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                        transition={{ 
                          delay: 0.9 + (index * 0.1),
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                      >
                        <motion.img 
                          src={check} 
                          width={16} 
                          height={16} 
                          alt="check" 
                          className="mr-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.9 + (index * 0.1) + 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }}
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ 
                            delay: 0.9 + (index * 0.1) + 0.15,
                            duration: 0.3
                          }}
                        >
                          {item}
                        </motion.span>
                      </motion.li>
                    ))}
                  </AnimatedElement>
                </div>
              </AnimatedElement>
            </AnimatedElement>

            <AnimatedElement 
              as="div" 
              className="p-6 bg-n-8 rounded-3xl overflow-hidden lg:min-h-[46rem]"
              delay={0.6}
              direction="up"
              animation="fadeInUp"
            >
              <div className="py-8 px-4 xl:px-8">
                <AnimatedElement 
                  as="h4" 
                  className="h3 mb-6"
                  delay={0.6}
                  direction="left"
                >
                  {language === 'en' 
                    ? 'Technology Expertise' 
                    : 'Experiencia Tecnológica'}
                </AnimatedElement>
                <AnimatedElement 
                  as="p" 
                  className="body-1 mb-8 text-n-3"
                  delay={0.7}
                  direction="left"
                >
                  {language === 'en'
                    ? 'Our team specializes in the latest technologies to deliver innovative solutions for your business challenges.'
                    : 'Nuestro equipo se especializa en las últimas tecnologías para ofrecer soluciones innovadoras a sus desafíos empresariales.'}
                </AnimatedElement>

                <AnimatedElement 
                  as="div" 
                  className="grid grid-cols-3 gap-4 mb-8"
                  delay={0.8}
                  direction="up"
                  animation="fadeIn"
                >
                  {technologyIcons.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 bg-n-7 rounded-2xl hover:bg-n-6 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      transition={{ 
                        delay: 0.8 + (index * 0.05),
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <img 
                          src={tech.icon} 
                          width={32} 
                          height={32} 
                          alt={tech.name}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-n-3">{tech.name}</span>
                    </motion.div>
                  ))}
                </AnimatedElement>
              </div>

              <AnimatedElement 
                as="div" 
                className="relative h-[20rem] bg-n-7 rounded-2xl overflow-hidden md:h-[25rem] flex items-center justify-center"
                delay={0.9}
                direction="up"
                animation="fadeInUp"
              >
                <div className="text-center p-6">
                  <AnimatedElement 
                    as="h4" 
                    className="h4 mb-4"
                    delay={1.0}
                    direction="up"
                  >
                    {language === 'en' 
                      ? 'Ready to Transform Your Business?' 
                      : '¿Listo para Transformar su Negocio?'}
                  </AnimatedElement>
                  <AnimatedElement 
                    as="p" 
                    className="body-2 mb-6 text-n-3 max-w-md mx-auto"
                    delay={1.1}
                    direction="up"
                    animation="fadeIn"
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  >
                    {language === 'en'
                      ? 'Contact us today to discuss how we can help you achieve your technology goals.'
                      : 'Contáctenos hoy para discutir cómo podemos ayudarlo a alcanzar sus objetivos tecnológicos.'}
                  </AnimatedElement>
                  <AnimatedElement 
                    as="div"
                    delay={1.2}
                    direction="up"
                    animation="fadeIn"
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  >
                    <Button href="/contact" white>
                      {language === 'en' ? 'Get in Touch' : 'Contáctenos'}
                    </Button>
                  </AnimatedElement>
                </div>
              </AnimatedElement>
            </AnimatedElement>
          </AnimatedSection>
      </AnimatedSection>
    </Section>
  );
};

export default Services;
