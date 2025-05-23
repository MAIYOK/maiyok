import { useEffect, useState } from 'react';

export default function Client() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://nuru-backend.onrender.com/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Available Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
