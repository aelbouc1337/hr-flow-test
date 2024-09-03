import React, { useMemo, useState, useEffect, useRef } from "react";
import { MdOutlineLocationOn, MdWorkOutline } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { Draggable } from "@hello-pangea/dnd";
import { Job } from "../utils/types/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { gsap } from "gsap";

dayjs.extend(relativeTime);

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the expandable content

  const { name, location, created_at, summary, skills, ranges_date, tags } =
    job;
  const company = useMemo(
    () => tags.filter((tag) => tag.name.toLowerCase() === "company"),
    [tags]
  );
  const jobType = useMemo(
    () => tags.filter((tag) => tag.name.toLowerCase() === "type"),
    [tags]
  );
  const jobCategory = useMemo(
    () => tags.filter((tag) => tag.name.toLowerCase() === "category"),
    [tags]
  );

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("MM/DD/YYYY");
  };

  // GSAP animation effect for expanding the Card
  useEffect(() => {
    if (isExpanded) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          overflow: "visible",
        }
      );
    }
  }, [isExpanded]);

  return (
    <Draggable draggableId={job.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 w-full border bg-slate-50 cursor-move hover:shadow-slate-300 transition-all duration-300 hover:shadow-lg shadow-md shadow-slate-300 rounded-xl"
        >
          <div
            className={`flex flex-col gap-4 w-full ${
              isExpanded ? "items-center" : ""
            }`}
          >
            <h2 className="font-bold text-xl">{name}</h2>
            <div
              className={`flex flex-col gap-4 ${
                isExpanded ? "w-full items-center" : "w-2/3"
              }`}
            >
              <span className="text-sm flex items-center">
                <MdOutlineLocationOn className="mr-1 text-primary" size={20} />{" "}
                {location.text}
              </span>
              {isExpanded && (
                <span className="text-sm flex items-center">
                  <FaBuilding className="mr-1 text-primary" size={20} />{" "}
                  {company[0] ? company[0].value : "N/A"}
                </span>
              )}
              <span className="text-sm flex items-center">
                <MdWorkOutline className="mr-1 text-primary" size={20} />{" "}
                {jobType[0] ? jobType[0].value : "N/A"}
              </span>
            </div>

            {/* Expandable Content */}
            <div
              ref={contentRef}
              className="overflow-hidden" // Important to hide overflow when collapsing
              style={{ height: 0, opacity: 0 }} // Initial styles for collapsed state
            >
              {isExpanded && (
                <>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {skills &&
                      skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 p-1 bg-primary text-white shadow-md shadow-slate-500 text-sm rounded-2xl"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                  <div className="flex items-center flex-col gap-2 my-4">
                    <h4 className="font-bold block border-b border-black">
                      About the Job :
                    </h4>
                    <p className="lg:w-[80%] w-[90%] tracking-wider leading-relaxed text-center">
                      {summary}
                    </p>
                  </div>
                  <div className="my-2 w-full items-center justify-center flex flex-col gap-2">
                    <span className="text-sm flex items-center">
                      <span className="mr-2 font-bold">Posted On :</span>
                      <span className="px-2 py-1 border border-primary text-primary italic rounded-xl">
                        {formatDate(created_at)}
                      </span>
                    </span>
                    <span className="text-sm flex items-center">
                      <span className="mr-2 font-bold">Starting Date :</span>
                      <span className="px-2 py-1 border border-primary text-primary italic rounded-xl">
                        {ranges_date && ranges_date[0]
                          ? formatDate(ranges_date[0].value_min)
                          : "N/A"}
                      </span>
                    </span>
                    <span className="text-sm flex items-center">
                      <span className="mr-2 font-bold">Category :</span>
                      <span className="px-2 py-1 border border-primary text-primary italic rounded-xl">
                        {jobCategory[0] ? jobCategory[0].value : "N/A"}
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>

            <hr className="w-full text-slate-200" />
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-full w-full items-center cursor-pointer justify-center"
            >
              <button className="flex gap-2 items-center justify-center text-lg font-semibold">
                {!isExpanded ? "See More" : "See Less"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default JobCard;
