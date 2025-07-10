import { PacmanLoader } from 'react-spinners';
import React from 'react';

type Props = {
  size?: number;
  color?: string;
  loading?: boolean;
};

export const Loader: React.FC<Props> = ({
  size = 35,
  color = '#313237',
  loading = true,
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center`}>
      <PacmanLoader
        size={size}
        color={color}
        loading={loading}
      />
    </div>
  );
};
