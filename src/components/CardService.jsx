import '../assets/styles/main.scss';

export function CardService({img, title, description, 'data-aos': aos, 'data-aos-delay': delay, 'data-aos-duration':duration  }) {

    return (
        <div data-aos={aos} data-aos-delay={delay} data-aos-duration={duration} className="card-service">
            <img src={img} alt="" />
            <div className="card-service__content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}