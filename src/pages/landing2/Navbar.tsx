import { useEffect, useRef, useState } from "react";
import NavHeader from "./NavHeader";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef<any>();

  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "Product", href: "/#product" },
    { name: "Features", href: "/#features" },
    { name: "FAQs", href: "/#faq" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-gray-900/95 mt-2 rounded-xl mx-8">
      {/* <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"> */}
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`md:text-sm md:static md:block ${
          state
            ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900"
            : "hidden"
        }`}
      >
        <div className="custom-screen items-center md:flex">
          <NavHeader
            state={state}
            onClick={() => setState(!state)}
            menuBtnEl={undefined}
          />
          <div
            className={`flex-1 items-center mt-4 text-gray-300 md:font-medium md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="hover:text-gray-50">
                    <a href={item.href} className="block">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <a href="/login" className="block hover:text-gray-50">
                Sign in
              </a>
              <a
                href="/support"
                className="flex items-center py-2.5 px-4 text-center rounded-full duration-150 justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex"
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
