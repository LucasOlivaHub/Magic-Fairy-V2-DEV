import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormularioCheckout } from '../components/checkout/FormularioCheckout'
import { Pagos } from '../components/checkout/Pagos'
import MagicBtn from '../components/MagicBtn'

export const Checkout = () => {
    const navigate = useNavigate();

    const [paso, setPaso] = useState(1);
    const [pasoUnoCompleto, setPasoUnoCompleto] = useState(false);
    const [pasoDosCompleto, setPasoDosCompleto] = useState(false);

    useEffect(() => {
      // EVITAR QUE ACCEDAN SI NO HAY PRODUCTOS EN CARRITO
        // if(!prodsCarritoCheckout.length > 0) {
        //     navigate("/carrito");
        // }
    }, [])

      // Avanzar al siguiente paso
  const pasoSiguiente = () => {
    if(paso < 2) {
      setPaso(paso + 1)
    }
  };

  // Retroceder al paso anterior
  const pasoAnterior = () => {
    if(paso > 1) {
      setPaso(paso - 1) 
    }
  };

  return (
    <section className='checkout-section'>
        <div className="container">
          <h3>Procedimiento de pago en 3 pasos</h3>

          <div className="pasos-pagina-container d-flex justify-content-center gap-5 py-4">
            <span className={`paso-numero p-2 px-3 rounded-circle ${pasoUnoCompleto && 'paso-completo'} ${paso === 1 && !pasoUnoCompleto ? 'bg-rosa text-white' : 'magic-btn-desactivado'}`} onClick={() => setPaso(1)}>1</span>
              <div className={`pasos-barrita ${pasoUnoCompleto && 'barrita-completa'}`}></div>
            <span className={`paso-numero p-2 px-3 rounded-circle ${pasoDosCompleto && 'paso-completo'} ${paso === 2 ? 'bg-rosa text-white' : 'magic-btn-desactivado'}`} onClick={() => pasoUnoCompleto && setPaso(2)}>2</span>
          </div>
          {paso === 1 && <FormularioCheckout setCompleto={setPasoUnoCompleto}/>}

          {paso === 2 && <Pagos setCompleto={setPasoDosCompleto}/>}

           <div className="pasosbtn-container d-flex justify-content-between align-items-center py-4">
            {paso > 1 ? 
              <button className='magic-btn magic-btn-rosa text-center' onClick={() => pasoAnterior()}>Atrás</button>
            : <button className='magic-btn magic-btn-desactivado text-center'>Atrás</button>
            }

            {paso < 2 && 
            <button className={`magic-btn text-center ${pasoUnoCompleto ? 'magic-btn-rosa' : 'magic-btn-desactivado'}`} onClick={() => pasoUnoCompleto && pasoSiguiente()}>
              {!pasoUnoCompleto ? 'Verifica tus datos' : 'Siguiente'}
            </button>}

            {paso === 2 && pasoDosCompleto ? <MagicBtn link={"/"} texto={"COMPLETAR COMPRA"} color={"rosa"}/> :<button className='magic-btn magic-btn-desactivado text-center d-none'>COMPLETAR COMPRA</button>}
           </div>
        </div>
    </section>
  )
}
