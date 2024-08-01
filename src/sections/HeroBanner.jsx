import '../assets/styles/main.scss';
import uniformImg from '../assets/img/uniforme-hero.png';
import {Boton} from '../components/Boton';

export function HeroBanner () {
    return (
        <>
            <section className="hero-banner" >  
                <div className='container'>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-12 col-md-7">
                        <h1>Mauren Grimaldos</h1>
                        <h2>Soluciones textiles</h2>
                        <Boton texto="Conoce más" href="#aboutus" />
                        </div>
                        <div className="col-xs-12 col-md-5">
                        <img src={uniformImg} alt="hero" />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}