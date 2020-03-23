import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import {
  Hero,
  Accordion,
  SocialsShare
} from "@code4ro/taskforce-fe-components";

function ContentPage({ page, subPage }) {
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

  return (
    <div>
      <Hero title={(subPage && subPage.title) || page.title} />
      <SocialsShare currentPage={window.location.href} />
      {renderContent()}
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
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired
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
    page: PropTypes.string.isRequired
  })
};

export default ContentPage;
