import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { category } = useParams();
  return <div>Here we display {category} category</div>;
};

export default CategoryProducts;
