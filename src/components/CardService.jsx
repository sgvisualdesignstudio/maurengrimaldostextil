import '../assets/styles/main.scss';

export function CardService({img, title, description }) {

    return (
        <div className="card-service">
            <img src={img} alt="" />
            <div className="card-service__content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}