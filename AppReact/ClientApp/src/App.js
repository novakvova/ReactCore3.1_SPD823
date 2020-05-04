import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ProductsPage from './components/products';
import Test from './components/Test';
import Login from './components/Login';
import Registration from './components/Registration';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    <Route path='/products/:page?' component={ProductsPage} />
    <Route path='/Test' component={Test} />
    <Route path='/Login' component={Login}/>
    <Route path='/Registration' component={Registration}/>
  </Layout>
);
