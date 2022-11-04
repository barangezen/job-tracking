import styles from "./MainContent.module.scss";
import { Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { CustomTextField } from "../components/TextField/TextField";
import { Stack } from "@mui/system";
import { List } from "../components/List/List";

export const MainContent: React.FC = () => {
  return (
    <Container className={styles.container}>
      <span className={styles.title}>Create New Job</span>
      <Stack className={styles.createJobContainer}>
        <div className={styles.jobNameCreate}>
          <CustomTextField title={"Job Name"} size="small" variant="outlined" />
        </div>
        <div className={styles.priortySelect}>
          <Dropdown title="Job Priorty" />
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
