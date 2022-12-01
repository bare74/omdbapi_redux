import { Comment } from "../reducers/index";

export enum ActionType {
  GET_MOVIES_PENDING = "GET_MOVIES_PENDING",
  GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
  GET_MOVIE_FAIL = "GET_MOVIE_FAIL",
}

interface actionPending {
  type: ActionType.GET_MOVIES_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_MOVIES_SUCCESS;
  payload: Comment[];
}

interface actionFail {
  type: ActionType.GET_MOVIE_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
