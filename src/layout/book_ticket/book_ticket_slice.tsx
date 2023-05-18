import { createSlice } from "@reduxjs/toolkit";

interface BookTicketState {
  infoArray: string[];
}

const initialCalState: BookTicketState = {
    infoArray: [],
};

export const BookTicketSlice = createSlice({
  name: "BookTicket",
  initialState:initialCalState,
  reducers: {
    setInfoArray: (state, action) => {
      state.infoArray = action.payload;
    }
  },
});

export const { setInfoArray } = BookTicketSlice.actions;

export default BookTicketSlice.reducer;