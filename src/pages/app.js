import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import Main from "./main";
import { useQuery } from "@apollo/react-hooks";
import { CITY_QUERY } from "../queries";
import { StateContext } from "../context";
import Survey from "./survey";

const GlobalStyle = createGlobalStyle`
  h1,
  h2 {
    font-weight: bold;
  }
  
  h1 {
    font-size: 4.5rem;
  }
  
  h2 {
    font-size: 3rem;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const App = () => {
  const slug = process.env.REACT_APP_CITY_NAME;
  const { data, loading, error } = useQuery(CITY_QUERY, {
    variables: { slug }
  });
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    data &&
      dispatch({
        type: "CHANGE_TERRITORY",
        payload: data?.territories?.[0]?.id
      });
  }, [dispatch, data]);

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
      <GlobalStyle />
      <Container>
        {data && (
          <Switch>
            <Route
              path="/"
              exact
              render={({ location }) => (
                <Main {...{ data, title, loading, location }} />
              )}
            />
            <Route
              path="/:territory/form"
              exact
              render={({ match }) => <Survey {...{ title, match }} />}
            />
          </Switch>
        )}
      </Container>
    </Router>
  );
};

export default App;
