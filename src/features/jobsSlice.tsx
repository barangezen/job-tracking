import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Priorties } from "../globals/enums";
import { IJob, IJobFilter } from "../globals/models";

const { v4: uuidv4 } = require("uuid");

const priorties = ["Trival", "Regular", "Urgent"];

const order = { Urgent: 1, Regular: 2, Trival: 3 };

const initialState: IJob[] = [
  {
    id: uuidv4(),
    name: "adaylarla ilgili teknik bir odev hazirlamam gerekiyor",
    priorty: Priorties.URGENT,
  },
  {
    id: uuidv4(),
    name: "Yapilan islerle ilgili activity kayitrlari olusturmam gerekiyor",
    priorty: Priorties.REGULAR,
  },
  {
    id: uuidv4(),
    name: "teknik tasklari planlayacagim",
    priorty: Priorties.TRIVAL,
  },
];

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: initialState,
    filteredJobs: initialState,
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action) => {
      state.jobs.splice(
        state.jobs.findIndex((job) => job.id === action.payload),
        1
      );
    },
    filterJobs: (state, action: PayloadAction<IJobFilter>) => {
      let filteredJobs = [...state.jobs];
      filteredJobs = filteredJobs.sort(
        (a, b) => order[a.priorty] - order[b.priorty]
      );
      if (action.payload.selectedPriorty === "all") {
        filteredJobs = filteredJobs.filter((job) =>
          job.name.includes(action.payload.searchInput.toLocaleLowerCase())
        );
      }

      if (priorties.includes(action.payload.selectedPriorty)) {
        filteredJobs = filteredJobs.filter(
          (job) =>
            job.priorty === action.payload.selectedPriorty &&
            job.name.includes(action.payload.searchInput.toLowerCase())
        );
      }

      state.filteredJobs = filteredJobs;
    },
    updateJob: (state, action: PayloadAction<IJob>) => {
      state.jobs = state.jobs.map((job) => {
        return job.id === action.payload.id ? action.payload : job;
      });
    },
  },
});

export const { addJob, removeJob, filterJobs, updateJob } = jobsSlice.actions;
export default jobsSlice.reducer;
