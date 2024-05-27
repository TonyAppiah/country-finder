import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:container sm:mx-auto flex flex-col items-center mx-5">
      <FaExclamationTriangle color="orange" size="15rem" className="my-14" />
      <h1 className="text-6xl font-extrabold">Uh Ohhh!!</h1>
      <p className="text-4xl font-bold my-7 text-center">
        Something went wrong. Please try again shortly.
      </p>
      <button
        onClick={() => {
          navigate(-2);
        }}
        className="btn btn-lg btn-wide rounded-md bg-white shadow-md text-2xl"
      >
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
