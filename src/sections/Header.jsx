import '../assets/styles/main.scss'; // Ruta corregida para el archivo SCSS
import logo from '../assets/img/logo.svg';
import { BurgerButton } from '../components/BurgerButton';
import { useState, useEffect } from 'react';

export function Header() {
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  const handleClick = () => {
    setClicked(!clicked);
  };

  // Actualizar la sección activa según la URL
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          const id = section.getAttribute("id");
          setActiveSection(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="roboto-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-6 col-md-3">
              <img width={70} src={logo} alt="Mauren Grilmaldos | Textil" />
            </div>
            <div className="col-xs-6 col-md-9">
              <nav>
                <ul className={`menu ${clicked ? 'active' : ''}`}>
                  <li className={activeSection === "#inicio" ? "active" : ""}>
                    <a href="#inicio">Inicio</a>
                  </li>
                  <li className={activeSection === "#nosotros" ? "active" : ""}>
                    <a href="#nosotros">Nosotros</a>
                  </li>
                  <li className={activeSection === "#servicios" ? "active" : ""}>
                    <a href="#servicios">Servicios</a>
                  </li>
                  <li className={activeSection === "#galeria" ? "active" : ""}>
                    <a href="#galeria">Galería</a>
                  </li>
                  <li className={activeSection === "#contacto" ? "active" : ""}>
                    <a href="#contacto">Contacto</a>
                  </li>
                </ul>
                <BurgerButton clicked={clicked} handleClick={handleClick} />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
