export const fadeIn = (direction, amount, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? amount : direction === 'down' ? -amount : 0,
      x: direction === 'left' ? amount : direction === 'right' ? -amount : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const rotate = (direction, degrees, duration, delay) => {
  return {
    hidden: {
      rotate: direction === 'clockwise' ? 0 : degrees, // Start position
      opacity: 0,
    },
    show: {
      rotate: direction === 'clockwise' ? degrees : 0, // End position
      opacity: 1,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const card = (direction, amount, delay, rotate) => {
  return {
    hidden: {
      y: direction === 'up' ? amount : direction === 'down' ? -amount : 0,
      x: direction === 'left' ? amount : direction === 'right' ? -amount : 0,
      rotateX: rotate,
      rotateY: rotate,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
