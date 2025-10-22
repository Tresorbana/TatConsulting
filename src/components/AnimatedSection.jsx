import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn } from '../utils/animations.jsx';

const AnimatedSection = ({
  children,
  className = '',
  id = '',
  delay = 0,
  viewportAmount = 0.1,
  once = true,
  animation = 'fadeInUp',
  distance = 30,
  duration = 0.6,
  as: Component = motion.div,
  ...props
}) => {
  const getAnimationProps = () => {
    const baseProps = {
      delay,
      duration,
      once,
      amount: viewportAmount,
    };

    switch (animation) {
      case 'fadeIn':
        return { ...baseProps, opacityFrom: 0 };
      case 'fadeInUp':
        return { ...baseProps, yFrom: distance };
      case 'fadeInDown':
        return { ...baseProps, yFrom: -distance };
      case 'fadeInLeft':
        return { ...baseProps, xFrom: -distance };
      case 'fadeInRight':
        return { ...baseProps, xFrom: distance };
      case 'scaleUp':
        return { ...baseProps, scaleFrom: 0.9, opacityFrom: 0 };
      case 'zoomIn':
        return { ...baseProps, scaleFrom: 0.5, opacityFrom: 0 };
      default:
        return baseProps;
    }
  };

  const animationProps = useScrollAnimation(getAnimationProps());

  return (
    <Component
      {...animationProps}
      className={className}
      id={id}
      {...props}
    >
      {children}
    </Component>
  );
};

// Add display name for better debugging
AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
