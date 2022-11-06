import styles from "./MainContent.module.scss";
import { Button, Container, SelectChangeEvent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { CustomTextField } from "../components/TextField/TextField";
import { Stack } from "@mui/system";
import { List } from "../components/List/List";
import { Priorties } from "../globals/enums";
import { IDropdownData, IJob } from "../globals/models";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { addJob } from "../features/jobsSlice";

export const MainContent: React.FC = () => {
  const { v4: uuidv4 } = require("uuid");
  const [createInput, setCreateInput] = useState("");
  const [selectedPriorty, setSelectedPriorty] = useState<Priorties>(
    Priorties.TRIVAL
  );
  const dispatch = useAppDispatch();

  const dropdownValues: IDropdownData[] = [
    { value: Priorties.TRIVAL, displayName: "Trival" },
    { value: Priorties.REGULAR, displayName: "Regular" },
    { value: Priorties.URGENT, displayName: "Urgent" },
  ];

  const handleCreateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateInput(event.target.value);
  };

  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedPriorty(event.target.value as Priorties);
  };

  const handleCreateJob = (jobName: string, jobPriorty: Priorties) => {
    const newJob: IJob = {
      id: uuidv4(),
      name: jobName,
      priorty: jobPriorty,
    };
    dispatch(addJob(newJob));
    setCreateInput("");
  };

  return (
    <Container className={styles.container}>
      <span className={styles.title}>Create New Job</span>
      <Stack className={styles.createJobContainer}>
        <div className={styles.jobNameCreate}>
          <CustomTextField
            title={"Job Name"}
            size="small"
            variant="outlined"
            value={createInput}
            onChange={handleCreateInputChange}
          />
        </div>
        <div className={styles.priortySelect}>
          <Dropdown
            title="Job Priorty"
            data={dropdownValues}
            value={selectedPriorty}
            onChange={handleDropdownChange}
          />
        </div>
        <Button
          className={styles.createButton}
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleCreateJob(createInput, selectedPriorty)}
        >
          Create
        </Button>
      </Stack>
      <Stack>
        <span className={styles.jobListTitle}>Job List</span>
        <List />
      </Stack>
    </Container>
  );
};
