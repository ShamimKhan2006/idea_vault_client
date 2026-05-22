
'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const AddIdeaPages = () => {
    const handleSubmit= async(e) =>{
        e.preventDefault()

        const formData=new FormData(e.currentTarget)
        const newData=Object.fromEntries(formData.entries())

      const {data:tokenData}=await authClient.token()
    

     const res=await fetch(`http://localhost:8000/Addideas 
`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            authorization:`Bearer ${tokenData?.token}`
        },
       body:JSON.stringify(newData)

     })
     const data= await res.json()
        if(data){
            toast.success(" New Idea Added Successfull")
        }else{
           toast.error("Not idea aded !")
        }
    }

    const categories = [
        "Tech",
        "Health",
        "AI",
        "Education",
        "Finance",
        "E-commerce",
        "Food",
        "Travel",
        "Gaming",
        "Other"
    ];
    return (
         <div className="py-10 px-4">
      <div className=" w-full max-w-md mx-auto  p-8 rounded-2xl  shadow-xl text-foreground">
        <h1 className="text-3xl font-bold mb-2">Submit <span className='text-green-500'>Startup Idea</span></h1>
        <p className="text-zinc-400 mb-8">
          Share your innovative startup idea with the world 🚀
        </p>

         <form onSubmit={handleSubmit} className="space-y-6">
          {/* Idea Title */}
          <div>
            <label className="block mb-2 font-medium   text-forground">
              Idea Title
            </label>

            <input
              type="text"
              name="ideaTitle"
              placeholder="Enter startup idea title"
              className="w-full   shadow-md  rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-2 font-medium  text-forground">
              Short Description
            </label>

            <input
              type="text"
              name="shortDescription"
              placeholder="Short summary about your idea"
              className="w-full   shadow-md rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Detailed Description */}
          <div>
            <label className="block mb-2 font-medium text-forground">
              Detailed Description
            </label>

            <textarea
              name="detailedDescription"
              rows="5"
              placeholder="Describe your startup idea in detail"
              className="w-full   shadow-md rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium  text-forground">
              Category
            </label>

            <select
              name="category"
              className="w-full shadow-md rounded-xl px-4 py-3 outline-none text-foreground focus:border-pink-500"
              required
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option  key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-2 font-medium">
              Tags
            </label>

            <input
              type="text"
              name="tags"
              placeholder="AI, Startup, Education"
              className="w-full    shadow-md rounded-xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium  text-forground">
              Image URL
            </label>

            <input
              type="url"
              name="imageURL"
              placeholder="Paste image URL"
              className="w-full    shadow-md  rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Estimated Budget */}
          <div>
            <label className="block mb-2 font-medium text-forground">
              Estimated Budget
            </label>

            <input
              type="text"
              name="estimatedBudget"
              placeholder="$5000"
              className="w-full    shadow-md rounded-xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="block mb-2 font-medium  text-forground">
              Target Audience
            </label>

            <input
              type="text"
              name="targetAudience"
              placeholder="Who will use this product?"
              className="w-full    shadow-md  rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Problem Statement */}
          <div>
            <label className="block mb-2 font-medium  text-forground">
              Problem Statement
            </label>

            <textarea
              name="problemStatement"
              rows="4"
              placeholder="What problem does this solve?"
              className="w-full   shadow-md rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-500 hover:scale-[1.02] transition-all duration-300 font-semibold"
          >
            Add Idea 🚀
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddIdeaPages;