import React, { useState } from "react";
import ContentPage from "../ContentPage";
import data from "../../data/static-pages";
import {
  Hero,
  Instruments,
  InstrumentsItem,
  List,
  ListItem,
  SearchInput
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";

const Home = () => {
  const colorMap = {
    NEWS: "green",
    OFFER_HELP: "red",
    DATA: "pink"
  };
  const [selectedPage, setSelectedPage] = useState(null);

  const onItemClick = document => {
    setSelectedPage(document);
  };

  return (
    <>
      <div className="container">
        <Hero
          title={"Toate informațiile de care ai nevoie"}
          useFallbackIcon={true}
          subtitle={
            "Vrem să facem lucrurile mai simple pentru noi toți. Cemafac.ro este un ghid cu reguli de interacțiune, acțiune și comportament recomandate în timpul situației de urgență generată de pandemia COVID-19. Vrem să aducem mai aproape de voi regulile de bază recomandate de autorități de la care este indicat să nu ne abatem în această perioadă."
          }
        />
      </div>
      <div className="container">
        <List columns={3}>
          {data.map(doc => (
            <ListItem
              key={doc.doc_id}
              active={selectedPage && selectedPage.doc_id === doc.doc_id}
              title={doc.title}
              onClick={onItemClick}
              value={doc}
            />
          ))}
        </List>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column is-8">
            {selectedPage && <ContentPage data={selectedPage}></ContentPage>}
          </div>
          <div className="column is-4">
            <Hero title={"Instrumente utile"} useFallbackIcon={true} />
            <SearchInput
              hasIcon={true}
              placeholder={"cauta informatii aici"}
              onValueChange={() => {}}
            />
            <Instruments layout="column">
              {UsefulApps.sort((a, b) => {
                return a.display_order - b.display_order;
              }).map(usefulApp => {
                return (
                  <InstrumentsItem
                    key={`useful_app_${usefulApp.doc_id}`}
                    color={colorMap[usefulApp.app_type]}
                    title={usefulApp.title}
                    content={usefulApp.content}
                    ctaText={
                      usefulApp.buttons &&
                      usefulApp.buttons.length > 0 &&
                      usefulApp.buttons[0].title
                    }
                    onClick={() => {
                      if (
                        usefulApp.buttons &&
                        usefulApp.buttons.length > 0 &&
                        usefulApp.buttons[0].link
                      ) {
                        window.open(usefulApp.buttons[0].link, "_blank");
                      }
                    }}
                  />
                );
              })}
            </Instruments>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
