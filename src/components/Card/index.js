import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  cardContainer,
  fitDivWidth,
  prodPhoto,
  fitDivHeight,
  prodTitle,
  prodDesc,
  noDesc,
  prodRating,
  prodPrice,
} from './style';
import { cx } from 'emotion';

const Card = ({ product }) => {
  const { name, description, media, price, assets } = product;
  const { image_dimensions } = assets[0];
  const { width, height } = image_dimensions;
  const conditionForImg = height > width;

  const starSystem = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<FontAwesomeIcon icon={faStar} />);
    }
    return arr.map((star, i) => {
      return <div key={i}>{star}</div>;
    });
  };

  return (
    <div className={cardContainer}>
      <div
        className={cx(
          { [fitDivHeight]: conditionForImg },
          { [fitDivWidth]: !conditionForImg }
        )}
      >
        <img src={media.source} alt={name} className={prodPhoto} />
      </div>
      <div className={prodTitle}>{name}</div>
      <div
        className={prodDesc}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {description === '' && (
        <div className={noDesc}>
          <br />
          <br />
        </div>
      )}
      <div>
        <div className={prodRating}>{starSystem()}</div>
        <div className={prodPrice}> {price.formatted_with_symbol}</div>
      </div>
    </div>
  );
};

export default Card;
