import { Disclosure } from "@headlessui/react";
import { useMatch, useNavigate } from "react-router";
import {
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  FolderOpenIcon,
  HomeIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
  DocumentCheckIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import MobileNavBar from "./MobileNavBar";
import { useCanUserAccess } from "./useRoleGrantStore";

interface SideNavItemType {
  name: string;
  icon: any;
  path: string;
  useCurrentPortal?: boolean;
  enabledForEsopOnlyCompany?: boolean;
  enabled?: boolean;
}

export default function MobileSideNav() {
  const canAccessCaptable = useCanUserAccess("read", "captable");
  const canAccessTransaction = useCanUserAccess("read", "transaction");
  const canAccessShareholder = useCanUserAccess("read", "shareholder");
  const canAccessInstrumentClass = useCanUserAccess("read", "instrumentclass");
  const canAccessRoundModelling = useCanUserAccess("read", "roundModeling");
  const canAccessTermsheet = useCanUserAccess("read", "termsheet");
  const canAccessSiteSettings = useCanUserAccess("read", "siteSettings");
  const canAccessInvestorRights = useCanUserAccess("read", "investorRights");
  const canAccessReports = useCanUserAccess("read", "reports");
  const sideNavItemsMain: Array<SideNavItemType> = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      enabled: canAccessCaptable,
      path: `/landing/dashboard`,
      useCurrentPortal: true,
    },
    {
      name: "Transactions",
      icon: CurrencyDollarIcon,
      enabled: canAccessTransaction,
      path: `/transactions/allTransactions`,
      useCurrentPortal: true,
    },
    {
      name: "Shareholders",
      icon: UserGroupIcon,
      enabled: canAccessShareholder,
      path: `/shareholders/overview`,
      useCurrentPortal: true,
    },
    {
      name: "Securities",
      icon: ShieldExclamationIcon,
      enabled: canAccessInstrumentClass,
      path: "/security/overview",
      useCurrentPortal: true,
    },
    {
      name: "Modeling",
      icon: AdjustmentsHorizontalIcon,
      path: "/modeling/overview",
      enabled: canAccessRoundModelling,
      useCurrentPortal: true,
    },
    {
      name: "Term Sheet",
      icon: ChartPieIcon,
      path: "/termsheet/overview",
      enabled: canAccessTermsheet,
      useCurrentPortal: true,
    },
    {
      name: "Financials",
      icon: ChartBarIcon,
      enabled: canAccessSiteSettings,
      enabledForEsopOnlyCompany: true,
      path: "/financials/overview",
      useCurrentPortal: true,
    },
    {
      name: "Documents",
      icon: FolderOpenIcon,
      enabled: canAccessSiteSettings,
      enabledForEsopOnlyCompany: true,
      path: "/companyDocuments/overview",
      useCurrentPortal: true,
    },
    {
      name: "Settings",
      icon: Cog6ToothIcon,
      enabled: canAccessSiteSettings,
      enabledForEsopOnlyCompany: true,
      path: "/settings/companyProfile",
      useCurrentPortal: true,
    },
    {
      name: "Rights",
      icon: CubeIcon,
      enabled: canAccessInvestorRights,
      path: `/rights/overview`,
      useCurrentPortal: true,
    },
    {
      name: "Reports",
      icon: DocumentCheckIcon,
      enabled: canAccessReports,
      path: "/reports/overview",
      useCurrentPortal: true,
    },
  ];
  return (
    <Disclosure as="nav" className="bg-white shadow scrollbar-hide">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              {open ? (
                // <img
                //   className="w-[48px]"
                //   src="https://equion-dev.s3.us-west-2.amazonaws.com/logonew.svg"
                //   alt="hissa_logo"
                // />
                <p>Vayuguna</p>
              ) : (
                <MobileNavBar routes={[]} />
              )}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden h-screen">
            <ul className="space-y-1 pb-3 pt-2">
              {sideNavItemsMain
                .filter((menu) => menu.enabled)
                .map((item) => (
                  <MobileSideNavItem
                    key={item.name}
                    sideNavItem={item}
                    open={open}
                  />
                ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function MobileSideNavItem({
  sideNavItem,
  open,
}: {
  sideNavItem: SideNavItemType;
  open: boolean;
}) {
  const match = useMatch(`/${sideNavItem.path.split("/")[1]}/*`);
  const navigate = useNavigate();

  return (
    <Disclosure.Button
      as="a"
      key={sideNavItem.name}
      navigation-name={sideNavItem.name}
      onClick={() =>
        sideNavItem.useCurrentPortal ? navigate(sideNavItem.path) : {}
      }
      className={` ${
        match
          ? "border-l-4 border-primary bg-secondary/5 text-gray-600"
          : "border-l-4 border-transparent text-gray-500"
      } py-3 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 flex flex-row justify-start gap-4`}
    >
      <sideNavItem.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className={`${!open && "hidden"} ease-in duration-300 `}>
        {sideNavItem.name}
      </span>
    </Disclosure.Button>
  );
}
