import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../view/view_active/view_active_slice";
import eventInfoReducer from "../layout/event_info/event_info_slice"

export const store = configureStore({
  reducer: {
    view: viewReducer,
    eventInfo: eventInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;