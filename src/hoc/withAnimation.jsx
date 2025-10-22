import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations.jsx';

const withAnimation = (Component, animationProps = {}) => {
  const {
    direction = 'up',
    delay = 0,
    distance = 20,
    duration = 0.6,
    type = 'tween',
    ...restProps
  } = animationProps;

  const AnimatedComponent = forwardRef((props, ref) => {
    const animation = fadeIn(direction, delay, distance);
    
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={animation}
        transition={{ type, duration }}
        {...restProps}
      >
        <Component {...props} />
      </motion.div>
    );
  });

  AnimatedComponent.displayName = `withAnimation(${Component.displayName || Component.name || 'Component'})`;
  
  return AnimatedComponent;
};

export default withAnimation;
