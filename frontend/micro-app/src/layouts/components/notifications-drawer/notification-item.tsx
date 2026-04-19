import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export function NotificationItem({
  notification,
  onMarkRead,
  onArchive,
  onUnarchive,
}) {
  const notificationType = useMemo(() => {
    if (notification.type === 'payment') return 'mail';
    if (notification.type === 'system') return 'chat';
    return notification.type;
  }, [notification.type]);

  const renderAvatar = (
    <ListItemAvatar>
      {notification.avatarUrl ? (
        <Avatar src={notification.avatarUrl} sx={{ bgcolor: 'background.neutral' }} />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'background.neutral' }}
        >
          <Box
            component="img"
            src={`${CONFIG.site.basePath}/assets/icons/notification/${(notificationType === 'order' && 'ic-order') || (notificationType === 'chat' && 'ic-chat') || (notificationType === 'mail' && 'ic-mail') || (notificationType === 'delivery' && 'ic-delivery')}.svg`}
            sx={{ width: 24, height: 24 }}
          />
        </Stack>
      )}
    </ListItemAvatar>
  );

  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(notification.title)}
      secondary={
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: 'caption', color: 'text.disabled' }}
          divider={
            <Box
              sx={{
                width: 2,
                height: 2,
                bgcolor: 'currentColor',
                mx: 0.5,
                borderRadius: '50%',
              }}
            />
          }
        >
          {fToNow(notification.createdAt)}
          {notification.category}
          {notification.isArchived ? 'Archived' : null}
        </Stack>
      }
    />
  );

  const renderUnReadBadge = !notification.isRead && !notification.isArchived && (
    <Box
      sx={{
        top: 26,
        width: 8,
        height: 8,
        right: 20,
        borderRadius: '50%',
        bgcolor: 'info.main',
        position: 'absolute',
      }}
    />
  );

  const renderBody = notification.body ? (
    <Box
      sx={{
        p: 1.5,
        mt: 1.5,
        borderRadius: 1.5,
        color: 'text.secondary',
        bgcolor: 'background.neutral',
      }}
    >
      <Typography variant="body2">{notification.body}</Typography>
    </Box>
  ) : null;

  const renderActions = (
    <Stack spacing={1} direction="row" sx={{ mt: 1.5 }}>
      {!notification.isRead && !notification.isArchived ? (
        <Button size="small" variant="contained" onClick={() => onMarkRead(notification.id)}>
          Mark read
        </Button>
      ) : null}

      {notification.isArchived ? (
        <Button size="small" variant="outlined" onClick={() => onUnarchive(notification.id)}>
          Restore
        </Button>
      ) : (
        <Button size="small" variant="outlined" onClick={() => onArchive(notification.id)}>
          Archive
        </Button>
      )}

      <Label variant="soft" color={notification.isRead ? 'default' : 'info'}>
        {notification.isRead ? 'Read' : 'Unread'}
      </Label>
    </Stack>
  );

  return (
    <ListItemButton
      disableRipple
      sx={{
        p: 2.5,
        alignItems: 'flex-start',
        borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
      }}
    >
      {renderUnReadBadge}

      {renderAvatar}

      <Stack sx={{ flexGrow: 1 }}>
        {renderText}
        {renderBody}
        {renderActions}
      </Stack>
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function reader(data) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        '& p': { typography: 'body2', m: 0 },
        '& a': { color: 'inherit', textDecoration: 'none' },
        '& strong': { typography: 'subtitle2' },
      }}
    />
  );
}
