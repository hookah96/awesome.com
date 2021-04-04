import React, { useState } from 'react';
import {
  NavBarContainer,
  logo,
  navMenu,
  navOptions,
  headerActions,
  searchBarPositioning,
  searchbarWidth,
  basketIcon,
  ddPositioning,
  dropdownContainer,
  ddIcon,
  ddelement,
  ddContainerCat,
  cat,
} from './style';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faCaretRight,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const categories = [
  {
    name: 'Computers',
    link: '',
  },
  {
    name: 'Photography',
    link: '',
  },
  {
    name: 'Audio',
    link: '',
  },
  {
    name: 'Stationery',
    link: '',
  },
  {
    name: 'Health',
    link: '',
  },
  {
    name: 'Fashion',
    link: '',
  },
  {
    name: 'Pet supplies',
    link: '',
  },
];

const NavBar = ({
  cart,
  children,
  isTablet,
  setIsOpenSideNav,
  isOpenSideNav,
  scrollToCompany,
}) => {
  const [inHover, setInHover] = useState(false);
  const [inHoverCat, setInHoverCat] = useState(false);

  const scrolling = () => {
    window.scrollTo({
      top: scrollToCompany.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const categoryMap = () => {
    return categories.map((el, i) => (
      <div key={i} className={cat}>
        {el.name}
      </div>
    ));
  };

  const toggleNavbar = () => {
    setIsOpenSideNav((prev) => !prev);
  };
  return (
    <>
      {!isTablet ? (
        <div className={NavBarContainer}>
          <div className={logo}>awesome</div>

          <div className={navMenu}>
            <div
              className={navOptions}
              onMouseEnter={() => setInHover(true)}
              onMouseLeave={() => setInHover(false)}
            >
              shop
              {inHover && (
                <div className={dropdownContainer}>
                  <div className={ddPositioning}>
                    <div
                      onMouseEnter={() => setInHoverCat(true)}
                      onMouseLeave={() => setInHoverCat(false)}
                      className={ddelement}
                    >
                      categories
                      <FontAwesomeIcon icon={faCaretRight} className={ddIcon} />
                    </div>
                    <div className={ddelement}>products</div>
                  </div>
                  {inHoverCat && (
                    <div
                      className={ddContainerCat}
                      onMouseEnter={() => setInHoverCat(true)}
                      onMouseLeave={() => setInHoverCat(false)}
                    >
                      {categoryMap()}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={navOptions} onClick={scrolling}>
              our company
            </div>

            <div className={navOptions}>contact</div>
          </div>

          <div className={headerActions}>
            <SearchBar classname={searchbarWidth} />
            <FontAwesomeIcon icon={faShoppingCart} className={basketIcon} />
          </div>
        </div>
      ) : (
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
      )}

      {children}
    </>
  );
};

export default NavBar;
