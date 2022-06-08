import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Layout from "../src/component/Layout"
import Product from './component/Products';
import FooterBanner from './component/FooterBanner';

function App() {
  return (
        <div>
          <Layout>
          <FooterBanner />
                        <div className="products-heading">
                  <h2>Todos los productos disponibles</h2>
                  <p>Para preguntar le puedes dar click en el boton del whatsapp y preguntar por el producto </p>
                </div>
              <Product />

              <FooterBanner />
             </Layout>
        </div>
         
 
  );
}

export default App;
