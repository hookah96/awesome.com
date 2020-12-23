import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { box, border, dropdown, dropdownList } from './style';

const ItemsCounter = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const numbers = [1, 2, 3, 4, 5];

  const handleClick = (num) => {
    setOpen(false);
    setQuantity(num);
  };
  return (
    <>
      <div className={border}>
        {quantity}
        <FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className={dropdown}>
          {numbers.map((num, i) => (
            <div key={i} onClick={() => handleClick(num)}>
              {num}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemsCounter;
