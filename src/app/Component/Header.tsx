"use client"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeDarkMode } from "../GlobalRedux/Features/DarKModeSetup"; 

const Header = () => {
  const [darkmode, setDarkmode] = useState<boolean>();

  const dispatch = useDispatch();

  const ToggleNow = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    if (darkmode === true) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
    if (darkmode === false) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
  }, [darkmode, dispatch]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkmode(true);
    }
  }, []);

  return (
    <>
    
       
          <span className="text-black dark:text-white " onClick={ToggleNow}>Dark</span>
            <br />
        <span className="text-black dark:text-white " onClick={ToggleNow}>White</span>
     
   
    </>
  );
};

export default Header;