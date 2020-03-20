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

const Home = () => {
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
              <InstrumentsItem
                color="green"
                title="Instalează-ți add-on-ul de depistat știrile false"
                onClick={() => {}}
              />
              <InstrumentsItem
                color="green"
                title="Stiri oficiale si informații la zi"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
                ctaText="Cele mai noi informații oficiale"
                onClick={() => {}}
              />
              <InstrumentsItem
                color="red"
                title="Vrei să ajuți. Intră aici"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
                ctaText="Centrul de sprijin"
                onClick={() => {}}
              />
              <InstrumentsItem
                color="pink"
                title="Date în timp real"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
                ctaText="Vezi situația curentă"
                onClick={() => {}}
              />
            </Instruments>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
