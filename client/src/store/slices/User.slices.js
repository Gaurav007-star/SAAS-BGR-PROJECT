/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const UserThunk = createAsyncThunk("UserThunk", async (userdata) => {
  try {
    const data = {
      event: "user.created",
      userdata
    };

    const response = await axios.post(
      `https://saas-bgr-project.vercel.app/api/user/webhooks`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Clerk-Signature": `${import.meta.env.CLERK_SECRET}`,
        },
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
