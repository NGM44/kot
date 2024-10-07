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
