import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../view/view_active/view_active_slice";
import eventInfoReducer from "../layout/event_info/event_info_slice";
import calendarReducer from "../layout/calendar/calendar_slice";
import bookTicketReducer from "../layout/book_ticket/book_ticket_slice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    eventInfo: eventInfoReducer,
    calendar: calendarReducer,
    bookTicket: bookTicketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;