import React from 'react'

const HomeBeneficios = () => {
  return (
    <section className="beneficios-container py-5 px-2">
        <div className="container mb-3">
            <div className="beneficios-titulo-container d-flex justify-content-center justify-content-lg-start mb-4">
                <h3 className="beneficios-titulo titulo-lineaabajo">Beneficios</h3>
            </div>

            <div className="beneficios-cards-container d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center gap-3">
                <article className="beneficios-card d-flex flex-column align-items-center gap-2" data-aos="fade-in" data-aos-delay="400">
                    <i className="bi bi-magic"></i>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <h4 className="text-center">Diseños personalizados</h4>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </article>
                <article className="beneficios-card d-flex flex-column align-items-center gap-2" data-aos="fade-in" data-aos-delay="500">
                    <i className="bi bi-battery-full"></i>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <h4 className="text-center">Durabilidad</h4>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </article>
                <article className="beneficios-card d-flex flex-column align-items-center gap-2" data-aos="fade-in" data-aos-delay="600">
                    <i className="bi bi-coin"></i>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <h4 className="text-center">Pagos con Mercado Pago</h4>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </article>
                <article className="beneficios-card d-flex flex-column align-items-center gap-2" data-aos="fade-in" data-aos-delay="700">
                    <i className="bi bi-truck"></i>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <h4 className="text-center">Envios a todo el país</h4>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default HomeBeneficios