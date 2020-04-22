import styled, { css } from "styled-components";

import {
  handleColor,
  handleLineHeight,
  handleSize,
  handleWeight
} from "../../utils";

export const fontTypeMixin = css`
  color: ${({ type }) => handleColor(type)};
  font-weight: ${({ type }) => handleWeight(type)};
  font-size: ${({ type }) => handleSize(type)};
  line-height: ${({ type }) => handleLineHeight(type)};
`;

const Text = styled.span`
  ${fontTypeMixin};
`;

export default Text;
