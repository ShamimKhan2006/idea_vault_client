
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeaDetailsPage =async ({params}) => {
    const {id}=await params
    const {token}= await auth.api.getToken({
      headers:await headers()
    })
       console.log(token)
     const res=await fetch (`${process.env.NEXT_PUBLIC_URL}/${id}`,{
      headers:{
          authorization:`Bearer ${token}`
      }
     })
     const item=await res.json()

    return (
        <div className=' max-w-11/12 lg:max-w-6/12 mx-auto my-20 text-foreground'>
            <div className=" max-w-4xl   rounded-md">
  <figure>
    <Image
      src={item.imageURL}
      alt="Shoes"
      width={1200}
      height={400} className=' p-2 mb-4 rounded-2xl' />
      
  </figure>
  <div className="card-body shadow-md rounded-2xl">
   <div className='flex justify-between items-center'>
     <h2 className="card-title font-bold text-3xl">
      {item.ideaTitle}
    </h2>
     
      <button className="badge badge-dash badge-primary">{item.category}</button>
     
   </div>
     <div>
         <p className='text-2xl'>{item.shortDescription}</p>

    <p className='font-semibold'>{item.detailedDescription}</p>
     </div>
  
       <div className="text-red-500 text-2xl">${item.estimatedBudget}</div>
       

    <div className='flex justify-between items-center'>
     <div>
        <p>{item.problemStatement}</p>
    <p className='text-green-500'>{item.targetAudience}</p>
      
     </div>
       <div>
            {
              item.tags?.map((i,ind) => <li  key={ind}>{i}</li>)
            }
        </div>
           </div>
    </div>
  </div>
</div>
        
    );
};

export default IdeaDetailsPage;