import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z as zod } from 'zod';
import { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { Form, RHFTextField } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

import { MarketingCampaign, MarketingSegment, MarketingTemplate } from '../types';
import { useCreateCampaign, useUpdateCampaign } from '../hooks/use-marketing';
import { marketingService } from '../services/marketing-service';
import { MarketingTemplatePicker } from './marketing-template-picker';
import { MarketingCampaignPreview } from './marketing-campaign-preview';

// ----------------------------------------------------------------------

type Props = {
  campaign?: MarketingCampaign;
  segments: MarketingSegment[];
};

const TOKENS = [
  { label: 'First Name', value: '{{first_name}}' },
  { label: 'Company', value: '{{company}}' },
  { label: 'Email', value: '{{email}}' },
];

export const CampaignSchema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  type: zod.string().min(1, 'Type is required'),
  subject: zod.string().optional(),
  previewText: zod.string().optional(),
  segmentId: zod.string().min(1, 'Segment is required'),
  content: zod.string().min(1, 'Content is required'),
  sender: zod.string().optional(),
}).refine((data) => {
  if (data.type === 'email' && !data.subject) {
    return false;
  }
  return true;
}, {
  message: 'Subject is required for email campaigns',
  path: ['subject'],
});

export function MarketingCampaignForm({ campaign, segments }: Props) {
  const router = useRouter();
  const isEdit = !!campaign;
  
  const [tab, setTab] = useState('edit');
  const [templatePickerOpen, setTemplatePickerOpen] = useState(false);
  const [testSendOpen, setTestSendOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  
  const [isSending, setIsSending] = useState(false);

  const createCampaign = useCreateCampaign();
  const updateCampaign = useUpdateCampaign();

  const defaultValues = useMemo(
    () => ({
      name: campaign?.name || '',
      type: campaign?.type || 'email',
      subject: campaign?.subject || '',
      previewText: campaign?.previewText || '',
      segmentId: campaign?.segmentId || '',
      content: campaign?.content || '',
      sender: campaign?.sender || '',
    }),
    [campaign]
  );

  const methods = useForm({
    resolver: zodResolver(CampaignSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (campaign) {
      reset(defaultValues);
    }
  }, [campaign, reset, defaultValues]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
        await updateCampaign.mutateAsync({ id: campaign.id, data });
      } else {
        await createCampaign.mutateAsync(data);
      }
      router.push(paths.dashboard.marketingSection('campaigns'));
    } catch (error) {
      console.error(error);
    }
  });

  const handleSelectTemplate = (template: MarketingTemplate) => {
    setValue('content', template.content, { shouldValidate: true });
  };

  const handleInsertToken = (token: string) => {
    const currentContent = values.content || '';
    setValue('content', currentContent + token);
  };

  const handleSendTest = async () => {
    if (!campaign?.id || !testEmail) return;
    try {
      setIsSending(true);
      await marketingService.sendTest(campaign.id, testEmail);
      showToast({ severity: 'success', message: 'Test email sent!' });
      setTestSendOpen(false);
    } catch (error) {
      showToast({ severity: 'error', message: 'Failed to send test email.' });
    } finally {
      setIsSending(false);
    }
  };

  const handleSchedule = async () => {
    if (!campaign?.id || !scheduleTime) return;
    try {
      setIsSending(true);
      await marketingService.scheduleCampaign(campaign.id, scheduleTime);
      showToast({ severity: 'success', message: 'Campaign scheduled!' });
      setScheduleOpen(false);
      router.push(paths.dashboard.marketingSection('campaigns'));
    } catch (error) {
      showToast({ severity: 'error', message: 'Failed to schedule campaign.' });
    } finally {
      setIsSending(false);
    }
  };

  const handleSendNow = async () => {
    if (!campaign?.id) return;
    try {
      setIsSending(true);
      await marketingService.sendCampaign(campaign.id);
      showToast({ severity: 'success', message: 'Campaign is sending!' });
      router.push(paths.dashboard.marketingSection('campaigns'));
    } catch (error) {
      showToast({ severity: 'error', message: 'Failed to send campaign.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(_e, v) => setTab(v)}
        sx={{ mb: 3, borderBottom: (theme) => `solid 1px ${theme.palette.divider}` }}
      >
        <Tab icon={<Iconify icon="solar:pen-bold" width={20} />} label="Edit Content" value="edit" />
        <Tab icon={<Iconify icon="solar:eye-bold" width={20} />} label="Preview" value="preview" />
      </Tabs>

      {tab === 'edit' ? (
        <Form methods={methods} onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">Campaign Details</Typography>
                    <Button
                      variant="soft"
                      startIcon={<Iconify icon="solar:clapperboard-edit-bold" />}
                      onClick={() => setTemplatePickerOpen(true)}
                    >
                      Use Template
                    </Button>
                  </Stack>

                  <RHFTextField name="name" label="Campaign Name" />
                  
                  {values.type === 'email' && (
                    <>
                      <RHFTextField name="subject" label="Email Subject" />
                      <RHFTextField name="previewText" label="Preview Text" multiline rows={2} />
                    </>
                  )}

                  <Box>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                      <Typography variant="subtitle2">Content</Typography>
                      <Stack direction="row" spacing={1}>
                        {TOKENS.map((token) => (
                          <Chip
                            key={token.value}
                            label={token.label}
                            size="small"
                            onClick={() => handleInsertToken(token.value)}
                            icon={<Iconify icon="solar:add-circle-bold" />}
                          />
                        ))}
                      </Stack>
                    </Stack>
                    <RHFTextField name="content" label="Campaign Content" multiline rows={10} />
                  </Box>
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <RHFTextField select name="type" label="Campaign Type">
                      <MenuItem value="email">Email</MenuItem>
                      <MenuItem value="sms">SMS</MenuItem>
                      <MenuItem value="broadcast">Broadcast</MenuItem>
                    </RHFTextField>

                    <RHFTextField select name="segmentId" label="Target Segment">
                      <MenuItem value="">Select Segment</MenuItem>
                      {segments.map((segment) => (
                        <MenuItem key={segment.id} value={segment.id}>
                          {segment.name} ({segment.contactCount})
                        </MenuItem>
                      ))}
                    </RHFTextField>

                    <RHFTextField name="sender" label="Sender Email/Name" />

                    <LoadingButton
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      loading={isSubmitting}
                    >
                      {isEdit ? 'Save Changes' : 'Create Campaign'}
                    </LoadingButton>

                    <Button fullWidth variant="outlined" size="large">
                      Save as Draft
                    </Button>
                  </Stack>
                </Card>

                {isEdit && (
                  <Card sx={{ p: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>Sending Options</Typography>
                    <Stack spacing={2}>
                      <Button
                        fullWidth
                        variant="soft"
                        color="info"
                        startIcon={<Iconify icon="solar:paper-plane-bold" />}
                        onClick={() => setTestSendOpen(true)}
                      >
                        Send Test
                      </Button>

                      <Button
                        fullWidth
                        variant="soft"
                        color="warning"
                        startIcon={<Iconify icon="solar:calendar-bold" />}
                        onClick={() => setScheduleOpen(true)}
                      >
                        Schedule
                      </Button>

                      <LoadingButton
                        fullWidth
                        variant="contained"
                        color="success"
                        startIcon={<Iconify icon="solar:rocket-bold" />}
                        onClick={handleSendNow}
                        loading={isSending}
                      >
                        Send Now
                      </LoadingButton>
                    </Stack>
                  </Card>
                )}

                <Card sx={{ p: 2, bgcolor: 'background.neutral' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                    <Iconify icon="solar:info-circle-bold" width={16} sx={{ mr: 0.5 }} />
                    Ensure you have marketing consent for all recipients.
                  </Typography>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      ) : (
        <Card sx={{ p: 3 }}>
          <MarketingCampaignPreview subject={values.subject} content={values.content} />
        </Card>
      )}

      {/* Test Send Dialog */}
      <Dialog open={testSendOpen} onClose={() => setTestSendOpen(false)}>
        <DialogTitle>Send Test Email</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Enter an email address to receive a test version of this campaign.
          </Typography>
          <TextField
            autoFocus
            fullWidth
            label="Email Address"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTestSendOpen(false)}>Cancel</Button>
          <LoadingButton variant="contained" onClick={handleSendTest} loading={isSending} disabled={!testEmail}>
            Send Test
          </LoadingButton>
        </DialogActions>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={scheduleOpen} onClose={() => setScheduleOpen(false)}>
        <DialogTitle>Schedule Campaign</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Choose a date and time for this campaign to be sent.
          </Typography>
          <TextField
            fullWidth
            type="datetime-local"
            label="Schedule Time"
            InputLabelProps={{ shrink: true }}
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setScheduleOpen(false)}>Cancel</Button>
          <LoadingButton variant="contained" onClick={handleSchedule} loading={isSending} disabled={!scheduleTime}>
            Schedule
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <MarketingTemplatePicker
        open={templatePickerOpen}
        onClose={() => setTemplatePickerOpen(false)}
        onSelect={handleSelectTemplate}
      />
    </Box>
  );
}
