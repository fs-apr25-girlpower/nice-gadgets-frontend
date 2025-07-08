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
    <div className="flex flex-col tablet:flex-row gap-4 items-start">
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
              'border overflow-hidden flex-shrink-0',
              index === selectedIndex ? 'border-black' : 'border-transparent',
            )}
          >
            <img
              src={img}
              alt={`Miniature ${index + 1}`}
              className={clsx(
                'object-cover',
                'w-[50px] h-[50px] tablet:w-9 tablet:h-9 desktop:w-20 desktop:h-20 border border-[#E2E6E9]',
              )}
            />
          </button>
        ))}
      </div>

      <div className="flex-shrink-0 order-1 tablet:order-2 self-start">
        <img
          src={images[selectedIndex]}
          alt={`Image ${selectedIndex + 1}`}
          className="w-[288px] h-[288px] object-contain desktop:w-116 desktop:h-116"
        />
      </div>
    </div>
  );
};
