'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { useParams } from 'src/routes/hooks';
import { omniAutomationService } from 'src/services/omni-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function WebhookLogsView() {
  const params = useParams();
  const id = params.id as string;

  const { data: logs, isLoading } = useQuery({
    queryKey: ['omni-webhook-logs', id],
    queryFn: () => omniAutomationService.getWebhookLogs(id),
  });

  if (isLoading) {
    return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4">Webhook Diagnostic Logs</Typography>
        <Typography variant="body2" color="text.secondary">Review incoming payloads and processing status for this webhook.</Typography>
      </Box>

      <Card>
        <Scrollbar>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Timestamp</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(logs || []).map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    {new Date(row.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Label variant="filled" color={row.status === 200 ? 'success' : 'error'}>
                      {row.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                     <Accordion sx={{ bgcolor: 'background.neutral' }}>
                        <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                           <Typography variant="subtitle2">View Payload & Headers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Box sx={{ mb: 2 }}>
                              <Typography variant="overline" color="primary">Payload</Typography>
                              <pre style={{ margin: 0, padding: '10px', background: '#222', color: '#fff', borderRadius: '4px', fontSize: '12px', overflow: 'auto' }}>
                                 {JSON.stringify(row.payload, null, 2)}
                              </pre>
                           </Box>
                           <Box>
                              <Typography variant="overline" color="secondary">Headers</Typography>
                              <pre style={{ margin: 0, padding: '10px', background: '#222', color: '#fff', borderRadius: '4px', fontSize: '12px', overflow: 'auto' }}>
                                 {JSON.stringify(row.headers, null, 2)}
                              </pre>
                           </Box>
                        </AccordionDetails>
                     </Accordion>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </DashboardContent>
  );
}
