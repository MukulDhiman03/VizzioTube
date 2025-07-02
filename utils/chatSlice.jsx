import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
  },
  reducers: {
    addChats: (state, action) => {
      state.chats.splice(10, 1);
      state.chats.push(action.payload);
    },
  },
});

export const { addChats } = chatSlice.actions;
export default chatSlice.reducer;
