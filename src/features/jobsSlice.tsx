import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Priorties } from "../globals/enums";
import { IJob, IJobFilter } from "../globals/models";

const { v4: uuidv4 } = require("uuid");

const priorties = ["Trival", "Regular", "Urgent"];

const initialState: IJob[] = [
  {
    id: uuidv4(),
    name: "adaylarla ilgili bir odev hazirlamam gerekiyor",
    priorty: Priorties.URGENT,
  },
  {
    id: uuidv4(),
    name: "Yapilan islerle ilgili activity kayitrlari olusturmam gerekiyor",
    priorty: Priorties.REGULAR,
  },
  {
    id: uuidv4(),
    name: "adaylarla ilgili bir odev hazirlamam gerekiyor",
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
  },
});

export const { addJob, removeJob, filterJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
