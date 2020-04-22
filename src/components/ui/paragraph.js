import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { fontTypeMixin } from "./text";

const Paragraph = styled(ReactMarkdown)`
  ${fontTypeMixin};
`;

export default Paragraph;
