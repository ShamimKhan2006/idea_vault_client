import { Button } from '@heroui/react';
import { ArrowBigLeft, ArrowRight, Check } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home_idea = async() => {
    // const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/featured`,{
    //     headers:{
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify()
    // })

    const res = await fetch(
  `${process.env.NEXT_PUBLIC_URL}/featured`,
  {
    cache: "no-store",
  }
);
    const homeIdea=await res.json()
    console.log(homeIdea)

    return (
         <div className='w-full max-w-10/12 mx-auto '>
                  <div className='flex justify-between items-center'>
                     <h1 className=' my-10 font-bold text-3xl '>All Ideas</h1>
                     <p className='flex gap-2 text-green-500 font-semibold'>View All <ArrowRight/>
                     </p>
                  </div>
             
               <div className='grid grid-cols-1  md:grid-cols-2gap-2   lg:grid-cols-4 gap-3'>
                  {
                   homeIdea.map(item => <div key={item._id}>
                       <div className="  h-full  shadow-md rounded-2xl">
         <figure>
           <Image
             src={item.imageURL}
             alt="Shoes"
             width={400}
             height={300} className=' p-2 mb-4 rounded-2xl object-cover h-60' />
             
         </figure>
         <div className="card-body bg-gry-500">
          <div className='flex justify-between items-center'>
            <h2 className="card-title">
             {item.ideaTitle}
           </h2>
            
           <div className="badge badge-dash badge-info">{item.category}</div>
            
          </div>
       
           <p className='text-gray-400'>{item.shortDescription}</p>
           <div className="card-actions flex justify-between ">
             <div className="text-red-500 text-2xl">${item.estimatedBudget}</div>
             <Link href={`/ideas/${item._id}`}><Button utton className={"bg-green-500 w-full "}>All Details</Button></Link>
           </div>
         </div>
       </div>
                   </div>)
                  }
               </div>
                    </div>
    );
};

export default Home_idea;