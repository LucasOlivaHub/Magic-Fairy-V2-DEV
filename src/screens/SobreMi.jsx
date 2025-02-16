import React from 'react'
import { fotoPerfil } from '../assets';

export const SobreMi = () => {
  return (
    <section className='sobremi-section py-4'>
      <div className="container">
        <div className="pb-4">
            <h3 className="sobremi-titulo titulo-lineaabajo h3-titulo-pagina">Sobre mi</h3>
        </div>

        <div className='row'>

        <div className="col-12 col-lg-6">
              <p>¡Holis! Soy Ludmi</p>
              <p>Soy de Ituzaingó, Buenos Aires. Tengo 21, soy manicurista y esculpidora profesional en acrílico, estudio Diseño Gráfico en FADU-UBA y mi color favorito es el amarillo 💛</p>
              <p>Magic Fairy Nails es mi fantasía hecha realidad, una idea que apareció por mi cabeza a principios del 2019 mientras buscaba una forma de incluir el arte en mi día a día. Hoy me hace inmensamente feliz decir que es mi trabajo de tiempo completo 🥰🧚‍♀️</p>
              <p>
                Me gusta ser autogestiva ♡ Absolutamente todas las tareas que implica este emprendimiento las 
                hago sola: desde hacer las uñas a medida, limarlas, modelar apliques, esmaltarlas, fotearlas, 
                comprar insumos, diseñar el packaging y folletería, hasta cargar los paquetes al correo, 
                despacharlos, editar publicaciones, generar contenido, contestar mensajes, y todos los etcéteras 
                que se te puedan ocurrir. Cualquier ser en mi situación desea tres cosas: <b>paciencia, buena onda</b> y 
                <b> valoración</b> 💖
              </p>
              <p>Dicho esto, cualquier duda que tengas, no dudes en escribirme por Insta o WhatsApp, igualmente en la tienda esta toda la info necesaria para realizar tu pedido {'<3'}</p>
              <p>Ahora si, gracias por leerme y espero que llenes de magia esas uñitassss 🪄</p>
              <p>Atte: ✨Ludmi✨</p>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img className="sobremi-img" src={fotoPerfil} alt="Ludmila Vario"/>

          </div>



        </div>

      </div>
    </section>
  )
}
