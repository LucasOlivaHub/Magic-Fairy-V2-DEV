import React from 'react'
import { varitaImg } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-violeta-gradiente">
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column gap-2 mb-2 mb-lg-0">
                    <a className="footer-link" href="/">
                        Inicio
                    </a>
                    <a className="footer-link" href="/#sobremi">
                        Sobre Mi
                    </a>
                </div>

                <div className="col-lg-6 d-flex flex-column gap-2">
                    <a className="footer-link" href="/">
                        Términos y Condiciones
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