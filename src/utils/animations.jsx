import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Animation variants with scroll-based triggers
// Fade in with direction
export const fadeIn = (direction = 'up', delay = 0, distance = 20) => ({
  offscreen: {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: delay * 0.3, // Reduce delay
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

// Fade in up animation
export const fadeInUp = {
  offscreen: { 
    opacity: 0, 
    y: 40,
    scale: 0.98
  },
  onscreen: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Container animation with staggered children
export const container = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster stagger
      when: "beforeChildren",
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

export const staggerContainer = (staggerChildren = 0.05, delayChildren = 0) => ({
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren * 0.5, // Reduce delay
      when: "beforeChildren",
      ease: [0.16, 1, 0.3, 1]
    },
  },
});

export const textVariant = (delay = 0) => ({
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: delay * 0.5, // Reduce delay
      ease: [0.16, 1, 0.3, 1]
    },
  },
});

export const slideIn = (direction = 'left', type = 'spring', delay = 0, duration = 0.8) => ({
  offscreen: {
    x: direction === 'left' ? '-20%' : direction === 'right' ? '20%' : 0,
    y: direction === 'up' ? '20%' : direction === 'down' ? '20%' : 0,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      bounce: 0.4,
      duration,
      delay: delay * 0.5, // Reduce delay
      ease: [0.16, 1, 0.3, 1]
    },
  },
});

// Scale up animation
export const scaleUp = {
  offscreen: { 
    scale: 0.9, 
    opacity: 0,
    y: 20
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

export const zoomIn = (delay = 0, duration = 0.8) => ({
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration,
      delay: delay * 0.5, // Reduce delay
      ease: [0.16, 1, 0.3, 1]
    },
  },
});

// Animation component
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;

// Animation wrapper component with scroll-based triggers
export const AnimateOnScroll = ({ children, className = '', variants, threshold = 0.1, ...props }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: threshold, margin: '0px 0px -20% 0px' }}
      variants={variants || fadeIn('up', 0.2, 20)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scroll animation variants
export const scrollVariants = {
  offscreen: {
    y: 60,
    opacity: 0,
    scale: 0.98
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

// Animation wrapper for page transitions
export const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
