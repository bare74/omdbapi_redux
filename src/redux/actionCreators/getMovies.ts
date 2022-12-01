import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getMovie = (currentPage: number, movie: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MOVIES_PENDING,
    });

    try {
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}?s=${movie}&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: ActionType.GET_MOVIES_SUCCESS,
        payload: data.Search,
      });
    } catch (Error: any) {
      dispatch({
        type: ActionType.GET_MOVIE_FAIL,
        payload: Error,
      });
    }
  };
};
