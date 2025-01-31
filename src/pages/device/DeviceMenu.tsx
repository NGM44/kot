import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { classNames } from "../../utils/string";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export default function DeviceMenu({
  menu,
}: {
  menu: {
    name: string;
    action: any;
  }[];
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>
          <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menu.map((menuItems) => {
              return (
                <MenuItem>
                  {({ focus }) => (
                    <div
                      onClick={menuItems.action}
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block cursor-pointer px-4 py-2 text-sm"
                      )}
                    >
                      {menuItems.name}
                    </div>
                  )}
                </MenuItem>
              );
            })}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
