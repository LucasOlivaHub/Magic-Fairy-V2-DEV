import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const SegundoDesplegable = ({isMobile, cerrarNavbar, item}) => {
    const [desplegableDosActivo, setDesplegableDosActivo] = useState(false);
    const desplegableDosContent = useRef();

    useEffect(() => {
        if (desplegableDosActivo) {
            desplegableDosContent.current.classList.add("desplegable2-active");
            desplegableDosContent.current.classList.remove("d-none");

        } else if (!desplegableDosActivo) {
              desplegableDosContent.current.classList.remove("desplegable2-active");
              desplegableDosContent.current.classList.add("d-none");
        }
    }, [desplegableDosActivo]);
  

    // FUNCIONES para evitar que se choquen los desplegables y se tilde la animacion
    const handleMouseEnter = (e) => {
      setDesplegableDosActivo(true);
    };

    const handleMouseLeave = (e) => {
      let elementoSeleccionado = e.target;
      console.log(elementoSeleccionado);
      if(!elementoSeleccionado.classList.contains("segundoDesplegable-content")) {
        setDesplegableDosActivo(false);
      }
    };

    const handleClick = () => {
      setDesplegableDosActivo(!desplegableDosActivo);
    };

    return (
    <div className={`segundoDesplegable-container d-flex flex-column flex-lg-row ${desplegableDosActivo && 'w-100'}`}         
    onMouseEnter={!isMobile ? handleMouseEnter : null}
    onMouseLeave={!isMobile ? (e) => handleMouseLeave(e) : null}
    >

        <li>
          <Link to={item.path} className={`nav-link ${!desplegableDosActivo && 'esmalte-hover'} d-none d-lg-flex gap-2 ${desplegableDosActivo && 'esmalte-activo text-white nav-link-activo'}`} onClick={() => cerrarNavbar()}>{item.name}
            <i className="bi bi-chevron-right"></i>
          </Link>
          
          <button
            className={`d-lg-none desplegable-btn nav-link d-flex align-items-center gap-1 fw-500 ${desplegableDosActivo && 'esmalte-activo text-white nav-link-activo'} ${desplegableDosActivo && !isMobile && 'esmalte-hover'}`}
            onClick={isMobile ? handleClick : null}
          >
            {item.name}
            <i className={`bi bi-chevron-down ${desplegableDosActivo && 'flecha-activa-arriba'}`}></i>
          </button>
        </li>

        <ul className='segundoDesplegable-content desplegable py-2 p-lg-0 d-none flex-column gap-3 w-100 ' ref={desplegableDosContent}>
            {item.dobleDesplegable.map((item2, index) => {
              return <li key={index}><Link to={item2.path} className='nav-link' onClick={() => cerrarNavbar()}>{item2.name}</Link></li>
            })}
        </ul>
    </div>
  )
}
