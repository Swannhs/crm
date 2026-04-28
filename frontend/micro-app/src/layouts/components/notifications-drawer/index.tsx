'use client';

import { m } from 'framer-motion';
import { useMemo, useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import { notificationService } from 'src/services/notification-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { Scrollbar } from 'src/components/scrollbar';
import { CustomTabs } from 'src/components/custom-tabs';

import { NotificationItem } from './notification-item';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function NotificationsDrawer({ data = [], sx, ...other }) {
  const drawer = useBoolean();
  const queryClient = useQueryClient();

  const [currentTab, setCurrentTab] = useState('all');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const { data: totals } = useQuery({
    queryKey: ['notification-totals'],
    queryFn: notificationService.getNotificationTotals,
    refetchInterval: 30000,
  });

  const {
    data: notifications = [],
    isLoading,
  } = useQuery({
    queryKey: ['notifications', currentTab],
    queryFn: () =>
      notificationService.getNotifications({
        archived: currentTab === 'archived',
        unread: currentTab === 'unread',
      }),
    enabled: drawer.value,
    initialData: [],
    refetchInterval: drawer.value ? 30000 : false,
  });

  const totalUnRead = totals?.unread ?? notifications.filter((item) => !item.isRead && !item.isArchived).length;

  const invalidateNotifications = useCallback(async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ['notifications'] }),
      queryClient.invalidateQueries({ queryKey: ['notification-totals'] }),
    ]);
  }, [queryClient]);

  const markReadMutation = useMutation({
    mutationFn: (ids?: string[]) => notificationService.markNotificationsRead(ids),
    onSuccess: invalidateNotifications,
  });

  const archiveMutation = useMutation({
    mutationFn: (ids?: string[]) => notificationService.archiveNotifications(ids),
    onSuccess: invalidateNotifications,
  });

  const unarchiveMutation = useMutation({
    mutationFn: (ids?: string[]) => notificationService.unarchiveNotifications(ids),
    onSuccess: invalidateNotifications,
  });

  const tabs = useMemo(
    () => [
      { value: 'all', label: 'All', count: totals?.all ?? 0 },
      { value: 'unread', label: 'Unread', count: totals?.unread ?? 0 },
      { value: 'archived', label: 'Archived', count: totals?.archived ?? 0 },
    ],
    [totals]
  );

  const handleMarkAllAsRead = () => {
    const unreadIds = notifications.filter((notification) => !notification.isRead).map((notification) => notification.id);
    markReadMutation.mutate(unreadIds);
  };

  const renderHead = (
    <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Notifications
      </Typography>

      {!!totalUnRead && (
        <Tooltip title="Mark all as read">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}

      <IconButton onClick={drawer.onFalse} sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <IconButton>
        <Iconify icon="solar:settings-bold-duotone" />
      </IconButton>
    </Stack>
  );

  const renderTabs = (
    <CustomTabs variant="fullWidth" value={currentTab} onChange={handleChangeTab}>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            <Label
              variant={((tab.value === 'all' || tab.value === currentTab) && 'filled') || 'soft'}
              color={
                (tab.value === 'unread' && 'info') ||
                (tab.value === 'archived' && 'success') ||
                'default'
              }
            >
              {tab.count}
            </Label>
          }
        />
      ))}
    </CustomTabs>
  );

  const renderList = (
    <Scrollbar>
      <Box component="ul">
        {isLoading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ py: 8 }}>
            <CircularProgress size={28} />
          </Stack>
        ) : notifications.length ? (
          notifications.map((notification) => (
            <Box component="li" key={notification.id} sx={{ display: 'flex' }}>
              <NotificationItem
                notification={notification}
                onMarkRead={(id) => markReadMutation.mutate([id])}
                onArchive={(id) => archiveMutation.mutate([id])}
                onUnarchive={(id) => unarchiveMutation.mutate([id])}
              />
            </Box>
          ))
        ) : (
          <Stack spacing={1} alignItems="center" justifyContent="center" sx={{ py: 8, px: 3 }}>
            <Typography variant="subtitle2">No notifications yet</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              New activity from billing, email, SMS, and other product events will show up here.
            </Typography>
          </Stack>
        )}
      </Box>
    </Scrollbar>
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={drawer.onTrue}
        sx={sx}
        {...other}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <SvgIcon>
            {/* https://icon-sets.iconify.design/solar/bell-bing-bold-duotone/ */}
            <path
              fill="currentColor"
              d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
              opacity="0.5"
            />
            <path
              fill="currentColor"
              d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
            />
          </SvgIcon>
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 1, maxWidth: 420 } }}
      >
        {renderHead}

        {renderTabs}

        {renderList}

        <Box sx={{ p: 1 }}>
          <Button fullWidth size="large">
            View all
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
