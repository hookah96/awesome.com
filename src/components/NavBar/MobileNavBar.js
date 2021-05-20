import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNavBar from '../SideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';
import {
  NavBarContainer,
  logo,
  headerActions,
  searchBarPositioning,
  searchbarWidth,
  basketIcon,
} from './style';

const MobileNavBar = ({ scrollToCompany }) => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  const toggleNavbar = () => {
    setIsOpenSideNav((prev) => !prev);
  };
  return (
    <>
      <div className={NavBarContainer}>
        <Link to='/'>
          <div className={logo}>awesome</div>
        </Link>
        <div className={headerActions}>
          <div className={searchBarPositioning}>
            <SearchBar classname={searchbarWidth} />
          </div>
          <FontAwesomeIcon icon={faShoppingCart} className={basketIcon} />
          <FontAwesomeIcon
            icon={isOpenSideNav ? faTimes : faBars}
            className={basketIcon}
            onClick={toggleNavbar}
          />
        </div>
      </div>
      <SideNavBar
        scrollToCompany={scrollToCompany}
        isOpenSideNav={isOpenSideNav}
        setIsOpenSideNav={setIsOpenSideNav}
      />
    </>
  );
};

export default MobileNavBar;
