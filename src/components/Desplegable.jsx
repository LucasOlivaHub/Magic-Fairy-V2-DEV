import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export const Desplegable = ({nombre, items, cerrarNavbar, index, activo, setActivo}) => {
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
            desplegableContent.current.classList.add("desplegable-off");

            setTimeout(() => {
                desplegableContent.current.classList.remove("desplegable-off");
                desplegableContent.current.classList.remove("active");
                desplegableContent.current.classList.add("d-none");
            }, 400)
        }
    }, [desplegableActivo]);
    

    // FUNCIONES para evitar que se choquen los desplegables y se tilde la animacion
    const handleMouseEnter = () => {
        if (activo === null || activo === index) {
            setDesplegableActivo(true);
            setActivo(index);
        }
    };

    const handleMouseLeave = () => {
        if (activo === index) {
            setDesplegableActivo(false);
            setActivo(null);
        }
    };

    const handleClick = () => {
        setDesplegableActivo(!desplegableActivo);
    };
  
    return (
      <div className='desplegable-container esmalte-hover' 
    //   onMouseEnter={() => handleMouseEnter()}
    //   onMouseLeave={() => handleMouseLeave()}
      
      onMouseEnter={!isMobile ? handleMouseEnter : null}
      onMouseLeave={!isMobile ? handleMouseLeave : null}
      onClick={isMobile ? handleClick : null}
      >
        <Link to={items[0].path}
          className={`d-none d-lg-flex desplegable-btn nav-link align-items-center gap-1 fw-500 ${desplegableActivo && 'nav-link-activo'}`}
        >
          {nombre}
          <i className={`bi bi-chevron-down ${desplegableActivo && 'flecha-activa-arriba'}`}></i>
        </Link>

        <button
          className={`d-lg-none desplegable-btn nav-link d-flex align-items-center gap-1 fw-500 ${desplegableActivo && 'nav-link-activo'}`}
        >
          {nombre}
          <i className={`bi bi-chevron-down ${desplegableActivo && 'flecha-activa-arriba'}`}></i>
        </button>

        <ul className="desplegable d-none flex-column gap-3" ref={desplegableContent}>
                {items && items.map((i, index) => {
                    return <li key={index}><Link to={i.path} className='nav-link esmalte-hover' onClick={() => cerrarNavbar()}>{i.name}</Link></li>
                })}
        </ul>
      </div>
    );
  };

