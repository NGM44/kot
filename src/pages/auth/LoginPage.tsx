import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../queries/auth";
import { SignInDetailsModel } from "../../types/auth";
import { useAuthStore } from "../../store/useAuthStore";
import { decodeAuthToken } from "../../utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate: login } = useLogin();
  const { setAuth } = useAuthStore();

  function handleLogin() {
    const loginDto: SignInDetailsModel = { email, password };
    login(loginDto, {
      onSuccess(data) {
        const accessToken = data.data.token;
        const decodedJwt = decodeAuthToken(accessToken);
        setAuth({
          accessToken,
          isAuthenticated: true,
          email: decodedJwt.email,
          id: decodedJwt.id,
          role: "ADMIN",
        });
        setEmail("");
        setPassword("");
        navigate("/admin/user");
      },
    });
  }

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex h-screen">
        <div className="flex flex-1 bg-white flex-col items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 max-h-full">
          <div className="mx-auto justify-center items-center w-full max-w-sm lg:w-96 mb-24 lg:border-none lg:shadow-none shadow-md border-borderColor border lg:px-0 lg:pt-0 lg:pb-0 rounded-md px-6 pt-10 pb-16">
            <div>
              <img className="h-10 w-auto" src="/logo.png" alt="Your Company" />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
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

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 border-2 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-900"
                    >
                      Show Password
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/forgotPassword");
                    }}
                    className="text-sm font-semibold underline text-primary cursor-pointer"
                  >
                    Forgot Password?
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
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
