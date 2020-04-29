import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

import Section from "../section";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import Logos from "../logos";
import { API_HOST, MAPBOX_TOKEN } from "../../config";
import { handleMinWidth } from "../../utils";
import { StateContext } from "../../context";
import { StaticMap } from "react-map-gl";

const Container = styled(Section)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ img }) => img && `url(${API_HOST + img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: linear-gradient(
      to right,
      var(--color-main-bg),
      var(--color-primary)
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
  }

  @media screen and (min-width: ${({ theme }) =>
      handleMinWidth(theme.breakpoint.mobile)}) {
    p,
    .ant-skeleton-content {
      margin-bottom: 3rem;
      max-width: 60%;
    }
  }

  .ant-skeleton:not(.ant-skeleton-element) {
    + .ant-skeleton-element {
      .ant-skeleton-button {
        height: 4rem;
        width: 8rem;
        border-radius: 2rem;
      }
    }
  }
`;
const InnerContainer = styled.div`
  max-width: 40rem;
`;
const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const About = ({ data }) => {
  const {
    state: { loading }
  } = useContext(StateContext);
  const { Name, description, background, latitude, longitude, meta } =
    data ?? {};

  return (
    <Container id="about" img={background?.url}>
      <InnerContainer>
        {!loading && Name && description ? (
          <>
            <Logos
              data={meta?.logotypes}
              logoColor="var(--color-main-heading)"
            />
            <Heading as="h1">{Name}</Heading>
            <Paragraph type="primary">{description}</Paragraph>
            <Link to="#participate">
              <Button type="primary">Перейти к опросу</Button>
            </Link>
          </>
        ) : (
          <>
            <Skeleton />
            <Skeleton.Button />
          </>
        )}
      </InnerContainer>
      <MapContainer>
        <StaticMap
          {...{ latitude, longitude }}
          width="100%"
          height="100%"
          zoom={13}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          attributionControl={false}
          preventStyleDiffing
        />
      </MapContainer>
    </Container>
  );
};

export default About;
