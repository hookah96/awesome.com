import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Products';
import { css } from 'emotion';

const mainBody = css`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

const footerPosition = css`
  position: absolute;
  width: 100%;
`;

const Pages = () => {
  const scrollToCompany = useRef();
  return (
    <NavBar scrollToCompany={scrollToCompany}>
      <div className={mainBody}>
        <Switch>
          <Route path='/products' render={() => <Products />} />
          <Route
            path='/'
            render={() => <Homepage scrollToCompany={scrollToCompany} />}
          />
        </Switch>
      </div>

      <div className={footerPosition}>
        <Footer scrollToCompany={scrollToCompany} />
      </div>
    </NavBar>
  );
};

export default Pages;
