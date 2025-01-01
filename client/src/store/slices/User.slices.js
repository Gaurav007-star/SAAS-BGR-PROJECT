/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const UserThunk = createAsyncThunk("UserThunk", async (userdata) => {
  try {
    const response = await axios.post(
      `http://localhost:7000/api/user/register`,
      userdata
    );

    return response;
  } catch (error) {
    return error.response;
  }
});

export const UserUpdateThunk = createAsyncThunk(
  "UserUpdateThunk",
  async (id, updateData) => {
    try {
      const response = await axios.patch(
        `http://localhost:7000/api/user/update/${id}`,
        updateData
      );
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

const initialState = {
  user: {}
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(UserThunk.fulfilled, (state, action) => {
        console.log("Action User created: ", action.payload);
      })
      .addCase(UserUpdateThunk.fulfilled, (state, action) => {
        console.log("Action User updated: ", action.payload);
      });
  }
});

export default UserSlice.reducer;
