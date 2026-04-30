import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

type Props = {
  subject?: string;
  content?: string;
};

export function MarketingCampaignPreview({ subject, content }: Props) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');

  const handleView = (event: React.MouseEvent<HTMLElement>, newView: 'desktop' | 'mobile' | null) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Typography variant="h6">Preview</Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleView}
          size="small"
          aria-label="device view"
        >
          <ToggleButton value="desktop" aria-label="desktop">
            <Iconify icon="solar:monitor-bold" />
          </ToggleButton>
          <ToggleButton value="mobile" aria-label="mobile">
            <Iconify icon="solar:smartphone-bold" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'background.neutral',
          display: 'flex',
          justifyContent: 'center',
          minHeight: 500,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: view === 'desktop' ? '100%' : 375,
            height: 'fit-content',
            minHeight: 480,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z8,
            borderRadius: view === 'desktop' ? 1 : 3,
            border: (theme) => view === 'mobile' ? `solid 8px ${theme.palette.common.black}` : 'none',
            transition: (theme) => theme.transitions.create(['width', 'border']),
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Email Header Mockup */}
          <Box sx={{ p: 2, borderBottom: (theme) => `solid 1px ${theme.palette.divider}` }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Subject: {subject || '(No Subject)'}
            </Typography>
          </Box>

          {/* Email Content */}
          <Box
            sx={{
              p: 3,
              flexGrow: 1,
              overflowY: 'auto',
              '& img': { maxWidth: '100%' },
            }}
            dangerouslySetInnerHTML={{ __html: content || '<p style="color: grey; font-style: italic;">No content to display.</p>' }}
          />

          {/* Unsubscribe Footer Mockup */}
          <Box sx={{ p: 2, textAlign: 'center', borderTop: (theme) => `solid 1px ${theme.palette.divider}` }}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              You are receiving this because you subscribed to our newsletter.
              <br />
              <Box component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Unsubscribe
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
