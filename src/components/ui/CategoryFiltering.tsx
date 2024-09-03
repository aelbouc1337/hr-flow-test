import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { categoriesList } from "../../utils/CategoriesList";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../state/categorySlice";
import { RootState } from "../../state/store";

const CategoryFiltering: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );

  const handleCategoryChange = (newValue: string | null) => {
    if (newValue === null) {
      localStorage.removeItem("category");
      dispatch(setSelectedCategory(""));
    } else {
      localStorage.setItem("category", newValue);
      dispatch(setSelectedCategory(newValue));
    }
  };

  return (
    <Autocomplete
      value={selectedCategory}
      onChange={(_, newValue) => handleCategoryChange(newValue)}
      options={categoriesList}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Filter by Category"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "15px",
                borderColor: "#478CCF",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#478CCF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#478CCF",
              },
            },
          }}
        />
      )}
      sx={{ width: "65%" }}
    />
  );
};

export default CategoryFiltering;
