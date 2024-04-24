"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { Modal } from "../composables/modal/modal";
import Contacts from "./components/contacts_comp";
import CreateContact from "./components/createContact_comp";
import UpdateContact from "./components/updateContact_comp";

export default function ContactPage() {
  const view = useSearchParams().get("view");
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("user"));
    if (user) setUser(userSession);
    console.log("here is", userSession);
    console.log("here is", user);
  }, [user]);
  console.log("here is 3  ", user);
  return (
    <>
      <Contacts />
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
            user={user}
          />
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}
