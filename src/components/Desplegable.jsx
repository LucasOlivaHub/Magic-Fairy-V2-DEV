import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { SegundoDesplegable } from './SegundoDesplegable';

export const Desplegable = ({nombre, items, cerrarNavbar}) => {
    const [desplegableActivo, setDesplegableActivo] = useState(false);
    const desplegableContent = useRef();

    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        // Detectamos si el ancho de la pantalla es menor que 768px
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile(); // Verificamos en el montaje inicial
        window.addEventListener('resize', checkIfMobile);  // Verificamos si cambia el tamaño de la pantalla

        return () => {
            window.removeEventListener('resize', checkIfMobile);  // Limpiamos el event listener al desmontar
        };
    }, []);

    useEffect(() => {
        if (desplegableActivo) {
            desplegableContent.current.classList.add("active");
            desplegableContent.current.classList.remove("d-none");

        } else if (!desplegableActivo) {
              desplegableContent.current.classList.remove("active");
              desplegableContent.current.classList.add("d-none");
        }
    }, [desplegableActivo]);
    

    // FUNCIONES para evitar que se choquen los desplegables y se tilde la animacion
    const handleMouseEnter = () => {
      setDesplegableActivo(true);
    };

    const handleMouseLeave = () => {
      setDesplegableActivo(false);
    };

    const handleClick = () => {
      setDesplegableActivo(!desplegableActivo);
    };
  
    return (
      <div className={`desplegable-container ${desplegableActivo && 'esmalte-activo'} ${desplegableActivo && !isMobile && 'esmalte-hover'}`} 
    
      onMouseEnter={!isMobile ? handleMouseEnter : null}
      onMouseLeave={!isMobile ? handleMouseLeave : null}
      >
        <Link to={items[0].path}
          className={`d-none d-lg-flex desplegable-btn nav-link align-items-center gap-1 fw-500 ${desplegableActivo && 'nav-link-activo'}`}
        >
          {nombre}
          <i className={`bi bi-chevron-down ${desplegableActivo && 'flecha-activa-arriba'}`}></i>
        </Link>

        <button
          className={`d-lg-none desplegable-btn nav-link d-flex align-items-center gap-1 fw-500 ${desplegableActivo && 'nav-link-activo'}`}
          onClick={isMobile ? handleClick : null}
        >
          {nombre}
          <i className={`bi bi-chevron-down ${desplegableActivo && 'flecha-activa-arriba'}`}></i>
        </button>

        <ul className="desplegable d-none flex-column gap-0" ref={desplegableContent}>
          <div className='d-none d-lg-block bg-white barrita-blanca-desplegable'></div>
          
          <div className='desplegable-items d-flex flex-column gap-3'>

                {items && items.map((i, index) => {

                  if(i.dobleDesplegable) {
                    // SI ES DOBLE DESPLEGABLE:
                    return (
                      // -----DOBLE DESPLEGABLE ITEM-----
                    <div key={index} className='dobleDesplegable-link desplegable-container'>
                        <SegundoDesplegable 
                          isMobile={isMobile}
                          cerrarNavbar={cerrarNavbar}
                          item={i}
                          /> 
                    </div>)
                    // -----FIN DOBLE DESPLEGABLE ITEM----
                    
                  } else {
                    // SI NO ES DOBLE DESPLEGABLE, ITEM NORMAL
                    return <li key={index}><Link to={i.path} className='nav-link esmalte-hover' onClick={() => cerrarNavbar()}>{i.name}</Link></li>
                  }
                })}
          </div>
        </ul>
      </div>
    );
  };

