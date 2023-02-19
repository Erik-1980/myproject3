
export default function Cart(props) {
    const { items } = props;
  
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const item_all = items.map((item) => (
      <li key={item.id}>{item.name}: ${item.price}</li>
    ))
  
    return (
      <div className="cart">
        <ul>
          {item_all}
        </ul>
        <p>Total: ${total}</p>
      </div>
    );
  }