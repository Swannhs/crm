import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledCalendar = styled('div')(({ theme }) => ({
  width: '100%',
  '& .fc': {
    '--fc-border-color': alpha(theme.palette.grey[500], 0.16),
    '--fc-daygrid-event-dot-width': '8px',
    '--fc-today-bg-color': alpha(theme.palette.primary.main, 0.08),
    '--fc-list-event-dot-width': '8px',
    '--fc-event-border-color': 'transparent',
    '--fc-event-bg-color': theme.palette.primary.main,
    '--fc-event-text-color': theme.palette.common.white,
  },
  '& .fc .fc-license-message': { display: 'none' },
  '& .fc .fc-col-header-cell-cushion': {
    ...theme.typography.subtitle2,
    padding: theme.spacing(1, 0),
  },
  '& .fc .fc-daygrid-day-number': {
    ...theme.typography.body2,
    padding: theme.spacing(1, 1, 0, 0),
  },
  '& .fc .fc-event': {
    borderRadius: 6,
    padding: '2px 4px',
    cursor: 'pointer',
    border: 'none',
  },
  '& .fc .fc-event-title': {
    ...theme.typography.caption,
    fontWeight: theme.typography.fontWeightSemiBold,
  },
  '& .fc .fc-list-event': {
    cursor: 'pointer',
  },
  '& .fc .fc-list-sticky .fc-list-day > *': {
    backgroundColor: theme.palette.background.neutral,
  },
}));
