

import { useRouter, useSearchParams } from "next/navigation";
import SignUp from "./signUp/SignUpForm_comp";

import { Modal } from "../composables/modal/modal";
import SignIn from "./signIn/SignInForm_comp";
import CreateContact from "../contact/createContact_comp";

function Authentication() {
  const view = useSearchParams().get("view");
  const router = useRouter();

  return (
    <div className=" font-lexend">
      <>
        <div>
          {view == "signup" ? (
            <Modal
              onClose={() => {
                router.push("/");
              }}
            >
              <SignUp
                onClose={() => {
                  router.push("/");
                }}
              />
            </Modal>
          ) : view == "signin" ? (
            <Modal
              onClose={() => {
                router.push("/");
              }}
            >
              <SignIn
                onClose={() => {
                  router.push("/");
                }}
              />
            </Modal>
          ) : view == "createcontact" ? (
            <Modal
              onClose={() => {
                router.push("/");
              }}
            >
              <CreateContact
                onClose={() => {
                  router.push("/");
                }}
              />
            </Modal>
          ) : (
            <div></div>
          )}
        </div>
      </>
    </div>
  );
}

export default Authentication;
