import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: '',
  authLevel: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { user } = action.payload;

      state.user = user;
      state.token = action.payload.token;
      state.authLevel = action.payload.authLevel;
    },
    signOut: initialState,
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
