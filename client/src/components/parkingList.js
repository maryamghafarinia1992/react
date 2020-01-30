import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getParkings,
  deleteParking,
  editParking
} from "../actions/parkingActions";
import propTypes from "prop-types";

class ParkingList extends Component {
  componentDidMount() {
    this.props.getParkings();
  }

  onDeleteClick = key => {
    this.props.deleteParking(key);
  };

  onEditClick = key => {
    this.props.editParking(key);
  };
  createTable = (parkingList, k) => {
    console.log("dsfsdfsdfsdfsdf");
    console.log(parkingList);
    let table = [];
    let backgroundColor = "";
    if (parkingList !== []) {
      // Outer loop to create parent

      for (let i = 0; i < 4; i++) {
        let children = [];
        //Inner loop to create children
        for (let j = 0; j < 9; j++, k++) {
          backgroundColor = parkingList[k] ? "full" : "empty";
          children.push(<td className={backgroundColor}></td>);
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>);
      }
      return table;
    }
  };
  render() {
    const { parkings } = this.props.parkings;
    return (
      <div>
        <div>
          {/* <div>
            {parkings
              ? parkings.map(item => (
                  <div key={item.key} timeout={500}>
                    <div className="parking"></div>
                  </div>
                ))
              : null}
          </div> */}
        </div>
        <h1>Parking A</h1>
        <table>{this.createTable(parkings, 0)}</table>
        <br />
        <h1>Parking B</h1>
        <table>{this.createTable(parkings, 36)}</table>
        <br />
        <h1>Parking C</h1>
        <table>{this.createTable(parkings, 72)}</table>
      </div>
    );
  }
}

ParkingList.propTypes = {
  getParkings: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  parkings: state.parkings
});

export default connect(mapStateToProps, {
  getParkings: getParkings,
  deleteParking: deleteParking,
  editParking: editParking
})(ParkingList);
