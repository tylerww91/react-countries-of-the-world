import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries(order) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCountries(order);
        setCountries(resp);
      } catch (error) {
        setError('Oopsies, something went wrong');
      }
    };
    fetchData();
  }, [order]);
  return { countries, error };
}
