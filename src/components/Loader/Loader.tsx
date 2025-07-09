import { PacmanLoader } from 'react-spinners';
import React from 'react';

type Props = {
  size?: number;
  color?: string;
  loading?: boolean;
  className?: string;
};

export const Loader: React.FC<Props> = ({
  size = 35,
  color = '#313237',
  loading = true,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <PacmanLoader
        size={size}
        color={color}
        loading={loading}
      />
    </div>
  );
};
