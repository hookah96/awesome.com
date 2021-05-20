export const scrollingToCompany = (scrollTo) => {
  setTimeout(() => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }, 20);
};
