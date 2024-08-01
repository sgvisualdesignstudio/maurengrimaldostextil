import '../assets/styles/main.scss'; // Ruta corregida para el archivo SCSS
import  logo  from '../assets/img/logo.svg';
import { BurgerButton } from '../components/BurgerButton';
import  {useState} from 'react';
// import styled from 'styled-components';

export function Header () {
const [clicked, setClicked] = useState(false);
const handleClick = () => {
  // cuando esta true lo pasa a false y visecerá el menu
  setClicked(!clicked);
}
  return (
    <>
      <header className='roboto-light'>
        <div className='container'>
          <div className='row align-items-center'  >
            <div className='col-xs-6 col-md-3'>
              <img width={70} src={logo} alt="Mauren Grilmaldos | Textil" />
            </div>
            <div className='col-xs-6 col-md-9 '>
              <nav>
                <ul className={` ${clicked ? 'active' : ''}`}>
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/">Nosotros</a></li>
                  <li><a href="/">Servicios</a></li>
                  <li><a href="/">Galeria</a></li>
                  <li><a href="/">Ubicación</a></li>
                  <li><a href="/">Contacto</a></li>
                </ul>
                <BurgerButton clicked={clicked} handleClick={handleClick}/>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
    )
}

// const NavContainer = styled.nav``