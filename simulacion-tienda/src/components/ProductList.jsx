// src/components/ProductList.jsx
import { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  // Estado interno que almacena la lista de objetos según la estructura solicitada
  const [products] = useState([
    { productId: 1, productName: "Teclado Mecánico RGB", price: 85, imageUrl: "/img/TecladoMecanico.jpg" },
    { productId: 2, productName: "Ratón Gaming Pro", price: 45, imageUrl: "/img/RatonGaming.jpeg" },
    { productId: 3, productName: "Monitor 4K Ultra", price: 320, imageUrl: "/img/Monitor4K.jpg" },
    { productId: 4, productName: "Auriculares Noise Cancelling", price: 150, imageUrl: "/img/Auriculares.jpg" },
    { productId: 5, productName: "Silla Ergonómica", price: 210, imageUrl: "/img/Silla.jpg" },
    { productId: 6, productName: "Escritorio Elevable", price: 450, imageUrl: "/img/Escritorio.jpeg" },
    { productId: 7, productName: "Webcam 1080p", price: 60, imageUrl: "/img/Webcam.jpg" },
    { productId: 8, productName: "Micrófono Podcast", price: 120, imageUrl: "/img/Microfono.jpg" },
    { productId: 9, productName: "Lámpara de Escritorio", price: 35, imageUrl: "/img/Lampara.jpg" },
    { productId: 10, productName: "Soporte para Laptop", price: 25, imageUrl: "/img/SoporteLaptop.jpg" },
  ]);

  return (
    <div className="shop-container">
      <h1 className="shop-title">Nuestra Tecnología</h1>
      
      <div className="product-list-container">
        {/* Recorremos la lista de productos */}
        {products.map((product) => (
          <ProductItem 
            // key es para el control interno de React
            key={product.productId} 
            // Pasamos las propiedades exactas que pide la indicación
            productId={product.productId} 
            productName={product.productName} 
            price={product.price} 
            imageUrl={product.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
