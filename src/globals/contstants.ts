import { Priorties } from "./enums";
import { IDropdownData } from "./models";

//Constant texts
export const texts = {
    headerTitle: "Job Tracking",
    jobNameTitle: "Job Name",
    jobPriortyTitle: "Job Priorty",
    jobListTitle: "Job List",
    nameTitle: "Name",
    priortyTitle: "Priorty",
    actionTitle: "Action",
    thereIsNoJob: "There is no job...",
    create: "Create",
    jobEdit: "Job Edit",
    cancel: "Cancel",
    approve: "Approve",
    save: "Save",
    deleteConfirm: "Are you sure you want to delete it?",
    emptyNameField: "You should enter a name"
}

//Static dropdown values.
export const filterDropdownValues: IDropdownData[] = [
    { value: "all", displayName: "Priorty (all)" },
    { value: Priorties.TRIVAL, displayName: "Trival" },
    { value: Priorties.REGULAR, displayName: "Regular" },
    { value: Priorties.URGENT, displayName: "Urgent" },
  ];

export const editDropdownValues: IDropdownData[] = [
    { value: Priorties.TRIVAL, displayName: "Trival" },
    { value: Priorties.REGULAR, displayName: "Regular" },
    { value: Priorties.URGENT, displayName: "Urgent" },
  ];

 export const createDropdownValues: IDropdownData[] = [
    { value: Priorties.TRIVAL, displayName: "Trival" },
    { value: Priorties.REGULAR, displayName: "Regular" },
    { value: Priorties.URGENT, displayName: "Urgent" },
  ];