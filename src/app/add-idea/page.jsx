
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
         <div className="min-h-screen text-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h1 className="text-3xl font-bold mb-2">Submit Startup Idea</h1>
        <p className="text-zinc-400 mb-8">
          Share your innovative startup idea with the world 🚀
        </p>

         <form onSubmit={handleSubmit} className="space-y-6">
          {/* Idea Title */}
          <div>
            <label className="block mb-2 font-medium">
              Idea Title
            </label>

            <input
              type="text"
              name="ideaTitle"
              placeholder="Enter startup idea title"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-2 font-medium">
              Short Description
            </label>

            <input
              type="text"
              name="shortDescription"
              placeholder="Short summary about your idea"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Detailed Description */}
          <div>
            <label className="block mb-2 font-medium">
              Detailed Description
            </label>

            <textarea
              name="detailedDescription"
              rows="5"
              placeholder="Describe your startup idea in detail"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category} value={category}>
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
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="url"
              name="imageURL"
              placeholder="Paste image URL"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Estimated Budget */}
          <div>
            <label className="block mb-2 font-medium">
              Estimated Budget
            </label>

            <input
              type="text"
              name="estimatedBudget"
              placeholder="$5000"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="block mb-2 font-medium">
              Target Audience
            </label>

            <input
              type="text"
              name="targetAudience"
              placeholder="Who will use this product?"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            />
          </div>

          {/* Problem Statement */}
          <div>
            <label className="block mb-2 font-medium">
              Problem Statement
            </label>

            <textarea
              name="problemStatement"
              rows="4"
              placeholder="What problem does this solve?"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 font-semibold"
          >
            Submit Idea 🚀
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddIdeaPages;