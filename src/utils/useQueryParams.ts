import { useSearchParams } from 'react-router-dom';

export const useQueryParams = (defaultCategory: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? 'byDate';
  const perPage = parseInt(searchParams.get('perPage') ?? '8');
  const page = parseInt(searchParams.get('page') ?? '1');
  const category = searchParams.get('category') ?? defaultCategory;

  const refreshParams = (updates: Record<string, string | number | null>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
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
//
