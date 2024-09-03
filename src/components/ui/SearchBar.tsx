import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setKeyword } from "../../state/searchSlice";
import { RootState } from "../../state/store"; // Adjust the path as per your project structure

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const searchKeyword = useSelector((state: RootState) => state.search.keyword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(e.target.value));
  };

  return (
    <div className="flex lg:w-1/2 flex-col items-center lg:flex-row">
      <input
        type="text"
        className="w-full h-14 rounded-xl p-3 outline-none border border-primary focus:border-2"
        placeholder="Find a Job"
        value={searchKeyword}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
