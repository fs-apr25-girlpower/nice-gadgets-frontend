import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';

export type ProductSliderProps = {
  title: string;
};

export const ProductSlider = ({ title }: ProductSliderProps) => {
  return (
    <>
      <div className="relative mb-5">
        <h2 className="h2">{title}</h2>
        <div className="absolute right-0 top-1 flex gap-4">
          <button className="swiper-button-prev-cust group cursor-pointer">
            <ArrowLeftButton />
          </button>
          <button className="swiper-button-next-cust group cursor-pointer">
            {' '}
            <ArrowRightButton />{' '}
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev-cust',
          nextEl: '.swiper-button-next-cust',
        }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
};
