import './Main.css';
import CountryCard from '../CountryCard/CountryCard';
import background from '../../un.png';
import { useCountries } from '../../hooks/useCountries';
import { useState } from 'react';

export default function Main() {
  const [order, setOrder] = useState('asc');
  const { countries, error } = useCountries(order);
  const [continent, setContinent] = useState('all');
  // const [name, setName] = useState('all');
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
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
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
