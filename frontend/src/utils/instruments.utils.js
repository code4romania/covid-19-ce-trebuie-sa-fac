import React from "react";
import { InstrumentsItem } from "@code4ro/taskforce-fe-components";

const hasButtons = buttons => {
  return buttons && buttons.length;
};

const getCategoryItems = (usefulApps, category) => {
  return usefulApps.filter(usefulApp => usefulApp.app_type === category);
};
const remapInstrumentsData = data => {
  const sortedData = data.sort((a, b) => {
    return a.display_order - b.display_order;
  });
  return {
    info: getCategoryItems(sortedData, "INFO"),
    news: getCategoryItems(sortedData, "NEWS"),
    data: getCategoryItems(sortedData, "DATA"),
    offer_help: getCategoryItems(sortedData, "OFFER_HELP"),
    diaspora: getCategoryItems(sortedData, "DIASPORA")
  };
};

const renderInstrumentItem = usefulApp => {
  const cartegoryMap = {
    NEWS: "green",
    OFFER_HELP: "red",
    DATA: "pink",
    INFO: "yellow",
    DIASPORA: "blue"
  };
  return (
    <InstrumentsItem
      key={`useful_app_${usefulApp.doc_id}`}
      color={cartegoryMap[usefulApp.app_type]}
      title={usefulApp.title}
      content={usefulApp.content}
      ctaText={
        hasButtons(usefulApp.buttons) && usefulApp.buttons[0].title // TODO refactor
      }
      ctaLink={
        hasButtons(usefulApp.buttons) && usefulApp.buttons[0].link // TODO refactor
      }
    />
  );
};

const scrollRefIntoView = scrollAnchorRef => {
  try {
    scrollAnchorRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  } catch (e) {
    scrollAnchorRef.current.scrollIntoView(true);
  }
};

const navigate = (history, slug, anchor) => {
  // Fix SecurityError of pushState on History
  const cleanSlug = (slug || "")
    .replace(/\/+/g, "/") // delete duplicated slashes
    .replace(/\/$/g, "") // delete trailing slash
    .replace(/^\//g, ""); //remove leading slash
  history.push("/" + cleanSlug);
  scrollRefIntoView(anchor);
};

export { renderInstrumentItem, remapInstrumentsData, navigate };
