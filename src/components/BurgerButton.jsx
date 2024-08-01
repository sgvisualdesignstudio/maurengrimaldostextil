import '../assets/styles/main.scss'; // Ruta corregida para el archivo SCSS

export function BurgerButton (props) {
    return (
        <div onClick={props.handleClick} 
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}