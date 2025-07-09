import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types/Product';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';

export type ProductSliderProps = {
  sliderConfig: {
    titleForBrand: string;
    classNameForButtonPrev: string;
    classNameForButtonNext: string;
    marginTop: string;
  };
  products: Product[];
};

export const ProductSlider = ({
  sliderConfig,
  products,
}: ProductSliderProps) => {
  const {
    titleForBrand,
    classNameForButtonPrev,
    classNameForButtonNext,
    marginTop,
  } = sliderConfig;

  // рефи для кнопок
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // для swiper
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const navigationParams = swiperRef.current.params.navigation;

      if (navigationParams && typeof navigationParams !== 'boolean') {
        navigationParams.prevEl = prevRef.current;
        navigationParams.nextEl = nextRef.current;

        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, [products, prevRef, nextRef]);

  return (
    <div className={marginTop}>
      <div className="relative mb-5">
        <h2 className="h2">{titleForBrand}</h2>
        <div className="absolute right-0 top-1 flex gap-4">
          <button
            ref={prevRef}
            className={`${classNameForButtonPrev} group cursor-pointer`}
          >
            <ArrowLeftButton />
          </button>
          <button
            ref={nextRef}
            className={`${classNameForButtonNext} group cursor-pointer`}
          >
            <ArrowRightButton />
          </button>
        </div>
      </div>

      <div className="-mr-4 tablet:-mr-6 desktop:mr-0">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          spaceBetween={16}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map(product => (
            <SwiperSlide
              key={product.id}
              className="!shrink"
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
