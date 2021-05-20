import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { scrollingToCompany } from '../../utils/scrollingToCompany';
import {
  sideNavContainer,
  openSideNav,
  sideNavOptions,
  options,
  openOptionsBorderTop,
  subnavContainer,
  subNav,
  link,
  inactiveSideNav,
  inactiveSideNavOptions,
} from './style';
import { cx } from 'emotion';
import { categories } from '../../utils/arraysForMapping/forNavBar';

const SideNavBar = ({ isOpenSideNav, setIsOpenSideNav, scrollToCompany }) => {
  const [subnav, setSubnav] = useState(false);

  const SubNav = () => {
    return categories.map((el, i) => (
      <NavLink to={`/products/${el.link}`} className={link} key={i}>
        <div className={subNav} onClick={toggleSideNav}>
          {el.name}
        </div>
      </NavLink>
    ));
  };

  const toggleSideNav = () => {
    setSubnav(false);
    setIsOpenSideNav((prev) => !prev);
  };

  const showSubnav = () => {
    setSubnav((prev) => !prev);
  };

  return (
    <div className={isOpenSideNav ? sideNavContainer : inactiveSideNav}>
      <div className={isOpenSideNav ? sideNavOptions : inactiveSideNavOptions}>
        <div className={options} onClick={showSubnav}>
          shop
          <FontAwesomeIcon icon={subnav ? faCaretUp : faCaretDown} />
        </div>
        {subnav && (
          <div className={subnavContainer}>
            <SubNav />
          </div>
        )}
        <NavLink
          to='/'
          className={subnav ? cx(options, openOptionsBorderTop) : options}
        >
          <div
            onClick={() => {
              scrollingToCompany(scrollToCompany);
              setIsOpenSideNav(false);
            }}
          >
            our company
          </div>
        </NavLink>
        <div className={options}>contact</div>
      </div>
    </div>
  );
};

export default SideNavBar;
