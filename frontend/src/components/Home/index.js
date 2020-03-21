import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ContentPage from "../ContentPage";
import data from "../../data/static-pages";
import {
  Hero,
  Instruments,
  InstrumentsItem,
  List,
  ListItem,
  SearchInput,
  SocialsShare
} from "@code4ro/taskforce-fe-components";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const history = useHistory();
  const { slug } = useParams();

  useEffect(() => {
    const document = data.find(doc => doc.slug === (slug || "/"));
    if (document) {
      setSelectedPage(document);
    } else {
      const [firstDocument] = data;
      history.push((firstDocument && firstDocument.slug) || "/");
    }
  }, [slug, history]);

  const onItemClick = document => {
    history.push(document.slug);
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
            <SocialsShare currentPage={window.location.href} />
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
