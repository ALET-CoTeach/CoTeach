import * as actions from '../actionTypes';

let lastId = 0;

const authReducer = (state = {}, action) => {
  const {
    userId, email, token, authLevel,
  } = action.payload;

  switch (action.type) {
    case actions.SIGN_IN:
      return {
        ...state,
        id: ++lastId,
        email,
        userId,
        token,
        authLevel,
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
