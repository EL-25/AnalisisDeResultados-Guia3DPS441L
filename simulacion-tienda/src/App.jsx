// Importamos el componente padre que acabamos de crear
import ProductList from './components/ProductList';
// Importamos el CSS para que los estilos se apliquen
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Simplemente llamamos a la lista de productos */}
      <ProductList />
      
      <footer style={{ textAlign: 'center', padding: '20px', color: '#7f8c8d' }}>
        <p>© 2026 Mi Tienda Multiplataforma - Proyecto Académico</p>
      </footer>
    </div>
  );
}

export default App;
