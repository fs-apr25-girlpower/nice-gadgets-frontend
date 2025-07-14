import { useNavigate } from 'react-router-dom';

export const PageNotFoundButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/phon`)}
      className="cursor-pointer"
    >
      404
    </button>
  );
};
