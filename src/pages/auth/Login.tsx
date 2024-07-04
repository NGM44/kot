import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../queries/auth";
import { SignInDetailsModel } from "../../types/auth";
import { useAuthStore } from "../../store/useAuthStore";
import { decodeAuthToken } from "../../utils/auth";

function Login() {
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
        navigate("/");
      },
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 mx-4">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-6 pb-12 shadow-lg sm:rounded-lg sm:px-12 border border-gray-200">
            <div className="sm:mx-auto sm:w-full sm:max-w-md py-8">
              <div className="items-center flex flex-row mx-auto mb-8">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-auto mx-auto"
                  width={500}
                  height={500}
                />
              </div>
              <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in
              </h2>
            </div>
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

              <div>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
