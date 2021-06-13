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
import AddPurchase from './pages/AddPurchase';
import Providers from './pages/Providers';
import Estimate from './pages/Estimate';
import Users from './pages/Users';
import Clients from './pages/Clients';
import AddEstimate from './pages/AddEstimate';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/products" exact component={ Index } />
        <Route path="/products/add" exact component={ AddProduct } />
        <Route path="/categories" exact component={ Categories } />
        <Route path="/categories/add" exact component={ AddCategory } />
        <Route path="/sales" exact component={ Sales } />
        <Route path="/sales/add" exact component={ AddSale } />
        <Route path="/purchases" exact component={ Purchases } />
        <Route path="/purchases/add" exact component={ AddPurchase } />
        <Route path="/providers" exact component={ Providers } />
        <Route path="/estimates" exact component={ Estimate } />
        <Route path="/users" exact component={ Users } />
        <Route path="/clients" exact component={ Clients } />
        <Route path="/estimates/add" exact component={ AddEstimate } />
      </Switch>
    </BrowserRouter>
  );
}
