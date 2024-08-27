import '../assets/styles/main.scss';
import img1 from '../assets/img/img-galeria-1.jpg';
// Import Swiper React components

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export function Galeria () {
    return (
        <>
          <section className='galeria'id='galeria' >
            <h3>Galeria</h3>
              <div className="container">
                <Swiper className=''
                 // install Swiper modules
                 modules={[Navigation, Pagination ]}
                  spaceBetween={0}
                  slidesPerView={3}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,

                    },
                    768: {
                      slidesPerView: 2,
                     
                    },
                    1024: {
                      slidesPerView: 3,
                      
                    },
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  loop={true}
                  centeredSlides={true}
                >
                  <div className="container-swipper">
                    <SwiperSlide >
                      <img src={img1} alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img1} alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img1} alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img1} alt="slide 2" />
                    </SwiperSlide>
                  </div>
                 
                </Swiper>
              </div>
            </section>
        </>
    )
}