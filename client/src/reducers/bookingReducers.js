import {
  ADD_PARKING,
  DELETE_PARKING,
  PARKINGS_LOADING,
  EDIT_PARKING,
  GET_PARKINGS,
  FETCH_PARKINGS_FAILURE
} from "../actions/type";

const initialState = {
  parkings: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARKINGS:
      return {
        ...state,
        parkings: action.payload,
        loading: false
      };
    case DELETE_PARKING:
      return {
        ...state,
        parkings: state.parkings.filter(item => item.key !== action.payload)
      };
    case ADD_PARKING:
      return {
        ...state,
        parkings: action.payload
      };
    case EDIT_PARKING:
      return {
        ...state,
        parkings: state.parkings.map(parking => {
          if (parking.key === action.payload.parking.key) {
            return {
              ...action.payload.parking
            };
          }
          return parking;
        }),
        parkingtoedit: undefined
      };
    case FETCH_PARKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        parkings: []
      };
    case PARKINGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
