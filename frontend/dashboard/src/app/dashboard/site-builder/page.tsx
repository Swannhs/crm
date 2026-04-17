'use client';

import { 
  Plus, 
  ExternalLink, 
  Globe, 
  Monitor, 
  Smartphone, 
  Layers,
  Search,
  MoreVertical,
  Settings,
  Eye,
  Rocket,
  Edit3
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  TextField, 
  InputAdornment,
  Stack,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Tooltip,
  Divider
} from "@mui/material";

const sites = [
  { 
    id: 1, 
    name: "Main Portfolio", 
    url: "mymanager.com/swann", 
    status: "Published", 
    lastEdited: "2 hours ago",
    pages: 12,
    visits: "1.2k",
    preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
  },
  { 
    id: 2, 
    name: "Landing Page A/B", 
    url: "mymanager.com/promo-q2", 
    status: "Draft", 
    lastEdited: "Yesterday",
    pages: 1,
    visits: "0",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
];

export default function SiteBuilderPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Web Builder
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Build stunning, responsive websites and high-converting landing pages.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Create New Site
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total Sites", value: "4", icon: Globe, color: '#6366f1' },
          { label: "Active Pages", value: "28", icon: Layers, color: '#10b981' },
          { label: "Unique Visitors", value: "4.8k", icon: Monitor, color: '#f59e0b' },
          { label: "Domain Link", value: "Custom", icon: Rocket, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>
                    {stat.label}
                  </Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {stat.value}
                </Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ p: 3, mb: 4, bgcolor: 'rgba(99, 102, 241, 0.05)', borderRadius: 4, border: '1px dashed', borderColor: 'primary.light', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={3} alignItems="center">
           <Avatar sx={{ bgcolor: 'primary.main' }}><Rocket size={20} /></Avatar>
           <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Connect Custom Domain</Typography>
              <Typography variant="caption" color="text.secondary">Step up your brand by connecting your own domain name (e.g. www.yourcompany.com)</Typography>
           </Box>
        </Stack>
        <Button variant="contained" size="small" sx={{ borderRadius: 2 }}>Domain Settings</Button>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>My Sites</Typography>

      <Grid container spacing={4}>
        {sites.map((site) => (
          <Grid item xs={12} md={6} key={site.id}>
            <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="180"
                image={site.preview}
                alt={site.name}
              />
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>{site.name}</Typography>
                  <Chip 
                    label={site.status} 
                    size="small" 
                    sx={{ 
                      fontWeight: 800, fontSize: 10, borderRadius: 1.5,
                      bgcolor: site.status === 'Published' ? 'success.light' : 'action.selected',
                      color: site.status === 'Published' ? 'success.dark' : 'text.secondary'
                    }} 
                  />
                </Box>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                   {site.url} <ExternalLink size={12} />
                </Typography>
                
                <Stack direction="row" spacing={4}>
                   <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Pages</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{site.pages}</Typography>
                   </Box>
                   <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Monthly Visits</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{site.visits}</Typography>
                   </Box>
                   <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Updated</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{site.lastEdited}</Typography>
                   </Box>
                </Stack>
              </CardContent>
              <Divider sx={{ opacity: 0.5 }} />
              <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                 <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" startIcon={<Edit3 size={16} />} sx={{ borderRadius: 2 }}>Edit Site</Button>
                    <IconButton size="small"><Eye size={18} /></IconButton>
                 </Stack>
                 <IconButton size="small"><Settings size={18} /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
        
        <Grid item xs={12} md={6}>
           <Paper 
             elevation={0} 
             sx={{ 
               height: '100%', 
               minHeight: 320, 
               borderRadius: 4, 
               border: '2px dashed', 
               borderColor: 'divider', 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               justifyContent: 'center',
               bgcolor: 'rgba(0,0,0,0.01)',
               cursor: 'pointer',
               '&:hover': { bgcolor: 'rgba(0,0,0,0.03)', borderColor: 'primary.main' }
             }}
           >
              <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.05)', color: 'text.secondary', mb: 2 }}>
                <Plus size={24} />
              </Avatar>
              <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Create New Site</Typography>
              <Typography variant="caption" color="text.secondary">Start from a template or a blank canvas</Typography>
           </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
