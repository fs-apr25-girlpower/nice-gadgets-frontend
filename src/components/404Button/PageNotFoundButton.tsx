import { useNavigate } from 'react-router-dom';

export const PageNotFoundButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/phon`)}
      className="cursor-pointer text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors"
    >
      404
    </button>
  );
};
