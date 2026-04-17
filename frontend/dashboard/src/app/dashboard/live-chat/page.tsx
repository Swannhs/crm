'use client';

import { 
  Plus, 
  Search, 
  MoreVertical,
  MessageSquare,
  Send,
  User,
  Paperclip,
  Smile,
  Circle,
  Clock,
  ChevronDown
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
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge
} from "@mui/material";

const chats = [
  { id: 1, name: "Customer #4812", status: "online", lastMsg: "How do I upgrade my plan?", time: "2m", unread: 2 },
  { id: 2, name: "Sarah Wilson", status: "offline", lastMsg: "Thanks for the help!", time: "1h", unread: 0 },
  { id: 3, name: "Michael Chen", status: "online", lastMsg: "I'm having trouble with the API...", time: "3h", unread: 0 },
];

export default function LiveChatPage() {
  return (
    <Box sx={{ p: 4, height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Live Chat
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Real-time support and communication with your customers.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" sx={{ borderRadius: 3 }}>Chat History</Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>New Discussion</Button>
        </Stack>
      </Box>

      <Grid container spacing={0} sx={{ height: 'calc(100% - 100px)', borderRadius: 4, border: '1px solid', borderColor: 'divider', overflow: 'hidden', bgcolor: 'background.paper' }}>
        {/* Sidebar: Chat List */}
        <Grid item xs={12} md={4} sx={{ borderRight: '1px solid', borderColor: 'divider', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
             <TextField
               fullWidth
               placeholder="Search conversations..."
               size="small"
               InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
             />
          </Box>
          <List sx={{ flexGrow: 1, overflowY: 'auto', py: 0 }}>
            {chats.map((chat) => (
              <ListItem 
                key={chat.id} 
                disablePadding 
                sx={{ 
                  borderBottom: '1px solid', 
                  borderColor: 'divider',
                  '&:hover': { bgcolor: 'rgba(99, 102, 241, 0.05)' },
                  bgcolor: chat.id === 1 ? 'rgba(99, 102, 241, 0.03)' : 'transparent'
                }}
              >
                <Stack direction="row" sx={{ p: 2, width: '100%', cursor: 'pointer' }} spacing={2}>
                   <Badge 
                     variant="dot" 
                     color={chat.status === 'online' ? 'success' : 'default'} 
                     overlap="circular" 
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                   >
                     <Avatar sx={{ bgcolor: 'primary.light', fontWeight: 800, fontSize: 14 }}>{chat.name[0]}</Avatar>
                   </Badge>
                   <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                         <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{chat.name}</Typography>
                         <Typography variant="caption" color="text.secondary">{chat.time}</Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', maxWidth: 180, truncate: true }}>
                         {chat.lastMsg}
                      </Typography>
                   </Box>
                   {chat.unread > 0 && <Chip label={chat.unread} color="primary" size="small" sx={{ height: 18, minWidth: 18, fontSize: 10, fontWeight: 800 }} />}
                </Stack>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Main: Chat View */}
        <Grid item xs={12} md={8} sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'rgba(0,0,0,0.01)' }}>
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 12 }}>C</Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Customer #4812</Typography>
                  <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.3 }}>
                    <Circle size={8} fill="currentColor" /> Active Now
                  </Typography>
                </Box>
             </Stack>
             <Stack direction="row" spacing={1}>
                <IconButton size="small"><Phone size={18} /></IconButton>
                <IconButton size="small"><MoreVertical size={18} /></IconButton>
             </Stack>
          </Box>

          <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
             <Box sx={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '4px 16px 16px 16px', border: '1px solid', borderColor: 'divider' }}>
                   <Typography variant="body2">Hello! I'm interested in the Premium plan, but I have a few questions about the multi-user seats.</Typography>
                </Paper>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, px: 1 }}>12:45 PM</Typography>
             </Box>

             <Box sx={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px 16px 4px 16px' }}>
                   <Typography variant="body2">Hi there! I'd be happy to help. Our Premium plan includes up to 5 users by default. Do you need more than that?</Typography>
                </Paper>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, textAlign: 'right', display: 'block', px: 1 }}>12:46 PM</Typography>
             </Box>

             <Box sx={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '4px 16px 16px 16px', border: '1px solid', borderColor: 'divider' }}>
                   <Typography variant="body2">Actually, I have a team of 12. Is there an add-on option?</Typography>
                </Paper>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, px: 1 }}>12:48 PM</Typography>
             </Box>
          </Box>

          <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
             <Stack direction="row" spacing={2} alignItems="center">
                <IconButton size="small"><Paperclip size={20} /></IconButton>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  size="small"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                />
                <IconButton size="small"><Smile size={20} /></IconButton>
                <Button variant="contained" sx={{ minWidth: 48, width: 48, height: 40, borderRadius: 2 }}><Send size={18} /></Button>
             </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
