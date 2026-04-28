'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function FileManagerWorkspaceView() {
  const [currentFolder, setCurrentFolder] = useState('All Files');

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">File Manager</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Securely store, organize, and share your organization's digital assets.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5}>
           <Button
             variant="soft"
             color="inherit"
             startIcon={<Iconify icon="solar:folder-add-bold" />}
           >
             New Folder
           </Button>
           <Button
             variant="contained"
             startIcon={<Iconify icon="solar:upload-bold" />}
           >
             Upload Files
           </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
           <Card sx={{ p: 2 }}>
              <Stack spacing={1}>
                 <FolderNavItem icon="solar:home-2-bold" label="All Files" active={currentFolder === 'All Files'} onClick={() => setCurrentFolder('All Files')} />
                 <FolderNavItem icon="solar:star-bold" label="Starred" active={currentFolder === 'Starred'} onClick={() => setCurrentFolder('Starred')} />
                 <FolderNavItem icon="solar:share-bold" label="Shared with me" active={currentFolder === 'Shared'} onClick={() => setCurrentFolder('Shared')} />
                 <FolderNavItem icon="solar:trash-bin-trash-bold" label="Trash" active={currentFolder === 'Trash'} onClick={() => setCurrentFolder('Trash')} />
              </Stack>

              <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

              <Box sx={{ px: 1 }}>
                 <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Storage Status</Typography>
                 <LinearProgress variant="determinate" value={65} sx={{ height: 8, borderRadius: 1, mb: 1 }} />
                 <Typography variant="caption" sx={{ color: 'text.secondary' }}>6.5 GB of 10 GB used</Typography>
              </Box>
           </Card>
        </Grid>

        <Grid item xs={12} md={9}>
           <Card sx={{ p: 0, overflow: 'hidden' }}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'background.neutral' }}>
                 <Typography variant="subtitle2">{currentFolder}</Typography>
                 <Stack direction="row" spacing={1}>
                    <IconButton size="small"><Iconify icon="solar:list-bold" /></IconButton>
                    <IconButton size="small"><Iconify icon="solar:widget-bold" /></IconButton>
                 </Stack>
              </Box>

              <Grid container spacing={0}>
                 {[
                    { name: 'Marketing Assets', type: 'folder', size: '2.4 GB', items: 124 },
                    { name: 'Customer Invoices', type: 'folder', size: '156 MB', items: 45 },
                    { name: 'Legal Documents', type: 'folder', size: '42 MB', items: 12 },
                    { name: 'Organization Logo.png', type: 'image', size: '1.2 MB' },
                    { name: 'Product Catalog.pdf', type: 'pdf', size: '4.5 MB' },
                    { name: 'Spring Promo Video.mp4', type: 'video', size: '840 MB' },
                 ].map((file, index) => (
                    <Grid item xs={12} key={index}>
                       <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:hover': { bgcolor: 'background.neutral' }, cursor: 'pointer' }}>
                          <Box sx={{ p: 1, borderRadius: 1, bgcolor: file.type === 'folder' ? 'primary.lighter' : 'info.lighter', color: file.type === 'folder' ? 'primary.main' : 'info.main', mr: 2, display: 'flex' }}>
                             <Iconify icon={file.type === 'folder' ? "solar:folder-bold" : "solar:document-bold"} />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                             <Typography variant="subtitle2">{file.name}</Typography>
                             <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {file.type === 'folder' ? `${file.items} items` : file.size} • Updated 1 day ago
                             </Typography>
                          </Box>
                          <Stack direction="row" spacing={1}>
                             <IconButton size="small"><Iconify icon="solar:download-bold" /></IconButton>
                             <IconButton size="small"><Iconify icon="solar:share-bold" /></IconButton>
                             <IconButton size="small"><Iconify icon="solar:menu-dots-vertical-bold" /></IconButton>
                          </Stack>
                       </Box>
                    </Grid>
                 ))}
              </Grid>
           </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

function FolderNavItem({ icon, label, active, onClick }: any) {
   return (
      <Button
         fullWidth
         onClick={onClick}
         startIcon={<Iconify icon={icon} />}
         sx={{
            justifyContent: 'flex-start',
            px: 2,
            py: 1.5,
            color: active ? 'primary.main' : 'text.secondary',
            bgcolor: active ? 'primary.lighter' : 'transparent',
            '&:hover': { bgcolor: active ? 'primary.lighter' : 'background.neutral' }
         }}
      >
         {label}
      </Button>
   );
}
