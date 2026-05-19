"use client"

import { authClient } from "@/lib/auth-client";
import {Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
 const handleLogin=async(e) =>{
    e.preventDefault()

    const formData=new FormData(e.currentTarget)
    const newData=Object.fromEntries(formData.entries())
    console.log(newData)
      


     

    const { data, error } = await authClient.signIn.email({
    ...newData,
    rememberMe: true,
    callbackURL:"/"
   
});
     


if (error) {
  toast.error(error.message || "Login Failed!");
  return;
}

if (data) {
  toast.success("Login Successfully");
 }


 }

  const handleGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
    return (
        <div className="w-6/12 mx-auto items-center">
          <Form className="flex flex-col gap-4 max-w-96 border text-white  mt-20 ml-65 p-6  rounded-2xl bg-gray-400"  onSubmit={handleLogin}>
            <h1 className="my-5  text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Login Form</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="text-white">Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
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
       
      <Button type="submit" className=" my-5 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300" >
                   Login
                 </Button>
  
                 <div className='flex justify-center items-center gap-3'>
                      <Separator className="w-30"></Separator>
                  <p className='whitespace-nowrap text-center'>
                    Or with login
                  </p>
                     <Separator className="w-30"></Separator>
                 
                     </div>
       <Button variant="outline" className="w-full text-white" onClick={handleGoogle}><FcGoogle /> Sign in with Google</Button> 
        
       <div className="flex gap-2 ml-8 text-gray-300 mt-4">
         <h3>Dont have an Account ? </h3>
         <h3 className="border-b"><Link href={"/register"}>Register</Link></h3>
       </div>
 </Form>
           
        </div>
    );
};

export default LoginPage;