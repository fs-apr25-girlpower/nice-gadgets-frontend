import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';

export type ProductSliderProps = {
  sliderConfig: {
    titleForBrand: string;
    classNameForButtonPrev: string;
    classNameForButtonNext: string;
  };
};

export const ProductSlider = ({ sliderConfig }: ProductSliderProps) => {
  const { titleForBrand, classNameForButtonPrev, classNameForButtonNext } =
    sliderConfig;

  return (
    <>
      <div className="relative mb-5">
        <h2 className="h2">{titleForBrand}</h2>
        <div className="absolute right-0 top-1 flex gap-4">
          <button className={`${classNameForButtonPrev} group cursor-pointer`}>
            <ArrowLeftButton />
          </button>
          <button className={`${classNameForButtonNext} group cursor-pointer`}>
            <ArrowRightButton />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${classNameForButtonPrev}`,
          nextEl: `.${classNameForButtonNext}`,
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
