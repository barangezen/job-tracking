import { createSlice } from "@reduxjs/toolkit";
import { Priorties } from "../globals/enums";
import { IJob } from "../globals/models";

const { v4: uuidv4 } = require("uuid");

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
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    removeJob: (state, action) => {
      state.splice(
        state.findIndex((job) => job.id === action.payload),
        1
      );
    },
  },
});

export const { addJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;
