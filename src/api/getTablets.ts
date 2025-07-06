import type { Tablet } from '../types/Tablet';

export const getTablets = async (): Promise<Tablet[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}api/tablets.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch tablets');
  }

  return response.json();
};
