import React, { useEffect, useState } from 'react'
import { CarritoProductos } from '../components/carrito/CarritoProductos'
import { useSelector } from 'react-redux'
import MagicBtn from '../components/MagicBtn';
import { ModalBorrarCarrito } from '../components/carrito/ModalBorrarCarrito';

const Carrito = () => {

  const prodsCarrito = useSelector(state => state.carrito.carrito);
  const [cantidadProds, setCantidadProds] = useState(0);
  const [abrirModal, setAbrirModal] = useState(false);
  const bodyElement = document.querySelector("body");


  useEffect(() => {
    setCantidadProds(prodsCarrito.length);
  }, [prodsCarrito, cantidadProds])

    useEffect(() => {
        if(abrirModal) {
            bodyElement.classList.add("no-scroll");
            window.scrollTo(0, 0);
        } else {
            if(bodyElement.classList.contains("no-scroll")) {
                bodyElement.classList.remove("no-scroll");
            }
        }
    }, [abrirModal])

  return (
    <section className='carrito-container'>
      <div className="container">
        <h3>Mi carrito: {cantidadProds}</h3>
        {/* No hay productos */}
        {prodsCarrito.length > 0 ? <CarritoProductos/> : <p>No tienes productos en tu carrito</p>} 


        {/* Hay productos */}
        {prodsCarrito.length > 0 && (
          <div className='container-btns-carrito my-5 d-flex flex-column align-items-center flex-md-row justify-content-md-between gap-3 gap-md-0'>
            <button className='magic-btn magic-btn-rosa' onClick={() => setAbrirModal(true)}>Vaciar carrito</button>
            <MagicBtn link={"/checkout"} texto={"COMPRAR"} color={"violeta"}/>
          </div>
        )}
        {/* modal confirmacion para borrar todo el carrito */}
        {abrirModal && <ModalBorrarCarrito setAbrirModal={setAbrirModal} />}
      </div>
    </section>
  )
}

export default Carrito