import { Heart } from '../../images/icons/Heart';
import { FilledHeart } from '../../images/icons/FilledHeart';
import { useState } from 'react';

export const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-[40px] h-[40px] px-3 border border-[#B4BDC3] hover:border-black transition duration-300 ease-in-out cursor-pointer"
    >
      {isFavorite ? <FilledHeart /> : <Heart />}
    </button>
  );
};
