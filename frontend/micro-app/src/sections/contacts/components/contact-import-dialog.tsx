import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { contactService } from 'src/services/contact-service';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

type Props = {
  open: boolean;
  onClose: () => void;
  onRefresh: () => void;
};

export default function ContactImportDialog({ open, onClose, onRefresh }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'text/csv' || droppedFile.name.endsWith('.csv') || droppedFile.name.endsWith('.xlsx'))) {
      setFile(droppedFile);
    } else {
      showToast({ message: 'Please upload a CSV or Excel file', severity: 'error' });
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleImport = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      await contactService.importContacts(formData);
      
      showToast({ message: 'Import successful!', severity: 'success' });
      onRefresh();
      onClose();
      setFile(null);
    } catch (error) {
      showToast({ message: 'Import failed. Please check the file format.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Import Contacts
        <IconButton onClick={onClose}>
          <Iconify icon="solar:close-circle-bold" />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={3} sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Upload a CSV or Excel file containing your contact list. 
            Ensure your file has headers like: Name, Email, Phone, Company.
          </Typography>

          <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            sx={{
              p: 5,
              outline: 'none',
              borderRadius: 1.5,
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
              border: (theme) => `1px dashed ${alpha(theme.palette.primary.main, 0.32)}`,
              transition: (theme) => theme.transitions.create(['opacity', 'padding']),
              '&:hover': {
                opacity: 0.72,
              },
            }}
            component="label"
          >
            <input type="file" hidden accept=".csv, .xlsx" onChange={handleFileSelect} />
            
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <Iconify icon="solar:cloud-upload-bold-duotone" width={64} sx={{ color: 'primary.main' }} />
              
              <Stack spacing={1} sx={{ textAlign: 'center' }}>
                <Typography variant="h6">
                  {file ? file.name : 'Select or drop file'}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Drop files here or click <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>browse</Box> thorough your machine
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {file && (
            <Stack direction="row" alignItems="center" spacing={2} sx={{ p: 2, borderRadius: 1, bgcolor: 'background.neutral' }}>
               <Iconify icon="solar:file-text-bold" width={32} sx={{ color: 'primary.main' }} />
               <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2">{file.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {(file.size / 1024).toFixed(2)} KB
                  </Typography>
               </Box>
               <IconButton onClick={() => setFile(null)} color="error">
                  <Iconify icon="solar:trash-bin-trash-bold" />
               </IconButton>
            </Stack>
          )}

          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<Iconify icon="solar:download-bold" />}
            onClick={() => {
              // Trigger template download
              showToast({ message: 'Template download starting...', severity: 'info' });
            }}
          >
            Download Template
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <LoadingButton 
          variant="contained" 
          onClick={handleImport} 
          disabled={!file}
          loading={loading}
        >
          Import Now
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
