import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once !== undefined ? options.once : true,
    amount: options.amount || 0.1,
    margin: options.margin || '0px 0px -50px 0px',
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationVariants = {
    hidden: { 
      opacity: options.opacityFrom || 0,
      y: options.yFrom || 20,
      x: options.xFrom || 0,
      scale: options.scaleFrom || 1,
      transition: {
        duration: options.duration || 0.6,
        ease: options.ease || 'easeOut',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: options.duration || 0.6,
        delay: options.delay || 0,
        ease: options.ease || 'easeOut',
        when: 'beforeChildren',
        staggerChildren: options.staggerChildren || 0.1,
      },
    },
  };

  return {
    ref,
    initial: 'hidden',
    animate: hasAnimated ? 'show' : 'hidden',
    variants: animationVariants,
    custom: options.custom,
  };
};
