import Image from 'next/image';
import React from 'react';

const AllCards = () => {
     const res=fetch(`${process.env.NEXT_PUBLIC_URL}/`)

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      width={200}
      height={200} />
                
   </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default AllCards;