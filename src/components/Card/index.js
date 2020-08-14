import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = (props) => {
  const { image, children } = props;
  return (
    <div className="columns column is-vcentered">
      <img src={image} alt="" width="112" height="112" className="cardImage" />
      <p>{children}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
