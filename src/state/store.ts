import { configureStore } from "@reduxjs/toolkit";

import todos from "@/src/state/shared/todos";
import modals from "@/src/state/shared/modals";
import filters from "@/src/state/shared/filters";
import auth from "@/src/state/shared/auth";

export const store = configureStore({
  reducer: {
    todos,
    auth,
    modals,
    filters,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const getStoreState = () => store.getState();
