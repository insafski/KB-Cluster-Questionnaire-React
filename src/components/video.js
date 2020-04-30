import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoId }) => (
  <Container>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Container>
);

export default Video;
