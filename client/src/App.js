import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import "../src/index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import SignupForm from "./components/SignupForm/SignupForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Event from "./components/Event/Event";
import Volunteer from "./components/Volunteer/Volunteer";
import Aboutus from "./components/Aboutus/Aboutus";
// import Nav from "./components/Nav";
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/aboutus" component={Aboutus} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
