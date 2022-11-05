import styles from "./MainContent.module.scss";
import { Button, Container, SelectChangeEvent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { CustomTextField } from "../components/TextField/TextField";
import { Stack } from "@mui/system";
import { List } from "../components/List/List";
import { Priorties } from "../globals/enums";
import { IDropdownData } from "../globals/models";
import { useState } from "react";

export const MainContent: React.FC = () => {
  const [createInput, setCreateInput] = useState("");
  const [selectedPriorty, setSelectedPriorty] = useState("");
  
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
    setSelectedPriorty(event.target.value as string);
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
