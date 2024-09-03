import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategory: string;
}

const initialState: CategoryState = {
  selectedCategory:
    localStorage.getItem("category") !== "null" &&
    localStorage.getItem("category") !== null
      ? localStorage.getItem("category")!
      : "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
