'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';

import { builderService } from 'src/services/builder-service';
import { marketingService } from 'src/services/marketing-service';

// ----------------------------------------------------------------------

type BuilderMode =
  | 'form-list'
  | 'form-create'
  | 'form-setting'
  | 'form-preview'
  | 'form-submitted'
  | 'email-editor'
  | 'webbuilder-create'
  | 'webbuilder-editor'
  | 'webbuilder-preview'
  | 'workflow'
  | 'social-proof'
  | 'social-scheduler'
  | 'reputation';

type Props = {
  mode: BuilderMode;
  id?: string;
  type?: string;
  template?: string;
  previewPath?: string;
  websiteId?: string;
  pageSlug?: string;
};

export function BuilderWorkspaceView({
  mode,
  id,
  type,
  template,
  previewPath,
  websiteId,
  pageSlug,
}: Props) {
  const queryClient = useQueryClient();
  const formMethods = useForm({
    defaultValues: {
      title: '',
      name: '',
      formCategory: '',
      type: type || 'form',
      template: template || '',
    },
  });
  const websiteMethods = useForm({
    defaultValues: {
      name: '',
      type: type || 'business',
    },
  });

  const formsQuery = useQuery({
    queryKey: ['builder-forms'],
    queryFn: () => builderService.getForms(),
    enabled: ['form-list', 'form-create', 'form-setting'].includes(mode),
  });

  const templatesQuery = useQuery({
    queryKey: ['builder-form-templates'],
    queryFn: () => builderService.getFormTemplates(),
    enabled: ['form-list', 'form-create'].includes(mode),
  });

  const formPreviewQuery = useQuery({
    queryKey: ['builder-form-preview', id],
    queryFn: () => builderService.getFormPreview(id!),
    enabled: ['form-setting', 'form-preview'].includes(mode) && Boolean(id),
  });

  const websitesQuery = useQuery({
    queryKey: ['builder-websites'],
    queryFn: () => builderService.getWebsites(),
    enabled: ['webbuilder-create', 'webbuilder-editor'].includes(mode),
  });

  const websiteQuery = useQuery({
    queryKey: ['builder-website', id],
    queryFn: () => builderService.getWebsite(id!),
    enabled: mode === 'webbuilder-editor' && Boolean(id),
  });

  const websitePreviewQuery = useQuery({
    queryKey: ['builder-website-preview', websiteId, pageSlug],
    queryFn: () => builderService.getWebsitePreviewData(websiteId!, pageSlug),
    enabled: mode === 'webbuilder-preview' && Boolean(websiteId),
  });

  const emailCampaignsQuery = useQuery({
    queryKey: ['builder-email-campaigns'],
    queryFn: () => marketingService.getCampaigns(),
    enabled: mode === 'email-editor',
  });

  const workflowWorkspacesQuery = useQuery({
    queryKey: ['builder-workflow-workspaces'],
    queryFn: () => marketingService.getWorkflowWorkspaces(),
    enabled: mode === 'workflow',
  });

  const reputationQuery = useQuery({
    queryKey: ['builder-reputation-stats'],
    queryFn: () => builderService.getReputationDashboardStats(),
    enabled: ['social-proof', 'reputation'].includes(mode),
  });

  const createFormMutation = useMutation({
    mutationFn: (values: any) => builderService.createForm(values),
    onSuccess: async () => {
      formMethods.reset();
      await queryClient.invalidateQueries({ queryKey: ['builder-forms'] });
    },
  });

  const createWebsiteMutation = useMutation({
    mutationFn: (values: any) => builderService.createWebsite(values),
    onSuccess: async () => {
      websiteMethods.reset();
      await queryClient.invalidateQueries({ queryKey: ['builder-websites'] });
    },
  });

  const isLoading =
    formsQuery.isLoading ||
    templatesQuery.isLoading ||
    formPreviewQuery.isLoading ||
    websitesQuery.isLoading ||
    websiteQuery.isLoading ||
    websitePreviewQuery.isLoading ||
    emailCampaignsQuery.isLoading ||
    workflowWorkspacesQuery.isLoading ||
    reputationQuery.isLoading;

  const relatedLinks = useMemo(
    () => [
      { href: paths.dashboard.formBuilder, label: 'Form Funnel' },
      { href: paths.dashboard.emailEditor, label: 'Email Editor' },
      { href: paths.dashboard.webBuilderCreate, label: 'Web Builder' },
      { href: paths.dashboard.workflow, label: 'Workflow' },
      { href: paths.dashboard.webToolsReputation, label: 'Reputation' },
    ],
    []
  );

  if (isLoading) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4">
            {mode === 'form-list'
              ? 'Form Funnel'
              : mode === 'form-create'
                ? 'Create Form Funnel'
                : mode === 'form-setting'
                  ? 'Form Settings'
                  : mode === 'form-preview'
                    ? 'Form Preview'
                    : mode === 'form-submitted'
                      ? 'Form Submitted'
                      : mode === 'email-editor'
                        ? 'Email Editor'
                        : mode === 'webbuilder-create'
                          ? 'Web Builder'
                          : mode === 'webbuilder-editor'
                            ? 'Website Editor'
                            : mode === 'webbuilder-preview'
                              ? 'Website Preview'
                              : mode === 'workflow'
                                ? 'Workflow'
                                : mode === 'social-proof'
                                  ? 'Social Proof'
                                  : mode === 'social-scheduler'
                                    ? 'Social Scheduler'
                                    : 'Reputation'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Legacy builder and editor routes mapped into the micro-app with compatibility-backed data where available.
          </Typography>
        </Box>

        <Card sx={{ p: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {relatedLinks.map((link) => (
              <Button key={link.href} component={Link} href={link.href} variant="soft" color="inherit">
                {link.label}
              </Button>
            ))}
          </Stack>
        </Card>

        {mode === 'form-list' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Funnels
                </Typography>
                <Typography variant="h3">{formsQuery.data?.length || 0}</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Templates
                </Typography>
                <Typography variant="h3">{templatesQuery.data?.length || 0}</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Quick Actions
                </Typography>
                <Stack spacing={1}>
                  <Button component={Link} href={paths.dashboard.formBuilderCreate('form', 'blank', 'new')} variant="contained">
                    New Form
                  </Button>
                  <Button component={Link} href={paths.dashboard.webBuilderCreate} variant="outlined">
                    New Website
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Existing Forms
                </Typography>
                <Stack spacing={1.5}>
                  {(formsQuery.data || []).slice(0, 8).map((form: any, index: number) => (
                    <Box key={form._id || form.id || index} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1}>
                        <Box>
                          <Typography variant="subtitle2">{form.title || form.name || `Form ${index + 1}`}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {form.formCategory?.name || form.type || 'No category'}
                          </Typography>
                        </Box>
                        <Stack direction="row" spacing={1}>
                          <Button
                            component={Link}
                            href={paths.dashboard.formBuilderSetting(form._id || form.id || 'new')}
                            size="small"
                            variant="outlined"
                          >
                            Settings
                          </Button>
                          <Button
                            component={Link}
                            href={paths.public.formPreview(form._id || form.id || 'new', 'default')}
                            size="small"
                            variant="soft"
                            color="inherit"
                          >
                            Preview
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'form-create' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Create Form
                </Typography>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={formMethods.handleSubmit((values) => createFormMutation.mutate(values))}
                >
                  <TextField label="Title" {...formMethods.register('title')} />
                  <TextField label="Internal Name" {...formMethods.register('name')} />
                  <TextField label="Type" defaultValue={type || 'form'} {...formMethods.register('type')} />
                  <TextField label="Template" defaultValue={template || ''} {...formMethods.register('template')} />
                  <TextField label="Category" {...formMethods.register('formCategory')} />
                  <Button type="submit" variant="contained" disabled={createFormMutation.isPending}>
                    Create Form
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Legacy Route Context
                </Typography>
                <Typography variant="body2">type: {type || 'n/a'}</Typography>
                <Typography variant="body2">template: {template || 'n/a'}</Typography>
                <Typography variant="body2">id: {id || 'n/a'}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Available templates
                </Typography>
                <Stack spacing={1}>
                  {(templatesQuery.data || []).slice(0, 6).map((item: any, index: number) => (
                    <Typography key={item._id || item.id || index} variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.title || item.name || `Template ${index + 1}`}
                    </Typography>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'form-setting' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{formPreviewQuery.data?.title || formPreviewQuery.data?.name || id}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Form settings and edit-route surface now resolve in the new app. Deep drag-and-drop editor parity still needs a dedicated builder implementation pass.
              </Typography>
              <Alert severity="info">
                This route is backed by the legacy form-builder compatibility API for current form data.
              </Alert>
            </Stack>
          </Card>
        )}

        {mode === 'form-preview' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{formPreviewQuery.data?.title || formPreviewQuery.data?.name || id}</Typography>
              <Typography variant="body2">path: {previewPath || 'default'}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Public form preview route is available in the micro-app. Rendering is currently compatibility-backed from the legacy form definition.
              </Typography>
            </Stack>
          </Card>
        )}

        {mode === 'form-submitted' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Submission Received</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The legacy submitted state route now exists in the new app for public form flows.
              </Typography>
              <Typography variant="body2">Form ID: {id || 'n/a'}</Typography>
            </Stack>
          </Card>
        )}

        {mode === 'email-editor' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Email Campaigns
                </Typography>
                <Typography variant="h3">{emailCampaignsQuery.data?.length || 0}</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Editor Context
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The email editor route now resolves in the micro-app and is tied into marketing campaign data. Full drag-and-drop editor parity still needs a dedicated editor implementation.
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Campaign ID: {id || 'new'}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'webbuilder-create' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Create Website
                </Typography>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={websiteMethods.handleSubmit((values) => createWebsiteMutation.mutate(values))}
                >
                  <TextField label="Website Name" {...websiteMethods.register('name')} />
                  <TextField label="Website Type" defaultValue={type || 'business'} {...websiteMethods.register('type')} />
                  <Button type="submit" variant="contained" disabled={createWebsiteMutation.isPending}>
                    Create Website
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Existing Websites
                </Typography>
                <Stack spacing={1.5}>
                  {(websitesQuery.data || []).slice(0, 6).map((site: any, index: number) => (
                    <Box key={site._id || site.id || index} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                      <Typography variant="subtitle2">{site.name || site.title || `Website ${index + 1}`}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {site.domain || site.slug || site.type || 'No domain yet'}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'webbuilder-editor' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{websiteQuery.data?.name || websiteQuery.data?.title || id}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Website editor route now resolves in the micro-app and loads current website metadata from the compatibility API.
              </Typography>
              <Alert severity="info">
                Full visual editor parity, section manipulation, and publishing history still require a dedicated webbuilder editor implementation in the new frontend.
              </Alert>
            </Stack>
          </Card>
        )}

        {mode === 'webbuilder-preview' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Website Preview</Typography>
              <Typography variant="body2">websiteId: {websiteId || 'n/a'}</Typography>
              <Typography variant="body2">pageSlug: {pageSlug || 'home'}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Public webbuilder preview route is present and loads preview data through the compatibility API.
              </Typography>
              <Typography variant="body2">
                Preview title: {websitePreviewQuery.data?.title || websitePreviewQuery.data?.name || 'Preview available'}
              </Typography>
            </Stack>
          </Card>
        )}

        {mode === 'workflow' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Workflow Workspaces</Typography>
              <Typography variant="h3">{workflowWorkspacesQuery.data?.length || 0}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The top-level workflow route now resolves alongside the deeper workflow builder routes that were already added earlier.
              </Typography>
            </Stack>
          </Card>
        )}

        {mode === 'social-proof' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Social Proof</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Legacy social-proof route now resolves in the new app. It currently shares reputation performance data until a dedicated social-proof microservice/frontend slice is built.
              </Typography>
              <Typography variant="body2">
                Reviews tracked: {reputationQuery.data?.reviewsCount || reputationQuery.data?.totalReviews || 'n/a'}
              </Typography>
            </Stack>
          </Card>
        )}

        {mode === 'social-scheduler' && (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Social Scheduler</Typography>
              <Alert severity="info">
                The legacy scheduler route now exists in the new app, but scheduling workflows still need a dedicated migration from the MySocial stack.
              </Alert>
            </Stack>
          </Card>
        )}

        {mode === 'reputation' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Total Reviews
                </Typography>
                <Typography variant="h3">
                  {reputationQuery.data?.totalReviews || reputationQuery.data?.reviewsCount || 0}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Average Rating
                </Typography>
                <Typography variant="h3">
                  {reputationQuery.data?.averageRating || reputationQuery.data?.avgRating || '0.0'}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Unreplied
                </Typography>
                <Typography variant="h3">
                  {reputationQuery.data?.unrepliedCount || reputationQuery.data?.pendingReplies || 0}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}
