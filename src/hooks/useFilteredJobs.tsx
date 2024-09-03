import { useState, useEffect } from "react";
import {
  filterByCategory,
  filterByKeyword,
  filterByLocation,
  sortJobs,
} from "../helpers/filteringFunctions";
import { Job } from "../utils/types/types";

const useFilteredJobs = (
  jobList: Job[],
  selectedCategory: string,
  selectedLocation: string,
  searchKeyword: string,
  selectedSortingOption: string
): Job[] => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    let updatedJobs = jobList;

    updatedJobs = filterByCategory(updatedJobs, selectedCategory);
    updatedJobs = filterByLocation(updatedJobs, selectedLocation);
    updatedJobs = filterByKeyword(updatedJobs, searchKeyword);
    updatedJobs = sortJobs(updatedJobs, selectedSortingOption);

    setFilteredJobs(updatedJobs);
  }, [
    jobList,
    selectedCategory,
    selectedLocation,
    searchKeyword,
    selectedSortingOption,
  ]);

  return filteredJobs;
};

export default useFilteredJobs;
