import { init, setUserId, track } from "@amplitude/analytics-browser";
import { useAuthStore } from "./store/useAuthStore";
import { jwtDecode } from "jwt-decode";

export const AmplitudeInit = () => {
  init(process.env.REACT_APP_AMPLITUDE_KEY || "");
};

export function handleEventForTracking({
  eventName,
  eventType = "navigation",
  success = true,
}: {
  eventName: string;
  eventType?: "navigation" | "custom" | "hover" | "API";
  success?: boolean;
}) {
  // const screen = window.location.pathname;
  // const accesstokenData =
  //   useAuthStore.getState().accessToken || localStorage.getItem("accesstoken");
  // const id =
  //   (useAuthStore.getState().id || localStorage.getItem("id")) ??
  //   "";
  // const prefixText = eventType === "API" ? "API: " : "";
  // const suffixText =
  //   eventType === "API" ? (success ? " Success" : " Failure") : "";
  // const eventNameDetail = `${prefixText}${eventName}${suffixText}`;
  // if (accesstokenData) {
  //   let { emailId } = decodeAuthToken(accesstokenData);
  //   emailId = emailId?.padStart(10, "_");
  //   setUserId(emailId);
  // }
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // const deviceType = getDeviceType();
  // track(
  //   eventNameDetail,
  //   {
  //     path: screen,
  //     eventType,
  //     clickType: deviceType,
  //     width,
  //     height,
  //     companyId: id,
  //   },
  //   {}
  // );
}

export function handleClickForTracking(event: any) {
  // if (
  //   (event.target as HTMLButtonElement).tagName === "BUTTON" ||
  //   (event.target as HTMLElement).tagName === "A" ||
  //   (event.target as HTMLElement).getAttribute("event-name") ||
  //   (event.target as HTMLElement).getAttribute("navigation-name")
  // ) {
  //   const clickType =
  //     (event.target as HTMLElement).tagName === "A"
  //       ? "link"
  //       : (event.target as HTMLButtonElement).tagName === "BUTTON"
  //       ? "button"
  //       : (event.target as HTMLElement).getAttribute("navigation-name")
  //       ? "navigation"
  //       : "custom";
  //   const innertext = event.target.innerText;
  //   const eventDetail =
  //     (event.target as HTMLElement).getAttribute("event-name") ||
  //     (event.target as HTMLElement).getAttribute("navigation-name");
  //   const actionName = (eventDetail || event.target.innerText) ?? "";
  //   const screen = window.location.pathname;
  //   const eventName = `${actionName} Clicked`;
  //   const accesstokenData =
  //     useAuthStore.getState().accessToken ||
  //     localStorage.getItem("accesstoken");
  //   const id =
  //     (useAuthStore.getState().id ||
  //       localStorage.getItem("id")) ??
  //     "";
  //   if (accesstokenData) {
  //     let { emailId } = decodeAuthToken(accesstokenData);
  //     emailId = emailId?.padStart(10, "_");
  //     setUserId(emailId);
  //   }
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   const deviceType = getDeviceType();
  //   track(
  //     eventName,
  //     {
  //       path: screen,
  //       elementText: innertext,
  //       clickType,
  //       eventType: "click",
  //       deviceType,
  //       width,
  //       height,
  //       companyId: id,
  //     },
  //     {}
  //   );
  // }
}

export function handlePageLoadForTracking(event: any) {
  // const screen = extractFirstTwoSegments(event.pathname);
  // const eventName = `Page Viewed: ${screen}`;
  // const accesstoken =
  //   useAuthStore.getState().accessToken || localStorage.getItem("accesstoken");
  // const companyIdData =
  //   (useAuthStore.getState().id || localStorage.getItem("companyId")) ??
  //   "";
  // if (accesstoken) {
  //   let { emailId } = decodeAuthToken(accesstoken);
  //   emailId = emailId?.padStart(10, "_");
  //   setUserId(emailId);
  // }
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // const deviceType = getDeviceType();
  // track(
  //   eventName,
  //   {
  //     path: screen,
  //     eventType: "page view",
  //     deviceType,
  //     width,
  //     height,
  //     companyId: companyIdData,
  //   },
  //   {}
  // );
}

function extractFirstTwoSegments(url: string) {
  // Split the URL on '/' separators
  const segments = url.split("/");

  // Remove empty segments that might result if the URL starts or ends with a '/'
  const filteredSegments = segments.filter((segment) => segment !== "");

  // Check if the third segment is "create"
  if (filteredSegments.length >= 3 && filteredSegments[2] === "create") {
    // Include the first three segments
    const firstThree = filteredSegments.slice(0, 3);
    return firstThree.join("/");
  } else {
    // Get the standard first two segments
    const firstTwo = filteredSegments.slice(0, 2);
    return firstTwo.join("/");
  }
}

function getDeviceType() {
  const screenWidth = window.innerWidth; // Get the current screen width

  // Check against your breakpoints
  if (screenWidth >= 1536) {
    return "2xl";
  } else if (screenWidth >= 1280) {
    return "xl";
  } else if (screenWidth >= 1024) {
    return "lg";
  } else if (screenWidth >= 768) {
    return "md";
  } else if (screenWidth >= 640) {
    return "sm";
  } else {
    return "xs"; // Or any default you want for smaller screens
  }
}
