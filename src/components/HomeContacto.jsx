import React from 'react'
import MagicBtn from './MagicBtn'

const HomeContacto = () => {
  return (
    <section id='contacto' className="contacto-section bg-rosa py-5 px-2">
        <div className="container">
            <div className="row">
                <div className="homecontacto-titulo-container d-flex justify-content-center justify-content-lg-start mb-4">
                    <h3 className="homecontacto-titulo titulo-lineaabajo" data-aos="fade-in">¡Dejame un mensajito para saber más!</h3>
                </div>
            </div>

            <div className="row py-3">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="500">
                        <form className="form-home d-flex flex-column gap-2">
                            <label>Nombre
                                <input type='text' placeholder='Ingresa tu nombre'/>
                            </label>
                            <label>Email
                                <input type='email' placeholder='Ingresa tu email'/>
                            </label>
                            <label>Mensaje
                                <textarea placeholder='Ingresa tu mensaje'></textarea>
                            </label>

                            <div className='d-flex justify-content-end'>
                                <MagicBtn link={"/"} claseAdicional="enviar-btn" color={"violeta"} texto="Enviar" />
                            </div>
                            {/* <button class="enviar-btn magic-btn magic-btn-violeta text-center">Enviar</button> */}
                        </form>                 
                    </div>
                    
                    <div className="col-lg-6 d-flex justify-content-lg-center mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="600" data-aos-offset="0">
                        <div className="d-flex flex-lg-column gap-2 redes-container">
                            <p className="mb-0 redes-titulo">También podes contactarme por mis redes sociales</p>
                            <div className="redes-icons-container d-flex gap-4 w-100">
                                <a href="/">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="/">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default HomeContacto