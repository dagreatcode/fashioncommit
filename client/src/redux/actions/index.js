import axios from "axios";
import {
  GET_ARTICLES,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

export function getArticels() {
  return function (dispatch) {
    dispatch({ type: SET_LOADING, payload: true });
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: GET_ARTICLES, payload: response.data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
}

export function getArticelsById() {
  return function (dispatch) {};
}
