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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomTextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";

function createData(name: string, priorty: string) {
  return { name, priorty };
}

const rows = [
  createData("adaylarla ilgili bir odev hazirlamam gerekiyor", "Urgent"),
  createData(
    "Yapilan islerle ilgili activity kayitrlari olusturmam gerekiyor",
    "Regular"
  ),
  createData("adaylarla ilgili bir odev hazirlamam gerekiyor", "Trival"),
];

export const List: React.FC = () => {
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

  const priortyTypeStyle = (type: string) => {
    if (type === "Trival") {
      return styles.trivalContainer;
    }
    if (type === "Regular") {
      return styles.regularContainer;
    }
    if (type === "Urgent") {
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
          />
        </div>
        <div className={styles.selectFilter}>
          <Dropdown inputLabel label={"Priorty"} />
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
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <div className={priortyTypeStyle(row.priorty)}>
                  <span className={styles.text}>{row.priorty}</span>
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
