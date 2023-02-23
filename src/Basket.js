import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import { useState } from 'react';

export default function Basket () {
    const [remove, setRemove] = useState([]);

const storedData = window.localStorage.getItem('cartItems');
    let cartItems;
    if (storedData) {
        cartItems = JSON.parse(storedData);
        } else {
        cartItems = [];
        };
    
const uniqueItems = {};
cartItems.forEach(item => {
  if (uniqueItems[item.id]) {
    uniqueItems[item.id].quantity += 1;
  } else {
    uniqueItems[item.id] = item;
  }
});

const basketItems = Object.values(uniqueItems);
    
const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
function removeFromCart(id) {
    const updatedCartItems = basketItems.map(item => {
      if (item.id === id) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null);
    window.localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setRemove(updatedCartItems);
  }

  function productBuy() {
  window.location.href = "https://bepaid.by/sites/default/files/-stranica-min.png";
}
      return (
        <>
        <Header />
        <div className='total'><p>Total: ${total}</p></div>
        <div className='product-list'>
        {basketItems.map((product) => (
        <Cart key = {product.id} name= {product.name} model= {product.model} screen_size= {product.screen_size} image= {product.image}  price= {product.price} screen_type= {product.screen_type} quantity={product.quantity} removeFromCart= {() => removeFromCart(product.id)} productBuy={() => productBuy()}/>)) }
        </div>
        <Footer />
        </>
    );
}