export const titleAnim = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const showNavbar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const container = {
  hidden: { x: 900 },
  show: {
    x: 0,
    rotate: 360,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "afterChildren",
      staggerChildren: 0.5,
      position: "fixed",
      zindex: -100,
    },
  },
};

export const movePic = {
  hidden: { opacity: 0, x: 100, transition: { duration: 1 } },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  // exit: {
  //   opacity: 0,
  //   x: 100,
  //   transition: {
  //     duration: 1,
  //   },
  // },
};
export const moveDiv = {
  hidden: { opacity: 0, x: -100, transition: { duration: 1 } },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  // exit: {
  //   opacity: 0,
  //   x: -100,
  //   transition: {
  //     duration: 1,
  //   },
  // },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      // when: "beforeChildren",
      // staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};
// export const pageTransition = {
//   hidden: { x: 200 },
//   show: {
//     x: 0,
//     transition: {
//       duration: 2,
//       ease: "easeOut",
//       staggerChildren: 1,
//       when: "afterChildren",
//     },
//   },
//   exit: { x: 200 },
// };
