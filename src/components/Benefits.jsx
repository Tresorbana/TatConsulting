import { getTranslatedContent } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { motion, useAnimation } from "framer-motion";
import { container, fadeInUp } from "../utils/animations.jsx";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/animations.css";

const Benefits = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { language } = useLanguage();
  
  // Get translated content based on current language
  const { benefits } = getTranslatedContent(language);

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <Section>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: 'easeOut'
              },
            },
          }}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title={benefits.heading}
          />
        </motion.div>

        <motion.div 
          className="relative grid gap-8 md:grid-cols-2 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {benefits.items.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                } 
              }}
              className={`relative p-[1px] rounded-2xl overflow-hidden md:flex ${
                index % 2 === 0 ? 'md:translate-y-[-2rem]' : 'md:translate-y-[2rem] lg:translate-y-[4rem]'
              } transition-transform duration-300 hover:!translate-y-0 group`}
              style={{
                background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.5) 0%, rgba(168, 85, 247, 0.5) 50%, rgba(236, 72, 153, 0.5) 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
                backdropFilter: 'blur(10px)',
                maxWidth: '100%',
              }}
            >
              <motion.div 
                className="relative z-2 flex flex-col h-full p-8 bg-n-8/90 backdrop-blur-sm rounded-2xl group-hover:bg-n-8/80 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <motion.h5 
                  className="h5 mb-5"
                  variants={fadeInUp}
                >
                  {item.title}
                </motion.h5>
                <motion.p 
                  className="body-2 mb-6 text-n-3"
                  variants={fadeInUp}
                >
                  {item.text}
                </motion.p>
                <motion.div 
                  className="flex items-center mt-auto"
                  variants={fadeInUp}
                >
                  <motion.img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="rounded-lg bg-n-7 p-2"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { 
                        duration: 0.6,
                        ease: "easeInOut"
                      } 
                    }}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {benefits.explore}
                  </p>
                  <Arrow className="ml-2" />
                </motion.div>
              </motion.div>

              {item.light && <GradientLight />}
              
              <div className="absolute inset-0.5 bg-n-8 rounded-2xl" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity">
                  {item.imageUrl && (
                    <motion.img
                      src={item.imageUrl}
                      className="w-full h-full object-cover"
                      alt={item.title}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Benefits;
