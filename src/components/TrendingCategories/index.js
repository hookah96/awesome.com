import React from 'react';
import {
  container,
  trendCat,
  flexCategories,
  catContainer,
  catIcons,
  catTitle,
} from './style';
import toolbox from '../../images/day9-toolbox 1.svg';
import mac from '../../images/day42-imac 1.svg';
import polaroid from '../../images/polaroidweb 1.svg';
import stationery from '../../images/stationery 1.svg';

const TrendingCategories = () => {
  const categories = [
    {
      icon: mac,
      title: 'Computers',
    },
    {
      icon: polaroid,
      title: 'Photography',
    },
    {
      icon: toolbox,
      title: 'Gardening',
    },
    {
      icon: stationery,
      title: 'Stationery',
    },
  ];

  const mapTrendingCat = () => {
    return (
      <div className={flexCategories}>
        {categories.map((cat, i) => (
          <div key={i} className={catContainer}>
            <img src={cat.icon} alt={cat.title} className={catIcons} />
            <div className={catTitle}>{cat.title}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={container}>
      <p>Trending Categories</p>
      <div className={trendCat}>{mapTrendingCat()}</div>
    </div>
  );
};

export default TrendingCategories;
