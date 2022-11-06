import { Button } from "@mui/material";

interface IButtonProps {
  className?: string;
  name: string;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const GenericButton: React.FC<IButtonProps> = ({
  className,
  name,
  variant,
  color,
  disabled,
  onClick,
}) => {
  return (
    <Button
      className={className}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      {name}
    </Button>
  );
};
