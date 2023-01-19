import './Main.css';
import CountryCard from '../CountryCard/CountryCard';
import background from '../../un.png';
import { useCountries } from '../../hooks/useCountries';
import { useState } from 'react';

export default function Main() {
  const [order, setOrder] = useState('asc');
  const [searchName, setSearchName] = useState('');
  const [loading, setLoading] = useState(false);
  const { countries, error } = useCountries(order, searchName, setLoading);
  const [continent, setContinent] = useState('all');
  //Set removes duplicates
  const continents = [...new Set(countries.map(({ continent }) => continent))];
  // const names = [...new Set(countries.map(({ name }) => name))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  // const nameFilter = countries.filter((country) => country.name === name || name === 'all');

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div className="select-container">
        <p>{loading ? `loading...` : `loaded`}</p>
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
        <input onChange={(e) => setSearchName(e.target.value)} />
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <p>{error}</p>
      <div className="card-container">
        {filtered.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
