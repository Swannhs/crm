'use client';

import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { aiService } from 'src/services/ai-service';

// ----------------------------------------------------------------------

export function AIChatBox() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: 'user', content: prompt, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const response = await aiService.sendAIPrompt(prompt);
      const botMessage = { 
        role: 'bot', 
        content: response.msg || 'Report generated successfully.', 
        data: response.report,
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I failed to process that request.', error: true, timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: theme.zIndex.speedDial,
          boxShadow: theme.customShadows.z24,
        }}
      >
        <Badge color="error" overlap="circular" variant="dot">
          <Iconify icon="solar:magic-stick-3-bold-duotone" width={28} />
        </Badge>
      </Fab>

      {open && (
        <Card
          sx={{
            position: 'fixed',
            bottom: 100,
            right: 24,
            width: 400,
            height: 500,
            zIndex: theme.zIndex.modal,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: theme.customShadows.z24,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <CardHeader
            title="MM AI Assistant"
            subheader="Intelligent Business Partner"
            avatar={<Avatar sx={{ bgcolor: 'primary.main' }}><Iconify icon="solar:magic-stick-3-bold-duotone" /></Avatar>}
            action={
              <IconButton onClick={handleClose}>
                <Iconify icon="eva:close-fill" />
              </IconButton>
            }
            sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}
          />

          <Box ref={scrollAreaRef} sx={{ flexGrow: 1, overflowY: 'auto', p: 2, bgcolor: 'background.neutral' }}>
            <Stack spacing={2}>
              {messages.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 5 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    How can I help you generate insights today?
                  </Typography>
                </Box>
              )}
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 1.5,
                      maxWidth: '85%',
                      bgcolor: msg.role === 'user' ? 'primary.main' : 'background.paper',
                      color: msg.role === 'user' ? 'primary.contrastText' : 'text.primary',
                      boxShadow: theme.customShadows.z1,
                    }}
                  >
                    <Typography variant="body2">{msg.content}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ mt: 0.5, color: 'text.disabled' }}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Box>
              ))}
              {isLoading && (
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <CircularProgress size={16} />
                  <Typography variant="caption" color="text.secondary">Thinking...</Typography>
                </Box>
              )}
            </Stack>
          </Box>

          <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Type a prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <IconButton color="primary" onClick={handleSend} disabled={!prompt.trim() || isLoading}>
                <Iconify icon="solar:send-bold" />
              </IconButton>
            </Stack>
          </Box>
        </Card>
      )}
    </>
  );
}

import CircularProgress from '@mui/material/CircularProgress';
