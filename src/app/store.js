import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carS/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
