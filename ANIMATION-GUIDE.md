# Animation System Guide

This guide explains how to use the animation system in the TAT Consulting website.

## Components

### 1. AnimatedSection

A wrapper component that applies animations to a section of the page.

```jsx
import AnimatedSection from './components/AnimatedSection';

<AnimatedSection 
  animation="fadeInUp" // Animation type
  delay={0.2}          // Delay before animation starts (in seconds)
  distance={30}        // Distance to animate from (in pixels)
  duration={0.6}       // Duration of the animation (in seconds)
  viewportAmount={0.1} // How much of the element needs to be visible to trigger
  once={true}          // Whether to animate only once
>
  {/* Your content here */}
</AnimatedSection>
```

**Animation Types:**
- `fadeIn`: Fade in from transparent
- `fadeInUp`: Fade in while moving up
- `fadeInDown`: Fade in while moving down
- `fadeInLeft`: Fade in while moving from left
- `fadeInRight`: Fade in while moving from right
- `scaleUp`: Scale up from smaller size
- `zoomIn`: Zoom in from center

### 2. AnimatedElement

A component for animating individual elements.

```jsx
import AnimatedElement from './components/AnimatedElement';

<AnimatedElement 
  as="div"            // HTML element or React component
  direction="up"      // Animation direction
  delay={0.1}         // Delay before animation starts
  distance={20}       // Distance to animate from
  duration={0.5}      // Duration of the animation
  className="my-class"
>
  {/* Your content here */}
</AnimatedElement>
```

**Directions:**
- `up`: Animate from bottom
- `down`: Animate from top
- `left`: Animate from right
- `right`: Animate from left
- `scale`: Scale up from smaller
- `zoom`: Zoom in from center

### 3. AnimatePresenceWrapper

Wrapper for exit animations when components are unmounted.

```jsx
import AnimatePresenceWrapper from './components/AnimatePresenceWrapper';

<AnimatePresenceWrapper>
  {/* Your content with exit animations */}
</AnimatePresenceWrapper>
```

## Hooks

### useScrollAnimation

A custom hook for scroll-based animations.

```jsx
import { useScrollAnimation } from './hooks/useScrollAnimation';

function MyComponent() {
  const animationProps = useScrollAnimation({
    delay: 0.2,
    duration: 0.6,
    once: true,
    amount: 0.1,
    yFrom: 20,      // Start 20px below
    opacityFrom: 0,  // Start transparent
  });

  return <motion.div {...animationProps}>Animate me!</motion.div>;
}
```

## Utility Functions

### Animation Variants

Predefined animation variants for Framer Motion.

```jsx
import { fadeIn, slideIn, zoomIn } from './utils/animations';

// Usage with Framer Motion
<motion.div
  initial="hidden"
  animate="show"
  variants={fadeIn('up', 0.2, 20)}
>
  Content
</motion.div>
```

## Best Practices

1. **Performance**: Use `once={true}` for animations that don't need to replay.
2. **Consistency**: Use the same animation types and timings throughout the site.
3. **Accessibility**: Ensure animations respect the user's motion preferences.
4. **Testing**: Test animations on different devices and screen sizes.

## Troubleshooting

- If an animation isn't playing, check if the element is visible in the viewport.
- Ensure all required props are passed to the animation components.
- Check the browser's console for any error messages.

---

For more information, refer to the [Framer Motion documentation](https://www.framer.com/motion/).
