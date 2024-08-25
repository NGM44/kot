import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../queries/auth";
import { SignInDetailsModel } from "../../types/auth";
import { useAuthStore } from "../../store/useAuthStore";
import { decodeAuthToken } from "../../utils/auth";
import { HStack, VStack } from "../../component/utils";
import { Key, Lock, Mail } from "lucide-react";
import { toast } from "react-toastify";

// export const loginPageImageUrl = ["/login.png", "/login2.png", "/login3.png"];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate: login } = useLogin();
  const { setAuth } = useAuthStore();
  const length = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  let count = 0;
  useEffect(() => {
    //timer to change the login image on right side
    const intervalId = setInterval(() => {
      count++;
      setActiveIndex(count % length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // const imageUrl = loginPageImageUrl;
  function handleLogin() {
    const loginDto: SignInDetailsModel = { email, password };
    login(loginDto, {
      onSuccess:(data)=> {
        const accessToken = data.data.token;
        const decodedJwt = decodeAuthToken(accessToken);
        setAuth({
          accessToken,
          isAuthenticated: true,
          email: decodedJwt.email,
          id: decodedJwt.id,
          role: decodedJwt.role,
        });
        setEmail("");
        setPassword("");
        if (decodedJwt.role === "ADMIN") {
          navigate("/user");
        } else {
          navigate("/dashboard");
        }
      },
      onError: (data)=>{
        console.log("data", data);
      //  toast(data.)
      }
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
                Login to your account
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
                  <div className="relative mt-2">
                    <Mail className="absolute top-1.5 p-0.5 left-2 text-gray-400"/>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-2 rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <div className="relative mt-2">
                    <Lock className="absolute top-1.5 p-0.5 left-2 text-gray-400"/>
                    <input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full px-2 rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block  bg-gradient-to-br from-primary to-primary ">
          <VStack className="gap-8">
            <img
              className="inset-0 md:visible invisible object-cover mx-auto w-fit px-32"
              src={'remo.png'}
              alt=""
            />

           {/* {activeIndex === 0 ? */}
            
              <div className="px-10 text-2xl font-semibold text-center text-white">
                <p>Live Workspace Monitor</p>
                <p className="text-base text-gray-200">Monitor the Air Quality for better tomorrow</p>

                <HStack className="gap-4 mt-6 w-full justify-center">
                  <div onClick={()=>setActiveIndex(0)} className="w-4 h-4 bg-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(1)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(2)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                </HStack>
              </div>
            
              {/* : activeIndex === 1 ? (
              <div className="px-10 pb-10 text-2xl font-semibold text-center text-white">
                <p> Share, collect, and organize project files securely</p>
                <p>all in one central hub</p>
                <HStack className="gap-4 mt-6 w-full justify-center">
                  <div onClick={()=>setActiveIndex(0)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(1)} className="w-4 h-4 bg-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(2)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                </HStack>
              </div>
            ) : (
              <div className="px-10 pb-10 text-2xl mx-auto font-semibold text-center text-white">
                <p> Never miss deadlines</p>
                <p>Automated reminders keep tasks on track</p>
                <HStack className="gap-4 mt-6 w-full justify-center">
                  <div onClick={()=>setActiveIndex(0)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(1)} className="w-4 h-4 bg-transparent border-2 border-white rounded-full"></div>
                  <div onClick={()=>setActiveIndex(2)} className="w-4 h-4 bg-white rounded-full"></div>
                </HStack>
              </div>
            )} */}
          </VStack>
          {/* <img
            className="absolute inset-0 h-full w-full object-fill"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          /> */}
        </div>
      </div>
    </>
  );
}
