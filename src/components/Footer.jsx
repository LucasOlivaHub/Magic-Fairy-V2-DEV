import React from 'react'
import { varitaImg } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-violeta-gradiente">
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column gap-2 mb-2 mb-lg-0">
                    <Link className="footer-link" href="/">
                        Inicio
                    </Link>
                    <Link className="footer-link" to={"/sobre-mi"}>                  
                        Sobre Mi
                    </Link>
                    <Link className="footer-link" to={"/como-comprar"}>
                        ¿Cómo comprar?
                    </Link>
                </div>

                <div className="col-lg-6 d-flex flex-column gap-2">

                    <a className="footer-link" href="https://coal-sand-a89.notion.site/T-RMINOS-Y-CONDICIONES-d2568342335b4549a55e1e2726068f45" target='_blank'>
                        Términos y Condiciones
                    </a>
                    <a className="footer-link" href="https://coal-sand-a89.notion.site/PREGUNTAS-FRECUENTES-a42840971c6c4149880cf706a12f7f82" target='_blank'>
                        Preguntas frecuentes
                    </a>
                    
                    <a className="footer-link" href="/#contacto">
                        Contacto
                    </a>
                    <div className="redes-icons-container d-flex gap-3 w-100">
                        <a className="footer-link" href="/">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a className="footer-link" href="/">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            <img className="varita-img" src={varitaImg} alt="varita_img"/>
        </div>
    </footer>
  )
}

export default Footer