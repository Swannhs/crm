import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { MarketingCampaign } from '../types';

type Props = {
  campaigns: MarketingCampaign[];
  loading?: boolean;
};

export function MarketingCampaignList({ campaigns, loading }: Props) {
  if (loading) {
    return (
      <Card sx={{ p: 3 }}>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={60} sx={{ mb: 2, borderRadius: 1 }} />
        ))}
      </Card>
    );
  }

  return (
    <Card>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Scheduled/Sent</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        bgcolor: 'background.neutral',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Iconify
                        icon={
                          campaign.type === 'email'
                            ? 'solar:letter-bold-duotone'
                            : campaign.type === 'sms'
                            ? 'solar:smartphone-bold-duotone'
                            : 'solar:clapperboard-edit-bold-duotone'
                        }
                        width={24}
                      />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" noWrap>
                        {campaign.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
                        {campaign.subject || 'No subject'}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                    {campaign.type || 'email'}
                  </Typography>
                </TableCell>

                <TableCell>
                  {(() => {
                    const status = String(campaign.status || 'draft').toLowerCase();
                    const label = status.charAt(0).toUpperCase() + status.slice(1);
                    const color =
                      (status === 'sent' && 'success') ||
                      (status === 'scheduled' && 'info') ||
                      (status === 'sending' && 'warning') ||
                      (status === 'failed' && 'error') ||
                      'default';

                    return (
                  <Label
                    variant="soft"
                    color={color}
                  >
                    {label}
                  </Label>
                    );
                  })()}
                </TableCell>

                <TableCell>
                  <Typography variant="body2">
                    {campaign.scheduleTime
                      ? fDate(campaign.scheduleTime)
                      : campaign.status === 'sent'
                      ? fDate(campaign.updatedAt || campaign.createdAt)
                      : 'Not scheduled'}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <IconButton component={Link} href={paths.dashboard.marketingSubsection('campaigns', campaign.id)}>
                    <Iconify icon="solar:pen-bold" />
                  </IconButton>
                  <IconButton>
                    <Iconify icon="solar:copy-bold" />
                  </IconButton>
                  <IconButton color="error">
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {campaigns.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: 'center', py: 10 }}>
                  <Typography variant="h6" gutterBottom>
                    No campaigns found
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Try adjusting your filters or create a new campaign.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
