import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { useCountriesContext } from "../context/CountriesContext";
import CountryItem from "./CountryItem";

const FilterResults = () => {
  const { filterValue } = useFilterContext();
  const { allCountries } = useCountriesContext();

  const filteredData = allCountries.filter(
    (country) => country.region === filterValue
  );

  return (
    <>
      {filteredData.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </>
  );
};

export default FilterResults;
