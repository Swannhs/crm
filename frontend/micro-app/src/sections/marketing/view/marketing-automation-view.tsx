'use client';

import { useState } from 'react';
import Link from 'next/link';

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
import Switch from '@mui/material/Switch';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export function MarketingAutomationView() {
  // Mock data for automation workflows
  const automations = [
    {
      id: '1',
      name: 'Welcome Email Sequence',
      trigger: 'Contact Created',
      steps: 3,
      activeRuns: 124,
      status: 'active',
    },
    {
      id: '2',
      name: 'Abandoned Cart Recovery',
      trigger: 'Order Pending',
      steps: 2,
      activeRuns: 45,
      status: 'active',
    },
    {
      id: '3',
      name: 'Post-Purchase Thank You',
      trigger: 'Order Placed',
      steps: 1,
      activeRuns: 567,
      status: 'inactive',
    },
  ];

  return (
    <DashboardContent maxWidth="xl">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Automations
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Create automated workflows to engage with your customers at every stage.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          Create Automation
        </Button>
      </Stack>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Workflow Name</TableCell>
                <TableCell>Trigger</TableCell>
                <TableCell>Steps</TableCell>
                <TableCell>Active Runs</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {automations.map((automation) => (
                <TableRow key={automation.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2">{automation.name}</Typography>
                  </TableCell>

                  <TableCell>
                    <Label variant="soft" color="info">
                      {automation.trigger}
                    </Label>
                  </TableCell>

                  <TableCell>{automation.steps} steps</TableCell>
                  
                  <TableCell>{automation.activeRuns}</TableCell>

                  <TableCell>
                    <Switch defaultChecked={automation.status === 'active'} />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton>
                      <Iconify icon="solar:pen-bold" />
                    </IconButton>
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
    </DashboardContent>
  );
}
