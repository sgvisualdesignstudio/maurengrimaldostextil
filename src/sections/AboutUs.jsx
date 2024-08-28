import '../assets/styles/main.scss';
import deportista from '../assets/img/deportista.webp';

export function AboutUs() {
    return(
        <section className='aboutus' id='nosotros'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div data-aos="slide-right" className="col-xs-12 col-lg-6">
                       <h3>Nosotros</h3>
                       <p>
                       En Mauren Grimaldos Textil, nos especializamos en crear prendas que combinan calidad, estilo y funcionalidad. Con años de experiencia en la industria de la moda, nos dedicamos a satisfacer las necesidades de nuestros clientes ofreciendo soluciones personalizadas. Nuestro equipo de expertos trabaja con pasión y atención al detalle, desde el diseño hasta la confección, asegurando que cada pieza refleje la identidad única de nuestros clientes. Nos enorgullece ser una empresa comprometida con la innovación, la calidad y la satisfacción total de nuestros clientes.
                       </p>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <img data-aos="slide-up"  src={deportista} alt="" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}