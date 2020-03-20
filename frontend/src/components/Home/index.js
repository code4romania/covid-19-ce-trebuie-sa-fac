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

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const onItemClick = document => {
    setSelectedPage(document);
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
          {data.map(doc => (
            <ListItem
              key={doc.doc_id}
              active={false}
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
