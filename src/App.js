import React from "react";
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTools,
  faUserFriends,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import SciTechLogo from "./assets/scitech-logo.png";
import { client } from "./graphql";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Members from "./components/Members";
import ContactUs from "./components/ContactUs";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <SkeletonTheme color="#ddd" highlightColor="#aaa">
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <header>
              <div className="title">
                <img src={SciTechLogo} alt="" />
                <div className="main-title">
                  George Mason SciTech Robotics Club
                </div>
              </div>
              <nav>
                <NavLink exact to="/">
                  <FontAwesomeIcon icon={faHome} />
                  About Us
                </NavLink>
                <NavLink exact to="/projects">
                  <FontAwesomeIcon icon={faTools} />
                  Projects
                </NavLink>
                <NavLink exact to="/members">
                  <FontAwesomeIcon icon={faUserFriends} />
                  Members
                </NavLink>
                <NavLink exact to="/contact">
                  <FontAwesomeIcon icon={faAddressBook} />
                  Contact
                </NavLink>
              </nav>
            </header>
            <Routes />
            <footer>
              <div className="copyright">
                Copyright {new Date().getFullYear()} SciTech Robotics
              </div>
              <div className="footnote">
                Created with ❤️ by{" "}
                <a target="__blank" href="http://etasbasi.com">
                  Enes Tasbasi
                </a>
              </div>
            </footer>
          </div>
        </Router>
      </ApolloProvider>
    </SkeletonTheme>
  );
}

function Routes() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
