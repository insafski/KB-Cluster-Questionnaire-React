import React, { useContext } from "react";
import { Tabs } from "antd";
import styled from "styled-components";

import Section from "./section";
import Tab from "./tab";
import { StateContext } from "../context";

const { TabPane } = Tabs;

const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;

  .ant-tabs-bar {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 3rem;
  }
`;

const TerritorySection = ({ data }) => {
  const { dispatch } = useContext(StateContext);

  return (
    <Container id="territory" bgColor="#272727">
      <h2>Территория благоустройства</h2>
      <Tabs
        defaultActiveKey={data?.[0]?.id}
        onChange={key => dispatch({ type: "CHANGE_TERRITORY", payload: key })}
      >
        {data.map(territory => {
          const { id, Name } = territory;

          return (
            <TabPane tab={Name} key={id}>
              <Tab data={territory} />
            </TabPane>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default TerritorySection;
