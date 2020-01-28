import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import LeftCol from "./components/leftCol";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import "jquery/dist/jquery.js";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <div className="row">
            <div className="col-1">
              <LeftCol />
            </div>
            <div className="col-11">
              <NavBar user={user} />
              <div className="container">
                <Switch>
                  <Route path="/register" component={RegisterForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/logout" component={Logout} />
                  <ProtectedRoute path="/movies/:id" component={MovieForm} />
                  <Route
                    path="/movies"
                    render={props => <Movies {...props} user={user} />}
                  />
                  <Route path="/customers" component={Customers} />
                  <Route path="/rentals" component={Rentals} />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect from="/" exact to="/movies" />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
