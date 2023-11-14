"use client";
import { Button } from '@material-tailwind/react'
import Link from 'next/link';
import {useSelector , useDispatch  } from 'react-redux';
import { increment , decrement , incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import Header from './Component/Header';

import { useTheme } from "next-themes";



export default function Home() {
  const Data = useSelector((state:any)=>state.counter.value)
  const dispatch = useDispatch()

  const { systemTheme, theme, setTheme } = useTheme();

   // Toggle the theme and update local storage
   const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Update local storage
    localStorage.setItem('theme', newTheme);
  };

  
  
  return (
    <main className="flex justify-center">
      
        
    </main>
  )
}
