import type { Accessory } from '../types/Accessory';

export const getAccessories = async (): Promise<Accessory[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}api/accessory.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch accessory');
  }

  return response.json();
};
