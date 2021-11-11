import { ButtonBaseProps, IconButtonProps } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

interface BaseButtonProps extends ButtonProps {
  icon: any;
  message: string;
}

export const BaseButton = ({
  variant,
  icon,
  message,
  onClick,
}: BaseButtonProps) => {
  return (
    <Button variant={variant} startIcon={icon} onClick={onClick}>
      {message}
    </Button>
  );
};
