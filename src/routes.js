import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Index from './pages/Index';
import AddProduct from './pages/AddProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/products" exact component={ Index } />
        <Route path="/products/add" exact component={ AddProduct } />
      </Switch>
    </BrowserRouter>
  );
}
