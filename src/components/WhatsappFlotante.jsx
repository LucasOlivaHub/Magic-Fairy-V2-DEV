import React, { useEffect, useState } from 'react'
import { wppLogo } from '../assets';

const WhatsappFlotante = () => {
    const [textoFlotanteEstado, setTextoFlotanteEstado] = useState(false);

    useEffect(() => {
        const textoFlotante = document.querySelector(".wpp-texto-flotante");

        if (textoFlotanteEstado) {
            textoFlotante.classList.add("wpp-flotante-activo")
            textoFlotante.classList.remove("d-none")
        } else if (!textoFlotanteEstado) {
            // ocultar texto
            textoFlotante.classList.add("wpp-flotante-inactivo")
            setTimeout(() => {
                textoFlotante.classList.remove("wpp-flotante-inactivo")
                textoFlotante.classList.add("d-none")
            }, 400)
        }
    }, [textoFlotanteEstado])

    function handleTextoFlotante(estado) {
       
        setTextoFlotanteEstado(estado);
    }

  return (
    <div className="wpp-flotante-container">
        <p className="wpp-texto-flotante d-none">Reserva tu turno o haceme una consulta</p>
        <div className="wpp-flotante" onMouseEnter={ () => handleTextoFlotante(true)} onMouseLeave={() => handleTextoFlotante(false)}>
        <a href='/'>
            <img src={wppLogo} alt='Whatsapp Logo'/>
        </a>
        </div>
    </div>
  )
}

export default WhatsappFlotante