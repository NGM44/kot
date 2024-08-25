import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { classNames } from "../../utils/string";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserCog } from "lucide-react";
import { Icon } from "@iconify/react";

const userNavigation = [{ name: "Last Week", href: "#" },{ name: "Last 30 Days", href: "#" },{ name: "Last 60 Days", href: "#" },{ name: "Last 90 Days", href: "#" }, {name: "Custom Date", href: "#" }];

const DownloadExcel = ({ onClick }: { onClick: any }) => {
  return (
    // <button
    //   type="button"
    //   onClick={() => {
    //     onClick();
    //   }}
    //   className="inline-flex items-center gap-x-2 rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    // >
    //   <Icon className="w-5 h-5" icon={"mdi:file-report-outline"} /> Generate
    //   Report
    // </button>
    <Menu as="div" className="relative">
      <MenuButton>
        <button
          type="button"
          // onClick={() => {
          //   onClick();
          // }}
          className="inline-flex items-center gap-x-2 rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Icon className="w-5 h-5" icon={"mdi:file-report-outline"} /> Generate
          Report
        </button>
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
                <button
                  //   href={item.href}
                  // onClick={onClick}
                  className={classNames(
                    focus ? "bg-primary text-white" : "text-gray-900",
                    "block px-3 py-2 text-sm1 leading-6"
                  )}
                >
                  {item.name}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DownloadExcel;
