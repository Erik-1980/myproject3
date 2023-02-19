    import { useState } from "react";
    import Cart from './Cart';
import ProductList from "./ProductList";
    import Item from "./ProductList";

    const products = {
      SamsungTV: [
    {
      id: '00001',
      name: 'SAMSUNG',
      model: 'UE65NU8500U',
      screen_size: '65"',
      image: './image/samsung-tv-1.jpeg',
      price: 1750,
      screen_type: 'Ultra HD 4K'
  },
  {
      id: '00002',
      name: 'SAMSUNG ODYSSEY',
      model: 'S55BG970NI',
      screen_size: '55"',
      image: './image/samsung-tv-2.jpeg',
      price: 750,
      screen_type: 'Ultra HD 4K'
  },
  {
  
      id: '00003',
      name: 'SAMSUNG',
      model: 'QE85Q80B',
      screen_size: '65"',
      image: './image/samsung-tv-3.jpeg',
      price: 940,
      screen_type: 'QLED 4K Ultra'
  },
  {
      id: '00004',
      name: 'SAMSUNG',
      model: 'QE65Q950TSUXRU',
      screen_size: '65"',
      image: './image/samsung-tv-4.jpeg',
      price: 985,
      screen_type: '8K QLED'
  },
  {
     id: '00005',
     name: 'SAMSUNG',
     model: 'QE65QN900AU',
     screen_size: '65"',
     image: './image/samsung-tv-5.jpeg',
     price: 990,
     screen_type: 'Neo QLED 8K'
  },
  {
     id: '00006',
     name: 'SAMSUNG',
     model: 'QE65Q60RATXXH',
     screen_size: '65"',
     image: './image/samsung-tv-6.jpeg',
     price: 900,
     screen_type: 'QLED 4K'
  }
  ],
SonyTV : [
    {
        id: '00101',
        name: 'SONY',
        model: 'KD50X81JR',
        screen_size: '50"',
        image: './image/sony-tv-1.jpeg',
        price: 1100,
        screen_type: 'Ultra HD 4K'
    },
    {
        id: '00102',
        name: 'SONY',
        model: 'KD65X85TJCEP',
        screen_size: '65"',
        image: './image/sony-tv-2.jpeg',
        price: 2450,
        screen_type: 'QLED 8K'
    },
    {
        id: '00103',
        name: 'SONY',
        model: 'XR-65X90J',
        screen_size: '65"',
        image: './image/sony-tv-3.jpeg',
        price: 2880,
        screen_type: 'QLED 8K'
    },
    {
        id: '00104',
        name: 'SONY',
        model: 'KD65XH8096BR2',
        screen_size: '65"',
        image: './image/sony-tv-4.jpeg',
        price: 2140,
        screen_type: 'QLED 8K'
    },
    {
        id: '00105',
        name: 'SONY',
        model: 'QKD-49XG8096',
        screen_size: '55"',
        image: './image/sony-tv-5.jpeg',
        price: 1100,
        screen_type: 'Ultra HD 4K'
    },
    {
      id: '00106',
      name: 'SONY',
      model: 'XR55A90JCEP',
      screen_size: '55"',
      image: './image/sony-tv-6.jpeg',
      price: 5100,
      screen_type: 'OLED'
  }
],
LGTV: [
    {
        id: '00201',
        name: 'LG',
        model: 'evo C2',
        screen_size: '50"',
        image: './image/lg-tv-1.jpeg',
        price: 1730,
        screen_type: '4K OLED'
    },
    {
        id: '00202',
        name: 'LG NanoCell',
        model: '75NANO766QA',
        screen_size: '75"',
        image: './image/lg-tv-2.jpeg',
        price: 2750,
        screen_type: '4K NanoCell'
    },
    {
        id: '00203',
        name: 'LG LED UQ81',
        model: '75UQ81006LB',
        screen_size: '75"',
        image: './image/lg-tv-3.jpeg',
        price: 2310,
        screen_type: 'Ultra HD'
    },
    {
        id: '00204',
        name: 'LG',
        model: '50UP81006LA',
        screen_size: '50"',
        image: './image/lg-tv-4.jpeg',
        price: 840,
        screen_type: '4K Ultra HD'
    },
    {
        id: '00205',
        name: 'LG',
        model: '55SJ810V',
        screen_size: '55"',
        image: './image/lg-tv-5.jpeg',
        price: 1600,
        screen_type: 'SUPER UHD'
    },
    {
        id: '00206',
        name: 'LG',
        model: '50UQ75006LF',
        screen_size: '50"',
        image: './image/lg-tv-6.jpeg',
        price: 1000,
        screen_type: 'LED'
  }
]};
  
  
  function DataList (){

    const [cartItems, setCartItems] = useState([]);
    // const [brand, setBrand] = useState([]);
    
    function handleAddToCart(product) {
      const newItem = { id: product.id, name: product.name, price: product.price };
       setCartItems(cartItems.concat(newItem));
    }
    const Samsung = products.SamsungTV
    // function brandSamsung () {
    //   return (setBrand(<Item array = {Samsung} onAddToCart = {handleAddToCart}/>))};
    // function brandSony () {
    //    setBrand(dataList(products.SonyTV))};
    // function brandLG () {
    //    setBrand(dataList(products.LGTV))}      
       return (
    <div>
       {/* <Cart items={cartItems}/> */}
       {/* <button className="button-change" onClick={brandSamsung}>Samsung</button> */}
       {/* <button className="button-change" onClick={brandSony}>Sony</button>
       <button className="button-change" onClick={brandLG}>LG</button> */}
       <ProductList products = {Samsung} onAddToCart = {handleAddToCart}/>
       {/* <div className="product-list">{brand}</div> */}
    </div>
      )};
     
     
      export default DataList