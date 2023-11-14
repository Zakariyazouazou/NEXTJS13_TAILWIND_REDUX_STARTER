"use client";
import { Button } from '@material-tailwind/react'
import Link from 'next/link';
import {useSelector , useDispatch  } from 'react-redux';
import { increment , decrement , incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';


import { useTheme } from "next-themes";



export default function Home() {
  const Data = useSelector((state:any)=>state.counter.value)
  const dispatch = useDispatch()

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  return (
    <main className="flex justify-center">
        <div className='text-center'>
        <h1 className='text-red-500 font-bold dark:text-white '>
            Hello World 
        </h1>
        <h1>
           {Data}
        </h1>
        <Link href="pages/about" >Order</Link>
       <div className='flex items-center' >
       <Button className='m-2' onClick={()=>dispatch(increment())} >
                Add 1
        </Button>
        <Button className='m-2' onClick={()=>dispatch(incrementByAmount(15))} >
             incrementByAmount 
        </Button>
        <Button className='m-2' onClick={()=>dispatch(decrement())} >
                Remove 1
        </Button>
       </div>
       <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg  mt-5'>
            Toggle Mode
        </button>
        </div>
    </main>
  )
}
