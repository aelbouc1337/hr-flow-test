import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortingState {
  selectedSorting: string;
}

const initialState: SortingState = {
  selectedSorting:
    localStorage.getItem("sort") !== "null" &&
    localStorage.getItem("sort") !== null
      ? localStorage.getItem("sort")!
      : "",
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSelectedSorting: (state, action: PayloadAction<string>) => {
      state.selectedSorting = action.payload;
    },
  },
});

export const { setSelectedSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
