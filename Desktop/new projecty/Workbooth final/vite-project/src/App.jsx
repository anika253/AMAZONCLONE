import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Adminpage from "./pages/Adminpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { Toaster } from "react-hot-toast";
// const db = getDatabase(app);

function App() {
  // const putData = () => {
  //   set(ref(db, "users/piyush"), {
  //     id: 1,
  //     name: "Piyush",
  //     age: 21
  //   });
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
}

export default App;
