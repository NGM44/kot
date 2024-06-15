import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";
import MobileSideNav from "./MobileSideNavbar";
import MainSideNavbar from "./MainSideNavBar";
import useIsMobile from "../utils/detectDevice";

function MainLayout() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = (value: boolean) => {
    setDialogOpen(!dialogOpen);
  };
  // const location = useLocation();
  const { isMobile } = useIsMobile(1024);
  useEffect(() => {
    const scroller = document.querySelector("#outlet");
    scroller?.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex">
          {/* <div className="relative w-20 h-screen overflow-hidden md:flex">
           */}
          {/* </div> */}
          {dialogOpen && (
            <div className="absolute bg-black w-96">
              {/* <SwitchProduct setDialogOpen={handleDialogOpen} /> */}
            </div>
          )}
          <div className="flex-1 h-screen overflow-y-auto" id="outlet">
            <div className="relative w-full min-h-screen">
              <div className={`sticky top-0 z-20`}>
                <MobileSideNav />
              </div>
              <div className="max-w-screen-xl py-2 px-4 pb-32 mx-auto">
                <Outlet />
              </div>
              <div></div>
              <div className="absolute bottom-0 w-full mt-6 ">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="relative w-20 h-screen overflow-hidden md:flex">
            <MainSideNavbar setDialogOpen={handleDialogOpen} />
          </div>
          {dialogOpen && (
            <div className="absolute bg-black w-96">
              {/* <SwitchProduct setDialogOpen={handleDialogOpen} /> */}
            </div>
          )}
          <div className="flex-1 h-screen overflow-y-auto" id="outlet">
            <div className="relative w-full min-h-screen">
              <div className={`sticky top-0 z-20`}>
                <Navbar routes={[]} />
              </div>
              <div className="max-w-screen-xl py-4 px-8 pb-32 mx-auto">
                <Outlet />
              </div>
              <div></div>
              <div className="absolute bottom-0 w-full mt-6 ">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default MainLayout;
