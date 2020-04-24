import React from "react";
import styled from "styled-components";
import Slider from "@ant-design/react-slick";

import Tab from "./tab";

const Container = styled.div`
  padding-top: 2rem;

  .slick {
    &-track {
      display: flex;
      flex-direction: row;
    }

    &-list {
      position: relative;
      display: block;
      margin: 0;
      padding: 0;

      :focus {
        outline: none;
      }

      .dragging {
        cursor: hand;
      }
    }

    &-slide {
      margin-right: 4rem;

      > div {
        height: 100%;
      }
    }

    &-dots {
      display: flex !important;
      justify-content: center;
      margin: 2rem auto;
      padding: 0;
      list-style: none;

      li {
        position: relative;
        display: inline-block;
        flex: 0 1 auto;
        box-sizing: content-box;
        width: 4rem;
        height: 0.25rem;
        margin: 0 0.5rem;
        padding: 0;
        text-align: center;
        text-indent: -999px;
        vertical-align: top;
        transition: all 0.5s;

        &.slick-active {
          width: 8rem;

          button {
            background-color: var(--color-secondary);
            opacity: 1;
          }

          :hover,
          :focus {
            opacity: 1;
          }
        }

        button {
          display: block;
          width: 100%;
          height: 3px;
          padding: 0;
          color: transparent;
          font-size: 0;
          background-color: var(--color-secondary);
          border: 0;
          border-radius: 1px;
          outline: none;
          cursor: pointer;
          opacity: 0.3;
          transition: all 0.5s;

          :hover,
          :focus {
            opacity: 0.75;
          }
        }
      }
    }
  }
`;

const Carousel = ({ slides }) => (
  <Container>
    <Slider
      arrows={false}
      accessibility
      centerMode
      centerPadding={0}
      dots
      draggable
      focusOnSelect
      infinite={false}
      slidesToShow={1}
    >
      {slides.map((slide, i) => (
        <Tab key={i} data={slide} />
      ))}
    </Slider>
  </Container>
);

export default Carousel;
