import { sortingOptions } from "../utils/SortingOptions";
import { Job } from "../utils/types/types";

// Filtering by Category function, get list of jobs and the selected category state
export const filterByCategory = (
  jobs: Job[],
  selectedCategory: string
): Job[] => {
  if (!selectedCategory) return jobs;
  return jobs.filter((job) =>
    job.tags.some(
      (tag) =>
        tag.name.toLowerCase() === "category" &&
        tag.value.toLowerCase() === selectedCategory.toLowerCase()
    )
  );
};

// Filtering by Location function, get list of jobs and the selected location state
export const filterByLocation = (
  jobs: Job[],
  selectedLocation: string
): Job[] => {
  if (!selectedLocation) return jobs;
  return jobs.filter(
    (job) => job.location.text.toLowerCase() === selectedLocation.toLowerCase()
  );
};

// Filtering by Keyword function, get list of jobs and the input data State and Check for matching of words
export const filterByKeyword = (jobs: Job[], searchKeyword: string): Job[] => {
  if (!searchKeyword) return jobs;
  return jobs.filter((job) =>
    job.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
};

// Sorting Function, gets the list of jobs and the selected sorting option, and depending on selected sorting option make the sort and return the sorted list
export const sortJobs = (jobs: Job[], selectedSortingOption: string): Job[] => {
  if (!selectedSortingOption) return jobs;
  return sortingFunc(selectedSortingOption, jobs);
};

// The sorting function takes the list and the option of sorting, checks if it matches with the list of sorting jobs (see array of sorting options), and applies the sort.
const sortingFunc = (option: string, list: Job[]): Job[] => {
  const sortedList = [...list];

  if (option === sortingOptions[0])
    sortedList.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
  else if (option === sortingOptions[1])
    sortedList
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
      .reverse();
  else if (option === sortingOptions[2])
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
  else if (option === sortingOptions[3])
    sortedList.sort((a, b) => b.name.localeCompare(a.name));

  return sortedList;
};
