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
    offer_help: getCategoryItems(sortedData, "OFFER_HELP")
  };
};

const renderInstrumentItem = usefulApp => {
  const cartegoryMap = {
    NEWS: "green",
    OFFER_HELP: "red",
    DATA: "pink",
    INFO: "yellow"
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

export { renderInstrumentItem, remapInstrumentsData };
