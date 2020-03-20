import ReactGA from "react-ga";

export const initializeGA = () => {
  if (!process.env.REACT_APP_GA_TRACKING_ID) {
    return;
  }
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
};

export const logPageView = history => {
  history.listen(location => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page: page });
    ReactGA.pageview(page);
  });
};
