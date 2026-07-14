import ReactGA from "react-ga4";

export const trackClick = (label, projectTitle = "") => {
  ReactGA.event("button_click", {
    label: label,
    project: projectTitle,
  });
};