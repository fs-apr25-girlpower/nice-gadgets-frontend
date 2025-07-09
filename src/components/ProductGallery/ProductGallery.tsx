import { useState } from 'react';
import clsx from 'clsx';
import Picture1 from '../../../public/img/phones/apple-iphone-13-pro-max/gold/00.webp';
import Picture2 from '../../../public/img/phones/apple-iphone-13-pro-max/gold/01.webp';
import Picture3 from '../../../public/img/phones/apple-iphone-13-pro-max/gold/02.webp';
import Picture4 from '../../../public/img/phones/apple-iphone-13-pro-max/gold/03.webp';
import Picture5 from '../../../public/img/phones/apple-iphone-13-pro-max/graphite/00.webp';

const images = [Picture1, Picture2, Picture3, Picture4, Picture5];

export const ProductGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col tablet:flex-row gap-4 items-center tablet:items-start w-full">
      <div
        className={clsx(
          'flex gap-[13px] overflow-auto',
          'flex-row mt-4 tablet:flex-col tablet:mt-0 tablet:overflow-visible',
          'order-2 tablet:order-1',
        )}
      >
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setSelectedIndex(index)}
            className={clsx(
              'border overflow-hidden flex-shrink-0 tablet:w-14 tablet:h-14 desktop:w-20 desktop:h-20',
              index === selectedIndex ? 'border-black' : 'border-transparent',
            )}
            style={{
              width: 'clamp(50px, 4.6875vw + 35px, 65px)',
              height: 'clamp(50px, 4.6875vw + 35px, 65px)',
            }}
          >
            <img
              src={img}
              alt={`Miniature ${index + 1}`}
              className={clsx(
                'object-cover',
                'w-full h-full aspect-square border border-[#E2E6E9] overflow-hidden',
              )}
            />
          </button>
        ))}
      </div>

      <div className="w-full max-w-[350px] mx-auto order-1 tablet:order-2 tablet:self-start">
        <img
          src={images[selectedIndex]}
          alt={`Image ${selectedIndex + 1}`}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};
