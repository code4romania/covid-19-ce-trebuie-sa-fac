import ReactGA from "react-ga";

export const initializeGA = () => {
  if (document.location.hostname !== "cemafac.ro") {
    return;
  }
  ReactGA.initialize("UA-160603540-1");
};

export const logPageView = history => {
  history.listen(location => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page: page });
    ReactGA.pageview(page);
  });
};
