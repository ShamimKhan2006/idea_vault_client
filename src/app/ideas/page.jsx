import Search from '@/components/Search';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeasPage = async ({ searchParams }) => {
    // searchParams প্রমিজ রিজলভ করা
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || "";

    // ডাটা ফেচ করা
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/ideas?search=${search}`,
        { cache: "no-store" }
    );
    const data = await res.json();

    return (
        <div className='w-full max-w-6xl mx-auto py-10'>
            <h1 className='text-center text-3xl font-bold mb-10'>All Ideas</h1>
            
            <Search />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {data?.map((item) => (
                    <div key={item._id} className='shadow-lg rounded-2xl overflow-hidden border'>
                        <Image
                            src={item.imageURL}
                            alt="idea image"
                            width={400}
                            height={300}
                            className='w-full h-60 object-cover'
                        />
                        <div className='p-4 space-y-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='font-bold text-lg'>{item.ideaTitle}</h2>
                                <button className='badge badge-primary'>{item.category}</button>
                            </div>
                            <p className='text-sm text-gray-500'>{item.shortDescription}</p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-2xl font-bold text-green-500'>${item.estimatedBudget}</h2>
                                <Link href={`/ideas/${item._id}`}>
                                    <Button className='bg-green-500 text-white'>All Details</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeasPage;