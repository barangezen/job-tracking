import { Priorties } from "./enums";

export interface IJob {
  id: string;
  name: string;
  priorty: Priorties;
}

export interface IDropdownData {
    value: string | Priorties;
    displayName: string;
  }
