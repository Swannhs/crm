import useSWR from 'swr';
import { useMemo } from 'react';
import { endpoints, fetcher } from 'src/utils/axios';

// ----------------------------------------------------------------------

export function useGetDeals() {
  const URL = endpoints.deals.list;

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      deals: data?.data || [],
      dealsLoading: isLoading,
      dealsError: error,
      dealsValidating: isValidating,
      dealsEmpty: !isLoading && !data?.data?.length,
      mutate,
    }),
    [data?.data, error, isLoading, isValidating, mutate]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetDealStats() {
  const URL = endpoints.deals.stats;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      stats: data?.data || null,
      statsLoading: isLoading,
      statsError: error,
      statsValidating: isValidating,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetDealForecast() {
  const URL = endpoints.deals.forecast;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      forecast: data?.data || null,
      forecastLoading: isLoading,
      forecastError: error,
      forecastValidating: isValidating,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
