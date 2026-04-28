'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export type ToastSeverity = 'success' | 'info' | 'warning' | 'error';

type ToastDetail = {
  message: string;
  severity?: ToastSeverity;
  duration?: number;
};

const TOAST_EVENT = 'app-toast';

export function showToast(detail: ToastDetail) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<ToastDetail>(TOAST_EVENT, { detail }));
}

export function ToastProvider() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<ToastSeverity>('info');
  const [duration, setDuration] = useState(4000);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastDetail>;
      const {detail} = customEvent;

      if (!detail?.message) return;

      setMessage(detail.message);
      setSeverity(detail.severity || 'info');
      setDuration(detail.duration || 4000);
      setOpen(true);
    };

    window.addEventListener(TOAST_EVENT, handleToast as EventListener);

    return () => {
      window.removeEventListener(TOAST_EVENT, handleToast as EventListener);
    };
  }, []);

  const alert = useMemo(
    () => (
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {typeof message === 'string' ? message : JSON.stringify(message)}
      </Alert>
    ),
    [handleClose, message, severity]
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      {alert}
    </Snackbar>
  );
}
