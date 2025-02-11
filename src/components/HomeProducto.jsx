import React, { useRef } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Importar Autoplay

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomeProducto = ({ productos }) => {
  const swiperRef = useRef(null); // Referencia al Swiper

    return (
      <>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Añadir Autoplay como módulo
        spaceBetween={10}
        slidesPerView={1}
        loop={true} // Activar loop infinito
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos (3000ms)
        navigation={{
          nextEl: '.swiper-button-next-prods',
          prevEl: '.swiper-button-prev-prods',
        }}
        pagination={{ clickable: true }}
        breakpoints={{ 
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }}

        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Guarda la instancia de Swiper
        }}
      >
          {productos.map((prod, index) => (
              // Mostrar solo si el producto es destacado
              prod.destacado && (
                <SwiperSlide key={index}>
                  <a 
                      key={index} 
                      className="homeproducto producto-fairy" 
                      href="/" 
                      style={{ backgroundImage: `url(${prod.imgPortada})` }}
                      
                      onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Detener autoplay al entrar
                      onMouseLeave={() => swiperRef.current?.autoplay.start()} // Reanudar autoplay al salir
                  >
                      <div className="homeproducto-detalle">
                          <h2 className="homeproducto-titulo text-white mb-1">{prod.titulo}</h2>
                          <p className="homeproducto-desc  text-white mb-0">{prod.descripcion}</p>
                      </div>
                      {prod.categorias && prod.categorias.includes("nuevo") && <p className="etiqueta-nuevo">¡NUEVO!</p>}
                  </a>
                </SwiperSlide>
              )
          ))}

          <div className="botones-swiper-prods">
            <div className="swiper-button-prev swiper-button-prev-prods">
              <i className="bi bi-chevron-left"></i>
            </div>
            <div className="swiper-button-next swiper-button-next-prods">
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </Swiper>
      </>
    );
  };

export default HomeProducto