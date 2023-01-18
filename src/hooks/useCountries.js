import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
      // try {
      // } catch (e) {
      //   setError('Oopsies, something went wrong');
      // }
    };
    fetchData();
  }, []);
  return countries;
}
