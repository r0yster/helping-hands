import React, { useState } from "react";
import LoginForm from "../src/components/LoginForm";
import "../src/index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import SignupForm from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";

function App() {
  const [currentPage, handlePageChange] = useState("Dashboard");
  const renderPage = () => {
    switch (currentPage) {
      case "Signup":
        return <SignupForm />;
      case "Login":
        return <LoginForm />;
      case "Dashboard":
        return <Dashboard />;

      default:
        return <Dashboard />;
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${"backgroundImage"})`,
      }}
    >
      <header className="App-header">
        <ChakraProvider>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>{renderPage()}</div>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
