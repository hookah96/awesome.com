import React, { useState } from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
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
import SideNavBar from './SideNavBar';
import { categories } from '../../utils/arraysForMapping/forNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

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

  const { url } = useRouteMatch();
  const categoryMap = () => {
    return categories.map((el, i) => (
      <div key={i} className={cat}>
        {el.name}
      </div>
    ));
  };

  return (
    <>
      {!isTablet ? (
        <div className={NavBarContainer}>
          <NavLink to='/' exact activeClassName={active}>
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
                    <NavLink to='/products/' activeClassName={active}>
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
        <SideNavBar
          isOpenSideNav={isOpenSideNav}
          setIsOpenSideNav={setIsOpenSideNav}
        />
      )}

      {children}
    </>
  );
};

export default NavBar;
