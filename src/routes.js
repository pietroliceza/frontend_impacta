import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Index from './pages/Index';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';
import Sales from './pages/Sales';
import AddSale from './pages/AddSale';
import Purchases from './pages/Purchases';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/products" exact component={ Index } />
        <Route path="/products/add" exact component={ AddProduct } />
        <Route path="/categories" exact component={ Categories } />
        <Route path="/purchase" exact component={ Purchases } />
        <Route path="/categories/add" exact component={ AddCategory } />
        <Route path="/sales" exact component={ Sales } />
        <Route path="/sales/add" exact component={ AddSale } />
      </Switch>
    </BrowserRouter>
  );
}
