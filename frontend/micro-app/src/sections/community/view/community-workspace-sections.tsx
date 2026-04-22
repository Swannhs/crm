'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CommunityFeed({ posts }: any) {
  return (
    <Stack spacing={3}>
      <Card sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 48, height: 48 }}>AD</Avatar>
          <InputBase 
            fullWidth 
            placeholder="What's on your mind, Admin?" 
            sx={{ 
              px: 2, 
              py: 1, 
              borderRadius: 1, 
              bgcolor: 'background.neutral' 
            }} 
          />
          <IconButton color="primary">
            <Iconify icon="solar:gallery-send-bold" />
          </IconButton>
        </Stack>
      </Card>

      {(posts || [1, 2, 3]).map((post: any) => (
        <Card key={typeof post === 'object' ? post._id : post} sx={{ p: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Avatar>{typeof post === 'object' ? post.authorName?.charAt(0) : `U${post}`}</Avatar>
            <Box>
              <Typography variant="subtitle2">{typeof post === 'object' ? post.authorName : `User Name ${post}`}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {typeof post === 'object' ? new Date(post.createdAt).toLocaleString() : '2 hours ago • Public Feed'}
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {typeof post === 'object' ? post.content : "This is a modernized community post. The feed supports high-fidelity interactions, rich media, and real-time engagement."}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Button size="small" startIcon={<Iconify icon="solar:heart-bold" />}>Like</Button>
            <Button size="small" startIcon={<Iconify icon="solar:chat-round-dots-bold" />}>Comment</Button>
            <Button size="small" startIcon={<Iconify icon="solar:share-bold" />}>Share</Button>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}

export function CommunityGroups() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((group) => (
        <Grid item xs={12} sm={6} md={4} key={group}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>G{group}</Avatar>
              <Box>
                <Typography variant="h6">Community Group {group}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>128 Members • 12 Active Today</Typography>
              </Box>
              <Button fullWidth variant="soft" color="inherit">View Group</Button>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export function CommunityMembers() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
        <Grid item xs={12} sm={6} md={3} key={member}>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>M{member}</Avatar>
            <Typography variant="subtitle1">Member Name {member}</Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>Pro Plan • Joined 3m ago</Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
               <IconButton color="primary" size="small"><Iconify icon="solar:chat-round-dots-bold" /></IconButton>
               <IconButton color="info" size="small"><Iconify icon="solar:user-plus-bold" /></IconButton>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export function CommunitySettings() {
  return (
    <Card sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Community Preferences</Typography>
      <Stack spacing={3}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Enable public feed posting"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Allow members to create groups"
        />
        <FormControlLabel
          control={<Switch />}
          label="Moderate all new posts"
        />
        <Divider sx={{ borderStyle: 'dashed' }} />
        <TextField fullWidth label="Community Name" defaultValue="MyManager Global Community" />
        <TextField fullWidth multiline rows={3} label="Welcome Message" defaultValue="Welcome to our professional network! Connect, share, and grow with us." />
        <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>Save Settings</Button>
      </Stack>
    </Card>
  );
}

export function CommunityMessenger({ memberId }: any) {
  return (
    <Card sx={{ p: 0, height: 600, overflow: 'hidden' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={4} sx={{ borderRight: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'background.neutral' }}>
          <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <InputBase 
               fullWidth 
               placeholder="Search conversations..." 
               startAdornment={<Iconify icon="solar:magnifer-bold" sx={{ mr: 1, color: 'text.disabled' }} />}
               sx={{ px: 1.5, py: 0.5, bgcolor: 'background.paper', borderRadius: 1 }}
            />
          </Box>
          <List sx={{ p: 0 }}>
            {[1, 2, 3, 4, 5].map((chat) => (
              <ListItem key={chat} button sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:hover': { bgcolor: 'background.paper' } }}>
                <ListItemAvatar>
                  <Avatar>U{chat}</Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Chat User ${chat}`} 
                  secondary="Sent an attachment • 2h ago" 
                  secondaryTypographyProps={{ noWrap: true, variant: 'caption' }} 
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={2} alignItems="center">
               <Avatar sx={{ width: 40, height: 40 }}>{memberId ? `M${memberId}` : '?'}</Avatar>
               <Box>
                  <Typography variant="subtitle1">{memberId ? `Chat User ${memberId}` : 'Select a conversation'}</Typography>
                  <Typography variant="caption" sx={{ color: 'success.main' }}>Online</Typography>
               </Box>
            </Stack>
            <IconButton><Iconify icon="solar:menu-dots-vertical-bold" /></IconButton>
          </Box>
          
          <Box sx={{ flexGrow: 1, p: 3, bgcolor: 'background.neutral', overflowY: 'auto' }}>
            {memberId ? (
              <Stack spacing={2.5}>
                 <MessageBubble side="left" text="Hey there! How's the project going?" time="10:30 AM" />
                 <MessageBubble side="right" text="Everything is on track! The new community system looks great." time="10:32 AM" />
                 <MessageBubble side="left" text="Awesome! Can't wait to see the final result." time="10:35 AM" />
              </Stack>
            ) : (
              <Box sx={{ py: 10, textAlign: 'center', opacity: 0.5 }}>
                <Iconify icon="solar:chat-round-dots-bold-duotone" width={64} sx={{ mb: 2 }} />
                <Typography variant="caption" display="block">Select a user to start chatting</Typography>
              </Box>
            )}
          </Box>
          
          <Box sx={{ p: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
            <Stack direction="row" spacing={1} alignItems="center">
               <IconButton size="small"><Iconify icon="solar:paperclip-bold" /></IconButton>
               <InputBase 
                  fullWidth 
                  placeholder="Type a message..." 
                  sx={{ px: 2, py: 1, bgcolor: 'background.neutral', borderRadius: 1 }} 
               />
               <IconButton color="primary"><Iconify icon="solar:paper-plane-bold" /></IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

function MessageBubble({ side, text, time }: any) {
   const isRight = side === 'right';
   return (
      <Box sx={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
         <Box sx={{ maxWidth: '70%' }}>
            <Box sx={{ 
               p: 1.5, 
               borderRadius: 2, 
               bgcolor: isRight ? 'primary.main' : 'background.paper', 
               color: isRight ? 'primary.contrastText' : 'text.primary',
               boxShadow: (theme) => theme.customShadows.z1
            }}>
               <Typography variant="body2">{text}</Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block', textAlign: isRight ? 'right' : 'left' }}>
               {time}
            </Typography>
         </Box>
      </Box>
   );
}
