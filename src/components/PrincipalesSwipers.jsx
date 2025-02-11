// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Importar Autoplay
import MagicBtn from './MagicBtn'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PrincipalesSwipers = ({ imagenes }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Añadir Autoplay como módulo
      spaceBetween={0}
      slidesPerView={1}
      loop={true} // Activar loop infinito
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos (3000ms)
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
    >
     {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
            <div className="swiper-img-container" style={{ backgroundImage: `url(${imagen.imgBanner})`}}>
                {imagen.detalles && (
                <div className="swiper-detalle-container container d-flex flex-column align-items-start flex-lg-row align-items-lg-center justify-content-between">
                    <div className="swiper-unia-texto d-flex flex-column align-items-start">
                        <h2 className="text-white text-start">{imagen.titulo}</h2>
                        <p className="text-white text-start">{imagen.descripcion}</p>
                        {imagen.textoBoton && (
                          <>
                            <MagicBtn link={'#'} color={imagen.colorBoton} texto={imagen.textoBoton}/>
                          </>
                        )}
                    </div>
                    {imagen.setImg && (
                    <div className="swiper-set-container" style={{ backgroundImage: `url(${imagen.setImg})`}}>
                        
                    </div>
                    )}
                </div>
                )}
            </div>
        </SwiperSlide>
      ))}

    <div className="swiper-button-prev">
      <i className="bi bi-chevron-left text-white"></i>
    </div>
    <div className="swiper-button-next">
      <i className="bi bi-chevron-right text-white"></i>
    </div>
    </Swiper>
  );
};


export default PrincipalesSwipers