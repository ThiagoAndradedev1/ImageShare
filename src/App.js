import React, { Fragment } from "react";
import LandingPage from "./components/Pages/LandingPage";
import Images from "./components/Pages/Images";
import Navbar from "./components/layout/Navbarr";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import HowToUpload from "./components/Pages/HowToUpload";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/landingpage' component={LandingPage} />
          <Route exact path='/images' component={Images} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/howtoupload' component={HowToUpload} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
