import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      email: null,
      token: null,
      localId: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        email: action.payload.data.email,
        token: action.payload.data.idToken,
        localId: action.payload.data.localId,
      };
    },
    clearUser: (state) => {
      state.value = {
        email: null,
        token: null,
      };
    },
    setCameraImage: (state, action) => {
      state.value = {
        ...state.value,
        cameraImage: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage } = authSlice.actions;

export default authSlice.reducer;
