'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Skeleton from '@mui/material/Skeleton';

import { DashboardContent } from 'src/layouts/dashboard';
import { documentService } from 'src/services/document-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { FileThumbnail } from 'src/components/file-thumbnail';

// ----------------------------------------------------------------------

export function DocumentListView() {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['documents', search],
    queryFn: () => documentService.getDocuments(),
  });

  const documents = data || [];

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Documents</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:cloud-upload-fill" />}
        >
          Upload File
        </Button>
      </Box>

      <Box sx={{ mb: 5 }}>
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search documents..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {isLoading ? (
        <Grid container spacing={3}>
          {[...Array(8)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Skeleton variant="rectangular" height={64} sx={{ borderRadius: 1, mb: 2 }} />
                <Skeleton variant="text" width="80%" sx={{ mx: 'auto' }} />
                <Skeleton variant="text" width="40%" sx={{ mx: 'auto' }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {documents.map((file: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <FileThumbnail file={file.type} sx={{ width: 64, height: 64, mb: 2 }} />

                <Typography variant="subtitle2" noWrap sx={{ width: '100%', textAlign: 'center' }}>
                  {file.name}
                </Typography>

                <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5 }}>
                  {file.file_size ? `${(file.file_size / 1024).toFixed(2)} KB` : '0 KB'} • {new Date(file.created_at).toLocaleDateString()}
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Label
                    variant="soft"
                    color={
                      (file.status === 'signed' && 'success') ||
                      (file.status === 'pending' && 'warning') ||
                      'default'
                    }
                  >
                    {file.status}
                  </Label>
                </Box>
              </Card>
            </Grid>
          ))}
          {documents.length === 0 && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" sx={{ py: 10 }}>
                No documents found.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </DashboardContent>
  );
}
