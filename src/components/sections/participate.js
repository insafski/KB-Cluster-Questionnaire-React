import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Radio } from "antd";

import { StateContext } from "../../context";
import Section from "../section";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Video from "../video";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  h2,
  h3,
  li,
  p,
  span {
    color: var(--color-white);
  }

  .ant-radio {
    &-wrapper {
      display: flex;
      align-items: baseline;
      margin-right: 0;
      margin-bottom: 1.25rem;
      padding: 1.2rem;
      border: 0.125rem solid var(--color-grey-second);
      border-radius: 0.5rem;
      white-space: normal;
      transition: border 0.3s ease-in-out;

      :hover,
      :active,
      :focus,
      &-checked {
        border: 0.125rem solid var(--color-primary);
      }
    }

    &-group {
      margin-bottom: 2.5rem;
    }

    &-wrapper:hover .ant-radio,
    &:hover .ant-radio-inner,
    &-inner,
    &-input:focus + .ant-radio-inner,
    &-checked,
    &-checked::after {
      border-color: var(--color-primary);
    }

    &-inner::after {
      background-color: var(--color-primary);
    }
  }
`;

const List = styled.ul`
  margin: 0 0 2.5rem;
  padding: 0;
  list-style: none;

  li {
    padding-left: 4rem;
    text-indent: -4rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      padding-left: 3rem;
      text-indent: -3rem;
    }

    ::before {
      content: "";
      display: inline-block;
      margin-right: 1rem;
      width: 3rem;
      height: 0.25rem;
      background-color: var(--color-primary);
      text-indent: 4rem;
      vertical-align: super;

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 2rem;
        text-indent: 3rem;
      }
    }

    :not(:last-child) {
      margin-bottom: 1rem;
    }

    p {
      display: inline;
    }
  }
`;

const InnerContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(${({ theme }) => theme.breakpoint.mobile} - 4rem), 1fr)
  );
  grid-column-gap: 6rem;
  grid-row-gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;
const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  a {
    width: 100%;
  }
`;

const items = [
  "Прослушайте короткую презентацию",
  "Ответьте на несколько вопросов про реку",
  "Ваши ответы помогут архитекторам разработать проект, отвечающий реальным потребностям диеевцев"
];

const Participate = ({ data }) => {
  const { state, dispatch } = useContext(StateContext);
  const { territory } = state;
  const { territories } = data ?? {};
  const videoId = territories?.filter(item => item.slug === territory)?.[0]
    ?.videoId;

  return (
    <Container id="participate" bgColor="var(--color-secondary)">
      <Heading as="h2">Принять участие</Heading>
      <InnerContainer>
        <List>
          {items.map((item, i) => (
            <Text key={i} as="li" type="option">
              {item}
            </Text>
          ))}
        </List>
        <Video {...{ videoId }} />
        <ControlsContainer>
          {territories && (
            <Radio.Group
              onChange={e =>
                dispatch({
                  type: "CHANGE_TERRITORY",
                  payload: e.target.value
                })
              }
            >
              {territories.map((item, i) => {
                const { Name, slug } = item;

                return (
                  <Radio
                    key={i}
                    checked={slug === territory}
                    value={slug}
                    buttonStyle="solid"
                  >
                    <Text type="option">{Name}</Text>
                  </Radio>
                );
              })}
            </Radio.Group>
          )}
          <Link to={`/form${territory ? `?t=${territory}` : ""}`}>
            <Button type="primary">Перейти к опросу</Button>
          </Link>
        </ControlsContainer>
      </InnerContainer>
    </Container>
  );
};

export default Participate;
