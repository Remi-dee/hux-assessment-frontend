// pages/index.js

"use client"
import { useRouter } from "next/navigation";
import HomePage from "./landingPage/HomePage";


export default function Home() {

  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <HomePage/>
    </div>
  );
}
