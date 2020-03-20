import React from "react";
import DecisionTree from "./DecisionTree";
import Data from "./mock.json";
import {
  Hero,
  Instruments,
  InstrumentsItem,
  List,
  ListItem,
  SearchInput
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../data/useful-apps";

const Home = () => {
  const colorMap = {
    NEWS: "green",
    OFFER_HELP: "red",
    DATA: "pink"
  };
  return (
    <>
      <div className="container">
        <Hero
          title={"Toate informatiile de care ai nevoie"}
          useFallbackIcon={true}
          subtitle={
            "Răspunde la următoarele întrebări pentru a te putea ghida către informațiile oficiale și sigure și pentru a fi la curent cu situația actuală"
          }
        />
      </div>
      <div className="container">
        <List columns={3}>
          <ListItem title={"Simptome și tratament"} onClick={() => {}} />
          <ListItem
            title={"Bune practici dacă ești în auto-izolare"}
            onClick={() => {}}
          />
          <ListItem
            title={"Informații pentru românii din diaspora"}
            onClick={() => {}}
          />
          <ListItem
            title={"Date statistice despre coronavirus"}
            onClick={() => {}}
          />
          <ListItem title={"Ce spune legea"} onClick={() => {}} />
          <ListItem title={"Servicii disponibile gratuit"} onClick={() => {}} />
        </List>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column is-8">
            <DecisionTree data={Data}></DecisionTree>
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
