import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateContactForm } from "../../composables/validation";
import { createContact } from "../../composables/services/contactServices";

export default function CreateContact({ onClose, user }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  console.log("here is 2", user);
  // Form change handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation before submitting
    if (validateContactForm(formData)) {
      setIsLoading(true);
      const contactCreated = await createContact(formData, user.token);
      if (contactCreated) setIsLoading(false);
      router.push("/contact");
      setIsLoading(false);
     
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
      <div className="max-w-md w-full py-5 px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Add New Contact</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 text-gray-700 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 text-gray-700 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 p-2 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? "Loading..." : "Add Contact"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
