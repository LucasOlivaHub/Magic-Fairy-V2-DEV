import React from 'react'
import MagicBtn from './MagicBtn'

const HomeOpinionCard = ({opinion}) => {
  return (
    <article className='opinion-card-container'>
        <div className='d-flex flex-column gap-1'>
            <div className="info-container">
                <img className="opinion-img" src={opinion.foto ? opinion.foto : "./imagenes/opiniones/opinion-fairy-default.png"} alt={`Opinión de ${opinion.nombre}`} />
                <h5 className="opinion-nombre mb-0">{opinion.nombre}</h5>
                  <div className="ratings-opiniones">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={`star-opiniones ${index < opinion.estrellas ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
            </div>

            <p className="opinion-texto">
              {/* acortar texto a 250 caracteres maximo */}
              { opinion.texto.length > 250 ? opinion.texto.slice(0, 300) + "..." : opinion.texto }
            </p>

        </div>

        <div>
            {/* <a href={opinion.link} className='magic-btn magic-btn-rosa'>Ver en Google Maps</a> */}
            <MagicBtn link={opinion.link} color={"rosa"} texto="Ver en Google Maps"/>
        </div>

    </article>
  )
}

export default HomeOpinionCard