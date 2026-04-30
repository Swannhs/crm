'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Switch from '@mui/material/Switch';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TableContainer from '@mui/material/TableContainer';
import CircularProgress from '@mui/material/CircularProgress';
import TablePagination from '@mui/material/TablePagination';

import { marketingService } from 'src/services/marketing-service';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

type WorkspaceProps = { section?: string };
type NameMode = null | 'campaign' | 'source' | 'medium';

type PendingDelete = null | { kind: 'source' | 'medium'; id: string; name: string };
type PendingCampaignDelete = null | { id: string; name: string };

export function MarketingWorkspaceView({ section }: WorkspaceProps = {}) {
  const queryClient = useQueryClient();
  const defaultTab = section === 'sources' ? 'sources' : section === 'mediums' ? 'mediums' : section === 'analytics' ? 'analytics' : 'campaigns';
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [campaignSearch, setCampaignSearch] = useState('');
  const [campaignPage, setCampaignPage] = useState(0);
  const [campaignRowsPerPage, setCampaignRowsPerPage] = useState(10);
  const [sourceSearch, setSourceSearch] = useState('');
  const [sourcePage, setSourcePage] = useState(0);
  const [sourceRowsPerPage, setSourceRowsPerPage] = useState(10);
  const [mediumSearch, setMediumSearch] = useState('');
  const [mediumPage, setMediumPage] = useState(0);
  const [mediumRowsPerPage, setMediumRowsPerPage] = useState(10);
  const [nameDialogOpen, setNameDialogOpen] = useState(false);
  const [nameDialogMode, setNameDialogMode] = useState<NameMode>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  const [insightsPage, setInsightsPage] = useState(0);
  const [insightsRowsPerPage, setInsightsRowsPerPage] = useState(10);
  const [pendingDelete, setPendingDelete] = useState<PendingDelete>(null);
  const [inlineCampaignEditId, setInlineCampaignEditId] = useState<string | null>(null);
  const [inlineCampaignName, setInlineCampaignName] = useState('');
  const [busyCampaignId, setBusyCampaignId] = useState<string | null>(null);
  const [busySourceId, setBusySourceId] = useState<string | null>(null);
  const [busyMediumId, setBusyMediumId] = useState<string | null>(null);
  const [pendingCampaignDelete, setPendingCampaignDelete] = useState<PendingCampaignDelete>(null);

  const campaignsQuery = useQuery({
    queryKey: ['marketing-campaigns', campaignSearch, campaignPage, campaignRowsPerPage],
    queryFn: () =>
      marketingService.getCampaignsPage({
        search: campaignSearch,
        page: campaignPage + 1,
        pageSize: campaignRowsPerPage,
      }),
  });
  const sourcesQuery = useQuery({
    queryKey: ['marketing-sources', sourceSearch, sourcePage, sourceRowsPerPage],
    queryFn: () =>
      marketingService.getSourcesPage({
        search: sourceSearch,
        page: sourcePage + 1,
        pageSize: sourceRowsPerPage,
      }),
  });
  const mediumsQuery = useQuery({
    queryKey: ['marketing-mediums', mediumSearch, mediumPage, mediumRowsPerPage],
    queryFn: () =>
      marketingService.getMediumsPage({
        search: mediumSearch,
        page: mediumPage + 1,
        pageSize: mediumRowsPerPage,
      }),
  });
  const analyticsQuery = useQuery({
    queryKey: ['marketing-analytics', dateFrom, dateTo],
    queryFn: () => marketingService.getAnalytics({ dateFrom, dateTo }),
  });
  const campaignInsightsQuery = useQuery({
    queryKey: ['marketing-campaign-insights', selectedCampaignId, insightsPage, insightsRowsPerPage],
    enabled: Boolean(selectedCampaignId),
    queryFn: () =>
      marketingService.getCampaignInsights(selectedCampaignId!, {
        page: insightsPage + 1,
        pageSize: insightsRowsPerPage,
      }),
  });

  const refreshAll = () => {
    queryClient.invalidateQueries({ queryKey: ['marketing-campaigns'] });
    queryClient.invalidateQueries({ queryKey: ['marketing-sources'] });
    queryClient.invalidateQueries({ queryKey: ['marketing-mediums'] });
    queryClient.invalidateQueries({ queryKey: ['marketing-analytics'] });
    queryClient.invalidateQueries({ queryKey: ['marketing-campaign-insights'] });
  };

  const createCampaignMutation = useMutation({
    mutationFn: (payload: { name: string }) => marketingService.createCampaign(payload),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      showToast({ severity: 'success', message: 'Campaign created.' });
    },
    onError: (err: Error) => showToast({ severity: 'error', message: err.message }),
  });
  const updateCampaignMutation = useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) => marketingService.updateCampaign(id, { name }),
    onMutate: ({ id }) => setBusyCampaignId(id),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      setInlineCampaignEditId(null);
      setInlineCampaignName('');
      setBusyCampaignId(null);
      showToast({ severity: 'success', message: 'Campaign updated.' });
    },
    onError: (err: Error) => {
      setBusyCampaignId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusyCampaignId(null),
  });
  const campaignActionMutation = useMutation({
    mutationFn: ({ id, action }: { id: string; action: 'launch' | 'pause' | 'archive' }) => marketingService.setCampaignAction(id, action),
    onMutate: ({ id }) => {
      setBusyCampaignId(id);
    },
    onSuccess: () => {
      refreshAll();
      setBusyCampaignId(null);
      showToast({ severity: 'success', message: 'Campaign status updated.' });
    },
    onError: (err: Error) => {
      setBusyCampaignId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusyCampaignId(null),
  });

  const createSourceMutation = useMutation({
    mutationFn: (payload: { name: string }) => marketingService.createSource(payload),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      showToast({ severity: 'success', message: 'Source created.' });
    },
    onError: (err: Error) => showToast({ severity: 'error', message: err.message }),
  });
  const updateSourceMutation = useMutation({
    mutationFn: ({ id, name, active }: { id: string; name?: string; active?: boolean }) =>
      marketingService.updateSource(id, { name, active }),
    onMutate: (vars) => setBusySourceId(vars.id),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      setBusySourceId(null);
      showToast({ severity: 'success', message: 'Source updated.' });
    },
    onError: (err: Error) => {
      setBusySourceId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusySourceId(null),
  });
  const deleteSourceMutation = useMutation({
    mutationFn: (id: string) => marketingService.deleteSource(id),
    onMutate: (id) => setBusySourceId(id),
    onSuccess: () => {
      refreshAll();
      setPendingDelete(null);
      setBusySourceId(null);
      showToast({ severity: 'success', message: 'Source deleted.' });
    },
    onError: (err: Error) => {
      setBusySourceId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusySourceId(null),
  });

  const createMediumMutation = useMutation({
    mutationFn: (payload: { name: string }) => marketingService.createMedium(payload),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      showToast({ severity: 'success', message: 'Medium created.' });
    },
    onError: (err: Error) => showToast({ severity: 'error', message: err.message }),
  });
  const updateMediumMutation = useMutation({
    mutationFn: ({ id, name, active }: { id: string; name?: string; active?: boolean }) =>
      marketingService.updateMedium(id, { name, active }),
    onMutate: (vars) => setBusyMediumId(vars.id),
    onSuccess: () => {
      refreshAll();
      closeNameDialog();
      setBusyMediumId(null);
      showToast({ severity: 'success', message: 'Medium updated.' });
    },
    onError: (err: Error) => {
      setBusyMediumId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusyMediumId(null),
  });
  const deleteMediumMutation = useMutation({
    mutationFn: (id: string) => marketingService.deleteMedium(id),
    onMutate: (id) => setBusyMediumId(id),
    onSuccess: () => {
      refreshAll();
      setPendingDelete(null);
      setBusyMediumId(null);
      showToast({ severity: 'success', message: 'Medium deleted.' });
    },
    onError: (err: Error) => {
      setBusyMediumId(null);
      showToast({ severity: 'error', message: err.message });
    },
    onSettled: () => setBusyMediumId(null),
  });

  const campaignRows = useMemo(
    () => (Array.isArray(campaignsQuery.data?.items) ? campaignsQuery.data.items : []),
    [campaignsQuery.data?.items]
  );
  const campaignTotal = Number(campaignsQuery.data?.total ?? 0);
  const sources = useMemo(() => (Array.isArray(sourcesQuery.data?.items) ? sourcesQuery.data.items : []), [sourcesQuery.data?.items]);
  const sourcesTotal = Number(sourcesQuery.data?.total ?? 0);
  const mediums = useMemo(() => (Array.isArray(mediumsQuery.data?.items) ? mediumsQuery.data.items : []), [mediumsQuery.data?.items]);
  const mediumsTotal = Number(mediumsQuery.data?.total ?? 0);
  const analytics = analyticsQuery.data;

  const openNameDialog = (mode: NameMode, current?: { id?: string; name?: string }) => {
    setNameDialogMode(mode);
    setEditingId(current?.id || null);
    setNameInput(current?.name || '');
    setNameDialogOpen(true);
  };
  const closeNameDialog = () => {
    setNameDialogOpen(false);
    setNameDialogMode(null);
    setEditingId(null);
    setNameInput('');
  };

  const submitNameDialog = () => {
    const name = nameInput.trim();
    if (!name || !nameDialogMode) return;
    if (nameDialogMode === 'campaign') {
      if (editingId) updateCampaignMutation.mutate({ id: editingId, name });
      else createCampaignMutation.mutate({ name });
      return;
    }
    if (nameDialogMode === 'source') {
      if (editingId) updateSourceMutation.mutate({ id: editingId, name });
      else createSourceMutation.mutate({ name });
      return;
    }
    if (nameDialogMode === 'medium') {
      if (editingId) updateMediumMutation.mutate({ id: editingId, name });
      else createMediumMutation.mutate({ name });
    }
  };

  const isBusy = campaignsQuery.isLoading || sourcesQuery.isLoading || mediumsQuery.isLoading || analyticsQuery.isLoading;

  return (
    <FeatureRouteShell
      title="Marketing Workspace"
      description="Campaigns, attribution, and analytics powered by Odoo."
      links={[{ href: '#', label: 'Campaigns' }, { href: '#', label: 'Sources' }, { href: '#', label: 'Analytics' }]}
      action={<Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold" />} onClick={() => openNameDialog('campaign')}>New campaign</Button>}
    >
      <Tabs value={activeTab} onChange={(_e, value) => setActiveTab(value)} sx={{ mb: 3 }}>
        <Tab value="campaigns" label="Campaigns" />
        <Tab value="sources" label="Sources" />
        <Tab value="mediums" label="Mediums" />
        <Tab value="analytics" label="Analytics" />
      </Tabs>

      {isBusy ? (
        <Stack alignItems="center" sx={{ py: 6 }}><CircularProgress /></Stack>
      ) : (
        <>
          {activeTab === 'campaigns' && (
            <Card sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                <TextField
                  size="small"
                  label="Search campaigns"
                  value={campaignSearch}
                  onChange={(e) => {
                    setCampaignSearch(e.target.value);
                    setCampaignPage(0);
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={<Iconify icon="solar:add-circle-bold" />}
                  onClick={() => openNameDialog('campaign')}
                >
                  Create campaign
                </Button>
              </Stack>
              <TableContainer>
                <Table>
                  <TableHead><TableRow><TableCell>Name</TableCell><TableCell>Status</TableCell><TableCell>Updated</TableCell><TableCell align="right">Actions</TableCell></TableRow></TableHead>
                  <TableBody>
                    {campaignRows.map((campaign: any) => (
                      <TableRow key={campaign.id}>
                        <TableCell>
                          {inlineCampaignEditId === campaign.id ? (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <TextField
                                size="small"
                                value={inlineCampaignName}
                                onChange={(e) => setInlineCampaignName(e.target.value)}
                                sx={{ minWidth: 220 }}
                              />
                              <IconButton
                                color="success"
                                disabled={busyCampaignId === campaign.id}
                                onClick={() => {
                                  const next = inlineCampaignName.trim();
                                  if (!next) return;
                                  updateCampaignMutation.mutate({ id: campaign.id, name: next });
                                }}
                              >
                                {busyCampaignId === campaign.id ? <CircularProgress size={18} /> : <Iconify icon="solar:check-circle-bold" />}
                              </IconButton>
                              <IconButton
                                color="inherit"
                                onClick={() => {
                                  setInlineCampaignEditId(null);
                                  setInlineCampaignName('');
                                }}
                              >
                                <Iconify icon="solar:close-circle-bold" />
                              </IconButton>
                            </Stack>
                          ) : (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Typography>{campaign.name}</Typography>
                              <IconButton
                                size="small"
                                onClick={() => {
                                  setInlineCampaignEditId(campaign.id);
                                  setInlineCampaignName(campaign.name || '');
                                }}
                              >
                                <Iconify icon="solar:pen-2-bold" />
                              </IconButton>
                            </Stack>
                          )}
                        </TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            color={campaign.status === 'archived' ? 'default' : campaign.status === 'paused' ? 'warning' : 'success'}
                            label={campaign.status === 'archived' ? 'Archived' : campaign.status === 'paused' ? 'Paused' : 'Active'}
                          />
                        </TableCell>
                        <TableCell>{campaign.updatedAt || '-'}</TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <Button
                              size="small"
                              variant="outlined"
                              disabled={busyCampaignId === campaign.id}
                              onClick={() => {
                                setInsightsPage(0);
                                setSelectedCampaignId(campaign.id);
                              }}
                            >
                              Details
                            </Button>
                            <Button size="small" variant="outlined" disabled={busyCampaignId === campaign.id} onClick={() => campaignActionMutation.mutate({ id: campaign.id, action: 'launch' })}>Launch</Button>
                            <Button size="small" variant="outlined" disabled={busyCampaignId === campaign.id} onClick={() => campaignActionMutation.mutate({ id: campaign.id, action: 'pause' })}>Pause</Button>
                            <Button size="small" color="warning" variant="outlined" disabled={busyCampaignId === campaign.id} onClick={() => campaignActionMutation.mutate({ id: campaign.id, action: 'archive' })}>Archive</Button>
                            <IconButton
                              color="error"
                              disabled={busyCampaignId === campaign.id}
                              onClick={() => setPendingCampaignDelete({ id: campaign.id, name: campaign.name })}
                            >
                              {busyCampaignId === campaign.id ? <CircularProgress size={18} /> : <Iconify icon="solar:trash-bin-trash-bold" />}
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                    {campaignRows.length === 0 && <TableRow><TableCell colSpan={4} sx={{ py: 5, textAlign: 'center' }}>No campaigns found.</TableCell></TableRow>}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={campaignTotal}
                page={campaignPage}
                onPageChange={(_event, nextPage) => setCampaignPage(nextPage)}
                rowsPerPage={campaignRowsPerPage}
                onRowsPerPageChange={(event) => {
                  setCampaignRowsPerPage(Number(event.target.value));
                  setCampaignPage(0);
                }}
                rowsPerPageOptions={[10, 20, 50]}
              />
            </Card>
          )}

          {activeTab === 'sources' && (
            <Card sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                <TextField
                  size="small"
                  label="Search sources"
                  value={sourceSearch}
                  onChange={(e) => {
                    setSourceSearch(e.target.value);
                    setSourcePage(0);
                  }}
                />
                <Button variant="contained" onClick={() => openNameDialog('source')}>New source</Button>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1.25}>
                {sources.map((source: any) => (
                  <Stack key={source.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, borderRadius: 1, bgcolor: 'background.neutral' }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography>{source.name}</Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {source.active ? 'Active' : 'Inactive'}
                        </Typography>
                        <Switch
                          size="small"
                          checked={source.active !== false}
                          disabled={busySourceId === source.id}
                          onChange={(event) =>
                            updateSourceMutation.mutate({ id: source.id, name: source.name, active: event.target.checked })
                          }
                        />
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <IconButton color="info" disabled={busySourceId === source.id} onClick={() => openNameDialog('source', { id: source.id, name: source.name })}><Iconify icon="solar:pen-2-bold" /></IconButton>
                      <IconButton color="error" disabled={busySourceId === source.id} onClick={() => setPendingDelete({ kind: 'source', id: source.id, name: source.name })}>
                        {busySourceId === source.id ? <CircularProgress size={18} /> : <Iconify icon="solar:trash-bin-trash-bold" />}
                      </IconButton>
                    </Stack>
                  </Stack>
                ))}
                {sources.length === 0 && <Alert severity="info">No sources configured.</Alert>}
              </Stack>
              <TablePagination
                component="div"
                count={sourcesTotal}
                page={sourcePage}
                onPageChange={(_event, nextPage) => setSourcePage(nextPage)}
                rowsPerPage={sourceRowsPerPage}
                onRowsPerPageChange={(event) => {
                  setSourceRowsPerPage(Number(event.target.value));
                  setSourcePage(0);
                }}
                rowsPerPageOptions={[10, 20, 50]}
              />
            </Card>
          )}

          {activeTab === 'mediums' && (
            <Card sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                <TextField
                  size="small"
                  label="Search mediums"
                  value={mediumSearch}
                  onChange={(e) => {
                    setMediumSearch(e.target.value);
                    setMediumPage(0);
                  }}
                />
                <Button variant="contained" onClick={() => openNameDialog('medium')}>New medium</Button>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1.25}>
                {mediums.map((medium: any) => (
                  <Stack key={medium.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, borderRadius: 1, bgcolor: 'background.neutral' }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography>{medium.name}</Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {medium.active ? 'Active' : 'Inactive'}
                        </Typography>
                        <Switch
                          size="small"
                          checked={medium.active !== false}
                          disabled={busyMediumId === medium.id}
                          onChange={(event) =>
                            updateMediumMutation.mutate({ id: medium.id, name: medium.name, active: event.target.checked })
                          }
                        />
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <IconButton color="info" disabled={busyMediumId === medium.id} onClick={() => openNameDialog('medium', { id: medium.id, name: medium.name })}><Iconify icon="solar:pen-2-bold" /></IconButton>
                      <IconButton color="error" disabled={busyMediumId === medium.id} onClick={() => setPendingDelete({ kind: 'medium', id: medium.id, name: medium.name })}>
                        {busyMediumId === medium.id ? <CircularProgress size={18} /> : <Iconify icon="solar:trash-bin-trash-bold" />}
                      </IconButton>
                    </Stack>
                  </Stack>
                ))}
                {mediums.length === 0 && <Alert severity="info">No mediums configured.</Alert>}
              </Stack>
              <TablePagination
                component="div"
                count={mediumsTotal}
                page={mediumPage}
                onPageChange={(_event, nextPage) => setMediumPage(nextPage)}
                rowsPerPage={mediumRowsPerPage}
                onRowsPerPageChange={(event) => {
                  setMediumRowsPerPage(Number(event.target.value));
                  setMediumPage(0);
                }}
                rowsPerPageOptions={[10, 20, 50]}
              />
            </Card>
          )}

          {activeTab === 'analytics' && (
            <Stack spacing={2}>
              <Card sx={{ p: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} sx={{ mb: 2 }}>
                  <TextField size="small" type="date" label="From" InputLabelProps={{ shrink: true }} value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                  <TextField size="small" type="date" label="To" InputLabelProps={{ shrink: true }} value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                </Stack>
                <Typography variant="h6" sx={{ mb: 2 }}>Marketing KPI</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <Metric label="Total campaigns" value={analytics?.totalCampaigns ?? 0} />
                  <Metric label="Active campaigns" value={analytics?.activeCampaigns ?? 0} />
                  <Metric label="Total leads" value={analytics?.totalLeads ?? 0} />
                  <Metric label="Opportunities" value={analytics?.totalOpportunities ?? 0} />
                  <Metric label="Conversion" value={`${analytics?.conversionRate ?? 0}%`} />
                  <Metric label="Revenue" value={`$${Number(analytics?.revenue ?? 0).toFixed(2)}`} />
                </Stack>
              </Card>
            </Stack>
          )}
        </>
      )}

      <Dialog open={nameDialogOpen} onClose={closeNameDialog}>
        <DialogTitle>{editingId ? 'Edit' : 'Create'} {nameDialogMode || 'item'}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" fullWidth label="Name" value={nameInput} onChange={(event) => setNameInput(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeNameDialog}>Cancel</Button>
          <Button variant="contained" disabled={!nameInput.trim()} onClick={submitNameDialog}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(pendingDelete)} onClose={() => setPendingDelete(null)}>
        <DialogTitle>Delete {pendingDelete?.kind || 'item'}?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This will permanently delete {pendingDelete?.name || 'this item'}.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPendingDelete(null)}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            disabled={deleteSourceMutation.isPending || deleteMediumMutation.isPending}
            onClick={() => {
              if (!pendingDelete) return;
              if (pendingDelete.kind === 'source') deleteSourceMutation.mutate(pendingDelete.id);
              if (pendingDelete.kind === 'medium') deleteMediumMutation.mutate(pendingDelete.id);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(pendingCampaignDelete)} onClose={() => setPendingCampaignDelete(null)}>
        <DialogTitle>Archive campaign?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This will archive {pendingCampaignDelete?.name || 'this campaign'} and keep its data.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPendingCampaignDelete(null)}>Cancel</Button>
          <Button
            color="warning"
            variant="contained"
            disabled={campaignActionMutation.isPending}
            onClick={() => {
              if (!pendingCampaignDelete) return;
              campaignActionMutation.mutate({ id: pendingCampaignDelete.id, action: 'archive' });
              setPendingCampaignDelete(null);
            }}
          >
            Archive
          </Button>
        </DialogActions>
      </Dialog>

      <Drawer anchor="right" open={Boolean(selectedCampaignId)} onClose={() => setSelectedCampaignId(null)}>
        <Box sx={{ width: 520, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Campaign Insights</Typography>
          {campaignInsightsQuery.isLoading ? (
            <CircularProgress />
          ) : (
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Related Leads ({campaignInsightsQuery.data?.leadsTotal ?? 0})
                </Typography>
                <Stack spacing={1}>
                  {(campaignInsightsQuery.data?.leads || []).map((lead: any) => (
                    <Alert key={`lead-${lead.id}`} severity="info">{lead.name} • {lead.type || 'lead'} • {lead.email_from || 'No email'}</Alert>
                  ))}
                  {(campaignInsightsQuery.data?.leads || []).length === 0 && <Alert severity="warning">No leads linked.</Alert>}
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Related Orders ({campaignInsightsQuery.data?.ordersTotal ?? 0})
                </Typography>
                <Stack spacing={1}>
                  {(campaignInsightsQuery.data?.orders || []).map((order: any) => (
                    <Alert key={`order-${order.id}`} severity="success">{order.name || `Order #${order.id}`} • ${Number(order.amount_total || 0).toFixed(2)} • {order.state}</Alert>
                  ))}
                  {(campaignInsightsQuery.data?.orders || []).length === 0 && <Alert severity="warning">No orders linked.</Alert>}
                </Stack>
              </Box>

              <TablePagination
                component="div"
                count={Math.max(Number(campaignInsightsQuery.data?.leadsTotal || 0), Number(campaignInsightsQuery.data?.ordersTotal || 0))}
                page={insightsPage}
                onPageChange={(_event, nextPage) => setInsightsPage(nextPage)}
                rowsPerPage={insightsRowsPerPage}
                onRowsPerPageChange={(event) => {
                  setInsightsRowsPerPage(Number(event.target.value));
                  setInsightsPage(0);
                }}
                rowsPerPageOptions={[5, 10, 20]}
              />
            </Stack>
          )}
        </Box>
      </Drawer>
    </FeatureRouteShell>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <Box sx={{ p: 2, borderRadius: 1.5, bgcolor: 'background.neutral', minWidth: 140 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{label}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
}
