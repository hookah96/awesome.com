import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { container, logo1 } from './style';
import logo from './../../images/logo1.png';
import { fetchAllProducts } from './../../utils/utils';
import SearchBar from '../../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { infoBtn } from './style';
import InformationCard from '../../components/InformationCard/index';

const SearchPage = () => {
  const { data } = useQuery('result', fetchAllProducts);
  const [show, setShow] = useState(false);

  return (
    <>
      <ReactQueryDevtools initialIsOpen />
      <div className={container}>
        <img src={logo} alt='logo' className={logo1} />
        <SearchBar />

        <FontAwesomeIcon
          icon={faInfoCircle}
          className={infoBtn}
          onClick={() => setShow(!show)}
        />
        {show ? <InformationCard /> : null}
      </div>
    </>
  );
};

export default SearchPage;
