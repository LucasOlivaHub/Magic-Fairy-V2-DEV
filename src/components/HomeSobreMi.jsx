import React from 'react'
import { fotoPerfil } from '../assets';


const HomeSobreMi = () => {
  return (
    <section id='sobremi' className="sobremi-container py-5 px-2">
        <div className="container d-flex flex-column align-items-start">
            <div className="sobremi-titulo-container justify-content-center justify-content-lg-start">
                <h3 className="sobremi-titulo titulo-lineaabajo text-center text-lg-start" data-aos="fade-in">¿Quién soy?</h3>
            </div>
            <div className="sobremi-contenido">
                <div className="d-flex flex-column gap-2 py-4" data-aos="fade-right" data-aos-delay="100">
                    <p className="text-start">Mi nombre es Ludmila Vario, soy Magic Fairy Nails Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laudantium deleniti numquam aut cupiditate, id nulla eos commodi, aperiam voluptatum esse itaque laborum molestias, enim sapiente quaerat quisquam quos nobis.</p>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam laudantium quam pariatur animi.</p>
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