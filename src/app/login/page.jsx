"use client"

import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import toast from "react-hot-toast";
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
     
console.log("DATA:", data);
console.log("ERROR:", error);

if (error) {
  toast.error(error.message || "Login Failed!");
  return;
}

if (data) {
  toast.success("Login Successfully");
 }
 }
    return (
        <div className="w-6/12 mx-auto items-center">
          <Form className="flex flex-col gap-4 max-w-96 border text-white  mt-20 ml-65 p-6  rounded-2xl "  onSubmit={handleLogin}>
            <h1 className="my-5 shadow-sm text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Login Form</h1>
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
     
    </Form> 
        </div>
    );
};

export default LoginPage;