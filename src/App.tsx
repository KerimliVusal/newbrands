import React from 'react';
import './App.css';
import Home from './Home';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import Custom from './custom';
import Like from './like';
import Latest from './latest';
import Footer from './footer';
import Navba from './navbar';
import Detail from './details';
import Shop from './shop';
import Login1 from './login';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Blog from './blog';
import Contact from './contact';
import { useLocation } from "react-router";
import {useEffect,useState} from 'react'
import Cart from './cart';
import Load from './load';

export type CartItemType = {
  id: number;
  name: string;
  cost: string;
  url: string;
  price: number;
  amount: number;
  size:string;
  title:string;
};
  
function App() {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [cart, setCart] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);

  const getTotalItems = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.amount, 0);

const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    // 1. Is the item already added in the cart?
    const isItemInCart = prev.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map(item =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }
    // First time the item is added
    return [...prev, { ...clickedItem, amount: 1 }];
  });
};
console.log(cartItems)

const handleRemoveFromCart = (id: number) => {
  setCartItems(prev =>
    prev.reduce((ack, item) => {
      if (item.id === id) {
        if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1 }];
      } else {
        return [...ack, item];
      }
    }, [] as CartItemType[])
  );
};
useEffect(()=>{
  setTimeout(()=>{
 setLoad(false)
  },5000)
},[])


  return (<div >
    
   {load===true?<Load/>
  :
  <div>
    <Navba setCart={setCart} cartItems={cartItems}/> 
     <Routes>
     <Route path='/' element={<Home />} />
    <Route path='/detail' element={<Detail />} />
    <Route path='/blog' element={<Blog />} /> 
    <Route path='/cart' element={<Cart cartItems={cartItems}  addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}/>} />
    <Route path='/shop' element={<Shop cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart} />} />
    <Route path='/contact' element={<Contact />} />
         </Routes>
        
   </div>
  }    
         
       </div>
  );
};
  

export default App;
