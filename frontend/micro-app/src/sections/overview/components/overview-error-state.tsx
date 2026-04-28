import Alert from '@mui/material/Alert';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

type Props = {
  message?: string;
  severity?: 'error' | 'warning' | 'info';
};

export function OverviewErrorState({ message = 'Something went wrong while loading this section.', severity = 'error' }: Props) {
  return (
    <Alert
      severity={severity}
      variant="outlined"
      sx={{
        width: '100%',
        bgcolor: (theme) => alpha(theme.palette[severity].main, 0.02),
        borderColor: (theme) => alpha(theme.palette[severity].main, 0.2),
      }}
    >
      <Typography variant="body2">{message}</Typography>
    </Alert>
  );
}
