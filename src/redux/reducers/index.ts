import { Action, ActionType } from "../actionTypes/index";

export interface Comment {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Search: string;
}

interface State {
  comments: Comment[];
  loading: boolean;
  Error: string | null;
}

const initialState = {
  comments: [],
  loading: false,
  Error: null,
};

const commentReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_MOVIES_PENDING:
      return {
        loading: true,
        comments: [],
        Error: null,
      };
    case ActionType.GET_MOVIES_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
        Error: null,
      };
    case ActionType.GET_MOVIE_FAIL:
      return {
        loading: false,
        Error: action.payload,
        comments: [],
      };
    default:
      return state;
  }
};

export default commentReducer;
