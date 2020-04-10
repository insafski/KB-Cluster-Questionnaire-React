import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";

import Section from "./section";
import Tab from "./tab";

const { TabPane } = Tabs;

const Container = styled(Section)`
  padding-top: 9rem;

  h2 {
    font-weight: bold;
    font-size: 3rem;
    line-height: 1.2;
  }
`;

const territoryData = {
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  LeadMapMeta: `**16,6 ГА**
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  **1 КМ**
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  `
};

const TerritorySection = ({ data }) => (
  <Container bgColor="#272727">
    <h2>Территория благоустройства</h2>
    <Tabs defaultActiveKey={data?.[0]?.id}>
      {data.map(territory => {
        const { id, Name } = territory;

        return (
          <TabPane tab={Name} key={id}>
            <Tab data={territoryData} />
          </TabPane>
        );
      })}
    </Tabs>
  </Container>
);

export default TerritorySection;
