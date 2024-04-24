import { useRouter } from "next/navigation";
import { createUser } from "../../composables/services/authServices";
import { validateUserForm } from "../../composables/validation";
import { useState } from "react";
export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // State for form fields
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  // Form change handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation before submitting
    if (validateUserForm(formData)) {
      setIsLoading(true);
      const userCreated = await createUser(formData);
      if (userCreated) setIsLoading(false);
      router.push("/contact");
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center  py-6 bg-gray-100">
      <div className="max-w-md w-full py-5 px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              autoComplete="given-name"
              required
              className="mt-1 text-gray-700 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="mt-1 text-gray-700 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
              className="mt-1 text-gray-700 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
