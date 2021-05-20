import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { slider, picture, btnR, btnL, btn, txt, bannerBtn } from './style';
import { cx } from 'emotion';
import { carouselImages } from '../../utils/arraysForMapping/forCarousel';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % carouselImages.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(carouselImages.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <div className={slider}>
      <div onClick={slideLeft}>
        <FontAwesomeIcon icon={faChevronCircleLeft} className={cx(btnL, btn)} />
      </div>
      <div className={cx(txt, carouselImages[index].positioningText)}>
        {carouselImages[index].text}
      </div>
      <button className={cx(bannerBtn, carouselImages[index].positioningBtn)}>
        <NavLink to={carouselImages[index].link}>
          <p>Check now</p>
        </NavLink>
      </button>
      <img
        src={carouselImages[index].image}
        alt={`${carouselImages[index].text}`}
        className={picture}
      />

      <div onClick={slideRight}>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className={cx(btnR, btn)}
        />
      </div>
    </div>
  );
};

export default Carousel;
