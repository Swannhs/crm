import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { SUPPORTED_FEATURES } from '../services/pos-service';

interface PosReceiptDialogProps {
  open: boolean;
  onClose: () => void;
  htmlContent?: string;
}

export const PosReceiptDialog: React.FC<PosReceiptDialogProps> = ({ open, onClose, htmlContent }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Receipt</DialogTitle>
      <DialogContent>
        {!SUPPORTED_FEATURES.ORDERS ? (
          <Typography color="error">Receipts API unavailable.</Typography>
        ) : (
          <Box
            p={2}
            border={1}
            borderColor="divider"
            bgcolor="background.paper"
            // Ensure htmlContent is escaped before passing here in actual use
            dangerouslySetInnerHTML={{ __html: htmlContent || '<p>No receipt content</p>' }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" disabled={!SUPPORTED_FEATURES.ORDERS}>Print</Button>
      </DialogActions>
    </Dialog>
  );
};
