'use client';

import { 
  Plus, 
  Search, 
  MoreVertical, 
  FileText, 
  BarChart3, 
  Copy, 
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Eye,
  Settings,
  MousePointer2,
  Trash2,
  Filter
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Card,
  CardContent,
  Tooltip
} from "@mui/material";

const forms = [
  { id: 1, name: "Lead Generation Form", type: "Lead Capture", responses: 450, status: "Active", conversion: "12.4%", created: "Oct 12, 2023" },
  { id: 2, name: "Customer Satisfaction Survey", type: "Survey", responses: 120, status: "Active", conversion: "85%", created: "Nov 05, 2023" },
  { id: 3, name: "Workshop Registration", type: "Event", responses: 45, status: "Paused", conversion: "6.2%", created: "Nov 15, 2023" },
  { id: 4, name: "Feedback (Beta)", type: "Internal", responses: 0, status: "Draft", conversion: "0%", created: "Today" },
];

export default function FormsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Forms & Surveys
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Capture leads, gather feedback, and conduct research with ease.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Create New Form
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total Forms", value: "24", icon: FileText, color: '#6366f1' },
          { label: "Total Responses", value: "2.4k", icon: MessageSquare, color: '#10b981' },
          { label: "Avg. Conversion", value: "12.1%", icon: MousePointer2, color: '#f59e0b' },
          { label: "Active Forms", value: "18", icon: CheckCircle2, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>{stat.label}</Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
             <TextField 
               fullWidth
               placeholder="Search forms..." 
               size="small" 
               InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
             />
             <Button variant="outlined" startIcon={<Filter size={18} />} sx={{ borderRadius: 3 }}>Filter</Button>
          </Stack>
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Form Name</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Responses</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Conversion</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Date</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{form.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={form.type} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: 10 }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{form.responses}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: 100 }}>
                       <Typography variant="caption" sx={{ fontWeight: 800, mb: 0.5, display: 'block' }}>{form.conversion}</Typography>
                       <LinearProgress variant="determinate" value={parseFloat(form.conversion)} sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)' }} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={form.status} 
                      size="small" 
                      sx={{ 
                        fontWeight: 800, fontSize: 10, borderRadius: 1.5,
                        bgcolor: form.status === 'Active' ? 'success.light' : form.status === 'Draft' ? 'action.selected' : 'warning.light',
                        color: form.status === 'Active' ? 'success.dark' : form.status === 'Draft' ? 'text.secondary' : 'warning.dark'
                      }} 
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption" color="text.secondary">{form.created}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                       <Tooltip title="View Analytics"><IconButton size="small"><BarChart3 size={18} /></IconButton></Tooltip>
                       <Tooltip title="Copy Public Link"><IconButton size="small"><Copy size={18} /></IconButton></Tooltip>
                       <IconButton size="small"><MoreVertical size={18} /></IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
