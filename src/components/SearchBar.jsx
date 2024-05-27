import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../context/SearchContext";
import { useTheme } from "../context/ThemeContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { getSearchTerm, getCountryByName } = useSearchContext();
  const { lightMode } = useTheme();

  const handleInputChange = (e) => {
    getSearchTerm(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Enter search term");
      return;
    }
    getCountryByName();
    setInputValue("");
  };

  return (
    <div
      style={{
        backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
      }}
      className="search-div flex items-center gap-5 sm:w-2/5 px-8 py-4 bg-white shadow-md rounded-md mb-14 sm:mb-0"
    >
      <div>
        <FaSearch size="1.2rem" color='!lightMode ? "white" : null' />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          style={{
            backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
          }}
          onChange={handleInputChange}
          type="text"
          name="search"
          id={!lightMode ? "search-bar" : null}
          placeholder="Search for a country..."
          className="border-none outline-none"
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default SearchBar;
