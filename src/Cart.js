export default function Cart(props) {
  const { image, name, model, screen_size, screen_type, price, quantity, removeFromCart, productBuy } = props;
  
    return (
      <>
      <div className="product">
        <p className="quantity">{quantity}</p>
        <img src={image} alt={name}  width='97%' height='60%' style={{marginLeft:'6px', marginTop:'6px', borderRadius:'10px'}}/>
        <h2>{name}</h2>
        <p>model: {model}</p>
        <p>screen size: {screen_size}</p>
        <p>screen type: {screen_type}</p>
        <p>price: ${price}</p>
        <button className="button-add-remove" onClick={removeFromCart}>Remove</button>
        <button className="button-buy" onClick={productBuy}>Buy</button>
      </div>
      </>
    );
  }
