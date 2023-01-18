import './Main.css';
import CountryCard from '../CountryCard/CountryCard';
import { useCountries } from '../../hooks/useCountries';

export default function Main() {
  const countries = useCountries();
  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
      <p></p>
    </main>
  );
}
