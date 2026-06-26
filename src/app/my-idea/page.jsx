import { CardEditModal } from "@/components/CardEdittModal";
import DeleteModal from "@/components/DeleteModal";
import { auth } from "@/lib/auth";


import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";



const MyideaPage = async () => {
const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user; 
  console.log("userrrrrrr",user)
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/myidea`, {
    cache: "no-store",
    headers: {
      "content-type": "application/json",
       authorization: `Bearer ${token}`
    },
  });

  const data = await res.json();
console.log("data",data)

  return <div>
          <div className='w-full max-w-10/12 mx-auto text-foreground'>
            <h1 className='text-center my-10 font-bold text-3xl text-black'>My Ideas</h1>
      
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-3'>
           {
            data?.map(item => <div key={item._id} > 
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
      <Link href={`/ideas/${item._id}`}><Button className="bg-green-500 mt-5">All Details</Button></Link>
      <div className="flex justify-between gap-10 mt-6 items-center">
        <CardEditModal  item={item} />
       <DeleteModal item={item} />
      </div>
    </div>
  </div>
</div>
            </div>)
           }
        </div>
             </div>
  </div>;
};

export default MyideaPage;
