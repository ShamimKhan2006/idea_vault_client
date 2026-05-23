"use client"
import { EditModal } from '@/components/EditModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const ProfilePage = () => {
     const { data: session } = authClient.useSession();
      console.log(session, "session");
      const user = session?.user;
      console.log("user", user);
    return (
        
           <div className='max-w-md mx-auto px-4 mt-10 shadow-md p-10'>
               <h1 className='text-center font-bold text-3xl'> Welcome to <span className='text-green-500'>my Profile</span></h1>

         
                 <Avatar>
                     <Avatar.Image
                       alt="Blue"
                       src={user?.image}
                     
                       width={200}
                       height={200}
                     />
                     <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                   </Avatar>
        
                  <h1 className='font-bold py-4'>{user?.name}</h1>
                  <p className='mb-4'>{user?.email}</p>

              <EditModal/>
           </div>
        
    );
};

export default ProfilePage;