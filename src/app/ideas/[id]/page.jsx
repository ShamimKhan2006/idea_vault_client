import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

export const dynamic = "force-dynamic";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = params;

  const headersList = headers();

  const { token } = await auth.api.getToken({
    headers: headersList,
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
    cache: "no-store",
  });

  const item = await res.json();

  return (
    <div className="max-w-11/12 lg:max-w-6/12 mx-auto my-20 text-foreground">
      <div className="max-w-4xl rounded-md">

        <figure>
          <Image
            src={item.imageURL}
            alt={item.ideaTitle || "idea image"}
            width={1200}
            height={400}
            className="p-2 mb-4 rounded-2xl"
          />
        </figure>

        <div className="card-body shadow-md rounded-2xl">

          <div className="flex justify-between items-center">
            <h2 className="card-title font-bold text-3xl">
              {item.ideaTitle}
            </h2>

            <button className="badge badge-dash badge-primary">
              {item.category}
            </button>
          </div>

          <p className="text-2xl">{item.shortDescription}</p>
          <p className="font-semibold">{item.detailedDescription}</p>

          <div className="text-red-500 text-2xl">
            ${item.estimatedBudget}
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p>{item.problemStatement}</p>
              <p className="text-green-500">{item.targetAudience}</p>
            </div>

            <div>
              {item.tags?.map((tag, ind) => (
                <li key={ind}>{tag}</li>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;