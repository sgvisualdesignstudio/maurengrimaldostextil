import '../assets/styles/main.scss'
import { CardService } from '../components/CardService'
import  img1  from '../assets/img/confeccion.jpg'
import  img2  from '../assets/img/confeccion.jpg'
import  img3  from '../assets/img/confeccion.jpg'

export function Service () {
    return(
        <section className='servicios'>
            <div className="container">

            <h3>Servicios</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas dictumst sit ac in nunc. Urna praesent pharetra varius dignissim habitant aliquam consequat vitae vitae. Amet elit massa et eleifend arcu ipsum non consectetur. Etiam sed pharetra purus ornare rhoncus eu consequat. Commodo in eget id quis nulla ullamcorper dolor neque felis.</p>
            
                <div className="cards ">
                    <CardService img={img1} title="Servicio 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."/>
                    <CardService img={img2} title="Servicio 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."/>
                    <CardService img={img3} title="Servicio 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."/>
                    <CardService img={img3} title="Servicio 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."/>
                </div>
            
            </div>
        </section>
    )
}