import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, Link } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";
import { useFilterContext } from "../context/FilterContext";

const Nav = () => {
  const { toggleTheme, themeName } = useTheme();
  const { setSearchResultData } = useSearchContext();
  const { setFilterValue } = useFilterContext();
  let navigate = useNavigate();

  return (
    <nav className="shadow-md">
      <div className="container mx-auto flex justify-between py-5 px-5 sm:px-0">
        <div>
          <button
            onClick={() => {
              navigate("/");
              setSearchResultData([]);
              setFilterValue("");
            }}
          >
            <h1 className="font-bold sm:text-2xl">Where in the world?</h1>
          </button>
        </div>
        <div className="flex items-center sm:text-lg text-sm">
          <button onClick={toggleTheme} className="flex items-center">
            {themeName === "Dark" ? (
              <FaMoon className="mr-2" />
            ) : (
              <FaSun className="mr-2" />
            )}
            {themeName} Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
