import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import {
  sideNavContainer,
  openSideNav,
  sideNavOptions,
  options,
  openOptionsBorderTop,
  subnavContainer,
  subNav,
} from './style';
import { cx } from 'emotion';
import { categories } from '../NavBar';

const SideNavBar = ({ isOpenSideNav, setIsOpenSideNav, scrollToCompany }) => {
  const [subnav, setSubnav] = useState(false);

  const SubNav = () => {
    return categories.map((el, i) => (
      <div key={i} className={subNav} onClick={toggleSideNav}>
        {el.name}
      </div>
    ));
  };

  const toggleSideNav = () => {
    setSubnav(false);
    setIsOpenSideNav((prev) => !prev);
  };

  const showSubnav = () => {
    setSubnav((prev) => !prev);
  };

  const scrolling = () => {
    window.scrollTo({
      top: scrollToCompany.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={
        isOpenSideNav ? cx(sideNavContainer, openSideNav) : sideNavContainer
      }
    >
      <div className={sideNavOptions}>
        <div className={options} onClick={showSubnav}>
          shop
          <FontAwesomeIcon icon={subnav ? faCaretUp : faCaretDown} />
        </div>
        {subnav && (
          <div className={subnavContainer}>
            <SubNav />
          </div>
        )}
        <div
          className={subnav ? cx(options, openOptionsBorderTop) : options}
          onClick={() => {
            scrolling();
            setIsOpenSideNav(false);
          }}
        >
          our company
        </div>
        <div className={options}>contact</div>
      </div>
    </div>
  );
};

export default SideNavBar;
