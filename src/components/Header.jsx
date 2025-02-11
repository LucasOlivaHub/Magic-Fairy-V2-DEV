import React, { useEffect, useRef, useState } from 'react'
import { logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const [ navbarMostrar, setNavbarMostrar ] = useState(false);
    const navbarRef = useRef(null);
    const prodsCarrito = useSelector(state => state.carrito.carrito);
    const [cantidadProdsCarrito, setCantidadProdsCarrito] = useState(0);

    const location = useLocation();
    const isTiendaOrCarrito = location.pathname === '/tienda' || location.pathname === '/carrito' || location.pathname.startsWith('/producto/') || location.pathname.startsWith('/tienda/');

    const [desplegableTienda, setDesplegableTienda] = useState(false);
    const [desplegableInfo, setDesplegableInfo] = useState(false);

    useEffect(() => {
        // Función para manejar clics fuera del navbar
        const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            cerrarNavbar();
          }
        };
    
        // Agregar el evento al body
        document.body.addEventListener("click", handleClickOutside);
    
        // Limpiar el evento cuando el componente se desmonte
        return () => {
          document.body.removeEventListener("click", handleClickOutside);
        };
      }, []);

    // Actualizar numero de cantidad productos carrito
    useEffect(() => {
      let cantidad = 0;
      prodsCarrito.forEach(prod => {
        cantidad = cantidad + prod.cantidad;
      });
      setCantidadProdsCarrito(cantidad)
    }, [prodsCarrito])


    // DESPLEGABLES
    useEffect(() => {
      const desplegableTiendaElement = document.querySelector("#productos-desplegable .desplegable");

      // desplegable tienda
      if (desplegableTienda) {
        activarDesplegable(desplegableTiendaElement)
      } else {
        ocultarDesplegable(desplegableTiendaElement)
      }

      if(!isTiendaOrCarrito) {
        const desplegableInfoElement = document.querySelector("#info-desplegable .desplegable");
        console.log(desplegableInfoElement)

      // desplegable info
      if (desplegableInfo) {
        activarDesplegable(desplegableInfoElement)
      } else {
        ocultarDesplegable(desplegableInfoElement)
      }
    }


    }, [desplegableTienda, desplegableInfo]);

  // --- FUNCIONES- --
  function cerrarNavbar() {
      setNavbarMostrar(false);
  }

  function handleDesplegableTienda(estado) {
    setDesplegableTienda(estado)
  }

  function handleDesplegableInfo(estado) {
    setDesplegableInfo(estado)
  }

  function activarDesplegable(elemento) {
    elemento.classList.remove("d-none");
    elemento.classList.remove("desplegable-off");
    elemento.classList.add("active");
  }

  function ocultarDesplegable(elemento) {
    elemento.classList.add("desplegable-off");
    setTimeout(() => {
      elemento.classList.remove("active");
      elemento.classList.add("d-none");
    }, [400])
  }


  return (
    <header className='bg-white d-flex align-items-center'>
        <nav className="d-flex justify-content-between align-items-center py-2 px-4 w-100" ref={navbarRef}>
            <Link to='/' className="logo">
                <img src={logo} alt="Magic Fairy Logo" width="50"/>
            </Link>

            <input id="navcheckbox" readOnly checked={navbarMostrar} onClick={() => setNavbarMostrar(!navbarMostrar)} className="d-none" type='checkbox'/>
            <label id="navbtn" htmlFor="navcheckbox" className="nav-btn d-lg-none">
                <div className="nav-btn-linea">&nbsp;</div>
                <div className="nav-btn-linea">&nbsp;</div>
                <div className="nav-btn-linea">&nbsp;</div>
            </label>


            <div id="navbarContainer"
            className="gap-4 d-flex flex-column align-items-start align-items-lg-center flex-lg-row p-4 pt-5 p-lg-0">
                 

                <div className='desplegable-container' id="productos-desplegable">
                  
                  {/* MOBILE Y TABLET PRODUCTOS */}
                  <button className={`d-lg-none desplegable-btn nav-link d-flex align-items-center gap-1 fw-500 ${desplegableTienda && 'nav-link-activo'}`}
                    onClick={() => setDesplegableTienda(!desplegableTienda)}>
                    Productos
                    <i className={`bi bi-chevron-down ${desplegableTienda && 'flecha-activa-arriba'}`}></i>
                  </button>
                  
                  {/* PC PRODUCTOS */}
                  <Link to={"/tienda"} className={`d-none desplegable-btn nav-link d-lg-flex align-items-center gap-1 ${desplegableTienda && 'nav-link-activo'}`}
                     onMouseEnter={() => handleDesplegableTienda(true)} 
                     onMouseLeave={() => handleDesplegableTienda(false)}
                     onClick={() => cerrarNavbar()}
                  >
                    Productos <i className={`bi bi-chevron-down ${desplegableTienda && 'flecha-activa-arriba'}`}></i>
                  </Link>

                  {/* DESPLEGABLE PRODUCTOS */}
                  <ul className='desplegable d-none flex-column gap-3'
                    onMouseEnter={() => handleDesplegableTienda(true)} 
                    onMouseLeave={() => handleDesplegableTienda(false)}>
                    <li className='d-lg-none'><Link to={"/tienda"} className='nav-link' onClick={() => cerrarNavbar()}>Ver todos</Link></li>
                    <li><Link to={"/"} className='nav-link' onClick={() => cerrarNavbar()}>PRESS ON</Link></li>
                    <li><Link to={"/tienda/accesorios"} className='nav-link' onClick={() => cerrarNavbar()}>Accesorios</Link></li>
                    <li><Link to={"/"} className='nav-link' onClick={() => cerrarNavbar()}>Otros</Link></li>
                  </ul>
                </div>

                {isTiendaOrCarrito && 
                <Link to="/carrito" className="nav-link d-flex gap-1" onClick={() => cerrarNavbar()}>
                    {prodsCarrito.length > 0 ? <i className="bi bi-cart-fill"></i> : <i className="bi bi-cart"></i>}
                    Carrito ({cantidadProdsCarrito})
                </Link>
                }

                {!isTiendaOrCarrito ? (
                  <>
                <div className='desplegable-container' id="info-desplegable">
                  {/* MOBILE Y TABLET INFORMACION */}
                  <button className={`d-lg-none desplegable-btn nav-link d-flex align-items-center gap-1 fw-500 ${desplegableInfo && 'nav-link-activo'}`}
                    onClick={() => setDesplegableInfo(!desplegableInfo)}>
                    Información
                    <i className={`bi bi-chevron-down ${desplegableInfo && 'flecha-activa-arriba'}`}></i>
                  </button>
                  
                  {/* PC INFORMACION */}
                  <Link to={"/tienda"} className={`d-none desplegable-btn nav-link d-lg-flex align-items-center gap-1 ${desplegableInfo && 'nav-link-activo'}`}
                     onMouseEnter={() => handleDesplegableInfo(true)} 
                     onMouseLeave={() => handleDesplegableInfo(false)}
                     onClick={() => cerrarNavbar()}
                  >
                    Información <i className={`bi bi-chevron-down ${desplegableInfo && 'flecha-activa-arriba'}`}></i>
                  </Link>

                  {/* DESPLEGABLE PRODUCTOS */}
                  <ul className='desplegable d-none flex-column gap-3'
                    onMouseEnter={() => handleDesplegableInfo(true)} 
                    onMouseLeave={() => handleDesplegableInfo(false)}>
                    <li><Link to={"/"} className='nav-link' onClick={() => cerrarNavbar()}>Términos y condiciones</Link></li>
                    <li><a href="./#sobremi" className='nav-link' onClick={() => cerrarNavbar()}>Sobre mi</a></li>
                  </ul>

                </div>
                    <a href="/#contacto" className="nav-link" onClick={() => cerrarNavbar()}>
                        Contacto
                    </a>
                  </>
                ) : (
                <a href="/" className="nav-link" onClick={() => cerrarNavbar()}>
                  Volver al Home <i className="bi bi-house-door-fill"></i>
                </a>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Header