import React, {useState, useEffect} from 'react';
import {motion} from 'motion/react';
import TitleComponent from './TitleComponent.jsx';
import assets from '../assets/assets.js';
import toast from 'react-hot-toast';

export default function ContactUsComponent() {
   const title ='Reach out to us';
   const description = 'From strategy to execution, we craft digital solutions that move your business forward.';

   async function handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      formData.append('access_key', '02ec2d6b-27ee-42b9-b92c-14c3026c212a');

      try {

         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
         });

         const data = await response.json();

         if (data.success) {
            toast.success('Email successfully sent!');
            e.target.reset();
         } else {
            toast.error(data.message)
         }

      } catch (err) {
         toast.error(err.message)
      }

   }
   return (
      <div id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

         <TitleComponent title={title} description={description} />

         <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
               <p className='mb-2 text-sm font-medium'>Full name</p>
               <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                  <img src={assets.person_icon} alt="User icon" />
                  <input name='fullName' id='fullName' type='text' placeholder='Enter first and last name' className='w-full p-3 text-sm outline-none' required />
               </div>
            </div>

            <div>
               <p className='mb-2 text-sm font-medium'>Email</p>
               <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                  <img src={assets.email_icon} alt="Envelop icon" />
                  <input name='email' id='email' type="text" placeholder='Enter email' className='w-full p-3 text-sm outline-none' required />
               </div>
            </div>

            <div className='sm:col-span-2'>
               <p className='mb-2 text-sm font-medium'>Message</p>
               <textarea name='message' id='message' rows={8} placeholder='Enter message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
            </div>

            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all' >
               Submit <img src={assets.arrow_icon} alt="Arrow icon" className='w-4'/>
            </button>

         </form>
      </div>

   );
}