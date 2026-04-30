import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  description: string;
};

function BaseState({ title, description }: Props) {
  return (
    <Card sx={{ p: 4 }}>
      <Stack spacing={1} alignItems="center" textAlign="center">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}

export function EmployeesEmptyState({ title, description }: Props) {
  return <BaseState title={title} description={description} />;
}

export function EmployeesErrorState({ title, description }: Props) {
  return <BaseState title={title} description={description} />;
}

export function EmployeesUnavailableState({ title, description }: Props) {
  return <BaseState title={title} description={description} />;
}
