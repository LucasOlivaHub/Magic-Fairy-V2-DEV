import PrincipalesSwipers from './PrincipalesSwipers';

import { imgSwiperHome1, imgSwiperHome2, imgSwiperHome3, setImg1 } from '../assets';


const HomeSwiper = () => {
  const imagenesSwiper = [
    {
      imgBanner: imgSwiperHome1,
      setImg: setImg1,
      tituloImg: "Uña Michi",
      detalles: true,
      titulo: "Uña Michi",
      descripcion: "¿Alguna vez pensaste en tener la patita de tu michi en tus uñas? 🥹🐈‍⬛ Y lo mejor... poder usarlas una y otra vez por siempre ♻️💅🏼",
      textoBoton: "Saber más",
      colorBoton: "rosa",
    },
    {
      imgBanner: imgSwiperHome2,
      tituloImg: "uña 2",
      detalles: true,
      titulo: "Uña no se qué",
      descripcion: "Un set de uñas hermoso pero que no sé cómo se llama",
      textoBoton: "Saber más",
      colorBoton: "violeta",
    },
    {
      imgBanner: imgSwiperHome3,
      tituloImg: "Mandorlas Modernas",
      detalles: true,
      titulo: "Mandorlas Modernas",
      descripcion: "Realizadas con full polygel combinando técnicas 3D",
      textoBoton: "Saber más",
      colorBoton: "rosa",
    },
  ];
  
  return (
    <main className="home-swipers-container">
          <PrincipalesSwipers imagenes={imagenesSwiper}/>
    </main>
  )
}

export default HomeSwiper