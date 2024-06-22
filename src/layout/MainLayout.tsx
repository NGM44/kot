/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import {
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
  Dialog,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  BellIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  HomeIcon,
  RectangleGroupIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../utils/string";
import { useLocation, useNavigate } from "react-router-dom";
import AlertDialog from "../component/shared/AlertDialog";
import { useAuthStore } from "../store/useAuthStore";
import NavLayout from "./NavLayout";
const userNavigation = [
  // { name: "Your profile", href: "" },
  { name: "Log out", href: "#" },
];

export default function MainLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(pathname === "/"){
      if(role === "ADMIN"){
        navigate("admin/user");
      }else{
        navigate("user/dashboard");
      }
    }
  },[]);

  const  {clear, role, email} = useAuthStore();
  const [dialog, setDialog] = useState(false);
  const navigation = role === "ADMIN" ? [
    { name: "User", href: "/admin/user", icon: HomeIcon, current: true },
    { name: "Device", href: "/admin/device", icon: ChartPieIcon, current: false },
  ]:
  [
    { name: "Dashboard", href: "/user/dashboard", icon: HomeIcon, current: true },
    { name: "Analytics", href: "/user/analytics", icon: ChartPieIcon, current: false },
    { name: "Grid", href: "/user/grid", icon: RectangleGroupIcon, current: false },
    {
      name: "Profile",
      href: "/user/profile",
      icon: UserCircleIcon,
      current: false,
    },
    { name: "Settings", href: "/user/settings", icon: Cog6ToothIcon, current: false },
    { name: "Updates", href: "/user/updates", icon: ArrowPathIcon, current: false },
    {
      name: "Support",
      href: "/user/support",
      icon: ChatBubbleBottomCenterIcon,
      current: false,
    },
  ];
  const teams = [
    {
      id: 1,
      name: "Manual",
      href: "#",
      icon: ArrowTopRightOnSquareIcon,
      initial: "M",
      current: false,
    },
    {
      id: 2,
      name: "Demo",
      href: "#",
      icon: ArrowTopRightOnSquareIcon,
      initial: "D",
      current: false,
    },
  ];
  return (
    
      <div>
        <Transition show={sidebarOpen}>
          <Dialog
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      /> */}
                      <img
                        src="/logo.png"
                        className="h-4 w-auto"
                        //   className="h-44 my-5 w-56 mx-auto"
                        alt="Vayuguna"
                      />
                    </div>
                    <NavLayout navigation={navigation} teams={teams}/>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
              <img
                src="/logo.png"
                className="h-6 w-auto"
                //   className="h-44 my-5 w-56 mx-auto"
                alt="Vayuguna"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name} className="cursor-pointer">
                        <a
                          //   href={item.href}
                          onClick={() => {
                            navigate(item.href);
                          }}
                          className={classNames(
                            item.href === pathname
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === pathname
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Other Resources
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name} className="cursor-pointer">
                        <a
                          //   href={team.href}
                          onClick={() => {
                            navigate(team.href);
                          }}
                          className={classNames(
                            team.href === pathname
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 justify-between rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <div className="flex flex-row gap-x-3">
                            <span
                              className={classNames(
                                team.href === pathname
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                              )}
                            >
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </div>
                          <team.icon
                            className={classNames(
                              "text-gray-400 group-hover:text-indigo-600",
                              "h-5 w-5 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  {/* <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a> */}

                  <Menu as="div" className="relative">
                    <MenuButton className="-m-1.5 flex items-center justify-between w-full p-1.5">
                      <span className="sr-only">Open user menu</span>

                      <span className="hidden lg:flex lg:items-center">
                        <ArrowRightEndOnRectangleIcon
                          className="ml-2 h-5 w-5 text-gray-600"
                          aria-hidden="true"
                        />
                        <span
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          Log out
                        </span>
                      </span>
                    </MenuButton>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute bottom-12 z-10 mt-2.5 w-full origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            {({ focus }) => (
                              <a
                                //   href={item.href}
                                onClick={() => {
                                  navigate(item.href);
                                }}
                                className={classNames(
                                  focus ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>

                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                      <span className="text-sm font-medium leading-none text-white">
                        TW
                      </span>
                    </span>

                    <div className="hidden lg:flex lg:items-center">
                      <div className="flex flex-col gap-0 justify-start items-start">
                        <span
                          className="ml-4 text-[9px] mb-0 font-semibold leading-0 text-gray-500"
                          aria-hidden="true"
                        >
                          logged in as
                        </span>
                        <span
                          className="ml-4 text-sm font-semibold leading-0 text-gray-900"
                          aria-hidden="true"
                        >
                          {email} | {role}
                        </span>
                      </div>
                    </div>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <a
                              //   href={item.href}
                              onClick={() => {setDialog(true)}}
                              className={classNames(
                                focus ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                   
                  </Transition>
                  <Dialog open={dialog} onClose={() => setDialog(false)}>
                      {dialog && (
                        <AlertDialog
                          message={`Are you sure you want to logout ?`}
                          primaryActionText="Logout"
                          onClose={() => setDialog(false)}
                          secondaryActionText="Cancel"
                          onPrimaryAction={() => {
                            clear();
                            localStorage.clear();
                            navigate("/");
                          }}
                          onSecondaryAction={() => {
                            setDialog(false);
                          }}
                          open={dialog}
                        />
                      )}
                    </Dialog>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {" "}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
  );
}
