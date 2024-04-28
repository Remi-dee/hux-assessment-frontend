"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getContactById } from "../../composables/services/contactServices";
import Spinner from "../../composables/spinner/spinner";

export default function ContactDetails({ params }) {
  const router = useRouter();
  const contactId = params.contactId;
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("user"));
    console.log("here is", userSession);
    console.log("here is", user);
    if (user) setUser(userSession);
    const fetchContact = async () => {
      if (contactId && user.token) {
        try {
          const fetchedContact = await getContactById(user, contactId);
          setContact(fetchedContact);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching contact:", error);
          setLoading(false);
        }
      }
    };

    fetchContact();
    console.log(contact);
  }, [contactId, user.token]);

  if (loading) {
    return (
      <div className="flex  mt-[100px] justify-center item-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="flex  mt-[100px] justify-center item-center h-screen">
        Contact not found.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-10 lg:mx-auto mt-[100px] text-center p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Details</h1>
      <div className="mb-4">
        <p className="text-gray-800 text-lg font-semibold">First Name:</p>
        <p className="text-gray-700">{contact.firstName}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-800 text-lg font-semibold">Last Name:</p>
        <p className="text-gray-700">{contact.lastName} </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-800 text-lg font-semibold">Phone Number:</p>
        <p className="text-gray-700">{contact.phoneNumber}</p>
      </div>
    </div>
  );
}
