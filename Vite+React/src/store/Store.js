import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/reducers/TodoSlice";

export const MyStore = configureStore({
    reducer: TodoReducer
});