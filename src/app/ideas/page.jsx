
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeasPage = async() => {
    const res=await fetch("http://localhost:8000/ideas",{
        headers:{
            "content-type":"application.json"
        },
        body:JSON.stringify()
    })
    const data=await res.json()

   
    return (
           <div className='max-w-10/12 mx-auto bg-white'>
            <h1 className='text-center my-10 font-bold text-3xl'>All Ideas</h1>
      
        <div className='grid grid-cols-1  md:grid-cols-3  lg:grid-cols-4 gap-3'>
           {
            data.map(item => <div key={item._id}>
                <div className=" w-96  bg-[#E2E8F0] shadow-sm">
  <figure>
    <Image
      src={item.imageURL}
      alt="Shoes"
      width={400}
      height={300} className=' p-2 mb-4' />
      
  </figure>
  <div className="card-body bg-gry-500">
   <div className='flex justify-between items-center'>
     <h2 className="card-title">
      {item.ideaTitle}
    </h2>
     
      <button className="btn btn-soft btn-secondary">{item.category}</button>
     
   </div>

    <p>{item.shortDescription}</p>
    <div className="card-actions flex justify-between">
      <div className="text-purple-500 text-2xl">${item.estimatedBudget}</div>
      <Link href={`/ideas/${item._id}`}><Button variant='primary'>All Details</Button></Link>
    </div>
  </div>
</div>
            </div>)
           }
        </div>
             </div>
    );
};

export default IdeasPage;