import AutosizeInput from "react-input-autosize";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, width, fontWeight, borderRadius } from "../helpers/constants";

const TextField = styled(AutosizeInput)`
  margin: 0 2px 0 5px;
  input {
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};
    border: 1px solid ${color.black};
    border-radius: ${borderRadius.small};
    min-width: ${({ size }) => width[size]};
  }
`;

TextField.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

TextField.defaultProps = {
  size: "medium"
};

export default TextField;
