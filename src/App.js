import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Login from './component/Login';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;
