import '../assets/styles/main.scss';
import Facebook from '../assets/img/facebook-icon.svg';
import Instagram from '../assets/img/instagram-icon.svg';
import Tiktok from '../assets/img/tik-tok-icon.svg';
import location from '../assets/img/location-icon.svg';
import whatsapp from '../assets/img/whatsapp-icon.svg';
import mail from '../assets/img/mail-icon.svg';

import {Map} from '../components/Map.jsx'

export function Contact () {
    return (
        <section className="contact" id='contacto'>
            <div 
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-duration="18000" 
                className="container contact__card"

            >
                <div className="row ">
                    <div className="col-xs-12 col-lg-6">
                        <Map />
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="contact__card-body">
                            <h3>Ubicación</h3>
                            <p className='contact__card-body__item'>
                                <span>
                                    <img src={location} alt="Ubicación" />
                                </span>
                                Dirección: Cra 52c #38a - 04
                            </p>
                            <p className='contact__card-body__item'>
                                <span>
                                   <img src={whatsapp} alt="Whatsapp" />
                                </span>
                                Cel: 3144916563</p>
                            <p className='contact__card-body__item'>
                                <span>
                                    <img src={mail} alt="Mail" />
                                </span>
                                Mail: www.mauren.textil@gmail.com</p>
                        </div>
                        <div className="contact__card-form">
                            <h5>Contáctanos</h5>
                            <form >
                                <div className='contact__card-form__input'>
                                <label>Nombre:</label>
                                <br />
                                <input type="text" name="name" required />
                                </div>
                                <br />
                                <div className='contact__card-form__input'>
                                <label>Email:</label>
                                <br />
                                <input type="email" name="email" required />
                                </div>
                                <br />   
                                <div  className='contact__card-form__input'>
                                <label>Mensaje:</label>
                                <br />
                                <textarea name="message" required></textarea>
                                </div>

                                <div className='contact__card-form__input'>
                                <button type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact__card-social">
                            <a href="#"><img src={Facebook} alt="" /></a>
                            <a href=""><img src={Instagram} alt="" /></a>
                            <a href=""><img src={Tiktok} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}