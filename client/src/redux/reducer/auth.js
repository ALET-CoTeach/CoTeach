import * as actions from '../actionTypes';

let lastId = 0;

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SIGN_IN:

      return {
        ...state,
        id: ++lastId,
        email: action.payload.email,
        userId: action.payload.userId,
        token: action.payload.token,
        authLevel: action.payload.authLevel,
      };

    case actions.SIGN_OUT:
      return {
        ...state,
        id: ++lastId,
        email: '',
        userId: '',
        token: '',
        authLevel: '',
      };
    default:
      return state;
  }
};

export default authReducer;
