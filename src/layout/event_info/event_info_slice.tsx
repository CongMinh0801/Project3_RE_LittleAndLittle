import { createSlice } from "@reduxjs/toolkit";

interface eventInfoState {
    startDate: string;
    endDate: string;
    place:string;
    price:string;
}

const initialState: eventInfoState = {
    startDate: "08/01/2002",
    endDate: "17/07/2002",
    place: "Đầm sen pack",
    price: "250.000",
};

export const eventInfoSlice = createSlice({
  name: "eventInfo",
  initialState,
  reducers: {
    setEventStart: (state, action) => {
      state.startDate = action.payload;
    },
    setEventEnd: (state, action) => {
        state.endDate = action.payload;
    },
    setEventPlace: (state, action) => {
        state.place = action.payload;
    },
    setEventPrice: (state, action) => {
        state.price = action.payload;
    },
  },
});

export const { setEventStart, setEventEnd, setEventPlace, setEventPrice } = eventInfoSlice.actions;

export default eventInfoSlice.reducer;