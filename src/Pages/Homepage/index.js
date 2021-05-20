import React from 'react';
import { container } from './style';
import Carousel from '../../components/Carousel/';
import TrendingCategories from '../../components/TrendingCategories';
import CompanyCard from '../../components/CompanyCard';

const Homepage = ({ isTablet, scrollToCompany }) => {
  return (
    <>
      <div className={container}>
        <Carousel />
        <TrendingCategories isTablet={isTablet} />
      </div>
      <CompanyCard scrollToCompany={scrollToCompany} />
    </>
  );
};

export default Homepage;
