import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { RxPeople } from 'react-icons/rx';
import { SiSimpleanalytics } from 'react-icons/si';
import { TfiWorld } from 'react-icons/tfi';

const ChoiseIdeaVault = () => {
    return (
        <div className='max-w-10/12 mx-auto my-20'>
            <div className='text-center'>
                <h3 className='text-sm text-purple-500 mb-2'>why choses</h3>
                <h1 className='font-bold text-3xl mb-2'>Why Chose idea Vault</h1>
                 <p> platform built for innovators, dreamers, and future founders.</p>
            </div>
           <div className='grid grid-cols-4 gap-4 mt-10'>
              <div className='shadow-sm rounded-2xl flex justify-between items-center gap-6 p-4 ' >
               <div className='rounded-full border-purple-500 p-4 bg-purple-500'>
                 <FaRegLightbulb className='w-15 h-15'/>
               </div>
                <div>
                    <h2 className='font-bold text-md'>Share Unique Ideas</h2>
                    <p>Share your startup ideas with the community and get valuable feedback.</p>                </div>
             </div>
             <div  className='shadow-sm rounded-2xl flex justify-between items-center gap-6 p-4'>
                 <div className='rounded-full border-green-500 p-4 bg-green-500'>
                    <RxPeople className='w-15 h-15' />
                 </div>
                <div>
                    <h2 className='font-bold text-md'>Connect With Innovators</h2>
                    <p>Connect with like-minded people, collaborate, and build great things together</p>               
                     </div>
             </div>
             <div  className='shadow-sm rounded-2xl flex justify-between items-center gap-6 p-4'>
                <div className='rounded-full border-yellow-500 p-4 bg-yellow-500'>
                    <SiSimpleanalytics className='w-15 h-15' />
                </div>
                <div>
                    <h2 className='font-bold text-md'>Validate Your Startup</h2>
                    <p>Validate your ideas, analyze market trends, and increase your chances of success.</p>                
                    </div>
             </div>
             <div  className='shadow-sm rounded-2xl flex justify-between items-center gap-6 p-4'>
                <div className='rounded-full border-blue-500 p-4 bg-blue-500'>
                    <TfiWorld  className='w-15 h-15'/>
                </div>
                <div>
                    <h2 className='font-bold text-md'>Build Future Solutions</h2>
                    <p>Contribute to real-world problems and help build solutions for the future..</p>              
                      </div>
             </div>
           </div>
        </div>
    );
};

export default ChoiseIdeaVault;