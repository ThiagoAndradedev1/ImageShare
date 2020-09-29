import React, { Fragment } from "react";
import LandingPage from "./components/Pages/LandingPage";
import Images from "./components/Pages/Images";
import Header from "./components/layout/Header";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ImageUpload from "./components/Pages/ImageUpload";
import ImageApiState from "./context/api/ImageApiState";
import Footer from "./components/layout/Footer";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
// toast.configure();

const App = () => {
  // toast.configure();

  return (
    <Fragment>
      <ImageApiState>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/landingpage' />
            </Route>
            <Route exact path='/landingpage' component={LandingPage} />
            <Route exact path='/images' component={Images} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/imageupload' component={ImageUpload} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ImageApiState>
    </Fragment>
  );
};

export default App;
