import { useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  CurrencyDollarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import useIsMobile from "../utils/detectDevice";
import { classNames } from "../utils/string";
import { useCanUserAccess } from "./useRoleGrantStore";

interface SideNavItemType {
  name: string;
  permissions: Array<string>;
  icon: any;
  path: string;
  useCurrentPortal?: boolean;
  enabledForEsopOnlyCompany?: boolean;
  enabled?: boolean;
}

function MainSideNavbar({ setDialogOpen }: any) {
  const canAccessCaptable = useCanUserAccess("read", "captable");
  const sideNavItemsMain: Array<SideNavItemType> = [
    {
      name: "Users",
      permissions: ["ROLE_ADMIN"],
      icon: HomeIcon,
      enabled: canAccessCaptable,
      path: `/user`,
      useCurrentPortal: true,
    },
    {
      name: "Device",
      permissions: ["ROLE_ADMIN"],
      icon: CurrencyDollarIcon,
      enabled: canAccessCaptable,
      path: `/device`,
      useCurrentPortal: true,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className={`hidden ease-in duration-300 lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block ${
        open ? "lg:w-60" : "lg:w-20"
      } lg:overflow-y-auto lg:bg-secondary lg:pb-4 lg:p-5`}
    >
      <div className="flex h-8 shrink-0 items-center justify-start gap-2">
      {/* <p>Vayuguna</p> */}
        {/* <img
          className="h-10 w-auto group flex gap-x-3 bg-white rounded-md p-1 px-2 text-sm cursor-pointer whitespace-nowrap leading-6 font-semibold"
          src="https://i.postimg.cc/8Cv31svZ/Screenshot-2023-12-02-133325-removebg-preview.png"
          alt="hissa_logo"
        /> */}
        {open && (
          <p>Vayuguna</p>
          // <img
          //   className="h-5 w-auto"
          //   src="https://equion-dev.s3.us-west-2.amazonaws.com/logonew.svg"
          //   alt="hissa_logo"
          // />
        )}
      </div>
      <nav>
        <ul className="pt-6">
          {sideNavItemsMain
            .filter((menu) => menu.enabled)
            .map((item) => (
              <SideNavItem key={item.name} sideNavItem={item} open={open} />
            ))}
        </ul>
      </nav>
    </div>
  );
}

function SideNavItem({
  sideNavItem,
  open,
}: {
  sideNavItem: SideNavItemType;
  open: boolean;
}) {
  const match = useMatch(`/${sideNavItem.path.split("/")[1]}/*`);
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(sideNavItem.path)
      }}
      navigation-name={sideNavItem.name}
      key={sideNavItem.name}
    >
      <a
        className={classNames(
          match
            ? "bg-primary text-white"
            : "text-gray-300 hover:text-white hover:bg-gray-600",
          "group flex gap-x-3 rounded-md p-2 mb-1 text-sm cursor-pointer whitespace-nowrap leading-6 font-semibold"
        )}
      >
        <sideNavItem.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className={`${!open && "hidden"} ease-in duration-300 `}>
          {sideNavItem.name}
        </span>
      </a>
    </li>
  );
}

export default MainSideNavbar;
