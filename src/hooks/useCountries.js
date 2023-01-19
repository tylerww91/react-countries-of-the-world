import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries(order, searchName, setLoading) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getCountries(order, searchName);
        setCountries(resp);
        setLoading(false);
      } catch (error) {
        setError('Oopsies, something went wrong');
      }
    };
    fetchData();
  }, [order, searchName, setLoading]);
  return { countries, error };
}
