'use client';

import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  CreditCard,
  Mail,
  Smartphone,
  Trash2,
  Save
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
  Divider,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";

const settingGroups = [
  { label: "Account", icon: User, active: true },
  { label: "Organization", icon: Building },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: Shield },
  { label: "Appearance", icon: Palette },
  { label: "Billing", icon: CreditCard },
];

export default function SettingsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Configure your personal profile and organization preferences.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 1, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <List disablePadding>
              {settingGroups.map((group) => (
                <ListItem key={group.label} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton 
                    selected={group.active}
                    sx={{ 
                      borderRadius: 3, 
                      py: 1.5,
                      '&.Mui-selected': { bgcolor: 'primary.main', color: 'white', '& .MuiListItemIcon-root': { color: 'white' } },
                      '&.Mui-selected:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: group.active ? 'white' : 'text.secondary' }}>
                      <group.icon size={20} />
                    </ListItemIcon>
                    <ListItemText primary={group.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 700 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Stack spacing={4}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>Profile Information</Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 6 }}>
                <Avatar sx={{ width: 80, height: 80, fontSize: 24, fontWeight: 800, bgcolor: 'primary.main', borderRadius: 4 }}>
                  JS
                </Avatar>
                <Box>
                  <Button variant="outlined" size="small" sx={{ borderRadius: 2, mb: 1 }}>Change Avatar</Button>
                  <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                    Recommended: 800x800px, JPG or PNG.
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="caption" sx={{ fontWeight: 700, mb: 1, display: 'block', px: 1 }}>Full Name</Typography>
                  <TextField fullWidth size="small" defaultValue="John Smith" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="caption" sx={{ fontWeight: 700, mb: 1, display: 'block', px: 1 }}>Email Address</Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    defaultValue="john@mymanager.com" 
                    variant="outlined" 
                    InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={16} /></InputAdornment>, sx: { borderRadius: 3 } }} 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="caption" sx={{ fontWeight: 700, mb: 1, display: 'block', px: 1 }}>Phone Number</Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    defaultValue="+1 (555) 000-0000" 
                    variant="outlined" 
                    InputProps={{ startAdornment: <InputAdornment position="start"><Smartphone size={16} /></InputAdornment>, sx: { borderRadius: 3 } }} 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                   <Typography variant="caption" sx={{ fontWeight: 700, mb: 1, display: 'block', px: 1 }}>Timezone</Typography>
                   <Select
                     fullWidth
                     size="small"
                     defaultValue="EST"
                     sx={{ borderRadius: 3 }}
                   >
                     <MenuItem value="EST">(GMT-05:00) Eastern Time</MenuItem>
                     <MenuItem value="PST">(GMT-08:00) Pacific Time</MenuItem>
                   </Select>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 6 }}>
                <Button sx={{ color: 'text.secondary', fontWeight: 700 }}>Discard</Button>
                <Button variant="contained" startIcon={<Save size={18} />} sx={{ px: 4, py: 1, borderRadius: 3 }}>Save Changes</Button>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'error.light', bgcolor: 'rgba(239, 68, 68, 0.02)' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'error.main', mb: 1 }}>Danger Zone</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Delete your account and all associated data. This action is irreversible.
              </Typography>
              <Button color="error" variant="outlined" startIcon={<Trash2 size={18} />} sx={{ borderRadius: 3 }}>Delete Account</Button>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
