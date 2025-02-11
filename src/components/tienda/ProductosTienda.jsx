import { useSelector } from 'react-redux'
import { useState } from 'react';

import ItemProducto from './ItemProducto';

const ProductosTienda = ({productosLista}) => {
  // const productosLista = useSelector(state => state.productos);

  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const productosPorPagina = 3;

  // Filtrar productos según la búsqueda
  const productosFiltrados = productosLista.filter((prod) => {
    
    const coincideBusqueda =
      prod.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.descripcion?.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriasSeleccionadas.length === 0 || // Si no hay categorías seleccionadas, mostrar todos
      categoriasSeleccionadas.some((categoria) =>
        prod.categorias?.includes(categoria)
      ); // Coincide si tiene al menos una categoría en común

      if(busqueda) {
      return coincideBusqueda && coincideCategoria;
      } else {
        return coincideCategoria;
      }
  });

  // Calcular los productos visibles
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosVisibles = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

  // Calcular el número total de páginas basado en los productos filtrados
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value); // Actualizar el término de búsqueda
    setPaginaActual(1); // Reiniciar a la primera página
  };

  // Manejar selección de categorías
  const toggleCategoria = (e) => {
    const categoria = e.target.dataset.cat;
    
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((cat) => cat !== categoria) // Quitar categoría si ya está seleccionada
        : [...prev, categoria] // Agregar categoría si no está seleccionada
    );
    setPaginaActual(1); // Reiniciar a la primera página
  };


  return (
    <>
      <div className='row filtros-container mb-5'>
        <div className='d-flex flex-column gap-2 w-100 justify-content-center align-items-center'>
          <input className='buscador-input' type='search' placeholder='Encuentra algún modelo de tu interés' onChange={(e) => handleBusqueda(e)}/>
          
          <div className='d-flex gap-2 justify-content-start categorias-seleccionadas-container'>
          {categoriasSeleccionadas.length > 0 && categoriasSeleccionadas.map((cat, index) => {
            return (
              <div key={index} className='d-flex align-items-center gap-1 categorias-selected-tag texto-12 text-bold' data-cat={cat} onClick={(e) => toggleCategoria(e)}>
                {cat} <i data-cat={cat} className="bi bi-x-circle"></i>
              </div>
            )
          })
          }
          </div>
        </div>
      </div>

      <div className='row productos-tienda-container d-flex justify-content-center justify-content-md-start'>

        <div className="col-lg-2 tienda-categorias-container">
          <p className='mb-1 texto-18 ps-2'>Categorías:</p>
            <ul className='categorías-ul d-flex flex-column'>
                <li className={categoriasSeleccionadas.includes("nuevo") ? "cat-activa" : ""} data-cat="nuevo" onClick={(e) => toggleCategoria(e)}>Nuevo</li>
                <li className={categoriasSeleccionadas.includes("descuento") ? "cat-activa" : ""} data-cat="descuento" onClick={(e) => toggleCategoria(e)}>Descuento</li>
                <li className={categoriasSeleccionadas.includes("michi") ? "cat-activa" : ""} data-cat="michi" onClick={(e) => toggleCategoria(e)}>Michi</li>
            </ul>
        </div>        
        <div className="col-12 p-1 p-md-2 col-lg-10">
          <div className={`gap-3 gap-md-4 ${productosVisibles.length !== 0 && 'productos-container'}`}>
          {productosVisibles.map( (prod, index ) => {
            return (
              <div className='col-12 px-0 col-md-12 col-lg-12' key={prod.id || index} data-aos="fade-left" data-aos-delay={`${index}00`} data-aos-once="true" data-aos-offset="100">
                <ItemProducto prod={prod}/>
              </div>
            )
          })}
          </div>
        {/* SI NO HAY RESULTADOS: */}
        {productosVisibles.length === 0 && (
          <div>
            <p>
              {/* hay busqueda por filtro y categoria */}
              {busqueda && categoriasSeleccionadas.length > 0 && (
                <>
                  No se encontró tu búsqueda de 
                  <span className='text-bold'> {busqueda} </span> 
                  en las categorías de {categoriasSeleccionadas.map((cat, index) => {
                    return <span key={index} className='text-bold'>{cat}, </span>
                  })}
                </>
                )
              }

              {/* hay solo busqueda por filtro */}
              {busqueda && categoriasSeleccionadas.length === 0 && (
                <>
                  No se encontró tu búsqueda de  
                  <span className='text-bold'> {busqueda}</span> 
                </>
                )
              }

              {/* hay solo busqueda por categoria */}
              {!busqueda && categoriasSeleccionadas.length > 0 && (
                <>
                  No se encontraron modelos en la categoría de: {categoriasSeleccionadas.map((cat, index) => {
                    return <span key={index} className='text-bold'>{cat} </span>
                  })}
                </>
                )
              }

            </p>

          </div>
        )}
        </div>
      </div>

      {/* Controles de paginación */}
      {totalPaginas > 1 && (
      <div className="pagination-container d-flex justify-content-center align-items-center mt-4">
        <button
          className={`magic-btn ${paginaActual !== 1 && "magic-btn-violeta btn-paginacion-hover"} btn-paginacion mx-2`}
          disabled={paginaActual === 1}
          onClick={() => cambiarPagina(paginaActual - 1)}
        >
          Anterior
        </button>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            className={`magic-btn btn-pagina-numero mx-1 ${
              paginaActual === index + 1 ? "active" : ""
            }`}
            onClick={() => cambiarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`magic-btn ${paginaActual !== totalPaginas && "magic-btn-violeta btn-paginacion-hover"} btn-paginacion mx-2`}
          disabled={paginaActual === totalPaginas}
          onClick={() => cambiarPagina(paginaActual + 1)}
        >
          Siguiente
        </button>
      </div>
      )}
    </>
  )
}

export default ProductosTienda