'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

import { useMarketingTemplates } from '../hooks/use-marketing';
import { marketingService } from '../services/marketing-service';
import { MarketingEmptyState, MarketingErrorState } from '../components/marketing-state-blocks';

export function MarketingTemplatesView() {
  const { data: templates = [], isLoading, error, refetch } = useMarketingTemplates();
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    try {
      setCreating(true);
      await marketingService.createTemplate({ name: 'New Template', type: 'email', content: '' });
      showToast({ severity: 'success', message: 'Template created.' });
      refetch();
    } catch (err: any) {
      showToast({ severity: 'error', message: err?.response?.data?.message || 'Templates are not available yet.' });
    } finally {
      setCreating(false);
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      await marketingService.duplicateTemplate(id);
      showToast({ severity: 'success', message: 'Template duplicated.' });
      refetch();
    } catch (err: any) {
      showToast({ severity: 'error', message: err?.response?.data?.message || 'Duplicate is not available.' });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await marketingService.deleteTemplate(id);
      showToast({ severity: 'success', message: 'Template deleted.' });
      refetch();
    } catch (err: any) {
      showToast({ severity: 'error', message: err?.response?.data?.message || 'Delete is not available.' });
    }
  };

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
            Templates
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Reusable campaign templates.
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={handleCreate} disabled={creating}>
          Create Template
        </Button>
      </Stack>

      {error && <MarketingErrorState title="Template request failed" description="Templates are not available yet." />}

      {!isLoading && !error && templates.length === 0 && (
        <Card sx={{ p: 2 }}>
          <MarketingEmptyState title="No templates" description="Templates are not available yet." />
        </Card>
      )}

      {templates.length > 0 && (
        <Card>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id} hover>
                    <TableCell>{template.name}</TableCell>
                    <TableCell>{template.type}</TableCell>
                    <TableCell>{template.category || '-'}</TableCell>
                    <TableCell>{template.subject || '-'}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleDuplicate(template.id)}>
                        <Iconify icon="solar:copy-bold" />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(template.id)}>
                        <Iconify icon="solar:trash-bin-trash-bold" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}

      <Alert severity="info" sx={{ mt: 2 }}>
        Use template selection from the campaign builder to apply content.
      </Alert>
    </DashboardContent>
  );
}
