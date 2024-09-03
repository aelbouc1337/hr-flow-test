import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedSorting } from "../../state/sortingSlice";
import { sortingOptions } from "../../utils/SortingOptions";
import { Autocomplete, TextField } from "@mui/material";
import { RootState } from "../../state/store"; // Adjust the path as per your project structure

const Sorting: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSorting = useSelector(
    (state: RootState) => state.sorting.selectedSorting
  );

  const handleSortingChange = (newValue: string | null) => {
    if (newValue === null) {
      localStorage.removeItem("sort"); // Remove from local storage
      dispatch(setSelectedSorting(""));
    } else {
      localStorage.setItem("sort", newValue);
      dispatch(setSelectedSorting(newValue));
    }
  };

  return (
    <Autocomplete
      value={selectedSorting}
      onChange={(_, value) => handleSortingChange(value)}
      options={sortingOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Sort By"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "15px",
                borderColor: "#478CCF", // Custom border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#478CCF", // Color on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#478CCF", // Color when focused
              },
            },
          }}
        />
      )}
      sx={{ width: "65%" }}
    />
  );
};

export default Sorting;
