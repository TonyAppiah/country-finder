import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CountriesProvider } from "./context/CountriesContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <CountriesProvider>
        <SearchProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </SearchProvider>
      </CountriesProvider>
    </ThemeProvider>
  </>
);
