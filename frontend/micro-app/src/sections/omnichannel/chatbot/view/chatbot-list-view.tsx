'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';
import { omniAutomationService } from 'src/services/omni-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function ChatbotListView() {
  const router = useRouter();

  const { data: chatbots, isLoading, refetch } = useQuery({
    queryKey: ['omni-chatbots'],
    queryFn: () => omniAutomationService.getChatbots(),
  });

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await omniAutomationService.updateChatbot(id, { isActive: !currentStatus });
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Box sx={{ p: 5, textAlign: 'center' }}><LinearProgress /></Box>;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Chatbots & AI Assistants</Typography>
        <Button
          component={RouterLink}
          href={paths.dashboard.omnichannel.chatbot_create}
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New Chatbot
        </Button>
      </Box>

      <Card>
        <Scrollbar>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Bot Name</TableCell>
                <TableCell>Channel/Provider</TableCell>
                <TableCell>AI Enabled</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(chatbots || []).map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography variant="subtitle2" noWrap>{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Label variant="soft" color={row.provider === 'whatsapp' ? 'success' : 'info'} startIcon={<Iconify icon={row.provider === 'whatsapp' ? 'logos:whatsapp-icon' : 'logos:telegram'} />}>
                      {row.provider}
                    </Label>
                  </TableCell>
                  <TableCell>
                    <Label variant="soft" color={row.aiEnabled ? 'primary' : 'default'}>
                      {row.aiEnabled ? 'AI Active' : 'Flow Only'}
                    </Label>
                  </TableCell>
                  <TableCell>
                    <Switch 
                      checked={row.isActive} 
                      onChange={() => handleToggleActive(row.id, row.isActive)}
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">
                     <Button size="small" variant="soft" color="primary" onClick={() => router.push(paths.dashboard.omnichannel.chatbot_flow(row.id))}>
                        Edit Flow
                     </Button>
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
