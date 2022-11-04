import React from "react";
import styles from "./TextField.module.scss";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

interface ITextFieldProps {
  title: string;
  className?: string;
  size: "small" | "medium";
}

export const CustomTextField: React.FC<ITextFieldProps> = ({
  title,
  className,
  size,
}) => {
  return (
      <Stack className={styles.container}>
        <div className={styles.title}>{title}</div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size={size}
          className={className}
        />
      </Stack>
  );
};
