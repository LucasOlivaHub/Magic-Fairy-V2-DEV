import React from 'react'
import { fotoPerfil } from '../assets';
import MagicBtn from './MagicBtn';


const HomeSobreMi = () => {
  return (
    <section id='sobremi' className="sobremi-container py-5 px-2">
        <div className="container d-flex flex-column align-items-start">
            <div className="sobremi-titulo-container justify-content-center justify-content-lg-start">
                <h3 className="sobremi-titulo titulo-lineaabajo text-center text-lg-start" data-aos="fade-in">¿Quién soy?</h3>
            </div>
            <div className="sobremi-contenido">
                <div className="d-flex flex-column gap-2 py-4" data-aos="fade-right" data-aos-delay="100">
                    <p className="text-start">Soy de Ituzaingó, Buenos Aires. Tengo 21, soy manicurista y esculpidora profesional en acrílico, estudio Diseño Gráfico en FADU-UBA y mi color favorito es el amarillo 💛</p>
                    <p className="text-start">Magic Fairy Nails es mi fantasía hecha realidad, una idea que apareció por mi cabeza a principios del 2019 mientras buscaba una forma de incluir el arte en mi día a día. Hoy me hace inmensamente feliz decir que es mi trabajo de tiempo completo 🥰🧚‍♀️</p>
                    <MagicBtn link={"/sobre-mi"} texto={"Saber más sobre mi"} color={"rosa"}/>
                </div>

                <div className="d-flex justify-content-center" data-aos="fade-left" data-aos-delay="200">
                    <img className="sobremi-profile-img" src={fotoPerfil} alt="Ludmila Vario"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSobreMi