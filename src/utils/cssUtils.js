const breakpoints = [
  {
    min_width: 320,
    max_width: 480,
  },
  {
    min_width: 768,
    max_width: 1023,
  },
];

export const mq = breakpoints.map(
  (bp) =>
    `@media only screen and (min-width: ${bp.min_width}px) and (max-width: ${bp.max_width}px)`
);
