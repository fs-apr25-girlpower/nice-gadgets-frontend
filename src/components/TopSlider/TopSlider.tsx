import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'; // Компоненти Swiper для React
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Потрібні модулі

export const TopSlider: React.FC = () => {
  return (
    <SwiperReact
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="mySwiper" //клас для стилізації в CSS
      style={{
        width: '100%',
        maxWidth: '800px',
        height: '400px',
        margin: '0 auto',
        border: '1px solid #ddd',
      }} //тимчасові стилі
    >
      <SwiperSlide
        style={{
          background: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
        }}
      >
        Слайд 1
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: '#e0e0e0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
        }}
      >
        Слайд 2
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: '#d0d0d0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
        }}
      >
        Слайд 3
      </SwiperSlide>
      {/* інші компоненти */}
    </SwiperReact>
  );
};
