import React, { Component } from "react";
import { connect } from "react-redux";
import { addCar } from "../actions/parkingActions";

class BookingForm extends Component {
  isParkingFull = false;
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createBooking = this.createBooking.bind(this);
  }
  createBooking = () => {
    this.props.addCar();
    this.isParkingFull = this.props.parkings.parkings.indexOf(0) === -1;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.createBooking();
  };

  render() {
    let alert = "";
    if (this.isParkingFull) {
      alert = <p>Parking is full</p>;
    }
    return (
      <div className="parking">
        <form className="form" onSubmit={this.handleSubmit}>
          <button disabled={this.isParkingFull}>
            Enter a car to the Parking
          </button>
          <div>{alert}</div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  parkings: state.parkings
});
export default connect(mapStateToProps, { addCar: addCar })(BookingForm);
