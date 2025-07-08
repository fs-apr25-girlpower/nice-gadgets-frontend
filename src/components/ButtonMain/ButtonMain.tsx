import { useState } from 'react';

export const ButtonMain: React.FC = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <button
      type="button"
      className={`w-[100%] h-[40px] cursor-pointer border-[1px] hover:shadow-md transition duration-300 ease-in-out text-[14px] leading-[21px] border ${
        isSelected
          ? 'border-[#E2E6E9] bg-white text-[#27AE60]'
          : 'bg-[#313237] text-white'
      }`}
      onClick={() => setIsSelected(!isSelected)}
    >
      Add to cart
    </button>
  );
};
