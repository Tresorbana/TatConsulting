import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { useContext, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedElement from "./AnimatedElement";
import { fadeIn, slideIn, zoomIn } from "../utils/animations";

const Pricing = () => {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2" ref={ref}>
        <AnimatedSection 
          className="hidden relative justify-center mb-[6.5rem] lg:flex"
          animation="fadeIn"
          delay={0.2}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { 
              scale: [0, 1.1, 1],
              opacity: 1,
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
          >
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt={language === 'en' ? "Sphere" : "Esfera"}
            />
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt={language === 'en' ? "Stars" : "Estrellas"}
              animate={isInView ? { 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection 
          className="relative z-10 text-center mb-12"
          animation="fadeInUp"
          delay={0.4}
          distance={30}
        >
          <AnimatedElement
            as="h2"
            className="h2 mb-4"
            delay={0.5}
            direction="up"
            animation="fadeIn"
          >
            {language === 'en' 
              ? 'Transparent, Fair Pricing' 
              : 'Precios Transparentes y Justos'}
          </AnimatedElement>
          <AnimatedElement
            as="p"
            className="body-1 text-n-3 max-w-2xl mx-auto"
            delay={0.6}
            direction="up"
            animation="fadeIn"
          >
            {language === 'en'
              ? 'Choose the perfect plan for your business needs. All plans include our signature quality and support.'
              : 'Elija el plan perfecto para las necesidades de su negocio. Todos los planes incluyen nuestra calidad y soporte característicos.'}
          </AnimatedElement>
        </AnimatedSection>

        <AnimatedSection 
          className="relative"
          animation="fadeIn"
          delay={0.7}
        >
          <PricingList />
          <AnimatedElement
            as={LeftLine}
            delay={0.8}
            direction="left"
            animation="slideIn"
          />
          <AnimatedElement
            as={RightLine}
            delay={0.9}
            direction="right"
            animation="slideIn"
          />
        </AnimatedSection>

        <AnimatedSection 
          className="flex justify-center mt-10"
          animation="fadeIn"
          delay={1.0}
        >
          <motion.a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              scale: [1, 1.05, 1],
            } : {}}
            transition={{ 
              delay: 1.1,
              duration: 0.5,
              scale: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            whileHover={{ 
              scale: 1.1,
              color: "#4F46E5"
            }}
          >
            {language === 'en' ? 'See the full details' : 'Ver todos los detalles'}
          </motion.a>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Pricing;
