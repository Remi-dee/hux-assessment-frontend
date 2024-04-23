import { useRouter } from "next/navigation";
import Authentication from "../authentication/authentication";

function HomePage() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-5">
        <h1 className="mt-[40px] lg:mt-0 lg:w-full w-[410px] text-5xl font-bold">
          Welcome to Contact Manager
        </h1>

        <p className="mt-6 lg:mt-3 text-xl">
          A simple web application to manage your contacts
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/?view=signin");
            }}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600 hover:border-gray-400 focus:border-gray-400 "
          >
            <h3 className="text-2xl font-bold">Login &rarr;</h3>
            <p className="mt-4 text-xl">Log in to access your contacts</p>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/?view=signup");
            }}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600 hover:border-gray-400 focus:border-gray-400 "
          >
            <h3 className="text-2xl font-bold">Signup &rarr;</h3>
            <p className="mt-4 text-xl">Sign up to create an account</p>
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-center">
          © {new Date().getFullYear()} Contact Manager
        </p>
      </footer>
      <Authentication />
    </>
  );
}

export default HomePage;
