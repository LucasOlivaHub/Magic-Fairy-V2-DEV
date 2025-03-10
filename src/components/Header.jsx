import { useEffect, useRef, useState } from 'react'
import { logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Desplegable } from './Desplegable';


const Header = () => {
    const [ navbarMostrar, setNavbarMostrar ] = useState(false);
    const navbarRef = useRef(null);
    const prodsCarrito = useSelector(state => state.carrito.carrito);
    const [cantidadProdsCarrito, setCantidadProdsCarrito] = useState(0);

    const location = useLocation();
    const isTiendaOrCarrito = location.pathname === '/tienda' || location.pathname === '/carrito' || location.pathname.startsWith('/producto/') || location.pathname.startsWith('/tienda/');
  

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




  // --- FUNCIONES- --
  function cerrarNavbar() {
      setNavbarMostrar(false);
  }


  return (
    <header className='bg-white d-flex align-items-center'>
        <nav className="d-flex justify-content-between align-items-center py-2 px-4 w-100" ref={navbarRef}>
            <Link to='/' className="logo" onClick={() => cerrarNavbar()}>
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
                 {/* Desplegable tienda */}
                 <Desplegable 
                    nombre="Productos"
                    items={[
                      { name: 'Ver todos', path: '/tienda' },

                      { name: 'Press on', path: '/', 
                        dobleDesplegable: [
                          { path: '/tienda/x12', name: 'x12'},
                          { path: '/tienda/x6', name: "x6"}
                        ], 
                      },

                      { name: 'Accesorios', path: '/tienda/accesorios' },
                      { name: 'Otros', path: '/' }
                    ]}
                    cerrarNavbar={cerrarNavbar}
                  />

                  {/* fin desplegable tienda */}

                {isTiendaOrCarrito && 
                <Link to="/carrito" className="nav-link d-flex gap-1" onClick={() => cerrarNavbar()}>
                    {prodsCarrito.length > 0 ? <i className="bi bi-cart-fill"></i> : <i className="bi bi-cart"></i>}
                    Carrito ({cantidadProdsCarrito})
                </Link>
                }


                {!isTiendaOrCarrito ? (
                  <>
                  {/* Desplegable info */}
                  <Desplegable 
                    nombre="Información"
                    items={[
                      { name: 'Sobre mi', path: '/sobre-mi' },
                      { name: '¿Cómo Comprar?', path: '/como-comprar' },
                      { name: 'Términos y condiciones', path: 'https://coal-sand-a89.notion.site/T-RMINOS-Y-CONDICIONES-d2568342335b4549a55e1e2726068f45' },
                      { name: 'Preguntas frecuentes', path: 'https://coal-sand-a89.notion.site/PREGUNTAS-FRECUENTES-a42840971c6c4149880cf706a12f7f82' },
                    ]}
                    cerrarNavbar={cerrarNavbar}

                  />
                  {/* Fin desplegable info */}
                
                    <a href="/#contacto" className="nav-link esmalte-hover" onClick={() => cerrarNavbar()}>
                        Contacto
                    </a>
                  </>
                ) : (
                <a href="/" className="nav-link esmalte-hover" onClick={() => cerrarNavbar()}>
                  Volver al Home <i className="bi bi-house-door-fill"></i>
                </a>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Header