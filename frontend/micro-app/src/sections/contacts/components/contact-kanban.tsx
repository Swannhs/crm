'use client';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import { alpha, useTheme } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

import { m } from 'framer-motion';

import Menu from '@mui/material/Menu';

import { contactService } from 'src/services/contact-service';

import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const DEFAULT_COLUMNS = [
  { id: 'lead', label: 'Lead', color: 'warning' },
  { id: 'member', label: 'Member', color: 'success' },
  { id: 'client', label: 'Client', color: 'info' },
  { id: 'vendor', label: 'Vendor', color: 'secondary' },
  { id: 'employee', label: 'Employee', color: 'primary' },
];

type Props = {
  contacts: any[];
  isLoading?: boolean;
  onAddContact?: () => void;
  onEditContact?: (contact: any) => void;
  onDeleteContact?: (contact: any) => void;
  onViewContact?: (contact: any) => void;
};

export function ContactKanban({ 
  contacts, 
  isLoading, 
  onAddContact,
  onEditContact,
  onDeleteContact,
  onViewContact
}: Props) {
  const theme = useTheme();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('contacts-kanban-columns');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const seen = new Set<string>();
          const cleaned = parsed.filter((c: any) => {
            const id = String(c?.id || '').toLowerCase();
            if (!id || seen.has(id)) return false;
            seen.add(id);
            return true;
          });
          const required = ['lead', 'member', 'client', 'vendor', 'employee'];
          const existingIds = new Set(cleaned.map((c: any) => String(c.id).toLowerCase()));
          const missingDefaults = DEFAULT_COLUMNS.filter((c) => !existingIds.has(c.id));
          const normalized = [...missingDefaults, ...cleaned].filter((c: any) => required.includes(String(c.id).toLowerCase()));
          setColumns(normalized);
          window.localStorage.setItem('contacts-kanban-columns', JSON.stringify(normalized));
        }
      }
    } catch {
      // noop
    }
  }, []);

  const persistColumns = (nextColumns: typeof DEFAULT_COLUMNS) => {
    setColumns(nextColumns);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('contacts-kanban-columns', JSON.stringify(nextColumns));
    }
  };

  const onDragStart = (e: React.DragEvent, id: string) => {
    const normalizedId = String(id);
    setDraggingId(normalizedId);
    e.dataTransfer.setData('text/plain', normalizedId);
    e.dataTransfer.setData('contactId', normalizedId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const onDragEnd = () => {
    setDraggingId(null);
  };

  const onDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    const contactId = e.dataTransfer.getData('contactId') || e.dataTransfer.getData('text/plain');
    setDraggingId(null);

    if (!contactId) return;

    try {
      const contact = contacts.find(c => String(c._id || c.id) === String(contactId));
      if (contact && contact.status !== newStatus) {
        await contactService.updateContact(String(contactId), { status: newStatus });
        showToast({ message: `Moved to ${newStatus}`, severity: 'success' });
        // Trigger refetch via parent (this is a bit hacky, but works if we don't have a global state)
        window.dispatchEvent(new CustomEvent('REFETCH_CONTACTS'));
      }
    } catch (error) {
      showToast({ message: 'Failed to update status', severity: 'warning' });
    }
  };

  const getContactsByStatus = (status: string) => contacts.filter((c) => {
      const rowStatus = String(c.status || '').toLowerCase();
      const rowType = String(c.contactType?.[0] || '').toLowerCase();
      return rowStatus === status || rowType === status;
    });

  if (isLoading) {
    return (
      <Stack direction="row" spacing={3} sx={{ px: 1, py: 3, overflow: 'hidden' }}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} variant="rectangular" width={300} height={500} sx={{ borderRadius: 2 }} />
        ))}
      </Stack>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', pb: 3, overflowX: 'auto' }}>
      <Stack direction="row" spacing={3} sx={{ px: 1 }}>
        {columns.map((column) => (
          <Stack
            key={column.id}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, column.id)}
            spacing={2}
            sx={{
              width: 300,
              flexShrink: 0,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.background.neutral, 0.5),
              border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              p: 2,
              minHeight: 600,
              transition: theme.transitions.create(['background-color']),
              '&:hover': {
                 bgcolor: alpha(theme.palette.background.neutral, 0.8),
              }
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: `${column.color}.main` }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{column.label}</Typography>
                <Label color={column.color as any} variant="soft" sx={{ ml: 1 }}>
                  {getContactsByStatus(column.id).length}
                </Label>
              </Stack>
              <IconButton size="small" onClick={() => setSettingsOpen(true)}>
                <Iconify icon="solar:menu-dots-bold" />
              </IconButton>
            </Stack>

            <Stack spacing={2} sx={{ minHeight: 100 }}>
              {getContactsByStatus(column.id).map((contact) => (
                <ContactCard 
                  key={contact._id || contact.id} 
                  contact={contact} 
                  isDragging={draggingId === String(contact._id || contact.id)}
                  onDragStart={(e) => onDragStart(e, String(contact._id || contact.id))}
                  onDragEnd={onDragEnd}
                  onClick={() => onViewContact?.(contact)}
                  onEdit={() => onEditContact?.(contact)}
                  onDelete={() => onDeleteContact?.(contact)}
                />
              ))}
              
              {getContactsByStatus(column.id).length === 0 && (
                 <Box 
                   sx={{ 
                     py: 5, 
                     border: `1px dashed ${theme.palette.divider}`, 
                     borderRadius: 1,
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     color: 'text.disabled'
                   }}
                 >
                   <Typography variant="caption">Drop here</Typography>
                 </Box>
              )}
            </Stack>

            <Button
              fullWidth
              size="small"
              color="inherit"
              startIcon={<Iconify icon="solar:add-circle-bold" />}
              onClick={onAddContact}
              sx={{ mt: 'auto', py: 1, border: `1px dashed ${theme.palette.divider}` }}
            >
              Add Contact
            </Button>
          </Stack>
        ))}
      </Stack>

      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Kanban Configuration</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            {columns.map((column, idx) => (
              <Stack key={column.id} direction="row" spacing={1.5}>
                <TextField
                  label={`${column.id} label`}
                  value={column.label}
                  onChange={(e) => {
                    const next = [...columns];
                    next[idx] = { ...next[idx], label: e.target.value };
                    persistColumns(next as any);
                  }}
                  fullWidth
                  size="small"
                />
                <TextField
                  select
                  label="Color"
                  value={column.color}
                  onChange={(e) => {
                    const next = [...columns];
                    next[idx] = { ...next[idx], color: e.target.value };
                    persistColumns(next as any);
                  }}
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="info">Info</MenuItem>
                  <MenuItem value="warning">Warning</MenuItem>
                  <MenuItem value="success">Success</MenuItem>
                  <MenuItem value="secondary">Secondary</MenuItem>
                  <MenuItem value="error">Error</MenuItem>
                  <MenuItem value="primary">Primary</MenuItem>
                </TextField>
              </Stack>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            onClick={() => {
              persistColumns(DEFAULT_COLUMNS as any);
            }}
          >
            Reset
          </Button>
          <Button variant="contained" onClick={() => setSettingsOpen(false)}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function ContactCard({ contact, onClick, onDragStart, onDragEnd, isDragging, onEdit, onDelete }: any) {
  const theme = useTheme();
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <m.div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98, opacity: 0.8 }}
      transition={{ duration: 0.2 }}
      style={{ opacity: isDragging ? 0.4 : 1 }}
    >
      <Card
        sx={{
          p: 2,
          cursor: 'grab',
          boxShadow: theme.customShadows.z1,
          border: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
          '&:hover': {
            boxShadow: theme.customShadows.z8,
          },
          '&:active': {
             cursor: 'grabbing'
          }
        }}
      >
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Avatar
              src={contact.photo}
              alt={contact.fullName}
              sx={{ width: 42, height: 42, border: `2px solid ${theme.palette.background.paper}` }}
              onClick={(e) => { e.stopPropagation(); onClick(); }}
            >
              {contact.fullName?.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" noWrap onClick={onClick} sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>
                {contact.fullName}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }} noWrap>
                {contact.email || 'No email'}
              </Typography>
            </Box>
            <IconButton size="small" onClick={handleOpenMenu}>
              <Iconify icon="solar:menu-dots-bold" width={16} />
            </IconButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
             <Stack direction="row" spacing={0.5} alignItems="center">
                <Iconify icon="solar:phone-bold" width={14} sx={{ color: 'text.disabled' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{contact.phone || 'N/A'}</Typography>
             </Stack>
             {contact.isCompany && (
                <Label color="info" variant="soft" sx={{ height: 20, fontSize: 10 }}>Company</Label>
             )}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
             <Stack direction="row" spacing={1}>
                <Tooltip title="View Details">
                   <IconButton size="small" onClick={onClick} sx={{ bgcolor: alpha(theme.palette.primary.main, 0.08) }}>
                      <Iconify icon="solar:eye-bold" width={14} color={theme.palette.primary.main} />
                   </IconButton>
                </Tooltip>
                <Tooltip title="Call">
                   <IconButton 
                     size="small" 
                     component="a"
                     href={`tel:${contact.phone}`}
                     disabled={!contact.phone} 
                     sx={{ bgcolor: alpha(theme.palette.success.main, 0.08) }}
                   >
                      <Iconify icon="solar:phone-calling-bold" width={14} color={theme.palette.success.main} />
                   </IconButton>
                </Tooltip>
                <Tooltip title="Email">
                   <IconButton 
                     size="small" 
                     component="a"
                     href={`mailto:${contact.email}`}
                     disabled={!contact.email} 
                     sx={{ bgcolor: alpha(theme.palette.warning.main, 0.08) }}
                   >
                      <Iconify icon="solar:letter-bold" width={14} color={theme.palette.warning.main} />
                   </IconButton>
                </Tooltip>
             </Stack>
             
             <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                <Iconify icon="solar:fire-bold" width={14} sx={{ color: 'error.main', mr: 0.5 }} />
                <Typography variant="caption" sx={{ fontWeight: 'bold', fontSize: 10 }}>Hot</Typography>
             </Box>
          </Stack>
        </Stack>
      </Card>

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => { onClick(); handleCloseMenu(); }}>
           <Iconify icon="solar:eye-bold" sx={{ mr: 1 }} /> View details
        </MenuItem>
        <MenuItem onClick={() => { onEdit(); handleCloseMenu(); }}>
           <Iconify icon="solar:pen-bold" sx={{ mr: 1 }} /> Edit contact
        </MenuItem>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={() => { onDelete(); handleCloseMenu(); }} sx={{ color: 'error.main' }}>
           <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 1 }} /> Delete contact
        </MenuItem>
      </Menu>
    </m.div>
  );
}
