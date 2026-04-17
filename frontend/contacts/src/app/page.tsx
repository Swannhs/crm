'use client';

import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Clock,
  User as UserIcon
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  InputAdornment, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip, 
  IconButton, 
  CircularProgress,
  Avatar
} from "@mui/material";
import { contactService } from "@/services/contact.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: contactsResponse, isLoading, error } = useQuery({
    queryKey: ['contacts', searchTerm],
    queryFn: () => contactService.getContacts(searchTerm),
  });

  const contacts = contactsResponse?.data || [];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary' }}>
            Contacts
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your customers and partners in one place.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Add Contact
        </Button>
      </Box>

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
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
             fullWidth
             variant="outlined"
             placeholder="Search contacts..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             size="small"
             sx={{ maxWidth: 400 }}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <Search size={18} />
                 </InputAdornment>
               ),
               sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' }
             }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="outlined" startIcon={<Filter size={18} />} sx={{ borderRadius: 3 }}>
            Filter
          </Button>
          <Button variant="outlined" sx={{ borderRadius: 3 }}>
            Export
          </Button>
        </Box>

        <TableContainer>
          {isLoading ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <CircularProgress size={30} sx={{ mb: 2 }} />
              <Typography color="text.secondary">Loading contacts...</Typography>
            </Box>
          ) : error ? (
            <Box sx={{ p: 10, textAlign: 'center', bgcolor: 'error.main', color: 'error.contrastText' }}>
              <Typography>Failed to load contacts. Please verify service status.</Typography>
            </Box>
          ) : contacts.length === 0 ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <Typography sx={{ fontStyle: 'italic', color: 'text.secondary' }}>No contacts found.</Typography>
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Contact</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Created</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: 'primary.light', 
                            width: 40, 
                            height: 40, 
                            fontSize: 16, 
                            fontWeight: 700,
                            borderRadius: '12px' 
                          }}
                        >
                          {contact.name ? contact.name[0].toUpperCase() : <UserIcon size={20} />}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{contact.name}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Mail size={12} /> {contact.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={contact.status} 
                        size="small"
                        sx={{ 
                          fontWeight: 700, 
                          textTransform: 'capitalize',
                          borderRadius: 2,
                          bgcolor: contact.status === 'active' ? 'success.light' : 'action.selected',
                          color: contact.status === 'active' ? 'success.dark' : 'text.secondary',
                          '& .MuiChip-label': { px: 1.5 }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ textTransform: 'capitalize', fontWeight: 500 }}>{contact.type}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                        <Clock size={14} />
                        <Typography variant="caption">{new Date(contact.created_at).toLocaleDateString()}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <MoreVertical size={20} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {!isLoading && !error && contacts.length > 0 && (
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              Showing {contacts.length} contacts
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button size="small" variant="text" disabled sx={{ borderRadius: 2 }}>Previous</Button>
              <Button size="small" variant="text" sx={{ borderRadius: 2 }}>Next</Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

