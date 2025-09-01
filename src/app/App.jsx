import React, {useEffect, useRef, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import NavbarLayout from '../layouts/NavbarLayout.jsx';
import HeroComponent from '../components/HeroComponent.jsx';
import TrustByComponent from '../components/TrustByComponent.jsx';
import ServicesComponent from '../components/ServicesComponent.jsx';
import OurWorkComponent from '../components/OurWorkComponent.jsx';
import TeamComponent from '../components/TeamComponent.jsx';
import ContactUsComponent from '../components/ContactUsComponent.jsx';


export default function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

   return (
      <div className="dark:bg-black relative">
         <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toasterId="default"
            toastOptions={{
               // Define default options
               className: '',
               duration: 5000,
               removeDelay: 1000,
               style: {
                  background: '#363636',
                  color: '#fff',
               },

               // Default options for specific types
               success: {
                  duration: 3000,
                  iconTheme: {
                     primary: 'green',
                     secondary: 'black',
                  },
               },
            }}
         />
         <NavbarLayout theme={theme} setTheme={setTheme}/>
         <HeroComponent />
         <TrustByComponent />
         <ServicesComponent />
         <OurWorkComponent />
         <TeamComponent />
         <ContactUsComponent />
      </div>

   );
}