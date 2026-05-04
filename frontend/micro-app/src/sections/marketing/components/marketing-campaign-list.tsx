import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { AppLoader } from 'src/components/loading';

import { MarketingCampaign, formatOptionalNumber, formatOptionalPercent } from '../types';

type Props = {
  campaigns: MarketingCampaign[];
  loading?: boolean;
};

export function MarketingCampaignList({ campaigns, loading }: Props) {
  if (loading) {
    return (
      <Card sx={{ p: 3 }}>
        <AppLoader type="skeleton" rows={5} rowHeight={60} showHeader={false} />
      </Card>
    );
  }

  return (
    <Card>
      <TableContainer sx={{ position: 'relative', overflow: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Campaign</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Audience</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>Recipients</TableCell>
              <TableCell>Open Rate</TableCell>
              <TableCell>Click Rate</TableCell>
              <TableCell>Conversions</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((campaign) => {
              const status = String(campaign.status || 'draft').toLowerCase();
              const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
              const statusColor =
                (status === 'sent' && 'success') ||
                (status === 'scheduled' && 'info') ||
                (status === 'sending' && 'warning') ||
                (status === 'paused' && 'warning') ||
                (status === 'archived' && 'default') ||
                (status === 'failed' && 'error') ||
                'default';

              return (
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
                      {(campaign.type || 'email').replace('_', ' ')}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Label variant="soft" color={statusColor as any}>
                      {statusLabel}
                    </Label>
                  </TableCell>

                  <TableCell>{campaign.segmentId ? `Segment #${campaign.segmentId}` : 'Audience not selected'}</TableCell>

                  <TableCell>
                    {campaign.scheduledAt
                      ? fDate(campaign.scheduledAt)
                      : campaign.sentAt
                      ? fDate(campaign.sentAt)
                      : 'Not scheduled'}
                  </TableCell>

                  <TableCell>{formatOptionalNumber(campaign.metrics?.recipients)}</TableCell>
                  <TableCell>{formatOptionalPercent(campaign.metrics?.opened, campaign.metrics?.delivered)}</TableCell>
                  <TableCell>{formatOptionalPercent(campaign.metrics?.clicked, campaign.metrics?.delivered)}</TableCell>
                  <TableCell>{formatOptionalNumber(campaign.metrics?.conversions)}</TableCell>
                  <TableCell>{formatOptionalNumber(campaign.metrics?.revenue)}</TableCell>

                  <TableCell align="right">
                    <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                      <Button size="small" component={Link} href={paths.dashboard.marketingSubsection('campaigns', campaign.id)}>
                        Edit
                      </Button>
                      <Button size="small" component={Link} href={paths.dashboard.marketingSubsection('campaigns', campaign.id)}>
                        Builder
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}

            {campaigns.length === 0 && (
              <TableRow>
                <TableCell colSpan={11} sx={{ textAlign: 'center', py: 10 }}>
                  <Typography variant="h6" gutterBottom>
                    No campaigns found
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Create a campaign to start targeting your audience.
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
