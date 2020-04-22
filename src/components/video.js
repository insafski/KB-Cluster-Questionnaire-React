import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

import video from "../images/video.jpg";
import { ReactComponent as Play } from "../images/play.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ::before {
    content: "";
    padding-top: 56.25%;
    height: 0;
  }

  button {
    color: var(--color-secondary);

    :hover,
    :focus {
      color: var(--color-primary);
    }
  }
`;

const Video = ({ link }) => (
  <Container bgImage={video}>
    <Link to={link || ""}>
      <Button type="link">
        <Play />
      </Button>
    </Link>
  </Container>
);

export default Video;