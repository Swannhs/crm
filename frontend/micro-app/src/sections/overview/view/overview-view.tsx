'use client';

import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { fCurrency, fNumber } from 'src/utils/format-number';
import { DashboardContent } from 'src/layouts/dashboard';
import { useAuthContext } from 'src/auth/hooks';
import { billingService } from 'src/services/billing-service';
import { calendarService } from 'src/services/calendar-service';
import { contactService } from 'src/services/contact-service';
import { financeService } from 'src/services/finance-service';
import { marketingService } from 'src/services/marketing-service';
import { notificationService } from 'src/services/notification-service';
import { projectService } from 'src/services/project-service';

import { Iconify } from 'src/components/iconify';

import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

function toDateLabel(value?: string) {
  if (!value) return 'No date';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'No date';

  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function toRelativeLabel(value?: string) {
  if (!value) return 'Just now';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Just now';

  const diffMs = date.getTime() - Date.now();
  const diffMinutes = Math.round(diffMs / (1000 * 60));

  if (Math.abs(diffMinutes) < 60) {
    return `${Math.abs(diffMinutes)} min ${diffMinutes >= 0 ? 'from now' : 'ago'}`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (Math.abs(diffHours) < 24) {
    return `${Math.abs(diffHours)} hr ${diffHours >= 0 ? 'from now' : 'ago'}`;
  }

  const diffDays = Math.round(diffHours / 24);
  return `${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ${diffDays >= 0 ? 'from now' : 'ago'}`;
}

function getStatusColor(status?: string) {
  const normalized = String(status || '').toLowerCase();
  if (['paid', 'active', 'completed', 'sent'].includes(normalized)) return 'success';
  if (['pending', 'draft', 'scheduled', 'in progress'].includes(normalized)) return 'warning';
  if (['overdue', 'failed', 'cancelled', 'archived'].includes(normalized)) return 'error';
  return 'default';
}

function normalizeEvents(payload: any) {
  const events = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : [];
  return events.map((event: any, index: number) => ({
    id: String(event?.id ?? event?._id ?? `event-${index}`),
    title: event?.title ?? event?.name ?? 'Untitled event',
    startAt: event?.startAt ?? event?.start_at ?? event?.date ?? event?.createdAt ?? '',
    location: event?.location ?? event?.venue ?? 'No location',
  }));
}

export function OverviewView() {
  const router = useRouter();
  const { user } = useAuthContext();

  const results = useQueries({
    queries: [
      {
        queryKey: ['overview-contacts'],
        queryFn: () => contactService.getContacts(),
      },
      {
        queryKey: ['overview-invoices'],
        queryFn: () => billingService.getInvoices(),
      },
      {
        queryKey: ['overview-revenue-stats'],
        queryFn: () => financeService.getRevenueStats(),
      },
      {
        queryKey: ['overview-notification-totals'],
        queryFn: () => notificationService.getNotificationTotals(),
      },
      {
        queryKey: ['overview-notifications'],
        queryFn: () => notificationService.getNotifications({ limit: 5 }),
      },
      {
        queryKey: ['overview-campaigns'],
        queryFn: () => marketingService.getCampaigns(),
      },
      {
        queryKey: ['overview-automations'],
        queryFn: () => marketingService.getAutomations(),
      },
      {
        queryKey: ['overview-projects'],
        queryFn: () => projectService.getProjects(),
      },
      {
        queryKey: ['overview-tasks'],
        queryFn: () => projectService.getTasks(),
      },
      {
        queryKey: ['overview-events'],
        queryFn: () => calendarService.getEvents(),
      },
    ],
  });

  const [
    contactsQuery,
    invoicesQuery,
    revenueQuery,
    notificationTotalsQuery,
    notificationsQuery,
    campaignsQuery,
    automationsQuery,
    projectsQuery,
    tasksQuery,
    eventsQuery,
  ] = results;

  const loading = results.every((query) => query.isLoading);

  const contacts = Array.isArray(contactsQuery.data) ? contactsQuery.data : [];
  const invoices = (invoicesQuery.data as any)?.data || [];
  const campaigns = Array.isArray(campaignsQuery.data) ? campaignsQuery.data : [];
  const automations = Array.isArray(automationsQuery.data) ? automationsQuery.data : [];
  const projects = Array.isArray(projectsQuery.data) ? projectsQuery.data : [];
  const tasks = Array.isArray(tasksQuery.data) ? tasksQuery.data : [];
  const notifications = Array.isArray(notificationsQuery.data) ? notificationsQuery.data : [];
  const events = normalizeEvents(eventsQuery.data);

  const revenueStats = revenueQuery.data || {
    totalRevenue: 0,
    paid: 0,
    outstanding: 0,
    invoiceCount: invoices.length,
  };

  const notificationTotals = notificationTotalsQuery.data || {
    all: notifications.length,
    unread: 0,
    archived: 0,
  };

  const activeInvoices = invoices.filter(
    (invoice: any) => !['paid', 'cancelled'].includes(String(invoice.status).toLowerCase())
  );
  const overdueInvoices = invoices.filter((invoice: any) =>
    ['overdue', 'past_due'].includes(String(invoice.status).toLowerCase())
  );
  const paidInvoices = invoices.filter((invoice: any) =>
    ['paid', 'completed'].includes(String(invoice.status).toLowerCase())
  );
  const completionRate = invoices.length ? Math.round((paidInvoices.length / invoices.length) * 100) : 0;
  const displayName = user?.fullName || user?.username || user?.email || 'there';

  const recentInvoices = useMemo(
    () =>
      [...invoices]
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt || b.dueDate || 0).getTime() - new Date(a.createdAt || a.dueDate || 0).getTime()
        )
        .slice(0, 5),
    [invoices]
  );

  const pipelineItems = [
    {
      label: 'Projects in workspace',
      value: projects.length,
      helper: `${tasks.length} tracked task${tasks.length === 1 ? '' : 's'}`,
      icon: 'solar:folder-with-files-bold',
    },
    {
      label: 'Campaigns running',
      value: campaigns.length,
      helper: `${automations.length} automation${automations.length === 1 ? '' : 's'} connected`,
      icon: 'solar:mailbox-bold',
    },
    {
      label: 'Upcoming events',
      value: events.length,
      helper: events[0] ? `${events[0].title} • ${toRelativeLabel(events[0].startAt)}` : 'No events scheduled',
      icon: 'solar:calendar-mark-bold',
    },
  ];

  if (loading) {
    return (
      <DashboardContent maxWidth="xl">
        <Stack spacing={3}>
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
          <Grid container spacing={3}>
            <Grid xs={12} md={8}>
              <Stack spacing={3}>
                <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} />
                <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack spacing={3}>
                <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 2 }} />
                <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 2 }} />
                <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 2 }} />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Card
        sx={{
          mb: { xs: 3, md: 5 },
          p: { xs: 3, md: 4 },
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid xs={12} md={8}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip
                  label="Workspace overview"
                  size="small"
                  sx={{
                    fontWeight: 600,
                  }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Live operating snapshot
                </Typography>
              </Stack>

              <Box>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Welcome back, {displayName}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 680, color: 'text.secondary', lineHeight: 1.7 }}>
                  Track revenue, outstanding work, customer response, and team activity from one place before you jump into the day.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {[
                  {
                    label: 'Total revenue',
                    value: fCurrency(revenueStats.totalRevenue || 0),
                    icon: 'solar:dollar-minimalistic-bold',
                  },
                  {
                    label: 'Outstanding balance',
                    value: fCurrency(revenueStats.outstanding || 0),
                    icon: 'solar:bill-list-bold',
                  },
                  {
                    label: 'Unread notifications',
                    value: fNumber(notificationTotals.unread || 0),
                    icon: 'solar:bell-bing-bold',
                  },
                ].map((item) => (
                  <Grid xs={12} sm={4} key={item.label}>
                    <Box
                      sx={{
                        p: 2,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.neutral',
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                          }}
                        >
                          <Iconify icon={item.icon} width={20} />
                        </Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {item.label}
                        </Typography>
                      </Stack>
                      <Typography variant="h4">{item.value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack
              spacing={2}
              sx={{
                p: 2.5,
                borderRadius: 2,
                bgcolor: 'background.neutral',
                height: '100%',
              }}
            >
              <Box>
                <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                  Next actions
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Pick up where work needs attention
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Open the busiest customer and billing areas directly from the dashboard.
                </Typography>
              </Box>

              <Stack spacing={1.5}>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Iconify icon="solar:user-plus-bold" />}
                  onClick={() => router.push(paths.dashboard.contacts)}
                  sx={{ justifyContent: 'flex-start', py: 1.4 }}
                >
                  Open contacts
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  startIcon={<Iconify icon="solar:bill-list-bold" />}
                  onClick={() => router.push(paths.dashboard.invoices)}
                  sx={{ justifyContent: 'flex-start', py: 1.4 }}
                >
                  Review billing
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Total Contacts"
            total={contacts.length}
            icon="solar:users-group-rounded-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Outstanding Invoices"
            total={activeInvoices.length}
            color="info"
            icon="solar:bill-list-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Unread Notifications"
            total={notificationTotals.unread || 0}
            color="warning"
            icon="solar:bell-bing-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Open Tasks"
            total={tasks.length}
            color="error"
            icon="solar:checklist-minimalistic-bold"
          />
        </Grid>

        <Grid xs={12} md={7}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
              <Box>
                <Typography variant="h6">Financial Health</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Revenue, collections, and invoice pressure from your live billing data.
                </Typography>
              </Box>
              <Button size="small" onClick={() => router.push(paths.dashboard.billing)}>
                Open billing
              </Button>
            </Stack>

            <Grid container spacing={2.5}>
              <Grid xs={12} sm={4}>
                <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'success.lighter' }}>
                  <Typography variant="overline" sx={{ color: 'success.darker' }}>
                    Paid
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    {fCurrency(revenueStats.paid || 0)}
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={4}>
                <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'warning.lighter' }}>
                  <Typography variant="overline" sx={{ color: 'warning.darker' }}>
                    Outstanding
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    {fCurrency(revenueStats.outstanding || 0)}
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={4}>
                <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'error.lighter' }}>
                  <Typography variant="overline" sx={{ color: 'error.darker' }}>
                    Overdue invoices
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    {fNumber(overdueInvoices.length)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                <Typography variant="subtitle2">Collection rate</Typography>
                <Typography variant="subtitle2">{completionRate}%</Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={completionRate}
                sx={{ height: 10, borderRadius: 999, bgcolor: 'grey.200' }}
              />
            </Box>
          </Card>
        </Grid>

        <Grid xs={12} md={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
              <Box>
                <Typography variant="h6">Quick Actions</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Jump into the areas you’ll likely touch first today.
                </Typography>
              </Box>
            </Stack>

            <Grid container spacing={1.5}>
              {[
                { label: 'Contacts', icon: 'solar:users-group-rounded-bold', path: paths.dashboard.contacts },
                { label: 'Calendar', icon: 'solar:calendar-mark-bold', path: paths.dashboard.calendar },
                { label: 'Projects', icon: 'solar:folder-with-files-bold', path: paths.dashboard.projects },
                { label: 'Marketing', icon: 'solar:mailbox-bold', path: paths.dashboard.marketing },
                { label: 'Documents', icon: 'solar:document-text-bold', path: paths.dashboard.documents },
                { label: 'Devices', icon: 'solar:devices-bold', path: paths.dashboard.devices },
              ].map((action) => (
                <Grid xs={12} sm={6} key={action.label}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Iconify icon={action.icon} />}
                    onClick={() => router.push(action.path)}
                    sx={{ justifyContent: 'flex-start', py: 1.5 }}
                  >
                    {action.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Recent Invoices</Typography>
              <Button size="small" onClick={() => router.push(paths.dashboard.invoices)}>
                View all
              </Button>
            </Stack>

            <Stack spacing={2}>
              {recentInvoices.length ? (
                recentInvoices.map((invoice: any) => (
                  <Stack
                    key={invoice.id}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemText
                      primary={invoice.customerName}
                      secondary={`${invoice.no} • Due ${toDateLabel(invoice.dueDate)}`}
                    />
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography variant="subtitle2">{fCurrency(invoice.totalDue)}</Typography>
                      <Chip
                        size="small"
                        label={invoice.status}
                        color={getStatusColor(invoice.status) as any}
                        variant="soft"
                      />
                    </Stack>
                  </Stack>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  No invoices yet. Create one from billing to start tracking revenue here.
                </Typography>
              )}
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Recent Notifications</Typography>
              <Button size="small" onClick={() => router.push(paths.public.notifications)}>
                Open inbox
              </Button>
            </Stack>

            <Stack spacing={2}>
              {notifications.length ? (
                notifications.map((notification: any, index: number) => (
                  <Box key={notification.id || index}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: notification.isRead ? 'grey.200' : 'primary.lighter',
                          color: notification.isRead ? 'text.secondary' : 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        <Iconify icon="solar:bell-bing-bold" width={20} />
                      </Box>
                      <ListItemText
                        primary={notification.title}
                        secondary={`${notification.category} • ${toRelativeLabel(notification.createdAt)}`}
                        secondaryTypographyProps={{ sx: { mt: 0.5 } }}
                      />
                      {!notification.isRead && <Chip label="Unread" size="small" color="primary" />}
                    </Stack>
                    {index < notifications.length - 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  No notifications yet. Once activity starts flowing in, your latest alerts will show up here.
                </Typography>
              )}
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={7}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Delivery Pipeline
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              A fast view across customer, marketing, calendar, and project work.
            </Typography>

            <Stack spacing={2}>
              {pipelineItems.map((item) => (
                <Stack
                  key={item.label}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'common.white',
                    }}
                  >
                    <Iconify icon={item.icon} width={24} />
                  </Box>
                  <ListItemText primary={item.label} secondary={item.helper} />
                  <Typography variant="h5">{fNumber(item.value)}</Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Upcoming Schedule
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              The next items currently visible from calendar data.
            </Typography>

            <Stack spacing={2}>
              {events.length ? (
                events.slice(0, 4).map((event: any) => (
                  <Stack
                    key={event.id}
                    spacing={0.5}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography variant="subtitle2">{event.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {toDateLabel(event.startAt)} • {event.location}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {toRelativeLabel(event.startAt)}
                    </Typography>
                  </Stack>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  No upcoming events were returned for this workspace.
                </Typography>
              )}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
