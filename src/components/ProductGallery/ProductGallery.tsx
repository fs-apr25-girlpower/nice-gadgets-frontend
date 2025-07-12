import { useState } from 'react';
import clsx from 'clsx';
import { useExistingImages } from '../../hooks/useExistingImages';

export type ProductGalleryProps = {
  images: string[];
  // selectedImage: string;
  // setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
};

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('center center');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  const handleImageClick = () => {
    setIsZoomed(prev => !prev);
  };

  const existingImages = useExistingImages(images);

  return (
    <div className="flex flex-col tablet:flex-row gap-4 items-center tablet:items-start w-full">
      <div
        className={clsx(
          'flex gap-[13px] overflow-auto',
          'flex-row mt-4 tablet:flex-col tablet:mt-0 tablet:overflow-visible',
          'order-2 tablet:order-1',
        )}
      >
        {existingImages.map((img, index) => (
          <button
            key={img}
            onClick={() => {
              setSelectedIndex(index);
              setIsZoomed(false);
            }}
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
              className="object-cover w-full h-full aspect-square border border-[#E2E6E9]"
            />
          </button>
        ))}
      </div>

      <div
        className="relative w-full max-w-[350px] mx-auto order-1 tablet:order-2 tablet:self-start overflow-hidden cursor-zoom-in"
        onClick={handleImageClick}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[selectedIndex]}
          alt={`Image ${selectedIndex + 1}`}
          className={clsx(
            'w-full h-auto object-contain transition-transform duration-200 ease-in-out',
            isZoomed && 'cursor-zoom-out',
          )}
          style={{
            transform: isZoomed ? 'scale(2)' : 'scale(1)',
            transformOrigin: zoomOrigin,
          }}
        />
      </div>
    </div>
  );
};
