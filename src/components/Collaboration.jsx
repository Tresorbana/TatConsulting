import { logo, check } from "../assets";
import { getTranslatedContent, collabApps } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { useContext, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeIn, slideIn, zoomIn, staggerContainer, AnimateOnScroll } from "../utils/animations";

const Collaboration = () => {
  const { language } = useContext(LanguageContext);
  const { collabContent, collabText } = getTranslatedContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <Section id="collaboration" crosses>
      <div className="container lg:flex" ref={ref}>
        <div className="max-w-[25rem]">
          <AnimateOnScroll
            variants={fadeIn('up', 0.2, 20)}
            className="h2 mb-4 md:mb-8"
          >
            {language === 'en' ? 'How We Work With You' : 'Cómo Trabajamos Contigo'}
          </AnimateOnScroll>

          <AnimateOnScroll
            variants={staggerContainer(0.05, 0.1)}
            className="max-w-[22rem] mb-10 md:mb-14"
          >
            <ul className="list-none m-0 p-0">
              {collabContent.map((item, index) => (
                <motion.li 
                  className="mb-3 py-3" 
                  key={item.id}
                  variants={fadeIn('right', index * 0.1, 10)}
                >
                  <div className="flex items-center">
                    <motion.img 
                      src={check} 
                      width={24} 
                      height={24} 
                      alt="check"
                      variants={{
                        offscreen: { scale: 0 },
                        onscreen: { 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }
                        }
                      }}
                    />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && (
                    <motion.p 
                      className="body-2 mt-3 text-n-4"
                      variants={{
                        offscreen: { opacity: 0, y: 10 },
                        onscreen: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.3 }
                        }
                      }}
                    >
                      {item.text}
                    </motion.p>
                  )}
                </motion.li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeIn('up', 0.4, 10)}>
            <Button>{language === 'en' ? 'Try it now' : 'Pruébelo ahora'}</Button>
          </AnimateOnScroll>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4 mr-20">
          <AnimateOnScroll
            variants={fadeIn('left', 0.3, 20)}
            className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </AnimateOnScroll>

          <div className="relative w-full">
            <AnimateOnScroll
              variants={zoomIn(0.4, 0.8)}
              className="flex justify-center items-center mx-auto w-[22rem] aspect-square"
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outermost circle */}
                <div className="absolute w-full h-full rounded-full border-2 border-n-6/20 animate-pulse"></div>
                {/* Third circle */}
                <div className="absolute w-[90%] h-[90%] rounded-full border border-n-6/30"></div>
                {/* Second circle */}
                <div className="absolute w-[75%] h-[75%] rounded-full border-2 border-n-6/40"></div>
                {/* First circle */}
                <div className="absolute w-48 h-48 rounded-full border border-n-6/50"></div>
                {/* Logo container */}
                <div className="w-32 h-32 rounded-full bg-n-8 flex items-center justify-center z-10 shadow-lg">
                  <img
                    src={logo}
                    width={64}
                    height={64}
                    alt="logo"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={fadeIn('right', 0.5, 20)} className="absolute left-0 top-1/2">
              <LeftCurve />
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeIn('left', 0.6, 20)} className="absolute right-0 top-1/2">
              <RightCurve />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
