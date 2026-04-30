'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export function MarketingComplianceView() {
  const [suppressionList, setSuppressionList] = useState([
    { id: '1', email: 'bounced@example.com', reason: 'Bounce', date: '2024-04-20' },
    { id: '2', email: 'spam@gmail.com', reason: 'Complaint', date: '2024-04-22' },
    { id: '3', email: 'unsub@company.com', reason: 'Unsubscribed', date: '2024-04-25' },
  ]);

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Compliance & Suppression
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Manage your suppression list and ensure marketing compliance.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Suppression List</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <TextField
              fullWidth
              placeholder="Search suppressed emails..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="error" startIcon={<Iconify icon="solar:user-plus-bold" />}>
              Add Email
            </Button>
          </Stack>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Date Added</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {suppressionList.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      <Label
                        variant="soft"
                        color={
                          (item.reason === 'Bounce' && 'warning') ||
                          (item.reason === 'Complaint' && 'error') ||
                          'default'
                        }
                      >
                        {item.reason}
                      </Label>
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell align="right">
                      <IconButton color="error">
                        <Iconify icon="solar:trash-bin-trash-bold" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Compliance Settings</Typography>
          <Stack spacing={2}>
            <Box sx={{ p: 2, borderRadius: 1, bgcolor: 'background.neutral' }}>
              <Typography variant="subtitle2">Global Unsubscribe Link</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Required in all email campaigns. Current: [Link Enabled]
              </Typography>
            </Box>
            <Box sx={{ p: 2, borderRadius: 1, bgcolor: 'background.neutral' }}>
              <Typography variant="subtitle2">Marketing Consent Rules</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Only send to contacts with "Marketing Opt-in" status. [Active]
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </DashboardContent>
  );
}
