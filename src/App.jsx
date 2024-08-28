import { Header } from './sections/Header.jsx'
import { HeroBanner } from './sections/HeroBanner.jsx'
import { AboutUs } from './sections/AboutUs.jsx'
import { Service } from './sections/Service.jsx'
import { Clientes} from './sections/Clientes.jsx'
import { Galeria } from './sections/Galeria.jsx'
import { Contact } from './sections/Contact.jsx'
import ScrollToTop from "react-scroll-to-top"

import { FloatingWhatsApp } from 'react-floating-whatsapp'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

 export function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <Service />
      <Clientes />
      <Galeria />
      <Contact />
     
      <ScrollToTop smooth color="#6f00ff" />
      <FloatingWhatsApp className='floating-whatsapp'
        avatar='https://avatars.githubusercontent.com/u/62678438?v=4'
        accountName='Mauren Grimaldos | Textil'
        statusMessage = ' '
        chatMessage= 'Hola buen día ¿ en que te podemos ayudar?'
        placeholder='Escribe aquí tu mensaje...'
    />
    </>
  )
}


