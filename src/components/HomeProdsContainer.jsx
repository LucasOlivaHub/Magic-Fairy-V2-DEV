import React, { useEffect, useState } from 'react'
import HomeProducto from './HomeProducto';
import { useSelector } from 'react-redux';


const HomeProductos = () => {
    const productosLista = useSelector(state => state.productos);
    const [productosHome, setProductosHome] = useState([]);

    useEffect(() => {
        setProductosHome(productosLista.contenido);
    }, []);

  return (
    <section className="homeproductos-section bg-violeta-claro py-5 px-2">
        <div className="container">
            <div className="homeproductos-titulo-container d-flex justify-content-center justify-content-lg-start mb-4">
                <h3 className="homeproductos-titulo titulo-lineaabajo" data-aos="fade-in">Mis últimos diseños</h3>
            </div>

            <div className="homeproductos-container" data-aos="fade-top" data-aos-delay="100">
                <HomeProducto productos={productosHome} />
            </div>
        </div>
    </section>
  )
}

export default HomeProductos