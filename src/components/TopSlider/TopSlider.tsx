import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
export const TopSlider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <div
        className="
        w-full 
        flex 
        items-center 
        justify-center 
        px-0 sm:px-[10px]
        mb-[28px]
        "
      >
        <div
          className="
          relative
          aspect-square
          sm:aspect-[2/1]
          w-full
          min-w-[320px]
          max-w-[1040px]
          min-h-[320px]
          max-h-[432px]
          mx-0 sm:mx-[60px]
          "
        >
          <div className="absolute -left-15 top-1/2 -translate-y-1/2 h-full max-h-[432px] w-[32px] hidden sm:block">
            <Skeleton height="100%" />
          </div>

          <div className="absolute -right-15 top-1/2 -translate-y-1/2 h-full max-h-[432px] w-[32px] hidden sm:block">
            <Skeleton height="100%" />
          </div>

          <div className="w-full h-full">
            <Skeleton height="100%" />
          </div>

          <div className="ml-[14px] flex justify-center items-start gap-5 ">
            <Skeleton
              width={14}
              height={4}
            />
            <Skeleton
              width={14}
              height={4}
            />
            <Skeleton
              width={14}
              height={4}
            />
            <Skeleton
              width={14}
              height={4}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="
    w-full 
    flex 
    items-center 
    justify-center 
    px-0 sm:px-[10px]
    mb-[28px]
    "
    >
      <div
        className="
        relative
        aspect-square
        sm:aspect-[2/1]
        w-full
        min-w-[320px]
        max-w-[1040px]
        min-h-[320px]
        max-h-[432px]
        mx-0 sm:mx-[60px]
      "
      >
        <button
          className="
          swiper-button-prev-custom absolute -left-15 top-1/2 -translate-y-1/2
          h-full max-h-[432px] w-[32px] items-center justify-center
          bg-white/90 hover:bg-hover transition z-10
          text-3xl border-1 border-elements hidden sm:flex cursor-pointer
        "
        >
          ‹
        </button>

        <button
          className="
          swiper-button-next-custom absolute -right-15 top-1/2 -translate-y-1/2
          h-full max-h-[432px] w-[32px] items-center justify-center
          bg-white/90 hover:bg-hover transition z-10
          text-3xl border-1 border-elements hidden sm:flex cursor-pointer
        "
        >
          ›
        </button>

        <SwiperReact
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass:
              'bg-gray-500 opacity-70 w-[14px] h-[4px] ml-[14px] transition-colors transition-transform duration-200 cursor-pointer',
            bulletActiveClass: '!bg-black !opacity-100 !scale-110',
          }}
          className="overflow-hidden h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full flex border-1 border-gray-300 bg-neutral-50 items-center justify-center text-3xl">
              <img
                className="w-full h-full object-center object-cover"
                src="./img/start-banner-3.png"
                alt="slide-1"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex border-1 border-elements bg-hover items-center justify-center text-3xl">
              <img
                className="w-full h-full object-center object-cover"
                src="./img/banner-accessories.png"
                alt="slide-1"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex border-1 border-elements bg-hover items-center justify-center text-3xl">
              <img
                className="w-full h-full object-center object-cover"
                src="./img/banner-phones.png"
                alt="slide-2"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex border-1 border-elements bg-hover items-center justify-center text-3xl">
              <img
                className="w-full h-full object-center object-cover"
                src="./img/banner-tablets.png"
                alt="slide-3"
              />
            </div>
          </SwiperSlide>
        </SwiperReact>

        <div className="swiper-pagination-custom flex justify-center gap-2 mt-3" />
      </div>
    </div>
  );
};
