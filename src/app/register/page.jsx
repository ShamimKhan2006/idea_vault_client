 "use client"
import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import { redirect } from "next/navigation";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {


const handleRegister= async(e) =>{
    e.preventDefault()

    const formData=new FormData(e.currentTarget)
    const newData=Object.fromEntries(formData.entries())
    

    const res = await fetch("http://localhost:8000/regis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const realdata = await res.json();
  console.log(realdata);

    
        const { data, error } = await authClient.signUp.email({
      ...newData,
    callbackURL:"/"
});

    if(data){
      toast.success("Register Successfully")
      redirect("/login")
    }

    if(error){
      toast.error(error.message("Register Faield"))
    }

 }

   const handleGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  


    return (
          <div className="w-6/12 mx-auto items-center">
                  <Form className="flex flex-col gap-4 max-w-96 border text-white  mt-20 ml-65 p-6  rounded-2xl bg-gray-400" onSubmit={handleRegister}>
                    <h1 className="my-5  text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Register Form</h1>
              <TextField
                isRequired
                name="name"
                type="text"
                
              >
                <Label className="text-white">Name</Label>
                <Input placeholder="Enter your name" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="email"
                type="email"
                
              >
                <Label className="text-white">Email</Label>
                <Input placeholder="Enter your email" />
                
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="image"
                type="text"
               
              >
                <Label className="text-white">Image Url</Label>
                <Input placeholder="Enter your image url" />
              
              
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label className="text-white">Password</Label>
                <Input placeholder="Enter your password" />
                <Description className="text-white">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
              </TextField>
             
              <Button   type="submit" className=" my-5 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300">
                           Register
                         </Button>
              <div className='flex justify-center items-center gap-3'>
                                   <Separator className="w-30"></Separator>
                               <p className='whitespace-nowrap text-center'>
                                 Or with register
                               </p>
                                  <Separator className="w-30"></Separator>
                              
                                  </div>
                    <Button variant="outline" className="w-full text-white mb-4" onClick={handleGoogle}><FcGoogle /> Sign Up with Google</Button> 
              
            </Form> 
                </div>)
};
                    
export default RegisterPage;