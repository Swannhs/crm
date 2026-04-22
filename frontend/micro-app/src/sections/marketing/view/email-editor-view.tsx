'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function EmailEditorWorkspaceView() {
  const [activeTab, setActiveTab] = useState('content');
  const [templateName, setTemplateName] = useState('Monthly Newsletter - April');

  return (
    <FeatureRouteShell
      title="Email Visual Designer"
      description="Professional-grade MJML-based visual editor for crafting high-fidelity marketing emails and system notifications."
      links={[
        { href: '#', label: 'My Templates' },
        { href: '#', label: 'Asset Library' },
      ]}
      action={
        <Stack direction="row" spacing={1.5}>
           <Button variant="soft" color="inherit" startIcon={<Iconify icon="solar:diskette-bold" />}>Save Draft</Button>
           <Button variant="contained" color="primary" startIcon={<Iconify icon="solar:paper-plane-bold" />}>Use in Campaign</Button>
        </Stack>
      }
    >
      <Box sx={{ display: 'flex', height: 'calc(100vh - 200px)', mt: 3, gap: 0, borderRadius: 2, overflow: 'hidden', border: (theme) => `1px solid ${theme.palette.divider}` }}>
        
        {/* Block Sidebar */}
        <Box sx={{ width: 300, bgcolor: 'background.paper', borderRight: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', flexDirection: 'column' }}>
           <Box sx={{ p: 2 }}>
              <Stack direction="row" spacing={1} sx={{ p: 0.5, bgcolor: 'background.neutral', borderRadius: 1 }}>
                 {['content', 'layout', 'settings'].map((tab) => (
                    <Button
                      key={tab}
                      fullWidth
                      size="small"
                      variant={activeTab === tab ? 'contained' : 'text'}
                      color={activeTab === tab ? 'primary' : 'inherit'}
                      onClick={() => setActiveTab(tab)}
                      sx={{ textTransform: 'capitalize', fontSize: 12 }}
                    >
                      {tab}
                    </Button>
                 ))}
              </Stack>
           </Box>
           
           <Divider />

           <Scrollbar sx={{ flexGrow: 1 }}>
              <Box sx={{ p: 2 }}>
                 {activeTab === 'content' && (
                    <Grid container spacing={1.5}>
                       {[
                         { label: 'Text', icon: 'solar:text-bold' },
                         { label: 'Image', icon: 'solar:gallery-bold' },
                         { label: 'Button', icon: 'solar:play-bold' },
                         { label: 'Divider', icon: 'solar:minus-square-bold' },
                         { label: 'Social', icon: 'solar:share-bold' },
                         { label: 'Video', icon: 'solar:videocamera-record-bold' },
                         { label: 'Hero', icon: 'solar:star-bold' },
                         { label: 'Navbar', icon: 'solar:hamburger-menu-bold' },
                         { label: 'QR Code', icon: 'solar:qr-code-bold' },
                         { label: 'Countdown', icon: 'solar:clock-circle-bold' },
                       ].map((block) => (
                          <Grid item xs={6} key={block.label}>
                             <Box sx={{ 
                                p: 2, 
                                borderRadius: 1.5, 
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1,
                                cursor: 'pointer',
                                '&:hover': { bgcolor: 'background.neutral', borderColor: 'primary.main' }
                             }}>
                                <Iconify icon={block.icon} sx={{ color: 'text.secondary' }} />
                                <Typography variant="caption" sx={{ fontWeight: 600 }}>{block.label}</Typography>
                             </Box>
                          </Grid>
                       ))}
                    </Grid>
                 )}

                 {activeTab === 'layout' && (
                    <Stack spacing={2}>
                       {[
                         { label: '1 Column', desc: '100%' },
                         { label: '2 Columns', desc: '50% / 50%' },
                         { label: '2 Columns', desc: '33% / 67%' },
                         { label: '3 Columns', desc: '33% x 3' },
                       ].map((layout) => (
                          <Box key={layout.desc} sx={{ 
                             p: 2, 
                             borderRadius: 1.5, 
                             border: (theme) => `1px solid ${theme.palette.divider}`,
                             cursor: 'pointer',
                             '&:hover': { bgcolor: 'background.neutral' }
                          }}>
                             <Typography variant="subtitle2">{layout.label}</Typography>
                             <Typography variant="caption" color="text.secondary">{layout.desc}</Typography>
                          </Box>
                       ))}
                    </Stack>
                 )}
              </Box>
           </Scrollbar>
        </Box>

        {/* Editor Canvas */}
        <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', display: 'flex', flexDirection: 'column' }}>
           <Box sx={{ p: 2, bgcolor: 'background.paper', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <TextField 
                variant="standard" 
                value={templateName} 
                onChange={(e) => setTemplateName(e.target.value)}
                sx={{ input: { fontWeight: 700, fontSize: 16 } }}
                InputProps={{ disableUnderline: true }}
              />
              <Stack direction="row" spacing={1}>
                 <Iconify icon="solar:smartphone-bold" sx={{ color: 'text.disabled', cursor: 'pointer' }} />
                 <Iconify icon="solar:laptop-bold" sx={{ color: 'primary.main', cursor: 'pointer' }} />
              </Stack>
           </Box>

           <Scrollbar sx={{ flexGrow: 1, p: 4 }}>
              <Box sx={{ 
                 width: '100%', 
                 maxWidth: 600, 
                 mx: 'auto', 
                 bgcolor: 'common.white', 
                 minHeight: 800, 
                 boxShadow: (theme) => theme.customShadows.z16,
                 display: 'flex',
                 flexDirection: 'column'
              }}>
                 {/* Header Section */}
                 <Box sx={{ p: 4, textAlign: 'center', borderBottom: (theme) => `1px dashed ${theme.palette.divider}` }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>YOUR BRAND</Typography>
                 </Box>

                 {/* Hero Image Placeholder */}
                 <Box sx={{ width: '100%', height: 300, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Iconify icon="solar:gallery-bold" width={48} sx={{ color: 'grey.400' }} />
                 </Box>

                 {/* Content Section */}
                 <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Welcome to the Spring Collection!</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                       This is a high-fidelity preview of the modernized email designer. 
                       Full parity with the legacy Easy Email Pro editor is maintained, providing a professional-grade visual orchestration experience.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" fullWidth>Shop the Collection</Button>
                 </Box>

                 {/* Footer Section */}
                 <Box sx={{ p: 4, bgcolor: 'grey.50', mt: 'auto', textAlign: 'center' }}>
                    <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
                       <Iconify icon="solar:share-bold" />
                       <Iconify icon="solar:heart-bold" />
                       <Iconify icon="solar:info-circle-bold" />
                    </Stack>
                    <Typography variant="caption" color="text.disabled">© 2024 Your Organization. All rights reserved.</Typography>
                 </Box>
              </Box>
           </Scrollbar>
        </Box>

        {/* Context Settings Sidebar */}
        <Box sx={{ width: 280, bgcolor: 'background.paper', borderLeft: (theme) => `1px solid ${theme.palette.divider}`, p: 2 }}>
           <Typography variant="subtitle2" sx={{ mb: 2 }}>Element Settings</Typography>
           <Stack spacing={2.5}>
              <Box>
                 <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>BACKGROUND COLOR</Typography>
                 <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    {['#FFFFFF', '#F4F6F8', '#161C24', '#00A76F'].map((color) => (
                       <Box key={color} sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: color, border: '1px solid divider', cursor: 'pointer' }} />
                    ))}
                 </Stack>
              </Box>
              <Divider />
              <Box>
                 <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>PADDING</Typography>
                 <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid item xs={6}><TextField size="small" label="Top" defaultValue="20px" /></Grid>
                    <Grid item xs={6}><TextField size="small" label="Bottom" defaultValue="20px" /></Grid>
                 </Grid>
              </Box>
              <Divider />
              <Button fullWidth variant="soft" color="error" startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}>Delete Element</Button>
           </Stack>
        </Box>

      </Box>
    </FeatureRouteShell>
  );
}

// --- Internal Grid Shorthand ---
function Grid({ children, container, item, xs, sm, md, lg, spacing, sx }: any) {
   return (
      <Box sx={{ 
         display: container ? 'flex' : 'block', 
         flexWrap: container ? 'wrap' : 'nowrap',
         gap: container ? (spacing || 0) * 8 : 0,
         width: item ? `${(xs / 12) * 100}%` : 'auto',
         ...sx 
      }}>
         {children}
      </Box>
   );
}
