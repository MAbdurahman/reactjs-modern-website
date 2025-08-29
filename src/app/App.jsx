import React, {useEffect, useRef, useState} from 'react'
import NavbarLayout from '../layouts/NavbarLayout.jsx';
import HeroComponent from '../components/HeroComponent.jsx';


export default function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

   return (
      <div className="dark:bg-black relative">
         <NavbarLayout theme={theme} setTheme={setTheme}/>
         <HeroComponent />
      </div>

   );
}