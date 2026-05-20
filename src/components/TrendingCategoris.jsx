import { Button } from '@heroui/react';
import React from 'react';

import { ImCoinDollar } from 'react-icons/im';
import { LuLeafyGreen } from 'react-icons/lu';
import { MdElectricBolt, MdOutlineCastForEducation, MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaBahai } from "react-icons/fa";
const TrendingCategoris = () => {
    return (
        <div className='max-w-10/12 mx-auto'>
            <h1 className='text-center font-bold text-3xl'>Tranding Categoris</h1>
            <div className='flex justify-between items-center gap-4'>
                <Button variant='outline' className='flex justify-between items-center rounded-2xl gap-3'>
                    <div>
                        <FaBahai className='w-5 h-5 bg-purple-500' />
                    </div>
                    <h1 className='font-semibold text-md'>AI</h1>
                </Button>
                <Button variant='outline' className='flex gap-2'>
                    <div>
                        <MdOutlineHealthAndSafety className=' w-5 h-5 '/>
                    </div>
                   <h1 className='font-semibold text-md'>HealthTech</h1> 
                </Button>
                <Button variant='outline' className='flex gap-2'>
                    <div>
                   <ImCoinDollar className='w-5 h-5' />
                    </div>
                   <h1 className='font-semibold text-md'>FinTech</h1> 
                </Button>
                <Button className='flex gap-2' variant='outline'>
                    <div>
                        <MdOutlineCastForEducation />
                    </div>
                    <h1 className='font-semibold text-md'>Education</h1>
                </Button>
                <Button variant='outline'>
                    <div>
                        <LuLeafyGreen />
                    </div>
                 <h1 className='font-semibold text-md'>Green Enery</h1>
                </Button>
                <Button variant='outline' className='w-5 h-5'>
                    <div>
                        <MdElectricBolt  className="w-5 h-5"/>
                    </div>
                    <h1 className='font-semibold text-md'>Productivity</h1>
                </Button>
                <Button variant='outline'  className='w-10 h-10'>
                    
                        View All
                   
    
                </Button>
            </div>
        </div>
    );
};

export default TrendingCategoris;