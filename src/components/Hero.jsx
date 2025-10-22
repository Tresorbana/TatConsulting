import { business, curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons, getTranslatedContent } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedElement from "./AnimatedElement";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { LanguageContext } from "../contexts/LanguageContext";
import React from "react";
import { fadeIn, slideIn, zoomIn } from "../utils/animations.jsx";

const Hero = () => {
  const parallaxRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const { collabText } = getTranslatedContent(language);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <AnimatedSection 
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          animation="fadeInUp"
          delay={0.2}
          distance={30}
        >
          <AnimatedElement 
            as="h1"
            className="h1 mb-6"
            delay={0.1}
          >
            {language === 'en' ? (
              <>
                Comprehensive Technology Services&nbsp;To&nbsp;Boost Your{" "}
              </>
            ) : (
              <>
                Servicios Tecnológicos Integrales&nbsp;Para&nbsp;Impulsar su{" "}
              </>
            )}
          </AnimatedElement>
          <AnimatedElement 
            as="p"
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            delay={0.2}
          >
            {language === 'en' 
              ? 'At TAT Consulting, we specialize in providing remote solutions that enable your success from and to anywhere in the world.'
              : 'En TAT Consulting, nos especializamos en proporcionar soluciones remotas que permiten su éxito desde y hacia cualquier parte del mundo.'
            }
          </AnimatedElement>
          <AnimatedElement delay={0.3}>
            <Button href="/pricing" white>
              {language === 'en' ? 'Get started' : 'Comenzar'}
            </Button>
          </AnimatedElement>
        </AnimatedSection>
        <AnimatedSection 
          className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
          delay={0.4}
          animation="fadeInUp"
          distance={50}
        >
          <motion.div 
            className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <motion.img
                  src={business}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                </motion.div>

                <ScrollParallax isAbsolutelyPositioned>
                  <motion.ul 
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {heroIcons.map((icon, index) => (
                      <motion.li 
                        className="p-5" 
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <img src={icon} width={24} height={25} alt={icon} />
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Business growth"
                    />
                  </motion.div>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </AnimatedSection>
      </div>

      <AnimatedSection
        delay={0.8}
        animation="fadeInUp"
        distance={20}
      >
        <BottomLine />
      </AnimatedSection>
    </Section>
  );
};

export default Hero;
