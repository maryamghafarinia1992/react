import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ParkingList from "./components/parkingList";
import BookingForm from "./components/bookingForm";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="navbar">
            <h2 className="center">Test Project</h2>
          </div>
          <div className="row">
            <div className="container">
              <BookingForm />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <ParkingList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
