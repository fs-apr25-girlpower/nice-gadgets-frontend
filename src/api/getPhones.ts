import type { Phone } from '../types/Phone';

export const getPhones = async (): Promise<Phone[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}api/phones.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch phones');
  }

  return response.json();
};
