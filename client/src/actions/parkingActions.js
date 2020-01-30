import {
  ADD_PARKING,
  DELETE_PARKING,
  PARKINGS_LOADING,
  EDIT_PARKING,
  GET_PARKINGS,
  FETCH_PARKINGS_FAILURE
} from "./type";
import axios from "axios";

export const getParkings = () => dispatch => {
  dispatch(ParkingsLoading());
  fetch("http://localhost:8000/api/parkings/")
    .then(handleErrors)
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: GET_PARKINGS,
        payload: res
      })
    );
};

export const editParking = () => {
  return {
    type: EDIT_PARKING
  };
};

export const ParkingsLoading = () => {
  return {
    type: PARKINGS_LOADING
  };
};

export const deleteParking = key => dispatch => {
  axios.delete(`http://localhost:8000/api/parkings/${key}`).then(res =>
    dispatch({
      type: DELETE_PARKING,
      payload: key
    })
  );
};

export const addCar = item => dispatch => {
  axios.post("http://localhost:8000/api/parkings/", item).then(res =>
    dispatch({
      type: ADD_PARKING,
      payload: res.data
    })
  );
};

export const fetchaParkingsFailure = error => ({
  type: FETCH_PARKINGS_FAILURE,
  payload: { error }
});

function handleErrors(response) {
  if (!response.ok) {
    console.log(response.statusText);
  }
  return response;
}
