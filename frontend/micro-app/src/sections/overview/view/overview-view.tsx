'use client';

import { useQueries } from '@tanstack/react-query';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { useAuthContext } from 'src/auth/hooks';
import { billingService } from 'src/services/billing-service';
import { contactService } from 'src/services/contact-service';
import { marketingService } from 'src/services/marketing-service';
import { projectService } from 'src/services/project-service';

import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

export function OverviewView() {
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
        queryKey: ['overview-campaigns'],
        queryFn: () => marketingService.getCampaigns(),
      },
      {
        queryKey: ['overview-projects'],
        queryFn: () => projectService.getProjects(),
      },
    ],
  });

  const [contactsQuery, invoicesQuery, campaignsQuery, projectsQuery] = results;

  const loading = results.some((query) => query.isLoading);

  if (loading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const contacts = Array.isArray(contactsQuery.data) ? contactsQuery.data : [];
  const invoices = Array.isArray(invoicesQuery.data) ? invoicesQuery.data : [];
  const campaigns = Array.isArray(campaignsQuery.data) ? campaignsQuery.data : [];
  const projects = Array.isArray(projectsQuery.data) ? projectsQuery.data : [];

  const activeInvoices = invoices.filter((invoice: any) => !['paid', 'cancelled'].includes(invoice.status)).length;
  const displayName = user?.fullName || user?.username || user?.email || 'there';

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back {displayName}
      </Typography>

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
            title="Active Invoices"
            total={activeInvoices}
            color="info"
            icon="solar:bill-list-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Campaigns"
            total={campaigns.length}
            color="warning"
            icon="solar:mailbox-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Projects"
            total={projects.length}
            color="error"
            icon="solar:folder-with-files-bold"
          />
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Overview
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            You currently have {contacts.length} contacts, {activeInvoices} active invoices, {campaigns.length} campaigns, and {projects.length} projects in this workspace.
          </Typography>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
