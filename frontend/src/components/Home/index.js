import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import ContentPage from "../ContentPage";
import data from "../../data/static-pages";
import {
  Hero,
  Instruments,
  List,
  ListItem,
  SidebarMenu,
  SidebarMenuItem,
  MailchimpSubscribe
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";
import {
  renderInstrumentItem,
  remapInstrumentsData,
  scrollRefIntoView
} from "../../utils/instruments.utils";
import "./styles.scss";
import { mailchimpURL } from "../../config/mailchimp";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedSubPage, setSelectedSubPage] = useState(null);
  const { pageSlug, subPageSlug } = useParams();
  const history = useHistory();
  const scrollAnchorRef = useRef(null);

  useEffect(() => {
    // Find the page
    const page = data.find(doc => doc.slug === (pageSlug || "/"));
    let subPage = null;

    if (page) {
      // Find the subPage
      if (subPageSlug) {
        subPage = page.content.find(page => page.slug === subPageSlug);
      } else if (page.content.length) {
        [subPage] = page.content;
      }

      setSelectedPage(page);
      setSelectedSubPage(subPage);
    } else {
      // Fallback to the first page if there is no slug
      const [firstPage] = data;
      history.push((firstPage && firstPage.slug) || "/");
    }
  }, [pageSlug, subPageSlug, history]);

  const navigate = slug => {
    // Fix SecurityError of pushState on History
    // Edge case for the `/` slug
    history.push(`/${slug !== "/" ? slug : ""}`);
    scrollRefIntoView(scrollAnchorRef);
  };

  const instrumentsData = remapInstrumentsData(UsefulApps);

  const extraInfo = (
    <>
      <div className="instruments-wrapper">
        <Hero title={"Instrumente utile"} useFallbackIcon={true} />
        <Instruments layout="column">
          {Object.keys(instrumentsData).map(category => {
            return instrumentsData[category].map(usefulApp =>
              renderInstrumentItem(usefulApp)
            );
          })}
        </Instruments>
      </div>
      <div className="newsletter">
        <MailchimpSubscribe url={mailchimpURL} compact={true} />
      </div>
    </>
  );

  return (
    <>
      <div className="container">
        <Hero
          title={"Toate informațiile de care ai nevoie"}
          useFallbackIcon={true}
          subtitle={
            "Vrem să facem lucrurile mai simple pentru noi toți. Cetrebuiesafac.ro este un ghid cu reguli de interacțiune, acțiune și comportament recomandate în timpul situației de urgență generată de pandemia COVID-19. Vrem să aducem mai aproape de voi regulile de bază recomandate de autorități de la care este indicat să nu ne abatem în această perioadă."
          }
        />
      </div>
      <div className="container pages-list">
        <List columns={3}>
          {data.map(doc => (
            <ListItem
              key={doc.doc_id}
              active={selectedPage && selectedPage.doc_id === doc.doc_id}
              title={doc.title}
              onClick={() => navigate(doc.slug)}
              value={doc}
            />
          ))}
        </List>
      </div>

      <div className="container">
        <div className="columns homepage-columns">
          <aside className="column is-4 homepage-sidebar">
            <SidebarMenu>
              {data.map(doc => {
                let menuItems = null;
                if (doc.content.length > 1) {
                  // Ignore the first subpage title
                  // It's shown as page title
                  menuItems = doc.content.slice(1).map(page => (
                    <SidebarMenuItem
                      key={`subpage-header_${page.slug}`}
                      active={page.slug === subPageSlug}
                      onClick={() => navigate(`${doc.slug}/${page.slug}`)}
                    >
                      {page.title}
                    </SidebarMenuItem>
                  ));
                }

                return (
                  <div key={`page-wrapper_${doc.slug}`}>
                    <SidebarMenuItem
                      key={`page-header_${doc.slug}`}
                      active={
                        !subPageSlug &&
                        (doc.slug === pageSlug ||
                          (doc.slug === "/" && !pageSlug))
                      }
                      onClick={() => navigate(doc.slug)}
                      isTitle
                    >
                      {doc.title}
                    </SidebarMenuItem>
                    {menuItems}
                  </div>
                );
              })}
            </SidebarMenu>

            {extraInfo}
          </aside>
          <div ref={scrollAnchorRef} className="column is-8 homepage-content">
            {selectedPage && (
              <ContentPage
                page={selectedPage}
                subPage={selectedSubPage}
              ></ContentPage>
            )}
            {extraInfo}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
