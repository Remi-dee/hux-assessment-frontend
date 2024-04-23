// pages/index.js

import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Contact Manager</h1>

        <p className="mt-3 text-xl">
          A simple web application to manage your contacts
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/login"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">Login &rarr;</h3>
            <p className="mt-4 text-xl">Log in to access your contacts</p>
          </a>

          <a
            href="/signup"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">Signup &rarr;</h3>
            <p className="mt-4 text-xl">Sign up to create an account</p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-center">
          © {new Date().getFullYear()} Contact Manager
        </p>
      </footer>
    </div>
  );
}
