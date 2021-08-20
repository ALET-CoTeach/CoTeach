import * as actions from '../actionTypes';

export const signIn = (data) => {
  const {
    userId, email, token, authLevel,
  } = data;

  return {
    type: actions.SIGN_IN,
    payload: {
      authLevel,
      token,
      userId,
      email,
    },
  };
};

export const signOut = () => ({
  type: actions.SIGN_OUT,
  payload: {
    authLevel: '',
    token: '',
    userId: '',
    email: '',
  },
});
