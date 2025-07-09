import { useState } from 'react';
import clsx from 'clsx';

export const ButtonMain: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsSelected(!isSelected)}
      className={clsx(
        'w-full h-[40px] cursor-pointer border hover:shadow-md transition duration-300 ease-in-out text-[14px] leading-[21px]',
        isSelected
          ? 'border-[#E2E6E9] bg-white text-[#27AE60]'
          : 'bg-[#313237] text-white',
      )}
    >
      Add to cart
    </button>
  );
};
