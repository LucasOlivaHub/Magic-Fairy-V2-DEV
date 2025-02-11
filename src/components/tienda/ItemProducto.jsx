import React from 'react'
import { Link } from 'react-router-dom'
import { textoMinuscula } from '../../helpers/textoMinuscula'

const ItemProducto = ({prod, index}) => {
  return (
    <article className="producto-tienda mb-2">

    <Link to={`/producto/${prod.id}/${textoMinuscula(prod.titulo)}`}>
      <div className="img-producto-container" style={{backgroundImage: `url(${prod.imgPortada})`}}>
        
        {prod.categorias && prod.categorias.includes("nuevo") && <span className='etiqueta-nuevo'>NUEVO</span>}
      </div>
    </Link>
    
    <div className='producto-tienda-texto d-flex flex-column justify-content-between gap-2'>
      <div>
      <h2 className='mb-2 texto-20 prod-tienda-titulo'>{prod.titulo}</h2>
      {/* descripcion con hasta 100 caracteres */}
      <p className='texto-12 mb-2 prod-tienda-desc d-none d-md-flex'>{prod.descripcion && prod.descripcion.length > 100 ? prod.descripcion.slice(0, 100) + "..." : prod.descripcion}</p>
      
      {!prod.descuento && <p className='mb-2 texto-18 text-bold'>$ {prod.precio}</p>}
      {prod.descuento && (
        <div className='d-flex flex-column flex-md-row justify-content-between mb-2'>
          <div className='mb-0 texto-18 text-bold'>
            <span className='texto-tachado texto-desactivado me-3'>$ {prod.precio}</span>
            <div>
              $ {prod.precio * (1 - prod.descuento / 100)}
            </div>
          </div>

          <p className='texto-18 mb-0 px-2 bg-violeta text-white d-flex align-items-center text-center w-f-content prod-descuento-tag'>{prod.descuento}% OFF</p>
        </div>
      )}
      </div>

      <div className='botones-container d-flex flex-column gap-2 mb-3'>
        <Link to={`/producto/${prod.id}/${textoMinuscula(prod.titulo)}`} className='magic-btn magic-btn-rosa text-center'>Ver modelo</Link>
      </div>
    </div>
  </article>
  )
}

export default ItemProducto