import React from 'react';
import { container } from './style';
import SideNavBar from '../../components/SideNavBar';
import Carousel from '../../components/Carousel/';
import TrendingCategories from '../../components/TrendingCategories';
import CompanyCard from '../../components/CompanyCard';
import Footer from '../../components/Footer';

const SearchPage = ({
  isTablet,
  isOpenSideNav,
  setIsOpenSideNav,
  scrollToCompany,
}) => {
  return (
    <>
      {isTablet && (
        <SideNavBar
          isOpenSideNav={isOpenSideNav}
          setIsOpenSideNav={setIsOpenSideNav}
          scrollToCompany={scrollToCompany}
        />
      )}
      <div className={container}>
        <Carousel />
        <TrendingCategories isTablet={isTablet} />
      </div>
      <CompanyCard scrollToCompany={scrollToCompany} />
      <Footer scrollToCompany={scrollToCompany} />
    </>
  );
};

export default SearchPage;
