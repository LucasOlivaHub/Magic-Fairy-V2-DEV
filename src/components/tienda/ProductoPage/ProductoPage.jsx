import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { textoMinuscula } from '../../../helpers/textoMinuscula'
import Page404 from '../../../screens/Page404';
import ItemProducto from '../ItemProducto';
import { SwiperProductoPantalla } from './SwiperProductoPantalla';
import { agregarProducto } from '../../../features/productosSlice/carritoSlice';


const ProductoPage = () => {
    const productosGenerales = useSelector(state => state.productos.contenido);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, nombre } = useParams();

    const [imgActiva, setImgActiva] = useState(undefined);
    const [productoEnPantalla, setProductoEnPantalla] = useState(null);
    const [productosRelacionados, setProductosRelacionados] = useState([]);

    // CARRITO
    const [cantidadProducto, setCantidadProducto] = useState(1);
    const [colorElegido, setColorElegido] = useState(undefined);
    const [talleElegido, setTalleElegido] = useState(undefined);

    useEffect(() => {
      window.scrollTo(0, 0);
      // BUSCAR PRODUCTO Y MOSTRAR EN PANTALLA
        const productoEncontrado = productosGenerales.find(p => {
           let nombreProd = textoMinuscula(p.titulo);
           return nombreProd === nombre && p.id === parseInt(id);
        })

        setProductoEnPantalla(productoEncontrado || null); // Si no esta productoEncontrado, lo setea en vacio (null)
      }, [productosGenerales, id, nombre])

    useEffect(() => {
      // CONFIGURACIONES PRODUCTO una vez mostrado
        if(productoEnPantalla) {
          // setear imagen activa por defecto
          setImgActiva(productoEnPantalla.imgPortada);
          
          // Establecer configuracion de talle y color por defecto
          setColorElegido(productoEnPantalla.colores[0]);
          setTalleElegido(productoEnPantalla.talles[0]);
        }
    }, [productoEnPantalla]);

    useEffect(() => {
     
    }, [talleElegido, colorElegido]);

    useEffect(() => {
      // Productos relacionados
      if (productoEnPantalla) {
        const categoriasProducto = productoEnPantalla.categorias || [];
        const relacionados = productosGenerales.filter((producto) => {
          if (producto.id === productoEnPantalla.id) return false; // No incluir el producto actual
          return producto.categorias?.some((cat) => categoriasProducto.includes(cat));
        });
        setProductosRelacionados(relacionados);
      }
    }, [productoEnPantalla]);


    // FUNCIONES del producto en pantalla
    function cambiarImagen(e, img) {
      const restoImagenes = document.querySelectorAll(".producto-img-swiper");
      let imagenSeleccionada = e.target;
      
      restoImagenes.forEach(elementoImg => {
        if(elementoImg.classList.contains("swiperImgSeleccionada")) {
          elementoImg.classList.remove("swiperImgSeleccionada");
        }
      })

      imagenSeleccionada.classList.add("swiperImgSeleccionada");
      setImgActiva(img);
    }


    // funciones agregar producto al carrito
    function sumarCantidad() {
      if (cantidadProducto < 20) {
        setCantidadProducto(cantidadProducto + 1);
      }
    }

    function restarCantidad() {
      if (cantidadProducto > 1) {
        setCantidadProducto(cantidadProducto - 1);
      }
    }

    function selectColor(color) {
      setColorElegido(color);
    }

    function selectTalle(talle) {
      setTalleElegido(talle);
    }

    function actualizarProductoCarrito(e) {
      // Agregar el producto en pantalla con sus colores y talles elegidos desde la fn del carritoSlice
      dispatch(agregarProducto(
        {
          producto: productoEnPantalla, 
          cantidad: cantidadProducto, 
          color: colorElegido, 
          talle: talleElegido
        })
      );

      const agregarBtn = e.target;
      agregarBtn.innerHTML = `¡Agregado al carrito! <i class="bi bi-cart-check-fill"></i>`;
      agregarBtn.classList.add("producto-agregado-btn");

      setTimeout(() => {
        agregarBtn.innerHTML = `Agregar al carrito`;
        agregarBtn.classList.remove("producto-agregado-btn");
      }, [3000])
    }

    function comprarYa(e) {
      dispatch(agregarProducto(
        {
          producto: productoEnPantalla, 
          cantidad: cantidadProducto, 
          color: colorElegido, 
          talle: talleElegido
        })
      );

      setTimeout(() => {
        navigate('/carrito');
      }, [1000])

    }

    // si no renderiza producto en pantalla
    if (!productoEnPantalla) {
        return <Page404/>;
    }
  return (
    <section>
      <div className='container'>
        <div className='row producto-info-container py-4'>

          <div className='col-lg-8 pe-3 mb-4 mb-lg-0'>
            {/* imagen activa PRODUCTO */}
            <div className='prod-img producto-img-activa' style={{backgroundImage: `url(${imgActiva})`}}>
            </div>
            
            {/* imagenes PRODUCTO */}
            <div className='swiper-producto-imgs mt-3'>
              <SwiperProductoPantalla producto={productoEnPantalla} cambiarImagen={cambiarImagen}/>
            </div>
          </div>

          <div className='col-lg-4'>
            {/* INFO PRODUCTO */}
            <h3>{productoEnPantalla.titulo}</h3>
            <p>{productoEnPantalla.descripcion}</p>

            <div className='producto-config pb-4'>
              <article className='mb-3'>
                <p className='texto-14 text-bold mb-1'>Colores</p>
                <div className='d-flex gap-2'>
                  {productoEnPantalla.colores.map((color, index) => {
                    return <div key={index} className={`color-box ${colorElegido === color && 'box-selected'}`} onClick={() => selectColor(color)} style={{backgroundColor: color.codigoColor}}></div>
                  })}
                </div>
              </article>



              <article className='mb-3'>
                <p className='texto-14 text-bold mb-1'>Talle</p>
                <div className='d-flex gap-2'>
                  {productoEnPantalla.talles.map((t, index) => {
                    return <div key={index} onClick={() => selectTalle(t)} className={`talle-box ${talleElegido === t && 'box-selected'} d-flex align-items-center justify-content-center`}>{t}</div>
                  })}
                </div>
              </article>

              {/* cantidad */}
              <article className='mb-3'>
                <p className='texto-14 text-bold mb-1'>Cantidad</p>
                <div className='d-flex gap-2'>
                  <button className={`magic-btn ${cantidadProducto > 1 ? 'magic-btn-violeta' : 'magic-btn-desactivado'} px-3 py-1`} onClick={() => restarCantidad()}>-</button>
                    <input className='producto-page-cantidad' type='number' value={cantidadProducto} max={20} readOnly></input>
                  <button className={`magic-btn ${cantidadProducto < 20 ? 'magic-btn-violeta' : 'magic-btn-desactivado'} px-3 py-1`} onClick={() => sumarCantidad()}>+</button>
                </div>
              </article>
            </div>


            <div className='producto-precio'>
                {!productoEnPantalla.descuento && <p className='mb-2 texto-18 text-bold'>$ {productoEnPantalla.precio * cantidadProducto}</p>}
                
                {productoEnPantalla.descuento && (
                    <div className='d-flex justify-content-between mb-2'>
                      <p className='mb-0 texto-18 text-bold'>
                        <span className='texto-tachado texto-desactivado me-3'>$ {productoEnPantalla.precio * cantidadProducto}</span>
                        $ {(productoEnPantalla.precio * (1 - productoEnPantalla.descuento / 100)) * cantidadProducto}
                      </p>
                      <p className='texto-18 mb-0 px-2 bg-violeta text-white d-flex align-items-center text-center'>{productoEnPantalla.descuento}% OFF</p>
                    </div>
                )}
            </div>


            {/*boton carrito */}
            <div className='botones-container d-flex flex-column gap-2 mt-3'>
              <button className='magic-btn magic-btn-rosa text-center' onClick={(e) => actualizarProductoCarrito(e)}>Agregar al carrito</button>
              <button className='magic-btn magic-btn-rosa text-center' onClick={(e) => comprarYa(e)}>COMPRAR AHORA</button>

            </div>

          </div>  {/* fin columna info producto */}
        
        </div>
        <div className='row relacionados-container mt-5 pt-5'>
          
        <hr />
          <h3 className='pb-3'>Modelos relacionados</h3>
          <div className='gap-3 gap-md-4 productos-container'>
          {productosRelacionados && productosRelacionados.map((productoRelacionado, index)=> {
              return (
              <div className='col-lg-12' key={index}>
                <ItemProducto  prod={productoRelacionado}/>
              </div>
              )
            })}
          </div>
      

            {productosRelacionados.length === 0 && <p>No hay modelos relacionados</p>}

        </div>
      </div>
    </section>
  )
}

export default ProductoPage