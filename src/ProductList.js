import Product from "./Product";

export default function ProductList(props) {
    const { products, onAddToCart } = props;
  
    return (
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            quantity={product.quantity}
            name={product.name}
            image={product.image}
            price={product.price}
            model={product.model}
            screen_size={product.screen_size}
            screen_type={product.screen_type}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    );
  }
  
  