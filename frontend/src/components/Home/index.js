import React, { useState } from "react";
import {
  Hero,
  List,
  ListItem,
  Button,
  ListHeader
} from "@code4ro/taskforce-fe-components";
import "./styles.scss";
import data from "../../data/static-pages";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const onItemClick = document => {
    setSelectedPage(document);

    if (document.starting_node_id && document.nodes.length) {
      setSelectedNode(
        document.nodes.find(node => node.node_id === document.starting_node_id)
      );
    }
  };

  const openLink = link => {
    console.log("Open Link", link);
  };

  const onOptionClick = option => {
    console.log("option", option);
  };

  // TODO: Refactor this after POC
  const createMarkup = html => {
    return { __html: html };
  };

  return (
    <>
      <div className="container">
        <Hero
          title={"Toate informatiile de care ai nevoie"}
          subtitle={
            "Răspunde la următoarele întrebări pentru a te putea ghida către informațiile oficiale și sigure și pentru a fi la curent cu situația actuală"
          }
          useFallbackIcon={true}
        />
      </div>

      <div className="container">
        <List columns={3}>
          {data.map(doc => (
            <ListItem
              key={doc.doc_id}
              active={selectedPage && doc.doc_id === selectedPage.doc_id}
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
            {selectedPage && (
              <div>
                <Hero title={selectedPage.title} />

                <div
                  dangerouslySetInnerHTML={createMarkup(selectedPage.content)}
                />

                {selectedNode && (
                  <div>
                    <ListHeader title={selectedNode.title} />
                    <List>
                      {selectedNode.options.map(option => (
                        <ListItem
                          key={option.value}
                          title={option.value}
                          onClick={onOptionClick}
                          value={option}
                        />
                      ))}
                    </List>
                  </div>
                )}

                {selectedPage.buttons && (
                  <div className="content-buttons">
                    {selectedPage.buttons.map(btn => (
                      <Button key={btn.link} onClick={() => openLink(btn.link)}>
                        {btn.title}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="column is-4">Instrumente utile</div>
        </div>
      </div>
    </>
  );
};

export default Home;
