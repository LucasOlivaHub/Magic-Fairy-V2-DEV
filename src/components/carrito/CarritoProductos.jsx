import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sumarCantidadCarrito, restarCantidadCarrito } from '../../features/productosSlice/carritoSlice';
import { ModalBorrarProducto } from './ModalBorrarProducto';


export const CarritoProductos = () => {
    const prodsCarrito = useSelector(state => state.carrito.carrito)
    const dispatch = useDispatch();

    const [abrirModal, setAbrirModal] = useState(false);
    const bodyElement = document.querySelector("body");

    useEffect(() => {
        console.log(abrirModal)
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
    <>
        {prodsCarrito && prodsCarrito.map(p => {
          return (
          <div className='row carrito-producto d-flex justify-content-lg-center align-items-center gap-3 my-3 p-2noo' key={p.id}>
                <div className="col-12 col-lg-2 carrito-item-info carrito-info-img-container d-flex flex-column align-items-lg-center">
                    {/* <img src={p.colorElegido.imagenes[0]} width={100} alt={`imagen`}/> */}
                    <div className='carrito-item-img' style={{backgroundImage:`url(${p.colorElegido.imagenes[0]})`}}>
                    </div>

                    <p className='mb-0 text-bold texto-18 text-lg-center carrito-item-nombre'>{p.nombreProducto}</p>
                </div>

                <div className="col-5 col-lg-2 carrito-item-info d-flex align-items-center justify-content-center gap-3">
                    <div className='color-box box-selected' style={{backgroundColor: p.colorElegido.codigoColor}}>
                    
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div className="talle-box box-selected d-flex align-items-center justify-content-center">
                            {p.talleElegido}
                        </div>
                    </div>
                </div>

                <div className='col-6 col-lg-2 carrito-item-info d-flex align-items-center justify-content-center gap-2'>
                    <button className={`magic-btn carrito-item-cantidad ${p.cantidad > 1 ? 'magic-btn-violeta' : 'magic-btn-desactivado'} px-3 py-1`} onClick={() => dispatch(restarCantidadCarrito(p.id))}>-</button>
                        <input className='producto-page-cantidad carrito-item-cantidad' type='number' value={p.cantidad} max={20} readOnly></input>
                    <button className={`magic-btn carrito-item-cantidad ${p.cantidad < 20 ? 'magic-btn-violeta' : 'magic-btn-desactivado'} px-3 py-1`} onClick={() => dispatch(sumarCantidadCarrito(p.id))}>+</button>
                </div>

                <div className="col-6 col-lg-3 carrito-item-info d-flex align-items-center justify-content-lg-center">

                    {!p.descuento && <p className='mb-2 texto-18 text-bold'>$ {p.precio}</p>}
                    
                    {p.descuento && (
                        <div className='d-flex justify-content-center gap-2 mb-2'>
                        <p className='mb-0 texto-18 text-bold'>
                            <span className='texto-tachado texto-desactivado me-3'>$ {p.precioOriginal * p.cantidad}</span>
                            <br/> $ {p.precio}
                        </p>
                        <p className='texto-18 mb-0 px-2 bg-violeta text-white d-flex align-items-center text-center'>{p.descuento}% OFF</p>
                        </div>
                    )}
                </div>
                
                <div className="col-12 col-lg-2 carrito-item-info d-flex justify-content-end px-0 px-lg-2">
                    <button className='carrito-borrar-btn' onClick={() => setAbrirModal(true)}><i className='bi bi-trash'></i></button>
                </div>
                {abrirModal && <ModalBorrarProducto productoBorrar={p} cerrarModal={() => setAbrirModal(false)}/>}

            </div>);
        })}
    </>
  )
}
