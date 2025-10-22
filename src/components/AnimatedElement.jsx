import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedElement = ({
  as: Component = motion.div,
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.6,
  viewportAmount = 0.1,
  once = true,
  ...props
}) => {
  const getAnimationProps = () => {
    const baseProps = {
      delay,
      duration,
      once,
      amount: viewportAmount,
      opacityFrom: 0,
    };

    switch (direction) {
      case 'up':
        return { ...baseProps, yFrom: distance };
      case 'down':
        return { ...baseProps, yFrom: -distance };
      case 'left':
        return { ...baseProps, xFrom: distance };
      case 'right':
        return { ...baseProps, xFrom: -distance };
      case 'scale':
        return { ...baseProps, scaleFrom: 0.9 };
      case 'zoom':
        return { ...baseProps, scaleFrom: 0.5 };
      default:
        return baseProps;
    }
  };

  const animationProps = useScrollAnimation(getAnimationProps());

  return (
    <Component
      {...animationProps}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;
