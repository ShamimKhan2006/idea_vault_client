
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
           <div className='w-full max-w-10/12 mx-auto text-foreground'>
            <h1 className='text-center my-10 font-bold text-3xl text-black'>All Ideas</h1>
      
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-3'>
           {
            data.map(item => <div key={item._id}>
                <div className="  shadow-md rounded-2xl text-foreground h-full">
  <figure>
    <Image
      src={item.imageURL}
      alt="Shoes"
      width={400}
      height={300} className=' p-2 mb-4 object-center w-full h-60' />
      
  </figure>
  <div className="card-body bg-gry-500">
   <div className='flex justify-between items-center'>
     <h2 className="card-title">
      {item.ideaTitle}
    </h2>
     
      <button className="badge badge-dash badge-primary">{item.category}</button>
     
   </div>

    <p>{item.shortDescription}</p>
    <div className="card-actions flex justify-between">
      <div className="text-green-500 text-2xl">${item.estimatedBudget}</div>
      <Link href={`/ideas/${item._id}`}><Button className="bg-green-500">All Details</Button></Link>
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