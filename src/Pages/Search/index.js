import React from 'react';
// import { useQuery } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { container } from './style';
// , logo1
// import logo from './../../images/logo1.png';
// // import { fetchAllProducts } from './../../utils/utils';
// import SearchBar from '../../components/SearchBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { infoBtn } from './style';
// import InformationCard from '../../components/InformationCard/index';
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
