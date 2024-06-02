"use client"
import React, { useEffect } from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  import { useRouter } from "next/navigation";
  import { checkRole } from "../../utils/roles";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://ectore.vercel.app");
  }
  
  useEffect(() => {
    if (!checkRole("admin")) {
      router.push("./");
    }
  }, []);
  return (
    <div className="flex flex-col w-full h-screen bg-white ">
      <div className='flex flex-row p-4 justify-between top-0'>
        <div>
          <p className='text-black'>Ectore Admin Pannel</p>
        </div>
        <div>
    <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
    </div>
    <div className='flex justify-center items-center h-full'>
    <div className='flex flex-col justify-center items-center bottom-4 text-black'>
     <p>You are Unauthorize to use Ectore admin panel</p>
     <p>SignIn from admin account or contact ectore support</p>
     <button className='px-4 py-2 bg-black hover:bg-white rounded-lg mt-4 text-white hover:text-black hover:border hover:border-black' onClick={handleClick}>GO to Ectore</button>
</div>
</div>
  </div>
  )
}

export default page