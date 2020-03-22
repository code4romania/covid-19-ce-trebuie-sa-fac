import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ContentPage from "../ContentPage";
import data from "../../data/static-pages";
import {
  Hero,
  Instruments,
  List,
  ListItem,
  SocialsShare
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";
import {
  renderInstrumentItem,
  remapInstrumentsData
} from "../../utils/instruments.utils";

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

  const instrumentsData = remapInstrumentsData(UsefulApps);

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
          <aside className="column is-4">
            <Hero title={"Instrumente utile"} useFallbackIcon={true} />
            <Instruments layout="column">
              {Object.keys(instrumentsData).map(category => {
                return instrumentsData[category].map(usefulApp =>
                  renderInstrumentItem(usefulApp)
                );
              })}
            </Instruments>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Home;
