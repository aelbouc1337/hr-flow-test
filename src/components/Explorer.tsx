import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { useGetJobsQuery } from "../state/api/jobsApiSlice";
import JobCard from "./JobCard";
import Pagination from "./ui/Pagination";
import { useSelector } from "react-redux";
import Loading from "./ui/Loading";
import EmptyList from "./ui/EmptyList";
import FilteringToolbar from "./FilteringToolbar";
import useFilteredJobs from "../hooks/useFilteredJobs";
import { RootState } from "../state/store";
import { Job } from "../utils/types/types";

const Explorer: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [jobList, setJobList] = useState<Job[]>([]);
  const limit = 10;
  const { data, error, isLoading } = useGetJobsQuery();

  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  const selectedSortingOption = useSelector(
    (state: RootState) => state.sorting.selectedSorting
  );
  const searchKeyword = useSelector((state: RootState) => state.search.keyword);

  useEffect(() => {
    if (data && Array.isArray(data.data.jobs)) {
      setJobList(data?.data.jobs);
    }
  }, [data]);

  // Custom Hook To get Filtered Jobs
  const filteredJobs = useFilteredJobs(
    jobList,
    selectedCategory,
    selectedLocation,
    searchKeyword,
    selectedSortingOption
  );

  const totalPages = Math.ceil(filteredJobs.length / limit); // Using the jobList length to Count Pages for Pagination

  const displayedJobs = filteredJobs.slice((page - 1) * limit, page * limit); // Slicing the Current items to display on the Current page

  // This Function is to Reorder Elements when Dragging them
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(filteredJobs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setJobList(items);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching jobs</div>;

  return (
    <div className="p-6 lg:px-64 md:px-32 flex flex-col gap-9">
      <h1 className="font-bold font-Playfair text-4xl lg:text-6xl text-center bg-gradient-to-b from-slate-900 to-primary text-transparent bg-clip-text">
        We Are Hiring
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-5 lg:gap-3 lg:flex-row">
        <FilteringToolbar />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="jobs">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-6"
            >
              {!displayedJobs.length ? (
                <EmptyList />
              ) : (
                displayedJobs.map((job, index) => (
                  <JobCard job={job} index={index} key={job.id} />
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {displayedJobs.length !== 0 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Explorer;
