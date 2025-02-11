import React from 'react'
import { borrarProducto } from '../../features/productosSlice/carritoSlice';
import { useDispatch } from 'react-redux';

export const ModalBorrarProducto = ({productoBorrar, cerrarModal}) => {
    const dispatch = useDispatch();

    function handleBorrarProd() {
        dispatch(borrarProducto(productoBorrar.id));
        cerrarModal();
        document.querySelector("body").classList.remove("no-scroll");
    }
  return (
    <div className='modal'>
        <div className='modal-contenido d-flex flex-column gap-3' data-aos="fade-in">
            <p className='texto-18'>¿Deseas borrar <span className='text-bold'>{productoBorrar.nombreProducto}</span> de tu carrito?</p>
            <div className='d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center'>
                <button className='magic-btn magic-btn-rosa' onClick={() => cerrarModal()}>Cancelar</button>
                <button className='magic-btn magic-btn-rosa' onClick={() => handleBorrarProd()}>Borrar</button>
            </div>

        </div>
    </div>
  )
}
