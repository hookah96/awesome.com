import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
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
import paypal from '../../images/001-paypal.svg';
import mastercard from '../../images/002-mastercard.svg';
import americanExpress from '../../images/003-american express.svg';
import visa from '../../images/004-visa.svg';
import fb from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

const Footer = ({ scrollToCompany }) => {
  const paymentMethods = [
    `${paypal}`,
    `${mastercard}`,
    `${visa}`,
    `${americanExpress}`,
  ];
  const socials = [
    { title: `${fb}`, link: 'https://www.facebook.com/' },
    { title: `${instagram}`, link: 'https://www.instagram.com/' },
    {
      title: `${linkedin}`,
      link: 'https://www.linkedin.com/in/giorgos-makrakis/',
    },
  ];

  const scrolling = () => {
    window.scrollTo({
      top: scrollToCompany.current.offsetTop,
      behavior: 'smooth',
    });
  };

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
        <div className={nav} onClick={() => scrolling(0)}>
          shop
        </div>
        <div onClick={() => scrolling()} className={nav}>
          our company
        </div>
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
