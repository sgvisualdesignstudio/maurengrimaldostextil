import '../assets/styles/main.scss';
// Import Swiper React components

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export function Clientes () {
    return (
        <>
          <section className='clientes'>
            <h3>Nuestros Clientes</h3>
              <div className="container">
                <Swiper
                 // install Swiper modules
                 modules={[Navigation, Pagination, Autoplay ]}
                  spaceBetween={30}
                  slidesPerView={3}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  loop={true}
                  
                >
                  <SwiperSlide >
                    <span className='clientes__img'>
                      LOGO 1
                    </span>
                  </SwiperSlide>
                  <SwiperSlide>
                    <span className='clientes__img'>
                      LOGO 1
                    </span>
                  </SwiperSlide>
                  <SwiperSlide>
                    <span className='clientes__img'>
                      LOGO 1
                    </span>
                  </SwiperSlide>
                  <SwiperSlide>
                    <span className='clientes__img'>
                      LOGO 1
                    </span>
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
        </>
    )
}