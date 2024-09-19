import React from "react";
import { Link, Outlet } from "react-router-dom";
import Adminpage from "./Adminpage";
import MapComponent from "./MapComponent";
const Home = () => {
  return (
    <div>
      <div>
        <h1>WORKBOOTH</h1>
        <MapComponent />

        <div className="absolute top-0 right-0 m-4 flex flex-row-reverse">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
            {" "}
            HINDI{" "}
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
            {" "}
            ENGLISH{" "}
          </button>
          <Link to="/adminpage">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1">
              {" "}
              ADMIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
