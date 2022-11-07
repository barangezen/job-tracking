import styles from "./MainContent.module.scss";
import { Container, SelectChangeEvent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { CustomTextField } from "../components/TextField/TextField";
import { Stack } from "@mui/system";
import { List } from "../components/List/List";
import { Priorties } from "../globals/enums";
import { IJob } from "../globals/models";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { addJob } from "../features/jobsSlice";
import { createDropdownValues, texts } from "../globals/contstants";
import { GenericButton } from "../components/Button/Button";

export const MainContent: React.FC = () => {
  const { v4: uuidv4 } = require("uuid");
  const [createInput, setCreateInput] = useState("");
  const [selectedPriorty, setSelectedPriorty] = useState<Priorties>(
    Priorties.TRIVAL
  );
  const dispatch = useAppDispatch();

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
            title={texts.jobNameTitle}
            size="small"
            variant="outlined"
            value={createInput}
            onChange={handleCreateInputChange}
          />
        </div>
        <div className={styles.priortySelect}>
          <Dropdown
            title={texts.jobPriortyTitle}
            data={createDropdownValues}
            value={selectedPriorty}
            onChange={handleDropdownChange}
          />
        </div>
        <GenericButton
          className={styles.createButton}
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleCreateJob(createInput, selectedPriorty)}
          name={texts.create}
          disabled={createInput.length < 1}
        />
      </Stack>
      <Stack>
        <span className={styles.jobListTitle}>{texts.jobListTitle}</span>
        <List />
      </Stack>
    </Container>
  );
};
