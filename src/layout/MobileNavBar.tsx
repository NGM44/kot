import { useState } from "react";
import useIsMobile from "../utils/detectDevice";
// import SwitchProduct from "./SwitchProduct";
// import { FlyoutProfile } from "../modals/FlyoutProfileMenu";
// import FlyoutSwitch from "../modals/FlyoutSwitch";
// import { FlyoutMobileProfile } from "../modals/FlyoutMobileProfile";
// import useIsMobile from "../utils/detectDevice";

function MobileNavBar({
  routes,
}: {
  routes: {
    title: string;
    path: string;
    subRoute: string;
    shouldBeDisplayed: boolean;
  }[];
}) {
  const [dialogOpen, setDialogOpen] = useState<{
    mode: "switch";
    open: boolean;
  }>();
  const { isMobile } = useIsMobile(1024);
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 shadow-sm border-gray-200 sm:gap-x-6 bg-white">
      {dialogOpen?.mode === "switch" && dialogOpen.open && (
        <div className=" absolute top-4 right-0 bg-black w-96">
          {/* <SwitchProduct setDialogOpen={setDialogOpen} /> */}
        </div>
      )}
      <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* <FlyoutSwitch />
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-secondary/10"
            aria-hidden="true"
          />
          {isMobile ? <FlyoutMobileProfile /> : <FlyoutProfile />} */}
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
