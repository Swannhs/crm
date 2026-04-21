'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

import { omniChatService } from 'src/services/omni-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { useBoolean } from 'src/hooks/use-boolean';
import { useSocket } from 'src/hooks/use-socket';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function OmniChatView() {
  const queryClient = useQueryClient();
  const [selectedConv, setSelectedConv] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  
  const { data: conversations, isLoading: convsLoading } = useQuery({
    queryKey: ['omni-conversations'],
    queryFn: () => omniChatService.getConversations(),
  });

  const { user } = useAuthContext();

  const { data: messages, isLoading: messagesLoading } = useQuery({
    queryKey: ['omni-messages', selectedConv?.id],
    queryFn: () => omniChatService.getMessages(selectedConv.id),
    enabled: !!selectedConv?.id,
  });

  // Real-time updates via Socket.IO
  useSocket(user?.orgId, (event, data) => {
    if (event === 'omni:message') {
      // Invalidate queries to trigger a refetch or manually update state
      queryClient.invalidateQueries({ queryKey: ['omni-messages', data.conversationId] });
      queryClient.invalidateQueries({ queryKey: ['omni-conversations'] });
    }
  });

  const sendMutation = useMutation({
    mutationFn: (text: string) => omniChatService.sendMessage({
      conversationId: selectedConv.id,
      content: text,
      type: 'text'
    }),
    onSuccess: () => {
      setMessageText('');
      queryClient.invalidateQueries({ queryKey: ['omni-messages', selectedConv?.id] });
    },
  });

  const handleSend = () => {
    if (!messageText.trim()) return;
    sendMutation.mutate(messageText);
  };

  const handleSuggest = async () => {
    const suggestion = await omniChatService.suggestReply(selectedConv.id);
    if (suggestion?.suggestion) {
      setMessageText(suggestion.suggestion);
    }
  };

  if (convsLoading) {
    return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 3 }}>Omnichannel Inbox</Typography>

      <Stack direction="row" sx={{ height: '75vh', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', border: (theme) => `1px solid ${theme.palette.divider}` }}>
        
        {/* Conversation List */}
        <Box sx={{ width: 340, flexShrink: 0, borderRight: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <TextField fullWidth size="small" placeholder="Search conversations..." InputProps={{ startAdornment: <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', mr: 1 }} /> }} />
          </Box>
          <Scrollbar>
            <Stack spacing={0.5} sx={{ p: 1 }}>
              {(conversations || []).map((conv: any) => (
                <Box
                  key={conv.id}
                  onClick={() => setSelectedConv(conv)}
                  sx={{
                    p: 1.5,
                    borderRadius: 1,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    bgcolor: selectedConv?.id === conv.id ? 'action.selected' : 'transparent',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Avatar alt={conv.contactName} />
                    <Box sx={{ position: 'absolute', bottom: -2, right: -2, width: 20, height: 20, bgcolor: 'background.paper', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <Iconify 
                        icon={conv.provider === 'whatsapp' ? 'logos:whatsapp-icon' : 'logos:telegram'} 
                        width={14} 
                      />
                    </Box>
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" noWrap>{conv.contactName || conv.contactId}</Typography>
                    <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>
                      {conv.lastMessage || 'No messages yet'}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Scrollbar>
        </Box>

        {/* Chat Area */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {!selectedConv ? (
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
               <Iconify icon="solar:chat-round-line-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
               <Typography variant="subtitle1" color="text.secondary">Select a conversation to reply</Typography>
            </Box>
          ) : (
            <>
              {/* Header */}
              <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar alt={selectedConv.contactName} />
                  <Box>
                    <Typography variant="subtitle1">{selectedConv.contactName}</Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip label={selectedConv.provider} size="small" variant="soft" color="info" />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>ID: {selectedConv.contactId}</Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Assign Agent">
                    <IconButton><Iconify icon="solar:user-plus-bold" /></IconButton>
                  </Tooltip>
                  <Tooltip title="AI Suggested Reply">
                    <IconButton onClick={handleSuggest} color="primary"><Iconify icon="solar:magic-stick-3-bold" /></IconButton>
                  </Tooltip>
                </Stack>
              </Box>

              {/* Messages */}
              <Box sx={{ flexGrow: 1, p: 2, overflowY: 'hidden' }}>
                <Scrollbar sx={{ height: '100%' }}>
                  <Stack spacing={2.5}>
                    {messagesLoading && <Box sx={{ textAlign: 'center' }}><CircularProgress size={24} /></Box>}
                    {(messages || []).map((msg: any) => (
                      <Box key={msg.id} sx={{ display: 'flex', justifyContent: msg.direction === 'outbound' ? 'flex-end' : 'flex-start' }}>
                        <Box sx={{ maxWidth: '75%' }}>
                           <Box sx={{ 
                              p: 1.5, 
                              borderRadius: 1.5, 
                              bgcolor: msg.direction === 'outbound' ? 'primary.main' : 'background.neutral', 
                              color: msg.direction === 'outbound' ? 'primary.contrastText' : 'text.primary',
                              borderBottomRightRadius: msg.direction === 'outbound' ? 0 : 1.5,
                              borderBottomLeftRadius: msg.direction === 'inbound' ? 0 : 1.5,
                           }}>
                              <Typography variant="body2">{msg.content}</Typography>
                           </Box>
                           <Typography variant="caption" sx={{ mt: 0.5, display: 'block', textAlign: msg.direction === 'outbound' ? 'right' : 'left', color: 'text.disabled' }}>
                             {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                           </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Scrollbar>
              </Box>

              {/* Input */}
              <Box sx={{ p: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Stack direction="row" spacing={1}>
                  <TextField 
                    fullWidth 
                    multiline 
                    maxRows={4} 
                    placeholder="Type your message..." 
                    value={messageText} 
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <IconButton color="primary" onClick={handleSend} disabled={!messageText.trim() || sendMutation.isPending}>
                    <Iconify icon="solar:send-bold" width={28} />
                  </IconButton>
                </Stack>
              </Box>
            </>
          )}
        </Box>
      </Stack>
    </DashboardContent>
  );
}
