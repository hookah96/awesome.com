import React from 'react';
import {
  container,
  trendCat,
  flexCategories,
  catContainer,
  catIcons,
  catTitle,
} from './style';
import { categories } from '../../utils/arraysForMapping/forTrendingCategories';

const TrendingCategories = () => {
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
