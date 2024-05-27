import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const CountryItem = ({ country }) => {
  const { lightMode } = useTheme();

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let population = country.population;
  population = formatNumberWithCommas(population);

  return (
    <div
      style={{
        color: !lightMode ? "white" : null,
        backgroundColor: !lightMode ? "hsl(209, 23%, 22%)" : null,
      }}
      className="card w-72 sm:mb-20 mb-10 mx-auto card-compact bg-base-100 rounded-lg shadow-lg"
    >
      <figure>
        <Link to={`/details/${country.name.official}`}>
          <img
            className="object-cover h-48 w-96"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </Link>
      </figure>

      <div className="card-body mx-3 my-5">
        <h2 className="card-title font-bold text-xl">
          {country.name.official}
        </h2>
        <div className="leading-relaxed text-lg">
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
