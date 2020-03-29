import React from "react";
import { SearchResultListItem } from "@code4ro/taskforce-fe-components";
import "./styles.scss";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

const SearchResults = ({ query, data = [] }) => {
  const docs = data.flatMap(doc => {
    doc.content.forEach(subDoc => {
      subDoc.text = subDoc.page;
    });
    return doc.content;
  });

  let options = {
    shouldSort: true,
    includeScore: true,
    threshold: 0.3,
    location: 0,
    distance: 10000,
    minMatchCharLength: 1,
    keys: ["title", "text"]
  };

  let fuse = new Fuse(docs, options);
  const results = fuse.search(query).map(result => result.item);

  return (
    <div>
      <p>Rezultatele cautarii pentru &quot{query}&quot:</p>
      {results.map(doc => {
        return (
          <div style={{ paddingBottom: "10px" }} key={doc.title}>
            <SearchResultListItem title={doc.title}>
              <span
                onClick={() => console.log(`${doc.parentDocSlug}/${doc.slug}`)}
              >
                Hello
              </span>
            </SearchResultListItem>
          </div>
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  readMore: PropTypes.func
};

export default SearchResults;
