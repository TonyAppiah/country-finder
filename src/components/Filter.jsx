import { useFilterContext } from "../context/FilterContext";
import { useTheme } from "../context/ThemeContext";

const Filter = () => {
  const { getFilterValue } = useFilterContext();
  const { lightMode } = useTheme();

  const handleFilterChange = (e) => {
    getFilterValue(e.target.value);
  };

  return (
    <form onChange={handleFilterChange}>
      <select
        name="region-list"
        id={!lightMode ? "regions" : null}
        className="w-56 h-14 pl-5 rounded-md shadow-md border-none outline-none sm:font-semibold sm:text-lg"
        style={{
          backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
        }}
      >
        <option value="" className="" hidden>
          Filter by Region
        </option>

        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Filter;
