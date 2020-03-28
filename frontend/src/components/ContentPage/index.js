import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "../Form";
import { List, ListItem } from "@code4ro/taskforce-fe-components";
import {
  Hero,
  Accordion,
  SocialsShare
} from "@code4ro/taskforce-fe-components";

function ContentPage({ page, subPage }) {
  const history = useHistory();
  const navigate = slug => {
    // Fix SecurityError of pushState on History
    const cleanPageSlug = `/${page.slug}/${slug}`.replace(/\/+$/, "");
    history.push(cleanPageSlug);
  };

  const scrollAnchorRef = useRef(null);

  const renderContent = () => {
    return (
      subPage &&
      subPage.page && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: subPage.page }}
        />
      )
    );
  };

  const renderSubPages = () => {
    if (!page || !page.content || page.content.length < 2) {
      return;
    }
    const items = page.content
      .filter(item => item.slug !== subPage.slug)
      .map(item => (
        <ListItem
          key={item.display_order}
          title={item.title}
          onClick={() => {
            navigate(item.slug);
            scrollAnchorRef.current.scrollIntoView(true);
          }}
          value={item}
        />
      ));
    return (
      <div className="content">
        <h4>Află mai multe:</h4>
        <List columns={2}>{items}</List>
      </div>
    );
  };

  return (
    <div ref={scrollAnchorRef}>
      <Hero title={(subPage && subPage.title) || page.title} />
      <SocialsShare currentPage={window.location.href} />
      {renderContent()}
      {renderSubPages()}
      {page.form && <Form data={page} />}
      {page.accordion &&
        page.accordion.map((accordion, index) => (
          <Accordion
            key={`accordion_${index}`}
            title={accordion.title}
            content={
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: accordion.content }}
              />
            }
          />
        ))}
    </div>
  );
}

ContentPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
      })
    ),
    first_node_id: PropTypes.number,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
          })
        )
      })
    ),
    accordion: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      })
    )
  }),
  subPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  })
};

export default ContentPage;
