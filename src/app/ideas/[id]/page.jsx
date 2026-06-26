import ReviewForm from "@/components/ReviewForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import {Button} from "@heroui/react";

import CommentsDeleteModal from "@/components/CommentsDeleteModal";


export const dynamic = "force-dynamic";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log("token",token)
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const item = await res.json();
 const review = await fetch(`${process.env.NEXT_PUBLIC_URL}/reviews/${id}`,{
   
})
  const reviews=await review.json()

  return (
    <div className="max-w-11/12 lg:max-w-5/12 mx-auto my-20 text-foreground">
      <div className="max-w-4xl rounded-md">
        <figure>
          <Image
            src={item?.imageURL}
            alt={item?.ideaTitle}
            width={1200}
            height={400}
            className="p-2 mb-4 rounded-2xl"
          />
        </figure>

        <div className="card-body shadow-md rounded-2xl">
          <div className="flex justify-between items-center">
            <h2 className="card-title font-bold text-3xl">{item?.ideaTitle}</h2>

            <button className="badge badge-dash badge-primary">
              {item?.category}
            </button>
          </div>

          <p className="text-2xl">{item?.shortDescription}</p>
          <p className="font-semibold">{item?.detailedDescription}</p>

          <div className="text-red-500 text-2xl">${item?.estimatedBudget}</div>

          <div className="flex justify-between items-start">
            <div>
              <p>{item?.problemStatement}</p>
              <p className="text-green-500">{item?.targetAudience}</p>
            </div>

            <div>
              {typeof item?.tags === "string"
                ? item.tags
                    .split(",")
                    .map((tag, ind) => <li key={ind}>{tag.trim()}</li>)
                : Array.isArray(item?.tags)
                  ? item.tags.map((tag, ind) => <li key={ind}>{tag}</li>)
                  : null}
            </div>

          </div>
        </div>
      </div>
      
            {reviews.length > 0 && (
              <div className="space-y-4 text-foreground">
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mt-10">Recent Comments</h3>
                {reviews.map((r) => (
                  <div key={r._id} className="bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm transition-all hover:shadow-md text-foreground">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-bold text-indigo-900">{r.userName}</p>
                      <span className="text-xs text-gray-400">Just now</span>
                      <div className="flex justify-between gap-3 items-center">
                 
                        {/* <Button variant="danger">Delete</Button> */}
                        <CommentsDeleteModal r={r}/>
                      </div>
                    </div>
                    <p className="text-gray-600">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
      <ReviewForm Id={id} />
    </div>
  );
};

export default IdeaDetailsPage;
