import { Link, useNavigate } from "react-router-dom";
import { VscSearchStop } from "react-icons/vsc";
import { useSearchContext } from "../context/SearchContext";
import { useFilterContext } from "../context/FilterContext";
import { useCountriesContext } from "../context/CountriesContext";

const NotFoundPage = () => {
  const { setSearchResultData, isSearching } = useSearchContext();
  const { setFilterValue } = useFilterContext();
  const { isLoading } = useCountriesContext();

  const navigate = useNavigate();
  return (
    <div className="sm:container sm:mx-auto flex flex-col items-center mx-5">
      <VscSearchStop color="orange" size="15rem" className="my-14" />
      <h1 className="text-6xl font-extrabold">Oops!!!</h1>
      <p className="text-4xl font-bold my-7 text-center">
        We could not find the country you are looking for. Please check the name
        and try again.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-lg btn-wide rounded-md bg-white shadow-md text-2xl"
      >
        Back
      </button>
    </div>
  );
};

export default NotFoundPage;
