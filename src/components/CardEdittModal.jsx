"use client";


import {Button, Description, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";

export function CardEditModal({item}) {
  const router=useRouter()
  const editHandle=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const newData=Object.fromEntries(formData.entries())



   const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/edit/${item._id}`,{
    method:"PATCH",

    headers:{
         "content-type":"application/json"
    },body:JSON.stringify(newData)
   })
   const data= await res.json()
       if(data.modifiedCount > 0){
        router.refresh()
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
    <Modal>
     <Button variant="secondary"><BiEdit/>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
               <form onSubmit={editHandle} className="space-y-6">
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
              defaultValue={item.ideaTitle}
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
              defaultValue={item.shortDescription}
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
              defaultValue={item.detailedDescription}
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
              defaultValue={item.category}
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
               defaultValue={item.tags}
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
              defaultValue={item.imageURL}
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
              defaultValue={item.estimatedBudget}
            />
          </div>
         
          <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save Changes</Button>
            </Modal.Footer>
        </form>
                   
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}