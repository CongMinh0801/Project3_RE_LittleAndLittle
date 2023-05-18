import { createSlice } from "@reduxjs/toolkit";

interface CalendarState {
  selectedDay: string;
}

const initialCalState: CalendarState = {
    selectedDay: "dd/mm/yyyy",
};

export const CalendarSlice = createSlice({
  name: "Calendar",
  initialState:initialCalState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    }
  },
});

export const { setSelectedDay } = CalendarSlice.actions;

export default CalendarSlice.reducer;