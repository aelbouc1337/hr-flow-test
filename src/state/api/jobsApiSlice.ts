import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetJobsResponse } from "../../utils/types/types";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("X-API-KEY", import.meta.env.VITE_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<GetJobsResponse, void>({
      query: () => ({
        url: "jobs/searching",
        params: {
          board_keys: `["${import.meta.env.VITE_BOARD_KEYS}"]`,
        },
      }),
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
