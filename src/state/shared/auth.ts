import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "@/src/state/store";
import { IUser, Nullable } from "@/src/interfaces";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/src/utils/local-storage";

const LOCAL_STORAGE_KEY = "user";

export type AuthState = {
  user: Nullable<IUser>;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: loadFromLocalStorage(LOCAL_STORAGE_KEY),
  isAuthenticated: !!loadFromLocalStorage(LOCAL_STORAGE_KEY),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeAuth: () => {
      const restored = loadFromLocalStorage(LOCAL_STORAGE_KEY);
      return { user: restored, isAuthenticated: !!restored };
    },
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.user);
    },

    removeUserData: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.user);
    },
  },
});

export const { initializeAuth, setUserData, removeUserData } =
  authSlice.actions;

export default authSlice.reducer;

export const selectAuthUser = (state: State) => state.auth;
