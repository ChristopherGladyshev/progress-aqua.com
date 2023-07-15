import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authentication: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      state.isAuth = action.payload.isAuth
    },
  },
})

export const { authentication } = authenticationSlice.actions

export default authenticationSlice.reducer