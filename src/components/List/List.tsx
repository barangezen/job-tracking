import React, { useEffect } from "react";
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
  Dialog,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomTextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "../../store";
import { IJob, IJobFilter } from "../../globals/models";
import { Priorties } from "../../globals/enums";
import { useState } from "react";
import { filterJobs, removeJob, updateJob } from "../../features/jobsSlice";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { GenericButton } from "../Button/Button";
import {
  filterDropdownValues,
  editDropdownValues,
  texts,
} from "../../globals/contstants";

export const List: React.FC = () => {
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const filteredJobs = useAppSelector((state) => state.jobs.filteredJobs);
  const [filters, setFilters] = useState<IJobFilter>({
    searchInput: "",
    selectedPriorty: "all",
  });
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedJob, setSelectedJob] = useState<IJob>({
    id: "",
    name: "",
    priorty: Priorties.TRIVAL,
  });
  const dispatch = useAppDispatch();

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters({ ...filters, searchInput: event.target.value });
  };

  const handleFilterDropdownChange = (event: SelectChangeEvent) => {
    setFilters({ ...filters, selectedPriorty: event.target.value });
  };

  const handleEditDropdownChange = (event: SelectChangeEvent) => {
    setSelectedJob({
      ...selectedJob,
      priorty: event.target.value as Priorties,
    });
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

  const handleJobDelete = (id: string | undefined) => {
    dispatch(removeJob(id));
    setOpenDeleteConfirm(false);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleOpenDeleteConfirm = () => {
    setOpenDeleteConfirm(true);
  };

  const handleCloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
  };

  const handleEdit = () => {
    dispatch(updateJob(selectedJob));
    setOpenEdit(false);
  };

  useEffect(() => {
    dispatch(filterJobs(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, jobs]);

  return (
    <TableContainer
      className={styles.container}
      component={Paper}
      style={{ overflowX: "auto" }}
    >
      <div className={styles.filterContainer}>
        <div className={styles.searchFilter}>
          <CustomTextField
            size="small"
            placeholder={texts.jobNameTitle}
            variant="outlined"
            inputIcon={<SearchIcon />}
            value={filters.searchInput}
            onChange={handleFilterInputChange}
          />
        </div>
        <div className={styles.selectFilter}>
          <Dropdown
            inputLabel
            label={texts.priortyTitle}
            data={filterDropdownValues}
            value={filters.selectedPriorty}
            onChange={handleFilterDropdownChange}
          />
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={styles.cellNameTitle}>
              {texts.nameTitle}
            </StyledTableCell>
            <StyledTableCell align="left">{texts.priortyTitle}</StyledTableCell>
            <StyledTableCell align="center">
              {texts.actionTitle}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredJobs.map((job: IJob) => {
            return (
              <StyledTableRow
                key={job.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => setSelectedJob(job)}
              >
                <TableCell
                  className={styles.jobNameContainer}
                  component="th"
                  scope="row"
                >
                  <span className={styles.jobName}>{job.name}</span>
                </TableCell>
                <TableCell align="left">
                  <div className={priortyTypeStyle(job.priorty)}>
                    <span className={styles.text}>{job.priorty}</span>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton aria-label="edit" onClick={handleOpenEdit}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={handleOpenDeleteConfirm}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
      {filteredJobs.length < 1 && (
        <div className={styles.noJobContainer}>
          <span className={styles.noJobText}>{texts.thereIsNoJob}</span>
        </div>
      )}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <Stack className={styles.editContainer}>
          <span className={styles.editTitle}>{texts.jobEdit}</span>
          <CustomTextField
            className={styles.editInput}
            autoFocus
            label={texts.jobNameTitle}
            margin="dense"
            variant="outlined"
            size="small"
            disabled
            value={selectedJob?.name}
          />
          <Dropdown
            className={styles.selectedPriorty}
            data={editDropdownValues}
            value={selectedJob ? selectedJob.priorty : ""}
            onChange={handleEditDropdownChange}
            title={texts.jobPriortyTitle}
          />
          <div className={styles.editButtons}>
            <GenericButton
              className={styles.editCancelBtn}
              name={texts.cancel}
              variant="contained"
              color="inherit"
              onClick={() => setOpenEdit(false)}
            />
            <GenericButton
              className={styles.editApproveBtn}
              name={texts.save}
              variant="contained"
              color="error"
              onClick={handleEdit}
            />
          </div>
        </Stack>
      </Dialog>
      <Dialog
        id="delete-modal"
        open={openDeleteConfirm}
        onClose={() => setOpenDeleteConfirm(false)}
      >
        <Stack className={styles.deleteConfirmContainer}>
          <div style={{ textAlign: "center" }}>
            <ErrorOutlineIcon className={styles.infoIcon} color="error" />
          </div>
          <span className={styles.infoText}>{texts.deleteConfirm}</span>
          <div className={styles.confirmButtonsContainer}>
            <GenericButton
              className={styles.cancelBtn}
              name={texts.cancel}
              variant="contained"
              color="inherit"
              onClick={handleCloseDeleteConfirm}
            />
            <GenericButton
              className={styles.approveBtn}
              name={texts.approve}
              variant="contained"
              color="error"
              onClick={() => handleJobDelete(selectedJob?.id)}
            />
          </div>
        </Stack>
      </Dialog>
    </TableContainer>
  );
};
