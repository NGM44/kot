import { useState } from "react";
import { HStack, VStack } from "../../component/utils";

import { FloatingDock } from "../landing2/Floating";
import {
  CircleAlert,
  Facebook,
  Github,
  Home,
  HomeIcon,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { CubeIcon } from "@heroicons/react/24/solid";

const FooterSection = ({ date }: { date: string }) => {
  const [dialog, setDialog] = useState(false);
  const deviceId = "";
  const links = [
    {
      title: "Sensormagics",
      icon: (
        <img
          src="onlylogo.png"
          width={20}
          height={20}
          alt="sensormagics logo"
        />
      ),
      href: "#",
    },
    {
      title: "Mail",
      icon: <Mail className="h-full w-full text-neutral-500 " />,
      href: "#",
    },

    {
      title: "Facebook",
      icon: <Facebook className="h-full w-full text-neutral-500 " />,
      href: "#",
    },

    {
      title: "Linkedin",
      icon: <Linkedin className="h-full w-full text-neutral-500 " />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 " />,
      href: "#",
    },
  ];

  return (
    <div>
      <HStack className="bg-white rounded-xl drop-shadow-box p-4 w-full justify-between">
        <HStack className="items-baseline relative justify-between w-full">
          <div className="absolute mt-4 ml-4">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 Sensormagics, Inc. All rights reserved.
            </p>
          </div>
          <div></div>

          <HStack className="gap-8">
            <div className="flex items-center justify-center w-full">
              <FloatingDock
                mobileClassName="translate-y-6" // only for demo, remove for production
                items={links}
              />
            </div>
          </HStack>
        </HStack>
      </HStack>
    </div>
  );
};

export default FooterSection;
