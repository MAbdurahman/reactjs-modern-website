import React, {useEffect, useRef, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import NavbarLayout from '../layouts/NavbarLayout.jsx';
import HeroComponent from '../components/HeroComponent.jsx';
import TrustByComponent from '../components/TrustByComponent.jsx';
import ServicesComponent from '../components/ServicesComponent.jsx';
import OurWorkComponent from '../components/OurWorkComponent.jsx';
import TeamComponent from '../components/TeamComponent.jsx';
import ContactUsComponent from '../components/ContactUsComponent.jsx';
import FooterLayout from '../layouts/FooterLayout.jsx';


export default function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

   const dotRef = useRef(null);
   const outlineRef = useRef(null);

// Refs for custom cursor Position tracking
   const mouse = useRef({x: 0, y: 0});
   const position = useRef({x: 0, y: 0});

   useEffect(()=>{
      const handleMouseMove = (e)=>{
         mouse.current.x = e.clientX;
         mouse.current.y = e.clientY;
      }

      document.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
         position.current.x += (mouse.current.x - position.current.x) * 0.1;
         position.current.y += (mouse.current.y - position.current.y) * 0.1;

         if(dotRef.current && outlineRef.current){
            dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
            outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
         }

         requestAnimationFrame(animate);
      }

      animate();

      return ()=>{
         document.removeEventListener('mousemove', handleMouseMove);
      }

   },[]);

   return (
      <div className='dark:bg-black relative'>
         <Toaster
            position='top-right'
            reverseOrder={false}
            gutter={8}
            containerClassName=''
            containerStyle={{}}
            toasterId='default'
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
         <FooterLayout theme={theme} />

         {/* Custom Cursor Ring */}
         <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'
              style={{transition: 'transform 0.1s ease-out'}}></div>

         {/* Custom Cursor Dot */}
         <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'></div>
      </div>

   );
}