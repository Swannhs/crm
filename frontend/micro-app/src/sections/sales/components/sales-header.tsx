import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';

export function SalesHeader({
  search,
  createDisabled,
  createHelpText,
  onSearch,
  onRefresh,
  onOpenSync,
  onOpenCreate,
}: {
  search: string;
  createDisabled?: boolean;
  createHelpText?: string;
  onSearch: (value: string) => void;
  onRefresh: () => void;
  onOpenSync: () => void;
  onOpenCreate: () => void;
}) {
  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search opportunities, leads, or orders"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="solar:magnifer-bold" width={18} />
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <Button variant="text" color="inherit" size="small" onClick={onOpenSync}>
            Sync data
          </Button>
          <Button variant="outlined" size="small" startIcon={<Iconify icon="solar:refresh-bold" />} onClick={onRefresh}>
            Refresh
          </Button>
          <Tooltip title={createDisabled ? createHelpText || 'Opportunity creation is not available yet' : ''}>
            <span>
              <Button variant="contained" disabled={createDisabled} onClick={onOpenCreate}>
                New opportunity
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
}
