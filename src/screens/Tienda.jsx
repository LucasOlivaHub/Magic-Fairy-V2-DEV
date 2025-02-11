import React, { useEffect, useState } from 'react'
import ProductosTienda from '../components/tienda/ProductosTienda'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const Tienda = () => {
  // TODOS LOS PRODUCTOS
  const {tipoproducto} = useParams();
  const navigate = useNavigate();

  const productosLista = useSelector(state => state.productos);
  const [productosMostrar, setProductosMostrar] = useState([]);

useEffect(() => {

    if(tipoproducto) {
      const prods = productosLista.contenido.filter(p => p.tipoProducto.includes(tipoproducto));

      if (prods.length === 0) {
        navigate('/404', { replace: true }); // Redirige a 404 si no hay productos
        return;
      }

      // Setear productos a renderizar
      setProductosMostrar(prods)
    } else {
      // Setear la lista de redux por defecto
      setProductosMostrar(productosLista.contenido)
    }

  console.log(productosMostrar)

}, [productosLista, tipoproducto])


  return (
    <section className='tienda-container pt-3 pb-4 px-2'>
        <div className="container">
            <div className='row titulo-tienda-container mb-3'>
              <div className='col-lg-9'>
                <h3 className='mb-3'>Tienda de Magic Fairy Nails:</h3>
                <p className='texto-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique quidem amet labore perferendis ducimus nobis quisquam, facere blanditiis!</p>
              </div>
            </div>
            {/* Agregado productosLista */}
            <ProductosTienda productosLista={productosMostrar}/>
        </div>
    </section>
  )
}
