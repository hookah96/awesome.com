import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { scrollingToCompany } from '../../utils/scrollingToCompany';
import {
  footContainer,
  nav,
  siteMap,
  infoContainer,
  infoDetails,
  infoIcons,
  socialNetworks,
  paymentIcons,
  socialMap,
  text,
  socialIcons,
  credits,
} from './style';
import {
  paymentMethods,
  socials,
} from '../../utils/arraysForMapping/forFooter';

const Footer = ({ scrollToCompany }) => {
  const mapIcons = (arr, className) => {
    return (
      <div className={socialMap}>
        {arr === socials
          ? arr.map((el, i) => (
              <a
                key={i}
                href={el.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={el.title} alt={el.link} className={className} />
              </a>
            ))
          : arr.map((el, i) => (
              <img key={i} src={el} alt={el} className={className} />
            ))}
      </div>
    );
  };

  return (
    <div className={footContainer}>
      <div className={siteMap}>
        <NavLink to='/products/all-products' className={nav}>
          shop
        </NavLink>
        <NavLink to='/' className={nav}>
          <div onClick={() => scrollingToCompany(scrollToCompany)}>
            our company
          </div>
        </NavLink>
        <div className={nav}>contact</div>
      </div>

      <div className={infoContainer}>
        <div>
          <div className={infoDetails}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={infoIcons} />
            <div className={text}>Heraklion, Crete</div>
          </div>
          <div className={infoDetails}>
            <FontAwesomeIcon icon={faPhoneAlt} className={infoIcons} />
            <div className={text}>6985247568</div>
          </div>
          {mapIcons(paymentMethods, paymentIcons)}
        </div>

        <div className={socialNetworks}>
          <div className={text}>Follow us on social</div>
          {mapIcons(socials, socialIcons)}
        </div>
      </div>
      <div className={credits}>Designed & Developed by Giorgos Makrakis</div>
    </div>
  );
};

export default Footer;
