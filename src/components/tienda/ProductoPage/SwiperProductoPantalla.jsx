import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperProductoPantalla = ({ producto, cambiarImagen }) => {
  const {imgs, setImgs} = useState([]);



  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Añadir Autoplay como módulo
      spaceBetween={15}
      slidesPerView={3.5}
      loop={false} // Activar loop infinito
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos (3000ms)
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
    >

  {/* SELECCIONAR IMG PORTADA */}
    <SwiperSlide>
        <div className='producto-img-swiper swiperImgSeleccionada' style={{backgroundImage: `url(${producto.imgPortada})`}} onClick={(e) => cambiarImagen(e, producto.imgPortada)}></div>
    </SwiperSlide>
    
    {/* BUCLE PARA TODAS LAS IMAGENES SEGUN COLOR Y ESO */}
     {imgs && imgs.map((img, index) => (
        <SwiperSlide key={index}>
           
        </SwiperSlide>
      ))}
      
    {/* PROVISORIO PARA VER COMO FUNCIONA TODO */}
    <SwiperSlide>
        <div className='producto-img-swiper' style={{backgroundImage: 'url("/imagenes/productos/unia-3.jpg")'}} onClick={(e) => cambiarImagen(e, '/imagenes/productos/unia-3.jpg')}></div>
    </SwiperSlide>

    
    <SwiperSlide>
        <div className='producto-img-swiper' style={{backgroundImage: 'url("/imagenes/productos/unia-michi.jpg")'}} onClick={(e) => cambiarImagen(e, '/imagenes/productos/unia-michi.jpg')}></div>
    </SwiperSlide>

    
    <SwiperSlide>
        <div className='producto-img-swiper' style={{backgroundImage: 'url("/imagenes/productos/unia-3.jpg")'}} onClick={(e) => cambiarImagen(e, '/imagenes/productos/unia-3.jpg')}></div>
    </SwiperSlide>
    
    <SwiperSlide>
        <div className='producto-img-swiper' style={{backgroundImage: 'url("/imagenes/productos/unia-michi.jpg")'}} onClick={(e) => cambiarImagen(e, '/imagenes/productos/unia-michi.jpg')}></div>
    </SwiperSlide>

    
    <SwiperSlide>
        <div className='producto-img-swiper'></div>
    </SwiperSlide>

    <div className="botones-swiper-producto">
        <div className="swiper-button-prev swiper-button-prev-producto">
        <i className="bi bi-chevron-left"></i>
        </div>
        <div className="swiper-button-next swiper-button-next-producto">
        <i className="bi bi-chevron-right"></i>
        </div>
    </div>
    </Swiper>
  );
};