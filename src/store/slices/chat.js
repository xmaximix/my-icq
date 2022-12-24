import { createSlice } from "@reduxjs/toolkit";

export const chat = createSlice({
  name: "chat",

  initialState: {
    messages: [],
  },

  reducers: {
    ADD_MESSAGE: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { ADD_MESSAGE } = chat.actions;

export default chat.reducer;
