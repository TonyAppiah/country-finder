import React from "react";
import { useSearchContext } from "../context/SearchContext";
import CountryItem from "./CountryItem";

const SearchResults = () => {
  const { searchResultData } = useSearchContext();
  return (
    <>
      {searchResultData.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </>
  );
};

export default SearchResults;
