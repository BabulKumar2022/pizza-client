import React from 'react'


import { TopMenu } from './components/TopMenu';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';





function App() {
  return (
    <BrowserRouter >
          <TopMenu/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/cart" element={<CartScreen/>} exact />
            <Route path="/about" element={<About/>} exact />
            <Route path="/contact" element={<Contact/>} exact />
            <Route path="/policy" element={<Policy/>} exact />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
