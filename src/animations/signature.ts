import type { Variants } from 'framer-motion';

export const maskReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] // Custom calm easing
    }
  }
};

export const editorialReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};
