import { FormControl, Select, MenuItem, InputLabel, SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { IDropdownData } from "../../globals/models";
import styles from "./Dropdown.module.scss";


interface IDropdownProps {
  className?: string;
  title?: string;
  value?: string | undefined;
  label?: string;
  data: IDropdownData[];
  inputLabel?: boolean;
  onChange?: (event: SelectChangeEvent) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  className,
  title,
  value,
  label,
  data,
  inputLabel,
  onChange
}) => {
  return (
    <Stack className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <FormControl fullWidth size="small" className={className}>
        {inputLabel && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.displayName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
