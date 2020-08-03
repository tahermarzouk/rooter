import React from 'react';

import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Category from './components/Category';
import Products from './components/Products';
import AdminArea from './components/AdminArea';
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/Category"> Category</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/login">AdminArea</Link></li>
        </ul>


        <Route path="/" exact component={Home}></Route>
        <Route path="/Category" component={Category}></Route>
        <Route path="/Products" component={Products}></Route>
        <Route path="/login" component={AdminArea}></Route>

      </div>
    </BrowserRouter>
  );
}




const Home = () => {
  return (<h1>Home</h1>)
}



export default App;
