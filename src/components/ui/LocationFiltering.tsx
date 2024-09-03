import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLocation } from "../../state/locationSlice";
import { locationsList } from "../../utils/LocationsList";
import { RootState } from "../../state/store"; // Adjust the path as per your project structure

const LocationFiltering: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  // Updated function to accept event parameter
  const handleLocationChange = (newValue: string | null) => {
    if (newValue === null) {
      localStorage.removeItem("location"); // Remove from local storage
      dispatch(setSelectedLocation(""));
    } else {
      localStorage.setItem("location", newValue);
      dispatch(setSelectedLocation(newValue));
    }
  };

  return (
    <Autocomplete
      value={selectedLocation}
      onChange={(_, newValue) => handleLocationChange(newValue)}
      options={locationsList}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Filter by Location"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "15px",
                borderColor: "#478CCF",
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

export default LocationFiltering;
