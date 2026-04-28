'use client';

import { useMemo, useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { organizationService } from 'src/services/organization-service';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

type OrgProfileDraft = {
  name: string;
  email: string;
  phone: string;
  website: string;
  timezone: string;
  address: string;
};

type LocationDraft = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

type TeamDraft = {
  id?: string;
  name: string;
  description: string;
  managerUserId: string;
  membersCsv: string;
};

type PipelineDraft = {
  id?: string;
  name: string;
  description: string;
  stagesText: string;
};

type CustomFieldDraft = {
  id?: string;
  name: string;
  entity: string;
  type: string;
  required: boolean;
  optionsCsv: string;
};

type AutomationDraft = {
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
};

const EMPTY_LOCATION: LocationDraft = {
  id: undefined,
  name: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zip_code: '',
  country: '',
};

const EMPTY_TEAM: TeamDraft = {
  id: undefined,
  name: '',
  description: '',
  managerUserId: '',
  membersCsv: '',
};

const EMPTY_PIPELINE: PipelineDraft = {
  id: undefined,
  name: '',
  description: '',
  stagesText: '',
};

const EMPTY_CUSTOM_FIELD: CustomFieldDraft = {
  id: undefined,
  name: '',
  entity: 'contact',
  type: 'text',
  required: false,
  optionsCsv: '',
};

const EMPTY_AUTOMATION: AutomationDraft = {
  name: '',
  trigger: '',
  action: '',
  enabled: true,
};

export function OrganizationManagementView() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<
    'overview' | 'profile' | 'members' | 'locations' | 'teams' | 'pipelines' | 'custom-fields' | 'automation'
  >('overview');

  const [profile, setProfile] = useState<OrgProfileDraft>({
    name: '',
    email: '',
    phone: '',
    website: '',
    timezone: '',
    address: '',
  });

  const [memberSearch, setMemberSearch] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('org_staff');

  const [locationDraft, setLocationDraft] = useState<LocationDraft>(EMPTY_LOCATION);
  const [teamDraft, setTeamDraft] = useState<TeamDraft>(EMPTY_TEAM);
  const [pipelineDraft, setPipelineDraft] = useState<PipelineDraft>(EMPTY_PIPELINE);
  const [fieldDraft, setFieldDraft] = useState<CustomFieldDraft>(EMPTY_CUSTOM_FIELD);
  const [automationDraft, setAutomationDraft] = useState<AutomationDraft>(EMPTY_AUTOMATION);

  const { data: membership } = useQuery({
    queryKey: ['org-membership-me'],
    queryFn: () => organizationService.getMyMembership(),
  });

  const { data: workspace, isLoading: workspaceLoading } = useQuery({
    queryKey: ['org-management-workspace'],
    queryFn: () => organizationService.getOrganizationWorkspace(),
  });

  const { data: organization, isLoading: orgLoading } = useQuery({
    queryKey: ['org-management-details'],
    queryFn: () => organizationService.getOrganizationDetails(),
  });

  const { data: roleCatalog } = useQuery({
    queryKey: ['org-rbac-catalog-v2'],
    queryFn: () => organizationService.getRbacCatalog(),
    enabled: tab === 'members',
  });

  const { data: members = [], isLoading: membersLoading } = useQuery({
    queryKey: ['org-management-members', memberSearch],
    queryFn: () => organizationService.getAccessUsers({ search: memberSearch }),
    enabled: tab === 'members',
  });

  const { data: locations = [], isLoading: locationsLoading } = useQuery({
    queryKey: ['org-management-locations'],
    queryFn: () => organizationService.getLocations(),
    enabled: tab === 'locations',
  });

  const { data: teams = [], isLoading: teamsLoading } = useQuery({
    queryKey: ['org-management-teams'],
    queryFn: () => organizationService.getTeams(),
    enabled: tab === 'teams' || tab === 'overview',
  });

  const { data: pipelines = [], isLoading: pipelinesLoading } = useQuery({
    queryKey: ['org-management-pipelines'],
    queryFn: () => organizationService.getCrmPipelines(),
    enabled: tab === 'pipelines' || tab === 'overview',
  });

  const { data: customFields = [], isLoading: fieldsLoading } = useQuery({
    queryKey: ['org-management-custom-fields'],
    queryFn: () => organizationService.getCrmCustomFields(),
    enabled: tab === 'custom-fields' || tab === 'overview',
  });

  const { data: automationRules = [], isLoading: automationLoading } = useQuery({
    queryKey: ['org-management-automation-rules'],
    queryFn: () => organizationService.getCrmAutomationRules(),
    enabled: tab === 'automation' || tab === 'overview',
  });

  useEffect(() => {
    if (!organization) return;
    setProfile({
      name: organization?.name || '',
      email: organization?.email || '',
      phone: organization?.phone || '',
      website: organization?.website || '',
      timezone: organization?.timezone || '',
      address: organization?.address || '',
    });
  }, [organization]);

  const myRole = membership?.role || '';
  const canManageMembers = myRole === 'org_owner' || myRole === 'org_admin';
  const canManageLocations = canManageMembers || myRole === 'org_manager';
  const canManageProfile = canManageMembers;
  const canManageCrmConfig = canManageMembers || myRole === 'org_manager';

  const businessRoles = Array.isArray(roleCatalog?.businessRoles) ? roleCatalog.businessRoles : [];
  const roleOptions = businessRoles.length
    ? businessRoles.map((item: any) => item.keycloakRole)
    : ['org_owner', 'org_admin', 'org_manager', 'org_staff', 'org_viewer'];

  const saveProfileMutation = useMutation({
    mutationFn: () => organizationService.updateOrganization(profile),
    onSuccess: async () => {
      showToast({ message: 'Organization profile updated.', severity: 'success' });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-details'] }),
        queryClient.invalidateQueries({ queryKey: ['org-details'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to update organization.', severity: 'warning' });
    },
  });

  const createMemberMutation = useMutation({
    mutationFn: () =>
      organizationService.createKeycloakUser({
        email: newMemberEmail,
        role: newMemberRole,
        metadata: {
          integrationRoles: {},
        },
      }),
    onSuccess: async () => {
      showToast({ message: 'Member created successfully.', severity: 'success' });
      setNewMemberEmail('');
      await queryClient.invalidateQueries({ queryKey: ['org-management-members'] });
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to create member.', severity: 'warning' });
    },
  });

  const updateMemberMutation = useMutation({
    mutationFn: ({ userId, role, permissions }: { userId: string; role: string; permissions: string[] }) =>
      organizationService.upsertMembership(userId, {
        role,
        permissions,
        metadata: {
          integrationRoles: {},
        },
      }),
    onSuccess: async () => {
      showToast({ message: 'Member role updated.', severity: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['org-management-members'] });
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to update member.', severity: 'warning' });
    },
  });

  const removeMemberMutation = useMutation({
    mutationFn: (userId: string) => organizationService.removeMembership(userId),
    onSuccess: async () => {
      showToast({ message: 'Member removed.', severity: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['org-management-members'] });
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to remove member.', severity: 'warning' });
    },
  });

  const saveLocationMutation = useMutation({
    mutationFn: () =>
      !locationDraft.id
        ? organizationService.createLocation(locationDraft)
        : organizationService.updateLocation(locationDraft.id, locationDraft),
    onSuccess: async () => {
      showToast({ message: locationDraft.id ? 'Location updated.' : 'Location created.', severity: 'success' });
      setLocationDraft(EMPTY_LOCATION);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-locations'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to save location.', severity: 'warning' });
    },
  });

  const removeLocationMutation = useMutation({
    mutationFn: (locationId: string) => organizationService.deleteLocation(locationId),
    onSuccess: async () => {
      showToast({ message: 'Location removed.', severity: 'success' });
      if (locationDraft.id) {
        setLocationDraft(EMPTY_LOCATION);
      }
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-locations'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to remove location.', severity: 'warning' });
    },
  });

  const saveTeamMutation = useMutation({
    mutationFn: () => {
      const payload = {
        name: teamDraft.name,
        description: teamDraft.description,
        managerUserId: teamDraft.managerUserId,
        members: teamDraft.membersCsv
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      };
      return teamDraft.id
        ? organizationService.updateTeam(teamDraft.id, payload)
        : organizationService.createTeam(payload);
    },
    onSuccess: async () => {
      showToast({ message: teamDraft.id ? 'Team updated.' : 'Team created.', severity: 'success' });
      setTeamDraft(EMPTY_TEAM);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-teams'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to save team.', severity: 'warning' });
    },
  });

  const deleteTeamMutation = useMutation({
    mutationFn: (teamId: string) => organizationService.deleteTeam(teamId),
    onSuccess: async () => {
      showToast({ message: 'Team removed.', severity: 'success' });
      if (teamDraft.id) setTeamDraft(EMPTY_TEAM);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-teams'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to remove team.', severity: 'warning' });
    },
  });

  const savePipelineMutation = useMutation({
    mutationFn: () => {
      const stages = pipelineDraft.stagesText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const [name, probability, color] = line.split('|').map((item) => item.trim());
          return {
            name,
            probability: Number(probability || 0),
            color: color || '#3366FF',
          };
        })
        .filter((stage) => stage.name);

      const payload = {
        name: pipelineDraft.name,
        description: pipelineDraft.description,
        stages,
      };

      return pipelineDraft.id
        ? organizationService.updateCrmPipeline(pipelineDraft.id, payload)
        : organizationService.createCrmPipeline(payload);
    },
    onSuccess: async () => {
      showToast({ message: pipelineDraft.id ? 'Pipeline updated.' : 'Pipeline created.', severity: 'success' });
      setPipelineDraft(EMPTY_PIPELINE);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-pipelines'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to save pipeline.', severity: 'warning' });
    },
  });

  const deletePipelineMutation = useMutation({
    mutationFn: (pipelineId: string) => organizationService.deleteCrmPipeline(pipelineId),
    onSuccess: async () => {
      showToast({ message: 'Pipeline removed.', severity: 'success' });
      if (pipelineDraft.id) setPipelineDraft(EMPTY_PIPELINE);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-pipelines'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to remove pipeline.', severity: 'warning' });
    },
  });

  const saveCustomFieldMutation = useMutation({
    mutationFn: () => {
      const payload = {
        name: fieldDraft.name,
        entity: fieldDraft.entity,
        type: fieldDraft.type,
        required: fieldDraft.required,
        options: fieldDraft.optionsCsv
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      };

      return fieldDraft.id
        ? organizationService.updateCrmCustomField(fieldDraft.id, payload)
        : organizationService.createCrmCustomField(payload);
    },
    onSuccess: async () => {
      showToast({ message: fieldDraft.id ? 'Custom field updated.' : 'Custom field created.', severity: 'success' });
      setFieldDraft(EMPTY_CUSTOM_FIELD);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-custom-fields'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to save custom field.', severity: 'warning' });
    },
  });

  const deleteCustomFieldMutation = useMutation({
    mutationFn: (fieldId: string) => organizationService.deleteCrmCustomField(fieldId),
    onSuccess: async () => {
      showToast({ message: 'Custom field removed.', severity: 'success' });
      if (fieldDraft.id) setFieldDraft(EMPTY_CUSTOM_FIELD);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-custom-fields'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to remove custom field.', severity: 'warning' });
    },
  });

  const updateAutomationMutation = useMutation({
    mutationFn: (rules: any[]) => organizationService.updateCrmAutomationRules({ rules }),
    onSuccess: async () => {
      showToast({ message: 'Automation rules updated.', severity: 'success' });
      setAutomationDraft(EMPTY_AUTOMATION);
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['org-management-automation-rules'] }),
        queryClient.invalidateQueries({ queryKey: ['org-management-workspace'] }),
      ]);
    },
    onError: (error: any) => {
      showToast({ message: error?.message || 'Failed to update automation rules.', severity: 'warning' });
    },
  });

  const memberRows = useMemo(
    () =>
      members.map((member: any) => {
        const fullName = `${member?.profile?.firstName || ''} ${member?.profile?.lastName || ''}`.trim();
        return {
          ...member,
          displayName: fullName || member?.profile?.username || member?.userId,
          email: member?.profile?.email || '-',
        };
      }),
    [members]
  );

  if (orgLoading || workspaceLoading) {
    return (
      <DashboardContent maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <LinearProgress />
        </Box>
      </DashboardContent>
    );
  }

  const automationRows = Array.isArray(automationRules) ? automationRules : [];

  return (
    <DashboardContent maxWidth="xl">
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4">Organization CRM Workspace</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Advanced organization management for profile, users, locations, CRM pipelines, teams, custom fields, and automation.
          </Typography>
        </Box>

        <Card sx={{ px: 2 }}>
          <Tabs value={tab} onChange={(_event, next) => setTab(next)} variant="scrollable" scrollButtons="auto">
            <Tab value="overview" label="Overview" icon={<Iconify icon="solar:chart-2-bold" />} iconPosition="start" />
            <Tab value="profile" label="Profile" icon={<Iconify icon="solar:buildings-bold" />} iconPosition="start" />
            <Tab value="members" label="Members" icon={<Iconify icon="solar:users-group-rounded-bold" />} iconPosition="start" />
            <Tab value="locations" label="Locations" icon={<Iconify icon="solar:map-point-bold" />} iconPosition="start" />
            <Tab value="teams" label="Teams" icon={<Iconify icon="solar:shield-user-bold" />} iconPosition="start" />
            <Tab value="pipelines" label="Pipelines" icon={<Iconify icon="solar:chart-square-bold" />} iconPosition="start" />
            <Tab value="custom-fields" label="Custom Fields" icon={<Iconify icon="solar:document-text-bold" />} iconPosition="start" />
            <Tab value="automation" label="Automation" icon={<Iconify icon="solar:magic-stick-3-bold" />} iconPosition="start" />
          </Tabs>
        </Card>

        {tab === 'overview' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <MetricCard title="Members" value={workspace?.stats?.membersTotal || 0} icon="solar:users-group-rounded-bold" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MetricCard title="Locations" value={workspace?.stats?.locationsTotal || 0} icon="solar:map-point-bold" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MetricCard title="Teams" value={workspace?.stats?.teamsTotal || 0} icon="solar:shield-user-bold" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MetricCard title="Pipelines" value={workspace?.stats?.pipelinesTotal || 0} icon="solar:chart-square-bold" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MetricCard title="Custom Fields" value={workspace?.stats?.customFieldsTotal || 0} icon="solar:document-text-bold" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MetricCard title="Automation Rules" value={automationRows.length} icon="solar:magic-stick-3-bold" />
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Role Distribution
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {Object.entries(workspace?.stats?.roleCounts || {}).map(([role, count]) => (
                    <Chip key={role} label={`${role}: ${count}`} color="primary" variant="soft" />
                  ))}
                  {!Object.keys(workspace?.stats?.roleCounts || {}).length && <Typography variant="body2">No role data yet.</Typography>}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        )}

        {!canManageProfile && tab === 'profile' && (
          <Alert severity="info">You have read-only access for organization profile settings.</Alert>
        )}

        {!canManageMembers && tab === 'members' && (
          <Alert severity="info">Only organization owners and admins can manage members.</Alert>
        )}

        {!canManageLocations && tab === 'locations' && (
          <Alert severity="info">Only organization owners, admins, and managers can manage locations.</Alert>
        )}

        {!canManageCrmConfig && (tab === 'teams' || tab === 'pipelines' || tab === 'custom-fields' || tab === 'automation') && (
          <Alert severity="info">Only organization owners, admins, and managers can manage CRM configuration.</Alert>
        )}

        {tab === 'profile' && (
          <Card sx={{ p: 3 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Organization Name" value={profile.name} onChange={(event) => setProfile((prev) => ({ ...prev, name: event.target.value }))} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" value={profile.email} onChange={(event) => setProfile((prev) => ({ ...prev, email: event.target.value }))} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone" value={profile.phone} onChange={(event) => setProfile((prev) => ({ ...prev, phone: event.target.value }))} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Website" value={profile.website} onChange={(event) => setProfile((prev) => ({ ...prev, website: event.target.value }))} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Timezone" value={profile.timezone} onChange={(event) => setProfile((prev) => ({ ...prev, timezone: event.target.value }))} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Address" value={profile.address} onChange={(event) => setProfile((prev) => ({ ...prev, address: event.target.value }))} />
              </Grid>
            </Grid>

            <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
              <LoadingButton loading={saveProfileMutation.isPending} variant="contained" disabled={!canManageProfile || !profile.name.trim()} onClick={() => saveProfileMutation.mutate()}>
                Save Profile
              </LoadingButton>
            </Stack>
          </Card>
        )}

        {tab === 'members' && (
          <Stack spacing={3}>
            <Card sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
                <TextField fullWidth label="Invite user by email" value={newMemberEmail} onChange={(event) => setNewMemberEmail(event.target.value)} disabled={!canManageMembers} />
                <Select value={newMemberRole} onChange={(event) => setNewMemberRole(String(event.target.value))} disabled={!canManageMembers} sx={{ minWidth: 180 }}>
                  {roleOptions.map((role: string) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
                <LoadingButton loading={createMemberMutation.isPending} variant="contained" disabled={!canManageMembers || !newMemberEmail.trim()} onClick={() => createMemberMutation.mutate()}>
                  Add Member
                </LoadingButton>
              </Stack>
            </Card>

            <Card sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6">Members</Typography>
                <TextField
                  value={memberSearch}
                  onChange={(event) => setMemberSearch(event.target.value)}
                  placeholder="Search by name, email, username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="solar:magnifer-bold" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {memberRows.map((row: any) => (
                      <TableRow key={row.userId} hover>
                        <TableCell>
                          <Typography variant="subtitle2">{row.displayName}</Typography>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                          <Select
                            size="small"
                            value={row.role}
                            disabled={!canManageMembers}
                            onChange={(event) =>
                              updateMemberMutation.mutate({
                                userId: row.userId,
                                role: String(event.target.value),
                                permissions: Array.isArray(row.permissions)
                                  ? row.permissions.filter((value: unknown): value is string => typeof value === 'string')
                                  : [],
                              })
                            }
                          >
                            {Array.from(new Set([row.role, ...roleOptions])).map((role: string) => (
                              <MenuItem key={role} value={role}>
                                {role}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            color="error"
                            disabled={!canManageMembers || removeMemberMutation.isPending}
                            onClick={() => {
                              if (!window.confirm('Remove this user from the organization?')) return;
                              removeMemberMutation.mutate(row.userId);
                            }}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                    {!memberRows.length && !membersLoading && (
                      <TableRow>
                        <TableCell colSpan={4}>
                          <Box sx={{ py: 6, textAlign: 'center' }}>
                            <Typography variant="subtitle2">No members found.</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Stack>
        )}

        {tab === 'locations' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Locations
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {locations.map((location: any) => (
                        <TableRow key={location.id} hover>
                          <TableCell>{location.name}</TableCell>
                          <TableCell>{location.city || '-'}</TableCell>
                          <TableCell>{location.state || '-'}</TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                              <Button
                                size="small"
                                disabled={!canManageLocations}
                                onClick={() =>
                                  setLocationDraft({
                                    id: location.id,
                                    name: location.name || '',
                                    email: location.email || '',
                                    phone: location.phone || '',
                                    street: location.street || '',
                                    city: location.city || '',
                                    state: location.state || '',
                                    zip_code: location.zipCode || '',
                                    country: location.country || '',
                                  })
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                disabled={!canManageLocations || removeLocationMutation.isPending}
                                onClick={() => {
                                  if (!window.confirm('Delete this location?')) return;
                                  removeLocationMutation.mutate(location.id);
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}

                      {!locations.length && !locationsLoading && (
                        <TableRow>
                          <TableCell colSpan={4}>
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                              <Typography variant="subtitle2">No locations found.</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6">{locationDraft.id ? 'Edit Location' : 'New Location'}</Typography>
                  {locationDraft.id && (
                    <Button size="small" onClick={() => setLocationDraft(EMPTY_LOCATION)}>
                      Reset
                    </Button>
                  )}
                </Stack>

                <Stack spacing={1.5}>
                  <TextField label="Name" value={locationDraft.name} onChange={(event) => setLocationDraft((prev) => ({ ...prev, name: event.target.value }))} />
                  <TextField label="Email" value={locationDraft.email} onChange={(event) => setLocationDraft((prev) => ({ ...prev, email: event.target.value }))} />
                  <TextField label="Phone" value={locationDraft.phone} onChange={(event) => setLocationDraft((prev) => ({ ...prev, phone: event.target.value }))} />
                  <Divider />
                  <TextField label="Street" value={locationDraft.street} onChange={(event) => setLocationDraft((prev) => ({ ...prev, street: event.target.value }))} />
                  <TextField label="City" value={locationDraft.city} onChange={(event) => setLocationDraft((prev) => ({ ...prev, city: event.target.value }))} />
                  <TextField label="State" value={locationDraft.state} onChange={(event) => setLocationDraft((prev) => ({ ...prev, state: event.target.value }))} />
                  <TextField label="Zip Code" value={locationDraft.zip_code} onChange={(event) => setLocationDraft((prev) => ({ ...prev, zip_code: event.target.value }))} />
                  <TextField label="Country" value={locationDraft.country} onChange={(event) => setLocationDraft((prev) => ({ ...prev, country: event.target.value }))} />
                </Stack>

                <LoadingButton fullWidth sx={{ mt: 2 }} variant="contained" loading={saveLocationMutation.isPending} disabled={!canManageLocations || !locationDraft.name.trim()} onClick={() => saveLocationMutation.mutate()}>
                  {locationDraft.id ? 'Update Location' : 'Create Location'}
                </LoadingButton>
              </Card>
            </Grid>
          </Grid>
        )}

        {tab === 'teams' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  CRM Teams
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Manager</TableCell>
                        <TableCell>Members</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {teams.map((team: any) => (
                        <TableRow key={team.id} hover>
                          <TableCell>{team.name}</TableCell>
                          <TableCell>{team.managerUserId || '-'}</TableCell>
                          <TableCell>{Array.isArray(team.members) ? team.members.length : 0}</TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                              <Button
                                size="small"
                                disabled={!canManageCrmConfig}
                                onClick={() =>
                                  setTeamDraft({
                                    id: team.id,
                                    name: team.name || '',
                                    description: team.description || '',
                                    managerUserId: team.managerUserId || '',
                                    membersCsv: Array.isArray(team.members) ? team.members.join(', ') : '',
                                  })
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                disabled={!canManageCrmConfig || deleteTeamMutation.isPending}
                                onClick={() => {
                                  if (!window.confirm('Delete this team?')) return;
                                  deleteTeamMutation.mutate(team.id);
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}

                      {!teams.length && !teamsLoading && (
                        <TableRow>
                          <TableCell colSpan={4}>
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                              <Typography variant="subtitle2">No teams configured.</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6">{teamDraft.id ? 'Edit Team' : 'Create Team'}</Typography>
                  {teamDraft.id && (
                    <Button size="small" onClick={() => setTeamDraft(EMPTY_TEAM)}>
                      Reset
                    </Button>
                  )}
                </Stack>
                <Stack spacing={1.5}>
                  <TextField label="Team Name" value={teamDraft.name} onChange={(event) => setTeamDraft((prev) => ({ ...prev, name: event.target.value }))} />
                  <TextField label="Description" value={teamDraft.description} onChange={(event) => setTeamDraft((prev) => ({ ...prev, description: event.target.value }))} />
                  <TextField label="Manager User ID" value={teamDraft.managerUserId} onChange={(event) => setTeamDraft((prev) => ({ ...prev, managerUserId: event.target.value }))} />
                  <TextField
                    label="Member User IDs"
                    value={teamDraft.membersCsv}
                    onChange={(event) => setTeamDraft((prev) => ({ ...prev, membersCsv: event.target.value }))}
                    placeholder="id-1, id-2"
                  />
                </Stack>
                <LoadingButton fullWidth sx={{ mt: 2 }} variant="contained" loading={saveTeamMutation.isPending} disabled={!canManageCrmConfig || !teamDraft.name.trim()} onClick={() => saveTeamMutation.mutate()}>
                  {teamDraft.id ? 'Update Team' : 'Create Team'}
                </LoadingButton>
              </Card>
            </Grid>
          </Grid>
        )}

        {tab === 'pipelines' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Sales Pipelines
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Stages</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pipelines.map((pipeline: any) => (
                        <TableRow key={pipeline.id} hover>
                          <TableCell>{pipeline.name}</TableCell>
                          <TableCell>{Array.isArray(pipeline.stages) ? pipeline.stages.length : 0}</TableCell>
                          <TableCell>{pipeline.description || '-'}</TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                              <Button
                                size="small"
                                disabled={!canManageCrmConfig}
                                onClick={() =>
                                  setPipelineDraft({
                                    id: pipeline.id,
                                    name: pipeline.name || '',
                                    description: pipeline.description || '',
                                    stagesText: Array.isArray(pipeline.stages)
                                      ? pipeline.stages
                                          .map((stage: any) => `${stage.name || ''}|${stage.probability || 0}|${stage.color || '#3366FF'}`)
                                          .join('\n')
                                      : '',
                                  })
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                disabled={!canManageCrmConfig || deletePipelineMutation.isPending}
                                onClick={() => {
                                  if (!window.confirm('Delete this pipeline?')) return;
                                  deletePipelineMutation.mutate(pipeline.id);
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}

                      {!pipelines.length && !pipelinesLoading && (
                        <TableRow>
                          <TableCell colSpan={4}>
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                              <Typography variant="subtitle2">No pipelines configured.</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6">{pipelineDraft.id ? 'Edit Pipeline' : 'Create Pipeline'}</Typography>
                  {pipelineDraft.id && (
                    <Button size="small" onClick={() => setPipelineDraft(EMPTY_PIPELINE)}>
                      Reset
                    </Button>
                  )}
                </Stack>
                <Stack spacing={1.5}>
                  <TextField label="Pipeline Name" value={pipelineDraft.name} onChange={(event) => setPipelineDraft((prev) => ({ ...prev, name: event.target.value }))} />
                  <TextField label="Description" value={pipelineDraft.description} onChange={(event) => setPipelineDraft((prev) => ({ ...prev, description: event.target.value }))} />
                  <TextField
                    multiline
                    minRows={7}
                    label="Stages (one per line)"
                    value={pipelineDraft.stagesText}
                    onChange={(event) => setPipelineDraft((prev) => ({ ...prev, stagesText: event.target.value }))}
                    placeholder={'Qualified|20|#3366FF\\nProposal|60|#22C55E\\nNegotiation|80|#F59E0B'}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Format each stage as: `name|probability|color`
                  </Typography>
                </Stack>
                <LoadingButton fullWidth sx={{ mt: 2 }} variant="contained" loading={savePipelineMutation.isPending} disabled={!canManageCrmConfig || !pipelineDraft.name.trim()} onClick={() => savePipelineMutation.mutate()}>
                  {pipelineDraft.id ? 'Update Pipeline' : 'Create Pipeline'}
                </LoadingButton>
              </Card>
            </Grid>
          </Grid>
        )}

        {tab === 'custom-fields' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  CRM Custom Fields
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Entity</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Required</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {customFields.map((field: any) => (
                        <TableRow key={field.id} hover>
                          <TableCell>{field.name}</TableCell>
                          <TableCell>{field.entity}</TableCell>
                          <TableCell>{field.type}</TableCell>
                          <TableCell>{field.required ? 'Yes' : 'No'}</TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                              <Button
                                size="small"
                                disabled={!canManageCrmConfig}
                                onClick={() =>
                                  setFieldDraft({
                                    id: field.id,
                                    name: field.name || '',
                                    entity: field.entity || 'contact',
                                    type: field.type || 'text',
                                    required: Boolean(field.required),
                                    optionsCsv: Array.isArray(field.options) ? field.options.join(', ') : '',
                                  })
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                disabled={!canManageCrmConfig || deleteCustomFieldMutation.isPending}
                                onClick={() => {
                                  if (!window.confirm('Delete this custom field?')) return;
                                  deleteCustomFieldMutation.mutate(field.id);
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}

                      {!customFields.length && !fieldsLoading && (
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                              <Typography variant="subtitle2">No custom fields configured.</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6">{fieldDraft.id ? 'Edit Custom Field' : 'Create Custom Field'}</Typography>
                  {fieldDraft.id && (
                    <Button size="small" onClick={() => setFieldDraft(EMPTY_CUSTOM_FIELD)}>
                      Reset
                    </Button>
                  )}
                </Stack>

                <Stack spacing={1.5}>
                  <TextField label="Field Name" value={fieldDraft.name} onChange={(event) => setFieldDraft((prev) => ({ ...prev, name: event.target.value }))} />
                  <Select value={fieldDraft.entity} onChange={(event) => setFieldDraft((prev) => ({ ...prev, entity: String(event.target.value) }))}>
                    <MenuItem value="contact">Contact</MenuItem>
                    <MenuItem value="lead">Lead</MenuItem>
                    <MenuItem value="deal">Deal</MenuItem>
                    <MenuItem value="account">Account</MenuItem>
                  </Select>
                  <Select value={fieldDraft.type} onChange={(event) => setFieldDraft((prev) => ({ ...prev, type: String(event.target.value) }))}>
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="number">Number</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="single_select">Single Select</MenuItem>
                    <MenuItem value="multi_select">Multi Select</MenuItem>
                    <MenuItem value="boolean">Boolean</MenuItem>
                  </Select>
                  <TextField
                    label="Options"
                    placeholder="High, Medium, Low"
                    value={fieldDraft.optionsCsv}
                    onChange={(event) => setFieldDraft((prev) => ({ ...prev, optionsCsv: event.target.value }))}
                  />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Button variant={fieldDraft.required ? 'contained' : 'soft'} onClick={() => setFieldDraft((prev) => ({ ...prev, required: !prev.required }))}>
                      {fieldDraft.required ? 'Required' : 'Optional'}
                    </Button>
                  </Stack>
                </Stack>

                <LoadingButton fullWidth sx={{ mt: 2 }} variant="contained" loading={saveCustomFieldMutation.isPending} disabled={!canManageCrmConfig || !fieldDraft.name.trim()} onClick={() => saveCustomFieldMutation.mutate()}>
                  {fieldDraft.id ? 'Update Field' : 'Create Field'}
                </LoadingButton>
              </Card>
            </Grid>
          </Grid>
        )}

        {tab === 'automation' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Automation Rules
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Trigger</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {automationRows.map((rule: any) => (
                        <TableRow key={rule.id} hover>
                          <TableCell>{rule.name || '-'}</TableCell>
                          <TableCell>{rule.trigger || '-'}</TableCell>
                          <TableCell>{rule.action || '-'}</TableCell>
                          <TableCell>
                            <Chip size="small" color={rule.enabled ? 'success' : 'default'} label={rule.enabled ? 'Enabled' : 'Disabled'} />
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                              <Button
                                size="small"
                                disabled={!canManageCrmConfig}
                                onClick={() => {
                                  const nextRules = automationRows.filter((item: any) => item.id !== rule.id);
                                  updateAutomationMutation.mutate(nextRules);
                                }}
                              >
                                Remove
                              </Button>
                              <Button
                                size="small"
                                disabled={!canManageCrmConfig}
                                onClick={() => {
                                  const nextRules = automationRows.map((item: any) =>
                                    item.id === rule.id ? { ...item, enabled: !item.enabled } : item
                                  );
                                  updateAutomationMutation.mutate(nextRules);
                                }}
                              >
                                Toggle
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}

                      {!automationRows.length && !automationLoading && (
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                              <Typography variant="subtitle2">No automation rules configured.</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Add Rule
                </Typography>
                <Stack spacing={1.5}>
                  <TextField label="Rule Name" value={automationDraft.name} onChange={(event) => setAutomationDraft((prev) => ({ ...prev, name: event.target.value }))} />
                  <TextField label="Trigger" placeholder="deal.stage_changed" value={automationDraft.trigger} onChange={(event) => setAutomationDraft((prev) => ({ ...prev, trigger: event.target.value }))} />
                  <TextField label="Action" placeholder="notify_owner" value={automationDraft.action} onChange={(event) => setAutomationDraft((prev) => ({ ...prev, action: event.target.value }))} />
                  <Button variant={automationDraft.enabled ? 'contained' : 'soft'} onClick={() => setAutomationDraft((prev) => ({ ...prev, enabled: !prev.enabled }))}>
                    {automationDraft.enabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </Stack>

                <LoadingButton
                  fullWidth
                  sx={{ mt: 2 }}
                  variant="contained"
                  loading={updateAutomationMutation.isPending}
                  disabled={!canManageCrmConfig || !automationDraft.name.trim() || !automationDraft.trigger.trim() || !automationDraft.action.trim()}
                  onClick={() => {
                    const nextRules = [
                      ...automationRows,
                      {
                        ...automationDraft,
                        id: `rule_${Date.now()}`,
                      },
                    ];
                    updateAutomationMutation.mutate(nextRules);
                  }}
                >
                  Save Rule
                </LoadingButton>
              </Card>
            </Grid>
          </Grid>
        )}
      </Stack>
    </DashboardContent>
  );
}

function MetricCard({ title, value, icon }: { title: string; value: number; icon: string }) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'primary.lighter', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
          <Iconify icon={icon} width={24} />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}
