import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';
import { ProductCard } from '../ProductCard';

export type ProductSliderProps = {
  sliderConfig: {
    titleForBrand: string;
    classNameForButtonPrev: string;
    classNameForButtonNext: string;
    marginTop: string;
  };
};

export const ProductSlider = ({ sliderConfig }: ProductSliderProps) => {
  const {
    titleForBrand,
    classNameForButtonPrev,
    classNameForButtonNext,
    marginTop,
  } = sliderConfig;

  return (
    <div className={marginTop}>
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

      <div className="-mr-4 sm:-mr-6 lg:mr-0">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${classNameForButtonPrev}`,
            nextEl: `.${classNameForButtonNext}`,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView="auto"
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="!shrink">
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
