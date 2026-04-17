'use client';

import { 
  Plus, 
  Search, 
  ExternalLink, 
  Settings, 
  RefreshCw, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Mail,
  Slack,
  CreditCard,
  Layers,
  CheckCircle2
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
  CardContent,
  CardActions,
  Switch,
  Divider,
  Tooltip
} from "@mui/material";

const integrations = [
  { id: 1, name: "Stripe", category: "Payments", status: "Connected", desc: "Process payments and manage subscriptions.", icon: CreditCard, color: "#6366f1" },
  { id: 2, name: "Slack", category: "Communication", status: "Connected", desc: "Get real-time notifications for leads and sales.", icon: Slack, color: "#4a154b" },
  { id: 3, name: "Mailchimp", category: "Marketing", status: "Not Connected", desc: "Sync your contacts for advanced email campaigns.", icon: Mail, color: "#ffe01b" },
  { id: 4, name: "Zapier", category: "Automation", status: "Not Connected", desc: "Connect with over 3,000+ apps and services.", icon: Zap, color: "#ff4a00" },
  { id: 5, name: "Google Analytics", category: "Analytics", status: "Connected", desc: "Track visitor behavior and conversion metrics.", icon: Globe, color: "#f9ab00" },
  { id: 6, name: "PostgreSQL", category: "Database", status: "Not Connected", desc: "Export your data to external data warehouses.", icon: Database, color: "#336791" },
];

export default function IntegrationsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Marketplace & Integrations
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Extend your dashboard's capabilities with our ecosystem of third-party apps.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<RefreshCw size={20} />} sx={{ borderRadius: 3 }}>Refresh Status</Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>Request Integration</Button>
        </Stack>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Stack direction="row" spacing={2}>
            <TextField 
              placeholder="Search apps..." 
              size="small" 
              sx={{ width: 350 }}
              InputProps={{ startAdornment: <InputAdornment position="start"><Search size={18} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'background.paper' } }}
            />
            <Stack direction="row" spacing={1}>
               {['All', 'Marketing', 'Payments', 'Automation'].map((cat) => (
                 <Chip key={cat} label={cat} variant={cat === 'All' ? 'filled' : 'outlined'} sx={{ fontWeight: 700, borderRadius: 2 }} clickable />
               ))}
            </Stack>
         </Stack>
      </Box>

      <Grid container spacing={3}>
        {integrations.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app.id}>
            <Card elevation={0} sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: app.status === 'Connected' ? 'primary.light' : 'divider', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                   <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.02)', color: app.color, width: 48, height: 48, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                      <app.icon size={24} />
                   </Avatar>
                   <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" sx={{ color: app.status === 'Connected' ? 'success.main' : 'text.disabled', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {app.status === 'Connected' && <CheckCircle2 size={12} />} {app.status}
                      </Typography>
                      <Switch checked={app.status === 'Connected'} size="small" />
                   </Box>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{app.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, bgcolor: 'rgba(0,0,0,0.03)', px: 1, py: 0.3, borderRadius: 1 }}>{app.category}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, height: 40, overflow: 'hidden' }}>{app.desc}</Typography>
              </CardContent>
              <Divider sx={{ opacity: 0.5 }} />
              <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                 <Button variant="text" size="small" sx={{ fontWeight: 800, textTransform: 'none' }}>View Documentation</Button>
                 <IconButton size="small"><Settings size={18} /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={0} 
        sx={{ 
          mt: 6, 
          p: 4, 
          borderRadius: 4, 
          border: '1px solid', 
          borderColor: 'primary.light', 
          bgcolor: 'rgba(99, 102, 241, 0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
           <Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 56, height: 56 }}>
              <Layers size={28} />
           </Avatar>
           <Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Custom Webhooks & API</Typography>
              <Typography variant="body2" color="text.secondary">Build your own integrations with our robust REST API and incoming webhook system.</Typography>
           </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
           <Button variant="outlined" sx={{ borderRadius: 3 }}>Developer Docs</Button>
           <Button variant="contained" sx={{ borderRadius: 3 }}>Create Webhook</Button>
        </Stack>
      </Paper>
    </Box>
  );
}
