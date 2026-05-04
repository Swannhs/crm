import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { fDate } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';
import { CustomPopover, usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Month', icon: 'mingcute:calendar-month-line' },
  { value: 'timeGridWeek', label: 'Week', icon: 'mingcute:calendar-week-line' },
  { value: 'timeGridDay', label: 'Day', icon: 'mingcute:calendar-day-line' },
  { value: 'listWeek', label: 'Agenda', icon: 'mingcute:list-check-line' },
] as const;

// ----------------------------------------------------------------------

type Props = {
  date: Date;
  view: string;
  onToday: () => void;
  onNextDate: () => void;
  onPrevDate: () => void;
  onChangeView: (newView: string) => void;
};

export default function CalendarToolbar({
  date,
  view,
  onToday,
  onNextDate,
  onPrevDate,
  onChangeView,
}: Props) {
  const popover = usePopover();

  const selectedItem = VIEW_OPTIONS.filter((item) => item.value === view)[0];

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2.5, pr: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={onPrevDate}>
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Typography variant="h6">{fDate(date)}</Typography>

          <IconButton onClick={onNextDate}>
            <Iconify icon="eva:arrow-ios-forward-fill" />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" color="inherit" variant="outlined" onClick={onToday}>
            Today
          </Button>

          <Button
            size="small"
            color="inherit"
            variant="soft"
            onClick={popover.onOpen}
            startIcon={<Iconify icon={selectedItem.icon} />}
            endIcon={<Iconify icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'} />}
            sx={{ textTransform: 'capitalize' }}
          >
            {selectedItem.label}
          </Button>
        </Stack>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-right"
        sx={{ width: 140 }}
      >
        {VIEW_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === view}
            onClick={() => {
              popover.onClose();
              onChangeView(option.value);
            }}
          >
            <Iconify icon={option.icon} />
            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
