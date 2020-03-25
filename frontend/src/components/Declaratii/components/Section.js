import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, fontFamily, fontSize } from "../helpers/constants";

const Section = styled.div`
  line-height: 2;
  font-family: ${fontFamily.sansSerif};
  text-align: ${({ align }) => align};
  font-size: ${({ textSize }) => fontSize[textSize]};
  margin-bottom: ${({ bottom }) => spacing[bottom]};
  margin-left: ${({ left }) => spacing[left]};
`;

Section.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]),
  textSize: PropTypes.oneOf(["small", "medium", "large", "huge"]),
  bottom: PropTypes.oneOf(["initial", "small", "medium", "large"]),
  left: PropTypes.oneOf(["none", "small", "medium", "large"])
};

Section.defaultProps = {
  align: "left",
  bottom: "large",
  textSize: "medium",
  left: "none"
};

export default Section;
