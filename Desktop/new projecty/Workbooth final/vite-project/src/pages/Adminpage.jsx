import React, { useState } from "react";
import { Link } from "react-router-dom";

const Adminpage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "") {
      alert("Please select either Sign Up or Sign In.");
    } else {
      alert(`You selected: ${selectedOption}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">ADMIN</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {" "}
        {/* Wrap only the radio button in the Link component */}
        <Link to="/signup">
          <div className="flex items-center">
            <input
              type="radio"
              id="signUp"
              name="authOption"
              value="Sign Up"
              checked={selectedOption === "Sign Up"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="signUp" className="text-lg">
              Sign Up
            </label>
          </div>
        </Link>
        <Link to="/signin">
          <div className="flex items-center">
            <input
              type="radio"
              id="logIn"
              name="authOption"
              value="Log In"
              checked={selectedOption === "Log In"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="logIn" className="text-lg">
              Log In
            </label>
          </div>
        </Link>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adminpage;
