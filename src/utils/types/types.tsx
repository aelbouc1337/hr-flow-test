export interface Job {
  id: string;
  name: string;
  location: {
    text: string;
  };
  created_at: string;
  tags: {
    name: string;
    value: string;
  }[];
  summary?: string;
  skills?: {
    name: string;
    value: string;
  }[];
  ranges_date?: {
    name: string;
    value_min: string;
    value_max: string;
  }[];
}

export interface GetJobsResponse {
  data: {
    jobs: Job[];
  };
}
