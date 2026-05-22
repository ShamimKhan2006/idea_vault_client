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
          <div className="w-full max-w-md px-4 mx-auto items-center">
                  <Form className="flex flex-col gap-4   text-forground  mt-20  p-6  rounded-2xl shadow-md" onSubmit={handleRegister}>
                    <h1 className="my-5  text-center text-2xl md:text-3xl font-bold ">Register <span className="text-green-500">Form</span></h1>
              <TextField
                isRequired
                name="name"
                type="text"
                
              >
                <Label className="text-forground">Name</Label>
                <Input placeholder="Enter your name" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="email"
                type="email"
                
              >
                <Label className="text-forground">Email</Label>
                <Input placeholder="Enter your email" />
                
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="image"
                type="text"
               
              >
                <Label className="text-forground">Image Url</Label>
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
                <Label className="text-forground">Password</Label>
                <Input placeholder="Enter your password" />
                <span className="text-right text-sm  m-2 font-semibold">Forgot password</span>
                <Description className="text-gray-600">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
              </TextField>
             
              <Button   type="submit" className=" my-5 w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300">
                           Register
                         </Button>
              <div className='flex justify-center items-center gap-3'>
                                   <Separator className="w-30 text-forground"></Separator>
                               <p className='whitespace-nowrap text-center'>
                                 Or with register
                               </p>
                                  <Separator className="w-30 text-forground"></Separator>
                              
                                  </div>
                    <Button variant="outline" className="w-full  mb-4 text-forground" onClick={handleGoogle}><FcGoogle /> Sign Up with Google</Button> 
              
            </Form> 
                </div>)
};
                    
export default RegisterPage;