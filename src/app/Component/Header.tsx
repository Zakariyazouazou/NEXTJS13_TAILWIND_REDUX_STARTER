// Header.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode , setDarkMode , darkModeSlice  } from '../GlobalRedux/Features/DarKModeSetup'; // Adjust the import path
import { useTheme } from "next-themes";


const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state:any) => state.darkModeReducer.isDarkMode);


  const { systemTheme, theme, setTheme } = useTheme();
   
  React.useEffect(()=>{
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    isDarkMode ? setTheme('dark') : setTheme('light')
    // setTheme(newTheme);
    // Update local storage
    localStorage.setItem('theme', newTheme);
    // console.log(theme)
  },[isDarkMode])

  return (
    <div>
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle Dark Mode
      </button>
      <br />
      <button onClick={() => dispatch(setDarkMode(true))}>
        Set Dark Mode
      </button>
      <br />
      <button onClick={() => dispatch(setDarkMode(false))}>
        Set Light Mode
      </button>

      <p>Current Mode: {isDarkMode} _ {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default Header;