import React, { useEffect, useState } from 'react'
import mercadopago from '../../assets/images/checkout/mercadopago-logo.webp'

export const Pagos = ({setCompleto}) => {
  const [metodoPago, setMetodoPago] = useState(null);
  const metodosPagoElementos = document.querySelectorAll(".metodo-pago");
  function handleSeleccionarMetodo(e) {
    const elementoSeleccionado = e.target.closest(".metodo-pago"); // Captura el div contenedor
    const metodoSeleccionado = elementoSeleccionado.id;
  
    if (metodoPago === metodoSeleccionado) {
      // Si se hace clic en el mismo método, desactivar
      elementoSeleccionado.classList.remove("metodo-seleccionado");
      setMetodoPago(null);
      setCompleto(false);
    } else {
      // Activar el nuevo método seleccionado
      metodosPagoElementos.forEach(metodo => {
        metodo.classList.remove("metodo-seleccionado");
      });
  
      elementoSeleccionado.classList.add("metodo-seleccionado");
      setMetodoPago(metodoSeleccionado);
      setCompleto(true);
    }
  }


  return (
    <div className='payment-container'>
        <h4>2. Método de pago</h4>

        <div className='metodos-container py-3 d-flex flex-column my-3'>
          <div className="metodo-pago d-flex align-items-center gap-2" id='tarjeta' onClick={(e) => handleSeleccionarMetodo(e)}>
            <i className="bi bi-credit-card"></i>
            Tarjeta
          </div>

          <div className="metodo-pago d-flex align-items-center" id='mercadopago' onClick={(e) => handleSeleccionarMetodo(e)}>
            <img src={mercadopago} alt='mercadopago_logo' width={100}/>
          </div>

        </div>
    </div>
  )
}
