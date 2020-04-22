import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Radio, Skeleton } from "antd";

import { StateContext } from "../../context";
import Section from "../section";
import Video from "../video";
import SurveyButton from "../survey-button";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Paragraph from "../ui/paragraph";

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;

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
      align-items: center;
      margin-bottom: 1rem;
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

    :before {
      content: "";
      display: inline-block;
      margin-right: 1rem;
      width: 3rem;
      height: 0.25rem;
      background-color: var(--color-primary);
      text-indent: 4rem;
      vertical-align: super;
    }

    :not(:last-child) {
      margin-bottom: 1rem;
    }

    p {
      display: inline;
    }
  }
`;

const DescriptionContainer = styled.div`
  p,
  .ant-skeleton {
    margin-bottom: 8rem;
    max-width: 50%;
  }
`;

const VideoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;
  margin-bottom: 4rem;
`;

const items = [
  "Прослушайте короткую презентацию",
  "Ответьте на несколько вопросов про реку",
  "Ваши ответы помогут архитекторам разработать проект, отвечающий реальным потребностям диеевцев"
];

const Participate = ({ data }) => {
  const { state, dispatch } = useContext(StateContext);
  const { territory } = state;
  const { description, territories, PresentationVideoLink } = data ?? {};

  return (
    <Container id="participate" bgColor="var(--color-secondary)">
      <DescriptionContainer>
        <Heading as="h2">Принять участие</Heading>
        {description ? (
          <Paragraph>{description}</Paragraph>
        ) : (
          <Skeleton title={false} />
        )}
      </DescriptionContainer>
      <VideoContainer>
        <Video link={PresentationVideoLink} />
        <div>
          <Heading as="h3">
            Как вы можете поучаствовать в разработке проекта
          </Heading>
          <List>
            {items.map((item, i) => (
              <Text key={i} as="li" type="option">
                {item}
              </Text>
            ))}
          </List>
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
            <SurveyButton>Перейти к опросу</SurveyButton>
          </Link>
        </div>
      </VideoContainer>
    </Container>
  );
};

export default Participate;
