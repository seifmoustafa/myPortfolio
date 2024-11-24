export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: .1 } },
};

export const slideIn = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { duration: 1 } },
};
