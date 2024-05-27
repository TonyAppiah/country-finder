import axios from "axios";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const getSearchTerm = (input) => {
    setSearchTerm(input);
  };

  const getCountryByName = async () => {
    try {
      setIsSearching(true);
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      );

      setSearchResultData(data);
      setIsSearching(false);
    } catch (error) {
      if (error) {
        setNetworkError(true);
      }
      setIsSearching(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        getSearchTerm,
        getCountryByName,
        searchResultData,
        setSearchResultData,
        isSearching,
        networkError,
        setNetworkError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
