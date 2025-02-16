import React from 'react'
import universales from '../assets/images/como-comprar/sets-universales.jpg'
import amedida from '../assets/images/como-comprar/sets-a-medida.jpg'
import medidaInstrucciones from '../assets/images/como-comprar/sets-a-medida-instrucciones.jpg'


export const ComoComprar = () => {
  return (
    <section className='comocomprar-section py-4'>
        <div className="container">
            <div className="pb-5">
                <h3 className="sobremi-titulo titulo-lineaabajo h3-titulo-pagina">¿Cómo comprar?</h3>
            </div>

            <div className='instrucciones-compra-container d-flex flex-column gap-3'>
                <article className='instrucciones-p1-container d-flex flex-column align-items-center'>
                    <p className='text-bold mb-1'>Antes que nada, tenés que decidir...</p>
                    <p className='text-bold'>¿Qué tipo de Press On querés?</p>
                </article>

                <article className="instrucciones-p2-container d-flex flex-column mb-5">
                    <h4 className='text-bold'>• SETS UNIVERSALES</h4>

                    <img className='align-self-center my-2' src={universales} alt='universales_info'/>
                    <p className='text-decoration-underline'>Disponibilidad:</p>

                    <p className='mb-4 fw-500 texto-18'>¡Siempre están disponibles!</p>

                    <p className='text-decoration-underline'>¿Cómo las consigo?</p>
                    <ul className='p-0 d-flex flex-column gap-3'>
                        <li><b>1)</b> Dentro de la tienda online seleccioná el diseño que más te guste</li>
                        <li><b>2)</b> Elegí el método de envío</li>
                        <li><b>3)</b> Completá tus datos personales</li>
                        <li><b>4)</b> Aboná tu pedido</li>
                        <li><b>5)</b> ¡Y listo! Solo queda esperar a que lleguen 🥰</li>
                    </ul>
                </article>

                
                <article className="instrucciones-p2-container d-flex flex-column mb-5">
                    <h4 className='text-bold'>• SETS A MEDIDA</h4>

                    <img className='align-self-center my-2' src={amedida} alt='a_medida_info'/>
                    <p className='text-decoration-underline'>Disponibilidad</p>
                    <div className='d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center gap-md-3'>
                        <p>Para encargarlas, me manejo con un:</p>
                        <span className='mb-4 fw-500 texto-18 bg-violeta w-f-content text-white rounded py-1 px-2'>SISTEMA DE CUPOS REDUCIDOS</span>
                    </div>
                    
                    
                    <p className='text-decoration-underline'>¿Cómo las consigo?</p>
                    <ul className='p-0 d-flex flex-column gap-3'>
                        <li><b>1)</b> Mandame un WhatsApp contándome tu idea para saber el precio total</li>
                        <li><b>2)</b> Cuando ya estés decidida, buscá la SEÑA en la tienda online</li>
                        <li><b>3)</b> Elegí la FORMA y el LARGO que desees</li>
                        <li><b>4)</b> Elegí el método de envío, completá tus datos personales y aboná tu pedido</li>
                        <li><b>5)</b> Enviame un mail con tus MEDIDAS + FOTOS/IDEAS DEL DISEÑO + COMPROBANTE DE PAGO. Recordá poner como asunto tu orden de compra (#xxxx)</li>
                        <li><b>6)</b> Te responderé ese mail con el valor restante del diseño que elegiste y ahí abonás el resto con el método de pago que prefieras</li>
                        <li><b>7)</b> ¡Y listo! Solo queda esperar a que lleguen 🥰</li>
                    </ul>

                    <p className='texto-18 text-center texto-rojo my-4'>🚫 Si no encontrás la SEÑA en la tienda es porque ya se agotaron los cupos de esta tanda. Te espero en la próxima apertura! Y corré a encargar las tuyas porque suelen agotarse rápido 😱🏃🏻‍♀️</p>
                
                    <img className='align-self-center my-2' src={medidaInstrucciones} alt='sets_a_medida_instrucciones'/>
                </article>
            </div>
            
        </div>
    </section>
  )
}
