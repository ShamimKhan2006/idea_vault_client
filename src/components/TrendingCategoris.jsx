import { Button } from '@heroui/react';
import React from 'react';

import { ImCoinDollar } from 'react-icons/im';
import { LuLeafyGreen } from 'react-icons/lu';
import { MdElectricBolt, MdOutlineCastForEducation, MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaBahai } from "react-icons/fa";
import Marquee from 'react-fast-marquee';
const TrendingCategoris = () => {
    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='text-center font-bold text-3xl'>Tranding Categoris</h1>
            <Marquee className='flex justify-between items-center gap-4 my-10' speed="100">
                <Button variant='outline' className='flex justify-between items-center gap-2  border-none shadow-2xs text-red-500'>
                    <div>
                        <FaBahai className='w-5 h-5 ' />
                    </div>
                    <h1 className='font-semibold text-md'>AI</h1>
                </Button>
                <Button variant='outline' className='flex gap-2 bg-white border-none text-purple-500'>
                    <div>
                        <MdOutlineHealthAndSafety className=' w-5 h-5 '/>
                    </div>
                   <h1 className='font-semibold text-md'>HealthTech</h1> 
                </Button>
                <Button variant='outline' className='flex gap-2 bg-white border-none text-pink-500'>
                    <div>
                   <ImCoinDollar className='w-5 h-5' />
                    </div>
                   <h1 className='font-semibold text-md'>FinTech</h1> 
                </Button>
                <Button variant='outline'  className="shadow-sm bg-white border-none flex gap-2 text-cyan-500">
                    <div>
                        <MdOutlineCastForEducation />
                    </div>
                    <h1 className='font-semibold text-md'>Education</h1>
                </Button>
                <Button variant='outline'  className="shadow-sm bg-white border-none text-green-400">
                    <div>
                        <LuLeafyGreen  />
                    </div>
                 <h1 className='font-semibold text-md'>Green Enery</h1>
                </Button>
                <Button variant='outline'  className="shadow-sm bg-white border-none text-yellow-600">
                    <div>
                        <MdElectricBolt className='w-5 h-5'/>
                    </div>
                    <h1 className='font-semibold text-md'>Productivity</h1>
                </Button>
                <Button variant='outline' className="shadow-sm bg-white border-none text-blue-500">
                        View All
                </Button>
            </Marquee>
        </div>
    );
};

export default TrendingCategoris;