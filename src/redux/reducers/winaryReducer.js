import {
  GET_COUNTRIES,
  GET_PROVINCES,
  GET_REDEEMS,
  GET_WINARYS,
} from "../types";

const initialState = {
  redeems: [],
  winarys: [],
  provinces: [],
  countries: [],
};

export default function winaryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REDEEMS:
      return {
        ...state,
        redeems: action.payload,
      };

    case GET_WINARYS:
      return {
        ...state,
        winarys: action.payload,
      };

    case GET_PROVINCES:
      return {
        ...state,
        provinces: action.payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}
