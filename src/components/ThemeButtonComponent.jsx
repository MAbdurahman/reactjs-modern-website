import React, {Fragment, useEffect} from 'react';
import assets from '../assets/assets.js';


export default function ThemeButtonComponent({theme, setTheme}) {
   useEffect(()=>{
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
   },[])

   useEffect(()=>{
      if(theme === 'dark'){
         document.documentElement.classList.add('dark')
      }else{
         document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
   },[theme])

   return (
      <Fragment>
         <button className="mr-0.5">
            {theme === 'dark' ? (
               <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="Sun icon" />
            ) : (
               <img onClick={()=> setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="Moon icon" />
            )}
         </button>
      </Fragment>
   );
}