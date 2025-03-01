import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Slider.scss';

import Slider1 from './../../assets/images/bg-1.png';
import Slider2 from './../../assets/images/bg-2.png';
import Slider3 from './../../assets/images/bg-3.png';

const RightArrow = () => (
  <svg
    width="38.500000"
    height="186.276855"
    viewBox="0 0 38.5 186.277"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.5 83.13L0 0L0 186.27L38.5 83.13Z"
      fill="#5F6551"
      fillOpacity="0.9"
      fillRule="evenodd"
    />
    <path
      d="M0 0L0 186.37L38.5 83.13L0 0ZM1 6L1 160.37L37.44 83.13L1 6Z"
      fill="#5F6551"
      fillOpacity="1"
      fillRule="evenodd"
    />
  </svg>
);

const LeftArrow = () => (
  <svg
    width="38.500000"
    height="186.276855"
    viewBox="0 0 38.5 186.277"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 83.13L38.5 0L38.5 186.37L0 83.13Z"
      fill="#5F6551"
      fillOpacity="0.9"
      fillRule="evenodd"
    />
    <path
      d="M38.5 0L38.5 186.27L0 83.13L38.5 0ZM37.5 6L37.5 160.37L1.05 83.13L37.5 6Z"
      fill="#5F6551"
      fillOpacity="1"
      fillRule="evenodd"
    />
  </svg>
);

const slidesData = [
  {
    text: 'Занятия проходят на базе Института истории и международных ЮФУ (ул. Пушкинская 140) в г. Ростове-на-Дону при поддержке региональных музеев. Лекционные занятий проходят онлайн, практически – в очной форме.',
    imgSrc: Slider1,
  },
  {
    text: 'В ходе обучения студенты готовят групповые интеллектуальные проекты на основе предоставленных кейсов и запроса от региональных музеев-партнёров (Музей истории города Ростова-на-Дону, Азовский историко-археологический и палеонтологический музей-заповедник)',
    imgSrc: Slider2,
  },
  {
    text: 'По итогу прохождения всей программы студент получает удостоверение о повышении квалификации государственного образца, а также рекомендательное письмо от музея-партнёра.',
    imgSrc: Slider3,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="sliderContent">
      <p className="sliderTextPlace">{slidesData[currentSlide].text}</p>
      <div className="line"></div>
      <div className="sliderContainer">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`slide ${index === currentSlide ? 'active-slide' : ''}`}
            >
              <div className="contentSlider">
                <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next">
          <RightArrow />
        </div>
        <div className="swiper-button-prev">
          <LeftArrow />
        </div>
      </div>
    </div>
  );
};

export default Slider;
