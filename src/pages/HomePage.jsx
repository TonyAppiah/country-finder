import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AllCountriesList from "../components/AllCountriesList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import SearchResults from "../components/SearchResults";
import FilterResults from "../components/FilterResults";
import Spinner from "../components/Spinner";
import { useCountriesContext } from "../context/CountriesContext";
import { useSearchContext } from "../context/SearchContext";
import { useFilterContext } from "../context/FilterContext";

const Home = () => {
  const { getAllCountries, isLoading } = useCountriesContext();
  const { searchResultData, isSearching, networkError, setNetworkError } =
    useSearchContext();
  const { filterValue } = useFilterContext();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries();
  });

  // useEffect(() => {
  //   getAllCountries();

  //   if (networkError) {
  //     navigate("/notfound");
  //     setNetworkError(false);
  //   }

  //   return () => {
  //     console.log("Component unmounted");
  //   };
  // }, [networkError]);

  useEffect(() => {
    if (networkError) {
      navigate("/notfound");
      setNetworkError(false);
    }
  }, [networkError]);

  return (
    <>
      <div className="container sm:mx-auto sm:flex justify-between sm:my-20 my-10 mx-5">
        <SearchBar />
        <Filter />
      </div>
      <main className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {isSearching ? (
          <Spinner />
        ) : searchResultData.length > 0 ? (
          <SearchResults />
        ) : isLoading ? (
          <Spinner />
        ) : filterValue !== "" ? (
          <FilterResults />
        ) : (
          <AllCountriesList />
        )}
      </main>
      ;
    </>
  );
};

export default Home;
