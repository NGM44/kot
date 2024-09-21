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
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import LogoutModal from "../../modal/LogoutModal";
import NavLayout from "../../layout/NavLayout";
import { classNames } from "../../utils/string";
import SearchBar from "../new/SearchBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserCog } from "lucide-react";
import { HStack } from "../../component/utils";
import AnimatedThemeToggle from "../new/Theme";
import { Icon } from "@iconify/react";
import RotatingRefreshIcon from "../new/Refresh";
import { useGetMessage, useGetUserDevices } from "../../queries/admin";
import FooterSection from "../new/FooterSection";
import { FloatingDockDemo } from "./FloatingDEmo";
import Banner from "../new/Banner";
import DeviceSelection from "../new/DeviceSelection";
import { FlyoutProfile } from "./FlyoutProfile";
import { constructNow } from "date-fns";
import NotificationPopUP from "../analytics/Notification";
import { FlyoutNotification } from "./FlyoutNotification";
const userNavigation = [{ name: "Log out", href: "#" }];

export default function NewLayout() {
  const [dialogLogout, setDialogLogout] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: notifcation } = useGetMessage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data: user } = useGetUserDevices();
  const { role, setAuth } = useAuthStore();
  let isAdmin = role?.toUpperCase() === "ADMIN";

  useEffect(() => {
    if (pathname === "/") {
      if (role?.toUpperCase() === "ADMIN") {
        navigate("/user");
      } else {
        navigate("/dashboard");
      }
    }
  }, [navigate, pathname, role]);
  const [navigation, setNavigation] = useState<
    {
      name: string;
      href: string;
      icon: any;
      current: boolean;
    }[]
  >([]);
  useEffect(() => {
    if (role) {
      let isAdminNavigation = [
        {
          name: "User",
          href: "/user",
          icon: <Icon className="w-5 h-5" icon={"radix-icons:dashboard"} />,
          current: true,
        },
        {
          name: "Device",
          href: "/device",
          icon: <Icon className="w-5 h-5" icon={"f7:circle-grid-hex"} />,
          current: false,
        },
        // {
        //   name: "Dashboard",
        //   href: "/dashboard",
        //   icon: <Icon className="w-5 h-5" icon={"radix-icons:dashboard"} />,
        //   current: true,
        // },
        // {
        //   name: "Data Analysis",
        //   href: "/analytics",
        //   icon: <Icon className="w-5 h-5" icon={"solar:graph-linear"} />,
        //   current: false,
        // },
      ];
      let userNavigation = [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: <Icon className="w-5 h-5" icon={"radix-icons:dashboard"} />,
          current: true,
        },
        {
          name: "Data Analysis",
          href: "/analytics",
          icon: <Icon className="w-5 h-5" icon={"solar:graph-linear"} />,
          current: false,
        },

        {
          name: "SenseMap",
          href: "/grid",
          icon: <Icon className="w-5 h-5" icon={"f7:circle-grid-hex"} />,
          current: false,
        },
      ];

      let selectedNavigation = isAdmin ? isAdminNavigation : userNavigation;
      setNavigation(selectedNavigation);
    }
  }, [role]);

  const resources = [
    {
      id: 1,
      name: "Manual",
      href: "/manual",
      icon: ArrowTopRightOnSquareIcon,
      initial: "M",
      current: false,
    },
    {
      id: 2,
      name: "Demo",
      href: "/demo",
      icon: ArrowTopRightOnSquareIcon,
      initial: "D",
      current: false,
    },
    {
      id: 3,
      name: "Sensor Magics",
      href: "/",
      icon: ArrowTopRightOnSquareIcon,
      initial: "V",
      current: false,
    },
  ];

  const [onHover, setOnHover] = useState(false);

  return (
    <div>
      {dialogLogout && (
        <LogoutModal
          isOpen={dialogLogout}
          onClose={() => {
            setDialogLogout(false);
          }}
        />
      )}
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
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
                      className="-m-2.5 p-2.5 cursor-pointer"
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
                    <img
                      src="/onlylogo.png"
                      className="h-4 w-auto"
                      alt="Sensor Magics"
                    />
                  </div>
                  <NavLayout navigation={navigation} resources={resources} />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      {(user?.client?.showBanner ?? false) && (
        <Banner
          bannerMessage={user?.client?.bannerMessage ?? ""}
          bannerLink={user?.client?.bannerLink ?? ""}
        />
      )}
      <div className="mt-4 mx-4">
        <div className="sticky bg-[#f6f9fb] top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden bg-white rounded-md cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            onClick={() =>
              isAdmin ? navigate("/user") : navigate("/dashboard")
            }
            className="flex h-11 bg-white cursor-pointer rounded-xl drop-shadow-box p-4 shrink-0 items-center"
          >
            <img
              src="/onlylogo.png"
              className="h-6 w-auto"
              alt="Sensor Magics"
            />
          </div>

          {navigation.map((nav) => (
            <NavButton
              key={nav.name}
              name={nav.name}
              onClick={() => {
                navigate(nav.href);
              }}
              active={pathname.includes(nav.href)}
              icon={nav.icon}
            />
          ))}

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {!isAdmin && <SearchBar onHighlight={() => {}} />}

              {!isAdmin && <RotatingRefreshIcon />}
              <AnimatedThemeToggle />
             {notifcation && notifcation.length > 0 && <FlyoutNotification notifcation={notifcation.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())} />}
              <FlyoutProfile />
            </div>
          </div>
        </div>

        <main className="py-6 pt-4">
          <div className="px-2 sm:px-4 lg:px-8">
            <Outlet />
            <div className="mt-6">
              <FooterSection date={""} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const NavButton = ({
  name,
  icon,
  onClick,
  active,
}: {
  name: any;
  icon: any;
  onClick: () => void;
  active: any;
}) => {
  return (
    <HStack
      onClick={onClick}
      className={`h-11 hidden cursor-pointer  lg:flex flex-row items-center font-medium drop-shadow-box text-xs rounded-xl gap-2 px-3 pr-4 ${
        active ? "bg-secondary text-white" : "bg-white text-gray-700"
      }`}
    >
      <div>{icon}</div>
      <p>{name}</p>
    </HStack>
  );
};
