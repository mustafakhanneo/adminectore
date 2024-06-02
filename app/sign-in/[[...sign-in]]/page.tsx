import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full h-screen bg-white items-center justify-center">
  <SignIn />
  </div>
  )
}