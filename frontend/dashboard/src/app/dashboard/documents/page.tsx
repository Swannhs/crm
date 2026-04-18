'use client';

import { 
  FileText, 
  Upload, 
  Eye, 
  Download,
  Share2,
  Lock,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress,
  Stack,
  Tooltip
} from "@mui/material";
import { documentService } from "@/services/document.service";
import { useQuery } from "@tanstack/react-query";

export default function DocumentsPage() {
  const { data: docsResponse, isLoading, error } = useQuery({
    queryKey: ['documents'],
    queryFn: () => documentService.getDocuments(),
  });

  const documents = docsResponse?.data || [];

  const signedCount = documents.filter(d => d.status === 'signed').length;
  const pendingCount = documents.filter(d => d.status === 'pending').length;

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Document Vault
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Securely store, sign, and manage organization documents.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Upload size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Upload New
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Signed", count: signedCount, icon: CheckCircle2, color: '#10b981' },
          { label: "Pending", count: pendingCount, icon: Clock, color: '#f59e0b' },
          { label: "Total Files", count: documents.length, icon: FileText, color: '#6366f1' },
          { label: "Vault Status", count: "Active", icon: Lock, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper 
               elevation={0} 
               sx={{ 
                 p: 3, 
                 borderRadius: 4, 
                 border: '1px solid', 
                 borderColor: 'divider',
                 borderBottom: `4px solid ${stat.color}`
               }}
             >
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                  {stat.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {stat.count}
                </Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 4, 
          overflow: 'hidden', 
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="text" sx={{ fontWeight: 800, borderBottom: '2px solid', borderColor: 'primary.main', borderRadius: 0 }}>All Files</Button>
            <Button size="small" variant="text" color="inherit" sx={{ fontWeight: 600, color: 'text.secondary' }}>Shared with me</Button>
          </Stack>
          <TextField
             variant="outlined"
             placeholder="Search files..."
             size="small"
             sx={{ maxWidth: 300 }}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <Search size={16} />
                 </InputAdornment>
               ),
               sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' }
             }}
          />
        </Box>

        <TableContainer>
          {isLoading ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <CircularProgress size={30} sx={{ mb: 2 }} />
              <Typography color="text.secondary">Accessing vault...</Typography>
            </Box>
          ) : error ? (
            <Box sx={{ p: 10, textAlign: 'center', color: 'error.main' }}>
              <Typography>Failed to load secure vault data.</Typography>
            </Box>
          ) : documents.length === 0 ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <Typography color="text.secondary">Your document vault is empty.</Typography>
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>File Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Details</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.05)', color: 'text.secondary', borderRadius: 2 }}>
                          <FileText size={20} />
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{doc.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{doc.file_size ? (doc.file_size / 1024).toFixed(1) + ' KB' : 'Unknown'}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={doc.status} 
                        size="small"
                        sx={{ 
                          fontWeight: 700, textTransform: 'uppercase', fontSize: 10,
                          borderRadius: 1.5,
                          bgcolor: doc.status === 'signed' ? 'success.light' : 'warning.light',
                          color: doc.status === 'signed' ? 'success.dark' : 'warning.dark',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                        {doc.type.toUpperCase()} • {new Date(doc.created_at).toLocaleDateString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <Tooltip title="Preview"><IconButton size="small"><Eye size={18} /></IconButton></Tooltip>
                        <Tooltip title="Download"><IconButton size="small"><Download size={18} /></IconButton></Tooltip>
                        <Tooltip title="Share"><IconButton size="small"><Share2 size={18} /></IconButton></Tooltip>
                        <IconButton size="small"><MoreVertical size={18} /></IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Paper>
    </Box>
  );
}
