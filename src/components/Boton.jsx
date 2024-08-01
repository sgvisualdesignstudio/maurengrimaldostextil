import '../assets/styles/main.scss';
import { useState } from "react";


export function Boton ({ texto, href }) {

    const [conoceMas, setConoceMas] = useState(false);
    
    const buttonClassName =  conoceMas ? 'button-hero activo' : 'button-hero';

    const handleClick = () => {
        setConoceMas(!conoceMas);
    }

    return (
        <a href={href} className={buttonClassName} onClick={handleClick}>
            {texto}
        </a>
    )
}