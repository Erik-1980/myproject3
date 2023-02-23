import Footer from './Footer';
import Header from './Header';
import { useState } from "react";
import ProductList from "./ProductList";
import {products} from "./Data/data";

export default function Catalog (){
    const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')) || []);
    
    function addToCart(product) {
        const newItem = { id: product.id, name: product.name, model: product.model, screen_size: product.screen_size, image: product.image,  price: product.price, screen_type: product.screen_type, quantity: product.quantity };
        const newCartItems = cartItems.concat(newItem);
        setCartItems(newCartItems);
        window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
    const [brand, setBrand] = useState([]);
    function brandSamsung () {
      return (setBrand(products.SamsungTV))};
    function brandSony () {
       setBrand(products.SonyTV)};
    function brandLG () {
       setBrand(products.LGTV)}      
      
    return (
        <>
        <Header />
         <button className="button-change" onClick={brandSamsung}>Samsung</button>
         <button className="button-change" onClick={brandSony}>Sony</button>
         <button className="button-change" onClick={brandLG}>LG</button>
        <ProductList products = {brand} onAddToCart = {addToCart}/>
        <div style={{marginLeft:'100px', marginTop:'40px'}}><img src='./image/mainpage4.jpeg' width='90%'/></div>
        <Footer />
        </>
    )
};
