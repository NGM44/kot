import { useState } from "react";
import { useForgotPassword } from "../../queries/auth";
import { toast } from "react-toastify";
import { HStack } from "../../component/utils";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const { mutate: forgotPassword } = useForgotPassword();

  function handleForgotPassword() {
    forgotPassword(email, {
      onSuccess(data) {
        toast("Email sent for the registered mail", {
          type: "success",
          autoClose: 2000,
        });
      },
    });
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-1 bg-white flex-col items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 max-h-full">
          <div className="mx-auto justify-center items-center w-full max-w-sm lg:w-96 mb-24 lg:border-none lg:shadow-none shadow-md border-borderColor border lg:px-0 lg:pt-0 lg:pb-0 rounded-md px-6 pt-10 pb-16">
            <div>
            <HStack className="items-baseline">
                <img
                  className="h-10 w-auto"
                  src="/onlylogo.png"
                  alt="Your Company"
                />
                <img
                  className="h-8 w-auto"
                  src="/fullLogo.png"
                  alt="Your Company"
                />
              </HStack>

              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot Password
              </h2>
              <p className="text-sm - text-gray-500">
                Enter the email you used when you joined to reset password
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleForgotPassword}
                  className="cursor-pointer flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-fill"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
