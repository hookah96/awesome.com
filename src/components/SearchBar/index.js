import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { input, searchBtn, form_wrapper } from './style';
import { searchProducts } from '../../utils/search';

const SearchBar = ({
  classname,
  keywords,
  setSearchResults,
  searchResults,
}) => {
  const handleChange = (e) => {
    searchProducts(e.target.value, keywords, setSearchResults, searchResults);
  };
  return (
    <div className={classname}>
      <div className={form_wrapper}>
        <input
          type='text'
          placeholder='Find what you think is awesome!'
          className={input}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faSearch} className={searchBtn} />
      </div>
    </div>
  );
};

export default SearchBar;
