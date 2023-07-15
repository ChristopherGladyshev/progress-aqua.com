import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../interfaces/AuthResponse';

interface IUserState {
  data?: IUser,
  error: null | string,
  isLoading: boolean,
  isAuth: boolean,
}

interface ILogData {
  email: string,
  password: string
}

interface IReject {
  rejectValue: string
}

const initialState = {
  error: null,
  isLoading: false,
  isAuth: false,
} as IUserState;

export const fetchRegistration = createAsyncThunk<AuthResponse, ILogData, IReject>(
  'user/registration',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      const data = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.massage);
    }
  }
)

export const fetchLogin = createAsyncThunk<AuthResponse, ILogData, IReject>(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      const data = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.massage);
    }
  }
)

export const fetchLogout = createAsyncThunk<AuthResponse, ILogData, IReject>(
  'user/logout',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout(email, password);
      const data = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.massage);
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }).addCase(fetchRegistration.fulfilled, (state, { payload }) => {
      state.data = payload.user
      state.isLoading = false;
      state.isAuth = true;
    }).addCase(fetchRegistration.rejected, (state, { payload }) => {
      if (payload) state.error = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }).addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.data = payload.user
      state.isLoading = false;
      state.isAuth = true;
    }).addCase(fetchLogin.rejected, (state, { payload }) => {
      if (payload) state.error = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchLogout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }).addCase(fetchLogout.fulfilled, (state, { payload }) => {
      state.data = payload.user
      state.isLoading = false;
      state.isAuth = false;
    }).addCase(fetchLogout.rejected, (state, { payload }) => {
      if (payload) state.error = payload;
      state.isLoading = false;
    });
  }
});

export default userSlice.reducer