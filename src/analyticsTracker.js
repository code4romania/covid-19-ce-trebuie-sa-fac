import ReactGA from "react-ga4";

export const initializeGA = () => {
  if (document.location.hostname !== "cetrebuiesafac.ro") {
    return;
  }
  ReactGA.initialize("G-JRHJS1JFC5");
};

export const logPageView = (history) => {
  history.listen((location) => {
    const page = location.pathname || window.location.pathname;
    ReactGA.send({ hitType: "pageview", page: page });
  });
};
