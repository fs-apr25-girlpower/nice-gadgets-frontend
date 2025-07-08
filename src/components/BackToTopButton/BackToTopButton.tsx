import { ArrowUp } from '../../images/icons/ArrowUp';

export const BackToTopButton: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="py-3 px-3 border border-[#B4BDC3] hover:border-black transition duration-300 ease-in-out cursor-pointer"
    >
      <ArrowUp />
    </button>
  );
};
