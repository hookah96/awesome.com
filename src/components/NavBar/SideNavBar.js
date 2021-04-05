import React from 'react';
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

const SideNavBar = ({ isOpenSideNav, setIsOpenSideNav }) => {
  const toggleNavbar = () => {
    setIsOpenSideNav((prev) => !prev);
  };
  return (
    <div className={NavBarContainer}>
      <div className={logo}>awesome</div>

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
  );
};

export default SideNavBar;
