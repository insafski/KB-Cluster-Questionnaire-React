import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import video from "../../images/video.jpg";

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
`;

const Video = ({ link }) => (
  <Container bgImage={video}>
    <Link to={link || ""}>
      <Button type="link">
        Посмотреть презентацию <RightCircleOutlined />
      </Button>
    </Link>
  </Container>
);

export default Video;
