'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';

import { useMarketingTemplates } from '../hooks/use-marketing';

// ----------------------------------------------------------------------

export function MarketingTemplatesView() {
  const { data: templates = [], isLoading } = useMarketingTemplates();

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
            Reusable templates for your email and SMS campaigns.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          Create Template
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {templates.map((template) => (
          <Grid key={template.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={template.previewImage || 'https://placehold.co/600x400?text=Template+Preview'}
                alt={template.name}
              />
              <CardContent>
                <Typography variant="subtitle2" noWrap>
                  {template.name}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Label variant="soft" color="info">
                    {template.category}
                  </Label>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton size="small">
                  <Iconify icon="solar:pen-bold" />
                </IconButton>
                <IconButton size="small">
                  <Iconify icon="solar:copy-bold" />
                </IconButton>
                <IconButton size="small" color="error">
                  <Iconify icon="solar:trash-bin-trash-bold" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {templates.length === 0 && !isLoading && (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography variant="h6" gutterBottom>
                No templates found
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Create your first template to speed up campaign creation.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </DashboardContent>
  );
}
