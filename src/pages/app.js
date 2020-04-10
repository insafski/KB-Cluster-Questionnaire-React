import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Main from "./main";
// import Questions from "./questions";
import { useQuery } from "@apollo/react-hooks";
import { CITY_QUERY } from "../queries";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const App = () => {
  const slug = process.env.REACT_APP_CITY_NAME;
  const { data, loading, error } = useQuery(CITY_QUERY, {
    variables: { slug }
  });

  if (error) {
    return <p>{`Ошибка: ${error.message}`}</p>;
  }

  const title = `Чего хочет ${data?.cities?.[0]?.Name}?`;

  return (
    <Router>
      <Helmet
        defaultTitle={!loading ? title : ""}
        titleTemplate={`${!loading ? title : ""} - %s`}
      >
        <meta name="description" content={!loading ? title : ""} />
        <title>{!loading ? title : ""}</title>
      </Helmet>
      <Spin spinning={loading} indicator={<LoadingOutlined spin />}>
        <Container>
          {data && (
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Main {...{ data, title }} />}
              />
              {/*<Route path="/form" exact component={Questions} />*/}
            </Switch>
          )}
        </Container>
      </Spin>
    </Router>
  );
};

export default App;
