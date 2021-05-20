import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  titleContainer,
  nameSortCont,
  title,
  btn,
  sortName,
  ddContainer,
  ddElement,
  paginationContainer,
  paginationBtn,
  pageNumber,
  activePageNum,
} from './style';
import { cx } from 'emotion';

const TitleForProducts = ({
  name,
  sort,
  setSort,
  pageIndex,
  setPageIndex,
  pagination,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const sortOpts = ['Top Rated', 'Price: Low to High', 'Price: High to Low'];
  const displaySortOpts = sortOpts.map((el) => (
    <div key={el} className={ddElement} onClick={() => handleClick(el)}>
      {el}
    </div>
  ));

  const handleClick = (el) => {
    setSort(el);
    setDropdown((prev) => !prev);
  };

  const handlePrevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageIndex((prev) => (!pagination.links.next ? prev : prev + 1));
  };

  const displayPages = () => {
    let arr = [];
    for (let i = 1; i <= pagination.total_pages; i++) {
      arr.push(i);
    }
    return arr.map((el, i) => (
      <button
        className={
          el === pageIndex ? cx(pageNumber, activePageNum) : pageNumber
        }
        key={i}
        onClick={() => setPageIndex(el)}
      >
        {el}
      </button>
    ));
  };

  return (
    <div className={titleContainer}>
      <div className={nameSortCont}>
        <div className={title}>{name}</div>
        <div className={btn} onClick={() => setDropdown((prev) => !prev)}>
          <div className={sortName}>{sort}</div>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        {dropdown && <div className={ddContainer}>{displaySortOpts}</div>}
      </div>
      <div className={paginationContainer}>
        <button
          className={paginationBtn}
          onClick={handlePrevPage}
          disabled={pageIndex === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>{displayPages()}</span>
        <button
          className={paginationBtn}
          onClick={handleNextPage}
          disabled={!pagination.links.next}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default TitleForProducts;
