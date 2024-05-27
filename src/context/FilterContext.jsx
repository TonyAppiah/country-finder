import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");

  const getFilterValue = (value) => {
    setFilterValue(value);
  };

  return (
    <FilterContext.Provider
      value={{ getFilterValue, filterValue, setFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
