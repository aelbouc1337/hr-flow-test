import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "../state/api/jobsApiSlice";
import categoryReducer from "../state/categorySlice";
import locationReducer from "../state/locationSlice";
import sortingReducer from "../state/sortingSlice";
import searchReducer from "../state/searchSlice";


export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    category: categoryReducer,
    location: locationReducer,
    sorting: sortingReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
