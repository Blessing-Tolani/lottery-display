import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../pages/api/client";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ first_name, last_name, phone, email, password1, password2 }) => {
    const response = await client.post(
      "https://c-sport.tk//api/users/auth/register/"
    );

    console.log(response);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password1: "",
    password2: "",
    notification: "",
    agreement: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
