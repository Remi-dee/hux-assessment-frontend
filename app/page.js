"use client";
import { useRouter } from "next/navigation";
import HomePage from "./landingPage/HomePage";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const userSession = JSON.parse(localStorage.getItem("user"));

    // Redirect users based on their authentication status
    if (userSession) {
      // Redirect logged-in users to the Contacts list page
      router.push("/contact");
    } else {
      // Redirect anonymous visitors to the Homepage
      router.push("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <HomePage />
    </div>
  );
}
