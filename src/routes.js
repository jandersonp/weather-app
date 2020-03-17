import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Clima from './pages/Clima';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Clima} />
      </Switch>
    </BrowserRouter>
  );
}
