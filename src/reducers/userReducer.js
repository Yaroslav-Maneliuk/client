import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const handlerRequest = produce((draft, action) => {
  draft.isFetching = true;
  draft.error = null;
});

const handlerError = produce((draft, action) => {
  draft.isFetching = false;
  draft.error = action.payload.error;
});

const handlers = {
  [ACTION_TYPES.CREATE_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.CREATE_USER_SUCCESS]: produce((draft,action)=>{
    draft.isFetching = false;
    draft.users.push(action.payload.user)
  }),
  [ACTION_TYPES.CREATE_USER_ERROR]: handlerError,
};

function useReducer(state = initialState, action) {
  const handler = handlers[action.type]
  if(handler){
    return handler(state, action)
  }
  return state;
}

export default useReducer;
