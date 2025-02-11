import { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './screens/HomePage';
import { Tienda } from './screens/Tienda';
import Page404 from './screens/Page404';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatsappFlotante from './components/WhatsappFlotante';
import ProductoPage from './components/tienda/ProductoPage/ProductoPage';
import Carrito from './screens/Carrito';
import { Checkout } from './screens/Checkout';


function App() {

  useEffect(() => {
    AOS.init({
      offset: 300, // distancia de inicio de animaciones
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/tienda/:tipoproducto' element={<Tienda/>}/>
            <Route path='/producto/:id/:nombre' element={<ProductoPage/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
        <WhatsappFlotante/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
