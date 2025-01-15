import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import authReducer from "./slices/authSlice";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

const persistedState = loadFromLocalStorage("appState");

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage("appState", state); // Saving state to local storage
});

export default store;
