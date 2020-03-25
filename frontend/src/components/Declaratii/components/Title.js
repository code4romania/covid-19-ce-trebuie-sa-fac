import styled from "styled-components";

import { fontSize, fontWeight, fontFamily } from "../helpers/constants";

const Title = styled.h1`
  line-height: 1.4;
  text-align: center;
  font-family: ${fontFamily.serif};
  font-size: ${fontSize.huge};
  font-weight: ${fontWeight.bold};
`;

export default Title;
