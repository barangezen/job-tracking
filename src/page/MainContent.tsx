import styles from "./MainContent.module.scss";
import { Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { CustomTextField } from "../components/TextField/TextField";
import { Stack } from "@mui/system";
import { List } from "../components/List/List";
import { Priorties } from "../globals/enums";
import { IDropdownData } from "../globals/models";

export const MainContent: React.FC = () => {

  const dropdownValues: IDropdownData[]  = [
    {value: Priorties.TRIVAL, displayName: "Trival"},
    {value: Priorties.REGULAR, displayName: "Regular"},
    {value: Priorties.URGENT, displayName: "Urgent"},
  ]

  return (
    <Container className={styles.container}>
      <span className={styles.title}>Create New Job</span>
      <Stack className={styles.createJobContainer}>
        <div className={styles.jobNameCreate}>
          <CustomTextField title={"Job Name"} size="small" variant="outlined" />
        </div>
        <div className={styles.priortySelect}>
          <Dropdown data={dropdownValues} title="Job Priorty" />
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
