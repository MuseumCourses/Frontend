import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from './../../assets/images/bg-1.png';
import Slider2 from './../../assets/images/bg-2.png';
import Slider3 from './../../assets/images/bg-3.png';
import styles from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';

const Slider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Отображаем три слайда на странице
        spaceBetween={50} // Расстояние между слайдами
        coverflowEffect={{
          rotate: 0, // Угол поворота слайдов
          stretch: 0,
          depth: 150, // Глубина эффекта
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow]}
        loop={true}
      >
        <SwiperSlide>
          <img src={Slider1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider1} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="Slide 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
