import React from "react";
import { SearchResultListItem } from "@code4ro/taskforce-fe-components";
import "./styles.scss";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

const SearchResults = ({ query, data = [], readMore }) => {
  const docs = data.flatMap(doc => {
    doc.content.forEach(subDoc => {
      subDoc.text = subDoc.page;
      subDoc.parentSlug = doc.slug;
    });
    return doc.content;
  });

  let options = {
    shouldSort: true,
    includeScore: true,
    threshold: 0.5,
    location: 0,
    distance: 10000,
    minMatchCharLength: 1,
    keys: ["title", "text"]
  };

  let fuse = new Fuse(docs, options);
  const results = fuse.search(query).map(result => result.item);

  return (
    <div className="search-results-container">
      <h1 className="results-description">
        Rezultatele cautarii pentru {`"${query}"`}:
      </h1>
      {results.map(doc => {
        return (
          <div className="list-item" key={doc.title}>
            <SearchResultListItem title={doc.title}>
              <span
                className="read-more"
                onClick={() => readMore(`${doc.parentSlug}/${doc.slug}`)}
              >
                Citește mai mult
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
