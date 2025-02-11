import React from 'react'
import magicConfundida from '../assets/images/magic-animado/magic-confundida.webp'
import MagicBtn from '../components/MagicBtn'

const Page404 = () => {
  return (
    <section className='page-404-section pb-4 px-2 d-flex justify-content-center align-items-center'> 
        <div className="container">
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3>404</h3>
            <p>No se ha encontrado tu búsqueda.</p>
            <MagicBtn link={"/"} color={"rosa"} texto="Ir a la home"/>
            <img src={magicConfundida} width={200} alt='Magic-404'/>
          </div>
        </div>
    </section>
  )
}

export default Page404