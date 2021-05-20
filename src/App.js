import React from 'react';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import Pages from './Pages';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Route path='/' component={Pages} />
      </HashRouter>
      <ReactQueryDevtools />
    </div>
  );
};

export default App;
