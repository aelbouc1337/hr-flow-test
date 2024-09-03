import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../state/categorySlice";
import { setSelectedLocation } from "../../state/locationSlice";
import { setSelectedSorting } from "../../state/sortingSlice";
import { setKeyword } from "../../state/searchSlice";

const ResetButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setSelectedCategory(""));
    dispatch(setSelectedLocation(""));
    dispatch(setSelectedSorting(""));
    dispatch(setKeyword(""));
    localStorage.removeItem("category");
    localStorage.removeItem("location");
    localStorage.removeItem("sort");
  };

  return (
    <button
      onClick={handleReset}
      className="rounded-xl flex gap-2 items-center border-primary border px-4 py-3"
    >
      Reset
    </button>
  );
};

export default ResetButton;
