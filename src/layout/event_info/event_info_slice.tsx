import { createSlice } from "@reduxjs/toolkit";

interface eventInfoState {
    startDate: string;
    endDate: string;
    place:string;
    price:string;
    name:string;
}

const initialState: eventInfoState = {
    startDate: "",
    endDate: "",
    place: "",
    price: "",
    name: "",
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
    setEventName: (state, action) => {
      state.name = action.payload;
  },
  },
});

export const { setEventStart, setEventEnd, setEventPlace, setEventPrice, setEventName } = eventInfoSlice.actions;

export default eventInfoSlice.reducer;