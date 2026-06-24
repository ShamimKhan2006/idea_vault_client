import Search from '@/components/Search';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeasPage = async ({ searchParams }) => {

    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || "";


    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/ideas?search=${search}`,
        { cache: "no-store" }
    );
    const data = await res.json();

    return (
        <div className='w-full max-w-10/12 mx-auto py-10'>
            <h1 className='text-center text-3xl font-bold mb-10'>All Ideas</h1>
            
            <Search />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {data?.map((item) => (
                    <div key={item._id} className='shadow-lg rounded-2xl  '>
                                       <div className="  h-full  shadow-md rounded-2xl">
                                 <figure>
                                   <Image
                                     src={item?.imageURL}
                                     alt="Shoes"
                                     width={400}
                                     height={300} className=' p-2 mb-4 rounded-2xl object-cover h-60' />
                                     
                                 </figure>
                                 <div className="card-body bg-gry-500">
                                  <div className='flex justify-between items-center'>
                                    <h2 className="card-title">
                                     {item?.ideaTitle}
                                   </h2>
                                    
                                   <div className="badge badge-dash badge-info">{item?.category}</div>
                                    
                                  </div>
                               
                                   <p className='text-gray-400'>{item?.shortDescription}</p>
                                   <div className="card-actions flex justify-between ">
                                     <div className="text-red-500 text-2xl">${item?.estimatedBudget}</div>
                                     <Link href={`/ideas/${item?._id}`}><Button utton className={"bg-green-500 w-full "}>All Details</Button></Link>
                                   </div>
                                 </div>
                               </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeasPage;