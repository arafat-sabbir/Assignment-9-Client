import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../auth/authSlice";

export type TCart = {
  userId: string;
  role: string;
  name: string;
  photo:string;
  iat: number;
  exp: number;
};
type TAuthState = {
  user: null | TUser;
  token: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
