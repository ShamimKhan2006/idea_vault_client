import Image from 'next/image';
import React from 'react';

const Section = () => {
    return (
          <div className="hero bg-base-200 container mx-auto  rounded-3xl mt-20">
      <div className="hero-content  flex justify-center items-center gap-10 lg:flex-row-reverse ">

        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Idea Vault Collaboration"
          width={950}
          height={950}
          className="rounded-lg shadow-2xl object-cover border border-base-300 ml-10"
        />

        <div>
          <div className="badge text-green-500 badge-outline mb-4 px-4 py-3">
            Creative Idea Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Store, <span className='text-green-500'>Share & Build</span> <br />
            Your Next Big Idea
          </h1>

          <p className="py-6  max-w-xl text-lg   text-gray-400">
            Idea Vault helps creators, developers, and startup teams organize
            innovative concepts in one smart workspace. Save project ideas,
            collaborate with your team, and turn imagination into reality.
          </p>


          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold text-green-500">10K+</h2>
              <p className="text-sm  text-gray-400">
                Ideas Stored
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-500 ">5K+</h2>
              <p className="text-sm text-gray-400">
                Active Creators
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">99%</h2>
              <p className="text-sm  text-gray-400">
                User Satisfaction
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default Section;