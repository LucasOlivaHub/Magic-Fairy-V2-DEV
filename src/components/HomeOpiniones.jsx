import React, { useEffect, useState } from 'react'
import HomeOpinionCard from './HomeOpinionCard'
import opiniones from '../data/opiniones.json'
import estrellasBlancas1 from '../assets/images/stars-white.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Importar Autoplay
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MagicBtn from './MagicBtn';

const HomeOpiniones = () => {
    const [opinionesHome, setOpinionesHome] = useState([])


    useEffect(() => {
        setOpinionesHome(opiniones);
    }, [])

  return (
    <section className='homeopiniones-section bg-rosa-blanco py-5 px-2'>
        <div className="container">
            
                <div className="homeopiniones-titulo-container d-flex justify-content-center justify-content-lg-start mb-4">
                    <h3 className="homeopiniones-titulo titulo-lineaabajo" data-aos="fade-in">Opiniones de mis clientas</h3>
                </div>

            <div className='row'>
                <div className='col-12 col-lg-4' data-aos="fade-right" data-aos-delay="300">
                    <p className='mt-3' style={{fontWeight: 500, fontSize: 18}}>¡Tu opinión me ayuda a seguir creciendo!</p> 
                    <p>Estas son algunas de las reseñas de mis fairys. Podes verlas todas en Google Maps:</p>
                    <MagicBtn link={"https://maps.app.goo.gl/xYhTqc3HMycuGJ2s6"} color={"violeta"} texto="Ver todas las opiniones"/>
                    <div className="d-flex justify-content-center mt-3 mb-3 mb-lg-0">
                        <img className='estrellas-blancas-img pe-lg-2 pt-lg-2' src={estrellasBlancas1} alt="estrellas_blancas" width={175}/>
                    </div>
                </div>
                <div className='col-12 col-lg-8' data-aos="fade-in" data-aos-delay="800">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Añadir Autoplay como módulo
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true} // Activar loop infinito
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos (3000ms)
                    navigation={{
                    nextEl: '.swiper-button-next-opiniones',
                    prevEl: '.swiper-button-prev-opiniones',
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{ 
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2.5
                    }
                    }}

                >
                    {/* CONTENIDO SWIPER */}
                    {opinionesHome && opinionesHome.map((op, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <HomeOpinionCard opinion={op}/>
                            </SwiperSlide>)
                    })}

                    <div className="botones-swiper-opiniones">
                        <div className="swiper-button-prev swiper-button-prev-opiniones">
                        <i className="bi bi-chevron-left"></i>
                        </div>
                        <div className="swiper-button-next swiper-button-next-opiniones">
                        <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </Swiper>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeOpiniones