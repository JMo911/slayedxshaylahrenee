import { ButtonBaseProps, IconButtonProps } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

interface BaseButtonProps extends ButtonProps {
  icon: any;
  message: any;
}

export const BaseButton = ({
  variant,
  icon,
  message,
  onClick,
  onBlur,
}: BaseButtonProps) => {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      onBlur={onBlur}
    >
      {message}
    </Button>
  );
};
