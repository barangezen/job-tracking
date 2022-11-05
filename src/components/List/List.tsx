import styles from "./List.module.scss";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  IconButton,
  styled,
  tableCellClasses,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomTextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAppSelector } from "../../store";
import { IDropdownData, IJob } from "../../globals/models";
import { Priorties } from "../../globals/enums";
import { useState } from "react";

export const List: React.FC = () => {
  const jobs = useAppSelector((state) => state.jobs);
  const [filterInput, setFilterInput] = useState("");
  const [selectedPriorty, setSelectedPriorty] = useState("")

  const dropdownValues: IDropdownData[]  = [
    {value: "all", displayName: "Priorty (all)"},
    {value: Priorties.TRIVAL, displayName: "Trival"},
    {value: Priorties.REGULAR, displayName: "Regular"},
    {value: Priorties.URGENT, displayName: "Urgent"},
  ]
  
  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterInput(event.target.value);
  };

  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedPriorty(event.target.value as string);
  };


  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#D5D5F9",
      color: "#898787",
      fontWeight: "700",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const priortyTypeStyle = (type: Priorties) => {
    if (type === Priorties.TRIVAL) {
      return styles.trivalContainer;
    }
    if (type === Priorties.REGULAR) {
      return styles.regularContainer;
    }
    if (type === Priorties.URGENT) {
      return styles.urgentContainer;
    }
  };

  return (
    <TableContainer component={Paper}>
      <div className={styles.filterContainer}>
        <div className={styles.searchFilter}>
          <CustomTextField
            size="small"
            placeholder="Job Name"
            variant="outlined"
            inputIcon={<SearchIcon />}
            value={filterInput}
            onChange={handleFilterInputChange}
          />
        </div>
        <div className={styles.selectFilter}>
          <Dropdown inputLabel label={"Priorty"} data={dropdownValues} value={selectedPriorty} onChange={handleDropdownChange}  />
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Priorty</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job: IJob) => (
            <StyledTableRow
              key={job.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {job.name}
              </TableCell>
              <TableCell align="left">
                <div className={priortyTypeStyle(job.priorty)}>
                  <span className={styles.text}>{job.priorty}</span>
                </div>
              </TableCell>
              <TableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
