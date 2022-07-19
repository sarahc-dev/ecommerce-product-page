import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const breakpoints = {
    isMobile: useMediaQuery("(max-width: 549px"),
    isMobileLg: useMediaQuery("(min-width: 550px) and (max-width: 999px)"),
    isDesktop: useMediaQuery("(min-width: 1000px)"),
    // active: "sm",
  };

  // if (breakpoints.isMobile) breakpoints.active = "sm";
  // if (breakpoints.isDesktop) breakpoints.active = "lg";
  return breakpoints;
}
