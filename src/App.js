import React from 'react'


import { TopMenu } from './components/TopMenu';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';
import Register from './screen/Register';
import Login from './screen/Login';
import OrderScreen from './screen/OrderScreen';
import AdminScreen from './screen/AdminScreen';
import OrderList from './components/Admin/OrderList';
import UserList from './components/Admin/UserList';
import PizzaList from './components/Admin/PizzaList';
import AddNewPizza from './components/Admin/AddNewPizza';
import  EditPizza  from './components/Admin/EditPizza';





function App() {
  return (
    <BrowserRouter >
          <TopMenu/>
          <NavBar/>
          <Routes>
            <Route path="/admin" element={<AdminScreen/>} >
                <Route path="orderList" element={<OrderList/>}/>
                <Route path="userList" element={<UserList/>}/>
                <Route path="editPizza/:pizzaId" element={<EditPizza/>}/>
                <Route path="pizzaList" element={<PizzaList/>}/>
                <Route path="addPizza" element={<AddNewPizza/>}/>
            </Route>
            <Route path="/orders" element={<OrderScreen/>} exact />
            <Route path="/login" element={<Login/>} exact />
            <Route path="/register" element={<Register/>} exact />
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
