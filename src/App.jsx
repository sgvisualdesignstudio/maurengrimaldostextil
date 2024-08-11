import { Header } from './sections/Header.jsx'
import { HeroBanner } from './sections/HeroBanner.jsx'
import { AboutUs } from './sections/AboutUs.jsx'
import { Service } from './sections/Service.jsx'
import { Clientes} from './sections/Clientes.jsx'
import { Galeria } from './sections/Galeria.jsx'
import { Contact } from './sections/Contact.jsx'


 export function App() {

  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <Service />
      <Clientes />
      <Galeria />
      <Contact />
    </>
  )
}


