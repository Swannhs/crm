'use client';

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

import { fDate } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingCampaignList({ campaigns, type = 'email' }: any) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>{type === 'email' ? 'Email Campaigns' : 'SMS Campaigns'}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign Name</TableCell>
              <TableCell>Scheduled Date</TableCell>
              <TableCell>Recipients</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(campaigns || []).map((campaign: any) => (
              <TableRow key={campaign.id}>
                <TableCell>
                  <Typography variant="subtitle2">{campaign.name || 'Untitled Campaign'}</Typography>
                </TableCell>
                <TableCell>{fDate(campaign.scheduledAt || campaign.createdAt)}</TableCell>
                <TableCell>{campaign.recipientCount || 0}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 0.75,
                      typography: 'caption',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      bgcolor: 'success.lighter',
                      color: 'success.darker',
                    }}
                  >
                    Sent
                  </Box>
                </TableCell>
                <TableCell align="right">
                   <IconButton size="small">
                      <Iconify icon="solar:pen-bold" />
                   </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {(campaigns || []).length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: 'center', py: 3, color: 'text.secondary' }}>
                  No {type} campaigns found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

// ----------------------------------------------------------------------

export function MarketingAutomationList({ automations }: any) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Automation Workflows</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Workflow Name</TableCell>
              <TableCell>Triggers</TableCell>
              <TableCell>Active Runs</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(automations || []).map((automation: any) => (
              <TableRow key={automation.id}>
                <TableCell>
                  <Typography variant="subtitle2">{automation.name || 'Untitled Automation'}</Typography>
                </TableCell>
                <TableCell>{automation.triggerType || 'Form Submit'}</TableCell>
                <TableCell>{automation.activeCount || 0}</TableCell>
                <TableCell>
                   <Switch defaultChecked />
                </TableCell>
                <TableCell align="right">
                   <Button variant="soft" size="small" startIcon={<Iconify icon="solar:chart-bold" />}>
                      Stats
                   </Button>
                </TableCell>
              </TableRow>
            ))}
            {(automations || []).length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: 'center', py: 3, color: 'text.secondary' }}>
                  No automations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

import { IconButton, Switch } from '@mui/material';
