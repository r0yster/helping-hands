import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import "../src/index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import SignupForm from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";

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
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
  // const [currentPage, handlePageChange] = useState("Home");
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "Signup":
  //       return <SignupForm />;
  //     case "Login":
  //       return <LoginForm />;
  //     case "Dashboard":
  //       return <Dashboard />;

  //     default:
  //       return <Home />;
  //   }
  // };
  // return (
  //   <header className="App-header">
  //     <ChakraProvider>
  //       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
  //       <div>{renderPage()}</div>
  //     </ChakraProvider>
  //   </header>
  // );
}

export default App;
