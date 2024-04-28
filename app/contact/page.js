"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { Modal } from "../composables/modal/modal";
import Contacts from "./components/contacts_comp";
import CreateContact from "./components/createContact_comp";
import UpdateContact from "./components/updateContact_comp";
import { logout } from "../composables/services/authServices";
import Header from "./components/header_comp";

export default function ContactPage() {
  const view = useSearchParams().get("view");
  const router = useRouter();
  const [user, setUser] = useState({});
  const [contactId, setContactId] = useState("");

  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("user"));
    if (user) setUser(userSession);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();

    router.push("/?view=signin");
  };
  return (
    <>
      <div className="lg:flex  lg:justify-between p-4 bg-gray-100">
        <Header user={user} />
        {user && (
          <button
            className="hidden lg:flex bg-red-500 max-h-10 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
      {user && <Contacts setContactId={setContactId} user={user} />}
      <div className="pb-10 bg-gray-100">
        {user && (
          <button
            className="flex lg:hidden bg-red-500 mx-auto  max-h-10 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

      {view == "createcontact" ? (
        <Modal
          onClose={() => {
            router.push("/contact");
          }}
        >
          <CreateContact
            onClose={() => {
              router.push("/contact");
            }}
            user={user}
          />
        </Modal>
      ) : view == "updatecontact" ? (
        <Modal
          onClose={() => {
            router.push("/contact");
          }}
        >
          <UpdateContact
            onClose={() => {
              router.push("/contact");
            }}
            contactId={contactId}
            user={user}
          />
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}
