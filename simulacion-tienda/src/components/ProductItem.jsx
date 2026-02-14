// src/components/ProductItem.jsx
import Swal from 'sweetalert2';

// Recibimos las 4 props requeridas por la indicación
const ProductItem = ({ productId, productName, price, imageUrl }) => {
  
  // Función para mostrar el mensaje emergente estilizado
  const handleShowDetail = () => {
    Swal.fire({
      title: productName,
      // Mostramos el ID y el precio de forma elegante
      html: `
        <div style="text-align: left;">
          <p><strong>ID del Producto:</strong> ${productId}</p>
          <p><strong>Precio:</strong> <span style="color: #27ae60; font-weight: bold;">$${price}</span></p>
          <p>Este es un artículo de alta calidad disponible en nuestra tienda tecnológica.</p>
        </div>
      `,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: productName,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#3498db',
      showCloseButton: true,
      // Animación de entrada
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      }
    });
  };

  return (
    <div className="product-card">
      {/* Imagen del producto */}
      <img src={imageUrl} alt={productName} className="product-image" />
      
      <div className="product-info">
        {/* Nombre y Precio */}
        <h3>{productName}</h3>
        <p className="price">${price}</p>
        
        {/* Botón interactivo con SweetAlert2 */}
        <button className="add-button" onClick={handleShowDetail}>
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
