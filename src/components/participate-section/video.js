import React from "react";
import styled from "styled-components";

import video from "../../images/video.jpg";
import { Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Video = () => (
  <Container bgImage={video}>
    <Button type="link">
      Посмотреть презентацию <RightCircleOutlined />
    </Button>
  </Container>
);

export default Video;
