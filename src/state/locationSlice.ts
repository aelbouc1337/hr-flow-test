import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LocationState {
  selectedLocation: string;
}

const initialState: LocationState = {
  selectedLocation:
    localStorage.getItem("location") !== "null" &&
    localStorage.getItem("location") !== null
      ? localStorage.getItem("location")!
      : "",
};


const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSelectedLocation } = locationSlice.actions;

export default locationSlice.reducer;
