import { useCountriesContext } from "../context/CountriesContext";
import CountryItem from "./CountryItem";

const AllCountriesList = () => {
  const { allCountries } = useCountriesContext();

  return (
    <>
      {allCountries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </>
  );
};

export default AllCountriesList;
