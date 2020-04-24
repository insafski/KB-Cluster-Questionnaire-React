import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Main from "./main";
import { useQuery } from "@apollo/react-hooks";
import { CITY_QUERY } from "../queries";
import { StateContext } from "../context";
import Survey from "./survey";
import Header from "../components/header";
import Error from "./error";
import { cityName } from "../config";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const App = () => {
  const slug = cityName;
  const { data, loading, error } = useQuery(CITY_QUERY, {
    variables: { slug }
  });
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    const handleState = (type, payload) => dispatch({ type, payload });

    data &&
      handleState(
        "CHANGE_TERRITORY",
        data?.cities?.[0]?.territories?.[0]?.slug
      );
    data?.cities?.[0]?.theme &&
      handleState("CHANGE_THEME", data?.cities?.[0]?.theme);
  }, [dispatch, data]);

  const title = data?.cities?.[0]?.title;

  return (
    <Router>
      {data && (
        <Helmet>
          <meta name="description" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          {/*<meta*/}
          {/*  property="og:url"*/}
          {/*  content="http://www.imdb.com/title/tt0117500/"*/}
          {/*/>*/}
          {data?.cities?.[0]?.background?.url && (
            <meta
              property="og:image"
              content={data?.cities?.[0]?.background?.url}
            />
          )}
          <title>{title}</title>
        </Helmet>
      )}
      <Container>
        <Header {...{ title }} />
        {error && <Error message={error?.message} />}
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Main {...{ data, title, loading, ...props }} />}
          />
          <Route
            path="/form"
            exact
            render={props => <Survey {...{ title, ...props }} />}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
