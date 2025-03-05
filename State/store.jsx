import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Tasks/tasksSlice";
import filteredTasksReducer from "./filteredTasks/filteredTasksSlice";
import { quotesApi } from "./quotes/quotesApiSlice";
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filteredTasks: filteredTasksReducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quotesApi.middleware),
});
export default store;
