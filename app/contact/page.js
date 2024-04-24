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
          />
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}
