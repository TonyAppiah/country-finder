import { useContext, createContext, useState } from "react";
import axios from "axios";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getAllCountries = async () => {
    // setIsLoading(true);
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setAllCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        getAllCountries,
        allCountries,
        isLoading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => useContext(CountriesContext);
