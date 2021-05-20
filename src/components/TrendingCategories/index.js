import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  trendCatContainer,
  trendCat,
  flexCategories,
  catContainer,
  catIconsCont,
  catIcons,
  catTitle,
} from './style';
import { categories } from '../../utils/arraysForMapping/forTrendingCategories';

const TrendingCategories = () => {
  const mapTrendingCat = () => {
    return (
      <div className={flexCategories}>
        {categories.map((cat, i) => (
          <NavLink to={cat.link} className={catContainer} key={i}>
            <div className={catIconsCont}>
              <img src={cat.icon} alt={cat.title} className={catIcons} />
            </div>
            <div className={catTitle}>{cat.title}</div>
          </NavLink>
        ))}
      </div>
    );
  };

  return (
    <div className={trendCatContainer}>
      <p>Trending Categories</p>
      <div className={trendCat}>{mapTrendingCat()}</div>
    </div>
  );
};

export default TrendingCategories;
