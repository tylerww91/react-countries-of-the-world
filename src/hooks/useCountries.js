import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
      } catch (error) {
        setError('Oopsies, something went wrong');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
