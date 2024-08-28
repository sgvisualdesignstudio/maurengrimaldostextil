import '../assets/styles/main.scss'
import { CardService } from '../components/CardService'
import  img1  from '../assets/img/confeccion.jpg'
import  img2  from '../assets/img/ropa-deportiva.jpg'
import  img3  from '../assets/img/disenos-personalizados.jpg'
import  img4  from '../assets/img/patronaje.jpg'

export function Service () {
    return(
        <>
        <section className='servicios' id='servicios'>
            <div className="container">
            <h3>Servicios</h3>
            <p>En Mauren Grimaldos Textil, nos dedicamos a ofrecer soluciones integrales que se adaptan a las necesidades específicas de cada cliente. Nuestra misión es ayudarte a alcanzar tus objetivos mediante un enfoque personalizado y profesional. Contamos con un equipo de expertos que trabaja con pasión y dedicación para brindarte servicios de alta calidad en cada uno de nuestros proyectos. Descubre lo que podemos hacer por ti y tu negocio.</p>            
                <div className="cards">
                    
                    <CardService 
                        img={img1} 
                        title="Confección"
                        data-aos="flip-left"
                         data-aos-delay="800"
                        data-aos-duration="6000"
                        description="Ofrecemos confección de prendas de alta calidad, cuidando cada detalle para lograr acabados impecables y duraderos."
                        />
                    <CardService 
                        img={img2} 
                        title="Ropa deportiva"
                        data-aos="flip-left"
                         data-aos-delay="1500"
                        data-aos-duration="12000" 
                        description="Fabricamos ropa deportiva cómoda y funcional, diseñada con tejidos técnicos para mejorar tu rendimiento y mantenerte fresco."
                        />
                    <CardService 
                        img={img3} 
                        title="Diseños personalizados"
                        data-aos="flip-left"
                         data-aos-delay="1500"
                        data-aos-duration="12000" 
                        description="Creamos prendas únicas y personalizadas que reflejan tu estilo, trabajando contigo en cada paso para un resultado perfecto."
                    />
                    <CardService 
                        img={img4} 
                        title="Patronaje"
                        data-aos="flip-left"
                         data-aos-delay="800"
                        data-aos-duration="6000"
                        description="Nuestro servicio de patronaje asegura un ajuste perfecto en cada prenda, con patrones precisos listos para la producción."
                    />
                </div>
            </div>
        </section>
    </>
    )
}