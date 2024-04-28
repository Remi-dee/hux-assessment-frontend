"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { Modal } from "../../composables/modal/modal";
import { getcontacts } from "../../composables/services/contactServices";
import Spinner from "../../composables/spinner/spinner";

export default function Contacts({ setContactId, user }) {
  const view = useSearchParams().get("view");
  const router = useRouter();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("user token is", user.token);
    const fetchContacts = async () => {
      if (user && user.token) {
        try {
          const fetchedContacts = await getcontacts(user?.token);
          setContacts(fetchedContacts);
          setLoading(false);
          console.log("contact is", contacts);
        } catch (error) {
          console.error("Error fetching contacts:", error);
          setLoading(false);
        }
      }
    };

    fetchContacts();
  }, [user.token]);

  const handleCreateContact = (e) => {
    e.preventDefault();
    router.push("/contact/?view=createcontact");
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Deleting contact with ID: ${id}`);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    console.log("here is our", id);
    router.push("/contact/?view=updatecontact");
    setContactId(id);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
        <>
          <div className="max-w-4xl w-full px-4">
            <div className="text-center md:text-left md:flex justify-between">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contacts List
              </h2>
              <div className="mb-4">
                <button
                  onClick={handleCreateContact}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create Contact
                </button>
              </div>
            </div>

            {loading && (
              <div className="flex mt-10 justify-center item-center">
                <Spinner />
              </div>
            )}

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {!loading && (
                <ul className="divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <li
                      key={contact.id}
                      className="px-4 py-4 sm:px-6 flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-8 w-8 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {contact.firstName} {contact.lastName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {contact.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            {contact.phoneNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <svg
                          onClick={() => handleDelete(contact.id)}
                          className="h-6 w-6 text-red-600 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <svg
                          onClick={(e) => {
                            console.log("here is our", contact._id);
                            handleUpdate(e, contact._id);
                          }}
                          className="h-6 w-6 text-blue-600 cursor-pointer group-hover:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 3l6 6-9 9-6-6 9-9zm0 0v12"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      </div>
    </>
  );
}
