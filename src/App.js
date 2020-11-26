import React from "react";
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useLocation,
  Switch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { client } from "./graphql";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Members from "./components/Members";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <header>
            <h1>George Mason SciTech Robotics Club</h1>
            <nav>
              <NavLink exact to="/">
                About Us
              </NavLink>
              <NavLink exact to="/projects">
                Projects
              </NavLink>
              <NavLink exact to="/members">
                Members
              </NavLink>
              <NavLink exact to="/contact">
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
  );
}

function Routes() {
  let location = useLocation();

  return (
    <div className="body">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/contact" component={ContactUs} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
