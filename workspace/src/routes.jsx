import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';

export default (store) => {

  return (
    <Route path="/" component={App}>
      <Route path="helloworld" component={HelloWorld}/>
    </Route>
  );
};
