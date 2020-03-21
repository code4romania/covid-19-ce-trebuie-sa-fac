import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import { Hero, Accordion } from "@code4ro/taskforce-fe-components";

function ContentPage({ data }) {
  return (
    <div>
      <Hero title={data.title} />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      {data.form && <Form data={data} />}
      {data.accordion &&
        data.accordion.map((accordion, index) => (
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
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
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
  })
};

export default ContentPage;
