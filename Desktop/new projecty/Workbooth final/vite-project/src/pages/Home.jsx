import React from "react";
import { Link, Outlet } from "react-router-dom";
import Adminpage from "./Adminpage";
const Home = () => {
  return (
    <div>
      <div>
        <h1>WORKBOOTH</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.323102084061!2d76.51762157678606!3d31.707067867643044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d58ecfab17ef%3A0x71d18d93b9d92ae1!2sNIT%20Camps!5e0!3m2!1sen!2sin!4v1711906743701!5m2!1sen!2sin"
          width="600"
          height="450"
          //   allowfullscreen
          //   loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

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
