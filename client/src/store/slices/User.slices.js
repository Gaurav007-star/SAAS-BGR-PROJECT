/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserThunk = createAsyncThunk("UserThunk", async (data) => {
  try {
    const response = await axios.post(
      `https://saas-bgr-project.vercel.app/api/user/webhooks`,
      data,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
});

const initialState = {
  user: {}
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(UserThunk.fulfilled, (state, action) => {
      console.log("ACTIOON", action.payload);
    });
  }
});

export default UserSlice.reducer;
