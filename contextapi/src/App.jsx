import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import Products from "./components/Products.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home.jsx";
import ProductDetails from "./pages/productdetails/ProductDetails.jsx";

// Create context with default values
const CartContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={{count,setCount}}>
      <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/:id" element={<ProductDetails/>}/>
            </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
export { CartContext };