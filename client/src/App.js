import React, { useState } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import "../src/index.css";
// import Header from "./components/Header/Header";
import "../src/components/Nav/Nav.scss";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import SignupForm from "./components/Signup/SignupForm";
// import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Nav/Nav";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      // case "About":
      //   return <About />;
      case "Login":
        return <LoginForm />;
      case "SignupForm":
        return <SignupForm />;
      default:
        return <SignupForm />;
    }
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {/* <Header /> */}
        <div>{renderPage()}</div>
      </div>
    </ChakraProvider>
  );
}
export default App;
