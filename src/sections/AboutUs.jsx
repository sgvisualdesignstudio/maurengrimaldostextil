import '../assets/styles/main.scss';
import deportista from '../assets/img/deportista.png';

export function AboutUs() {
    return(
        <section className='aboutus' id='aboutus'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xs-12 col-lg-6">
                       <h3>About Us</h3>
                       <p>
                       Lorem ipsum dolor sit amet consectetur. Risus interdum auctor massa sem ut. Mattis nulla gravida viverra non. Bibendum netus auctor elit hendrerit malesuada. Ullamcorper id quam at sed adipiscing facilisi magnis tincidunt enim. Porttitor nullam id metus dignissim ornare natoque elementum nisl enim. Odio egestas et convallis cum mattis dictum tristique sit. 
                       </p>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <img src={deportista} alt="" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}