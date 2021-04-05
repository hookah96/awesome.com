const breakpoints = [
  {
    min_width: 320,
    max_width: 480,
  },
  {
    min_width: 481,
    max_width: 768,
  },
  {
    min_width: 769,
    max_width: 1024,
  },
  {
    min_width: 1025,
    max_width: 1200,
  },
  {
    min_width: 1201,
    max_width: 2000,
  },
];

export const mq = breakpoints.map(
  (bp) =>
    `@media only screen and (min-width: ${bp.min_width}px) and (max-width: ${bp.max_width}px)`
);
