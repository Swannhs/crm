import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { SalesEmptyState } from './sales-empty-state';

import type { SalesActivity } from '../types';

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function SalesActivitiesPanel({
  rows,
  onComplete,
  onDelete,
  completing,
  deleting,
}: {
  rows: SalesActivity[];
  onComplete: (id: string) => void;
  onDelete?: (id: string) => void;
  completing?: boolean;
  deleting?: boolean;
}) {
  if (!rows.length) {
    return <SalesEmptyState title="No activities yet" description="Add follow-up activities from an opportunity to track next actions." />;
  }

  const now = new Date();
  const today = startOfDay(now).getTime();
  const tomorrow = today + 24 * 60 * 60 * 1000;
  const grouped = {
    overdue: rows.filter((row) => !row.completed && row.dueDate && new Date(row.dueDate).getTime() < today),
    today: rows.filter((row) => !row.completed && row.dueDate && new Date(row.dueDate).getTime() >= today && new Date(row.dueDate).getTime() < tomorrow),
    upcoming: rows.filter((row) => !row.completed && (!row.dueDate || new Date(row.dueDate).getTime() >= tomorrow)),
    completed: rows.filter((row) => row.completed),
  };

  const sections: Array<{ key: keyof typeof grouped; label: string }> = [
    { key: 'overdue', label: 'Overdue' },
    { key: 'today', label: 'Due today' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <Card sx={{ p: 2.5 }}>
      <Stack spacing={2.5}>
        {sections.map((section) => (
          <Stack key={section.key} spacing={1.25}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle2">{section.label}</Typography>
              <Chip size="small" label={grouped[section.key].length} variant="outlined" />
            </Stack>
            {!grouped[section.key].length ? <Typography variant="caption" color="text.secondary">No activities.</Typography> : null}
            {grouped[section.key].map((row) => (
              <Stack key={row.id} direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
                <Stack spacing={0.25}>
                  <Typography variant="body2">{row.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{row.type.toUpperCase()} • {row.dueDate ? new Date(row.dueDate).toLocaleString() : 'No due date'} • {row.opportunityId || row.contactId || 'No link'}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                   <Button size="small" variant="outlined" disabled={row.completed || completing} onClick={() => onComplete(row.id)}>Complete</Button>
                   <Button size="small" variant="soft" color="error" disabled={deleting} onClick={() => onDelete?.(row.id)}>Delete</Button>
                </Stack>
              </Stack>
            ))}
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
