import Footer from './Footer';
import Header from './Header';
import { useState, useEffect, useMemo } from "react";
import ProductList from "./ProductList";

export default function Catalog (){
    const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')) || []);
    
    function addToCart(product) {
        const newItem = { id: product.id, name: product.name, model: product.model, screen_size: product.screen_size, image: product.image,  price: product.price, screen_type: product.screen_type, quantity: product.quantity };
        const newCartItems = cartItems.concat(newItem);
        setCartItems(newCartItems);
        window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
    const [brand, setBrand] = useState([]);
    useEffect(()=> {
            fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setBrand(data))
        }, [])
    const [brandTable, setBrandTable] = useState(0)

    function brandChange (brandTable) {
       setBrandTable(brandTable)};
       
       const filteredBrand = useMemo(() => brand.filter(obj => obj.brand_table_id === brandTable), [brand, brandTable]);
  
    return (
        <>
        <Header />
        <button className="button-change" onClick={() => brandChange(1)}>Samsung</button>  {/*?????*/}
        <button className="button-change" onClick={() => brandChange(2)}>Sony</button>
        <button className="button-change" onClick={() => brandChange(3)}>LG</button>
        <ProductList products = {filteredBrand} onAddToCart = {addToCart}/>
        <div style={{marginLeft:'100px', marginTop:'40px'}}><img src='./image/mainpage4.jpeg' width='90%'/></div>
        <Footer />
        </>
    )
};
