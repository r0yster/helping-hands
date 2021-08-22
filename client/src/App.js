import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "../src/index.css";

import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import Event from "./components/Event/Event";
import Volunteer from "./components/Volunteer/Volunteer";
import Aboutus from "./components/Aboutus/Aboutus";
import Donate from "./components/Donate/Donate";
import Header from "./components/Header/Header";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ChakraProvider>
          <Header />
          <Switch>
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/Donate" component={Donate} />
          </Switch>
        </ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
