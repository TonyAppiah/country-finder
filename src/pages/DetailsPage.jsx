import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useTheme } from "../context/ThemeContext";

const DetailsPage = () => {
  const [singleCountry, setSingleCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState([]);

  const { lightMode } = useTheme();

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getSingleCountry = async (name) => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        setSingleCountry(data);
        setLoading(false);
      } catch (error) {
        if (error) {
          navigate("/error");
        }
      }
    };
    getSingleCountry(params.name);
    getAllCountries();
  }, [params]);

  const getNativeName = (obj) => {
    const name = Object.values(obj);
    return name[0].common;
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCurrency = (obj) => {
    const currencyObjValues = Object.values(obj);
    return currencyObjValues[0].name;
  };

  const getLanguages = (obj) => {
    const languageObjValues = Object.values(obj);
    const languages = languageObjValues.map((lang) => lang).join(", ");
    return languages;
  };

  const getAllCountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setAllCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryBorders = (arr) => {
    let borderNames = [];
    if (arr === undefined) {
      return (
        <p className="mt-2 sm:mt-0">This country has no border countries.</p>
      );
    } else if (arr.length > 0) {
      allCountries.map((country) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === country.cca3) {
            borderNames.push(country.name.common);
          }
        }
      });

      return (
        <ul className="flex flex-wrap gap-3 mt-4 sm:mt-0 ">
          {borderNames.map((name, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  // window.location.href = `/details/${name}`;
                  navigate(`/details/${name}`);
                }}
                className="btn btn-sm rounded-md bg-white shadow-md font-normal text-lg"
                style={{
                  color: !lightMode ? "white" : null,
                  backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="sm:container sm:mx-auto">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn rounded-md bg-white shadow-md mt-10 ml-7 px-8 font-normal text-lg sm:ml-0"
            style={{
              color: !lightMode ? "white" : null,
              backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
            }}
          >
            <FaArrowLeftLong /> Back
          </button>

          {singleCountry.map((country, index) => (
            <div key={index} className="mt-16 ml-7 sm:flex sm:ml-0">
              <div className="mr-7 mb-12 sm: sm:mb-0 sm:mr-32" id="img-div">
                <img
                  src={country.flags.png}
                  alt="country flag"
                  className="w-full"
                  id="act-img"
                />
              </div>
              <div className="sm:flex sm:flex-col sm:justify-center  sm:text-lg">
                <h1 className="font-bold text-2xl mb-8 sm:text-4xl">
                  {country.name.common}
                </h1>
                <div className="sm:flex">
                  <div className="mb-8 leading-loose sm:mr-52">
                    <p>
                      <strong>Naitive Name:</strong>{" "}
                      {getNativeName(country.name.nativeName)}
                    </p>
                    <p>
                      <strong> Population:</strong>{" "}
                      {formatNumberWithCommas(country.population)}
                    </p>
                    <p>
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                      <strong>Subregion:</strong> {country.subregion}
                    </p>
                    <p>
                      <strong>Capital:</strong> {country.capital[0]}
                    </p>
                  </div>
                  <div className="leading-loose mb-10">
                    <p>
                      <strong>Top Level Domain:</strong> {country.tld}
                    </p>
                    <p>
                      <strong>Currencies:</strong>{" "}
                      {getCurrency(country.currencies)}
                    </p>
                    <p>
                      <strong>Languages:</strong>{" "}
                      {getLanguages(country.languages)}
                    </p>
                  </div>
                </div>
                <div className="sm:flex">
                  <h3 className="font-bold text-lg sm:flex-none sm:mr-4">
                    Border Countries:
                  </h3>
                  <div>{getCountryBorders(country.borders)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DetailsPage;
