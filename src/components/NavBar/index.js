import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavBarContainer,
  logo,
  navMenu,
  navOptions,
  headerActions,
  searchbarWidth,
  basketIcon,
  ddPositioning,
  dropdownContainer,
  ddIcon,
  ddelement,
  ddContainerCat,
  cat,
  active,
} from './style';
import SearchBar from '../SearchBar';
import MobileNavBar from './MobileNavBar';
import { categories } from '../../utils/arraysForMapping/forNavBar';
import { scrollingToCompany } from '../../utils/scrollingToCompany';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ children, scrollToCompany }) => {
  const [inHover, setInHover] = useState(false);
  const [inHoverCat, setInHoverCat] = useState(false);

  const mediaToMatch = '(max-width: 768px)';
  const [isTablet, setIsTablet] = useState(
    window.matchMedia(mediaToMatch).matches
  );

  useEffect(() => {
    let mediaQuery = window.matchMedia(mediaToMatch);
    mediaQuery.matches !== isTablet && setIsTablet(mediaQuery.matches);

    const listener = () => setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [isTablet, mediaToMatch]);

  const categoryMap = () => {
    return categories.map((el, i) => (
      <NavLink to={`/products/${el.link}`} activeClassName={active}>
        <div key={i} className={cat}>
          {el.name}
        </div>
      </NavLink>
    ));
  };

  return (
    <>
      {!isTablet ? (
        <div className={NavBarContainer}>
          <NavLink to='/' activeClassName={active}>
            <div className={logo}>awesome</div>
          </NavLink>

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
                    <NavLink
                      to='/products/all-products'
                      activeClassName={active}
                    >
                      <div className={ddelement}>products</div>
                    </NavLink>
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
            <NavLink to='/' className={navOptions}>
              <div onClick={() => scrollingToCompany(scrollToCompany)}>
                our company
              </div>
            </NavLink>
            <div className={navOptions}>contact</div>
          </div>

          <div className={headerActions}>
            <SearchBar classname={searchbarWidth} />
            <FontAwesomeIcon icon={faShoppingCart} className={basketIcon} />
          </div>
        </div>
      ) : (
        <MobileNavBar scrollToCompany={scrollToCompany} />
      )}

      {children}
    </>
  );
};

export default NavBar;
