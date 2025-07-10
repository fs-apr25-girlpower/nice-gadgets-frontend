import { useSearchParams } from 'react-router-dom';

export const useQueryParams = (defaultCategory: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') ?? defaultCategory;
  const sort = searchParams.get('sort') ?? 'byDate';
  const perPage = parseInt(searchParams.get('perPage') ?? '8');
  const page = parseInt(searchParams.get('page') ?? '1');

  const refreshParams = (updates: Record<string, string | number>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      newParams.set(key, String(value));
    });
    setSearchParams(newParams);
  };

  return {
    category,
    perPage,
    page,
    refreshParams,
    sort,
  };
};
