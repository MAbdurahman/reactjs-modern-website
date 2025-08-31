import React from 'react';
import {motion} from 'motion/react';
import TitleComponent from './TitleComponent.jsx';
import assets from '../assets/assets.js';
import {validateFormSendingEmail} from '../utils/functionUtils.js';
import useNotification from '../hooks/useNotification.jsx';


export default function ContactUsComponent() {
   const title ='Reach out to us';
   const description = 'From strategy to execution, we craft digital solutions that move your business forward.';
   const {updateNotification} = useNotification();

   async function handleSubmit(e) {
      e.preventDefault();
      console.log('Submitting...');
   }
   return (
      <div id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

         <TitleComponent title={title} description={description} />
      </div>

   );
}