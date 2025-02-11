import React from 'react'
import { useDispatch } from 'react-redux';
import { borrarCarrito } from '../../features/productosSlice/carritoSlice';

export const ModalBorrarCarrito =  ({setAbrirModal}) => {
    const dispatch = useDispatch();

    function handleBorrarCarrito() {
        dispatch(borrarCarrito());
        setAbrirModal(false);
    }
  return (
    <div className='modal'>
        <div className='modal-contenido d-flex flex-column gap-3' data-aos="fade-in">
            <p className='texto-26 text-center'>¿Deseas borrar todos los productos de tu carrito?</p>
            <div className='d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center'>
                <button className='magic-btn magic-btn-rosa' onClick={() => setAbrirModal(false)}>Cancelar</button>
                <button className='magic-btn magic-btn-rosa' onClick={() => handleBorrarCarrito()}>Borrar</button>
            </div>

        </div>
    </div>
  )
}
