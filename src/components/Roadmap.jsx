import { useContext, useRef } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { getTranslatedContent } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedElement from "./AnimatedElement";
import { fadeIn, slideIn, zoomIn } from "../utils/animations";

// Import roadmap images
import { automation, Blockchain, Cybersecurity, transformation } from "../assets";
// Map of roadmap item IDs to their corresponding images
const roadmapImages = {
  "0": transformation,
  "1": automation,
  "2": Cybersecurity,
  "3": Blockchain,
};
import { LanguageContext } from "../contexts/LanguageContext";

const Roadmap = () => {
  const { language } = useContext(LanguageContext);
  const { roadmap } = getTranslatedContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10" ref={ref}>
        <AnimatedSection
          animation="fadeInUp"
          delay={0.2}
          distance={30}
        >
          <Heading 
            tag={language === 'en' ? 'Ready to get started' : 'Listo para comenzar'} 
            title={language === 'en' ? "What we're working on" : 'En qué estamos trabajando'} 
          />
        </AnimatedSection>

        <AnimatedSection 
          className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"
          animation="fadeIn"
          delay={0.4}
        >
          <AnimatePresence>
            {roadmap.map((item, index) => {
              const status = item.status === "done" 
                ? (language === 'en' ? 'Done' : 'Completado') 
                : (language === 'en' ? 'In progress' : 'En progreso');

              return (
                <motion.div
                  key={item.id}
                  className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                    item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.2 + (index * 0.15),
                      duration: 0.6 
                    } 
                  }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                    <motion.div 
                      className="absolute top-0 left-0 max-w-full"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 0.5 } : {}}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <img
                        className="w-full"
                        src={grid}
                        width={550}
                        height={550}
                        alt={language === 'en' ? 'Grid' : 'Cuadrícula'}
                      />
                    </motion.div>
                    <div className="relative z-1">
                      <motion.div 
                        className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                      >
                        <Tagline>{item.date}</Tagline>

                        <motion.div 
                          className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.img
                            className="mr-2.5"
                            src={item.status === "done" ? check2 : loading1}
                            width={16}
                            height={16}
                            alt={status}
                            animate={item.status !== "done" ? {
                              rotate: 360,
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }
                            } : {}}
                          />
                          <div className="tagline">{status}</div>
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="mb-10 -my-10 -mx-15"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            delay: 0.4 + (index * 0.1),
                            duration: 0.5 
                          } 
                        }}
                        viewport={{ once: true }}
                      >
                        <img
                          className="w-full rounded-xl"
                          src={roadmapImages[item.id]}
                          width={628}
                          height={426}
                          alt={item.title}
                        />
                      </motion.div>
                      
                      <motion.h4 
                        className="h4 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 0.5 + (index * 0.1),
                            duration: 0.5 
                          } 
                        }}
                        viewport={{ once: true }}
                      >
                        {item.title}
                      </motion.h4>
                      
                      <motion.p 
                        className="body-2 text-n-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 0.6 + (index * 0.1),
                            duration: 0.5 
                          } 
                        }}
                        viewport={{ once: true }}
                      >
                        {item.text}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <AnimatedElement
            as={Gradient}
            delay={0.7}
            animation="fadeIn"
          />
        </AnimatedSection>

        <AnimatedSection
          className="flex justify-center mt-12 md:mt-15 xl:mt-20"
          animation="fadeIn"
          delay={0.8}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="/roadmap">
              {language === 'en' ? 'Our roadmap' : 'Nuestro plan'}
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Roadmap;
