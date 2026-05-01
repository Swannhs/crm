import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export function CalendarEmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card variant="outlined" sx={{ p: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 0.5 }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
    </Card>
  );
}

export function CalendarErrorState({ title, description }: { title: string; description: string }) {
  return (
    <Card variant="outlined" sx={{ p: 3, borderColor: 'error.main' }}>
      <Typography variant="subtitle1" sx={{ mb: 0.5, color: 'error.main' }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
    </Card>
  );
}

export function CalendarUnavailableState({ title, description }: { title: string; description: string }) {
  return (
    <Card variant="outlined" sx={{ p: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 0.5 }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
    </Card>
  );
}
