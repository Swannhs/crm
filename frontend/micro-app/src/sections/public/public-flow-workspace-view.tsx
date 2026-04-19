'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { publicFlowService } from 'src/services/public-flow-service';

// ----------------------------------------------------------------------

type PublicMode =
  | 'checkout'
  | 'qrpay'
  | 'waiver'
  | 'phone-auth'
  | 'code-auth'
  | 'verify-email'
  | 'preview-form'
  | 'onboarding'
  | 'verified'
  | 'notifications'
  | 'mobile-settings'
  | 'mobile-menu'
  | 'integration-callback'
  | 'forgot-password'
  | 'generic-auth';

type Props = {
  mode: PublicMode;
  slug?: string;
  id?: string;
  organizationId?: string;
  location?: string;
  contactTypeId?: string;
  assignerId?: string;
  contactId?: string;
  email?: string;
  formId?: string;
  formPageId?: string;
};

export function PublicFlowWorkspaceView(props: Props) {
  const {
    mode,
    slug,
    id,
    organizationId,
    location,
    contactTypeId,
    assignerId,
    contactId,
    email,
    formId,
    formPageId,
  } = props;
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [qrTracked, setQrTracked] = useState(false);
  const [waiverChecks, setWaiverChecks] = useState<boolean[]>([]);
  const [signSuccess, setSignSuccess] = useState(false);

  const phoneMethods = useForm({
    defaultValues: {
      phoneNumber: '',
      source: '',
    },
  });

  const qrMethods = useForm({
    defaultValues: {
      amount: '',
      email: '',
      phone: '',
    },
  });

  const waiverMethods = useForm({
    defaultValues: {
      signerName: '',
      signature: '',
      questionAnswers: '',
    },
  });

  const checkoutQuery = useQuery({
    queryKey: ['public-checkout-page', slug],
    queryFn: () => publicFlowService.getCheckoutPagePublic(slug!),
    enabled: mode === 'checkout' && Boolean(slug),
  });

  const qrPayQuery = useQuery({
    queryKey: ['public-qrpay-page', slug],
    queryFn: () => publicFlowService.getQrPayPagePublic(slug!),
    enabled: mode === 'qrpay' && Boolean(slug),
  });

  const waiverQuery = useQuery({
    queryKey: ['public-waiver', id],
    queryFn: () => publicFlowService.getPublicWaiver(id!),
    enabled: mode === 'waiver' && Boolean(id),
  });

  const phoneMutation = useMutation({
    mutationFn: (values: any) =>
      publicFlowService.generateContactPhoneVerification({
        ...values,
        userId: location,
        organizationId,
      }),
    onSuccess: (data) => setVerificationResult(data),
  });

  const qrTrackMutation = useMutation({
    mutationFn: (values: any) => publicFlowService.trackQrPayPayment(slug!, values),
    onSuccess: () => setQrTracked(true),
  });

  const waiverSignMutation = useMutation({
    mutationFn: (values: any) =>
      publicFlowService.signPublicWaiver(id!, {
        ...values,
        waiverChecks,
        questionAnswers: values.questionAnswers
          ? values.questionAnswers.split('\n').map((item: string) => item.trim())
          : [],
      }),
    onSuccess: () => setSignSuccess(true),
  });

  const isLoading = checkoutQuery.isLoading || qrPayQuery.isLoading || waiverQuery.isLoading;

  if (isLoading) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const checkoutData = checkoutQuery.data;
  const qrPayData = qrPayQuery.data;
  const waiverData = waiverQuery.data;
  const waiverItems = waiverData?.waiver || [];
  const questionItems = waiverData?.questions || [];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4">
            {mode === 'checkout'
              ? 'Checkout'
              : mode === 'qrpay'
                ? 'QR Pay'
                : mode === 'waiver'
                  ? 'Waiver Signature'
                  : mode === 'phone-auth'
                    ? 'Phone Verification'
                    : mode === 'code-auth'
                      ? 'Sign In With Code'
                      : mode === 'verify-email'
                        ? 'Email Verification'
                        : mode === 'preview-form'
                          ? 'Form Preview'
                          : mode === 'onboarding'
                            ? 'Onboarding'
                            : mode === 'verified'
                              ? 'Verified'
                              : mode === 'notifications'
                                ? 'Notifications'
                                : mode === 'mobile-settings'
                                  ? 'Mobile Settings'
                                  : mode === 'mobile-menu'
                                    ? 'Mobile Menu'
                                    : mode === 'integration-callback'
                                      ? 'Integration Callback'
                                      : mode === 'forgot-password'
                                        ? 'Forgot Password'
                                        : 'Authentication'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Legacy public and mobile flow routes mapped into the micro-app with compatibility data where available.
          </Typography>
        </Box>

        <Card sx={{ p: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Button component={Link} href={paths.public.login} variant="soft" color="inherit">
              Login
            </Button>
            <Button component={Link} href={paths.public.register} variant="soft" color="inherit">
              Register
            </Button>
            <Button component={Link} href={paths.public.onboarding} variant="soft" color="inherit">
              Onboarding
            </Button>
            <Button component={Link} href={paths.public.notifications} variant="soft" color="inherit">
              Notifications
            </Button>
          </Stack>
        </Card>

        {mode === 'checkout' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {checkoutData?.title || checkoutData?.name || slug}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {checkoutData?.description || 'Public checkout page compatibility route.'}
                </Typography>
                <Stack spacing={1}>
                  {Array.isArray(checkoutData?.products) &&
                    checkoutData.products.slice(0, 8).map((product: any, index: number) => (
                      <Box key={product._id || product.id || index} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                        <Typography variant="subtitle2">{product.label || product.name || `Product ${index + 1}`}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          ${Number(product.price || 0).toFixed(2)}
                        </Typography>
                      </Box>
                    ))}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Current Compatibility
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Public checkout content now loads in the new app. Full checkout payment UX and event tracking still need a dedicated frontend parity pass.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'qrpay' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {qrPayData?.title || qrPayData?.name || slug}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {qrPayData?.description || 'Public QR pay page compatibility route.'}
                </Typography>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={qrMethods.handleSubmit((values) => qrTrackMutation.mutate(values))}
                >
                  <TextField label="Amount" {...qrMethods.register('amount')} />
                  <TextField label="Email" {...qrMethods.register('email')} />
                  <TextField label="Phone" {...qrMethods.register('phone')} />
                  <Button type="submit" variant="contained" disabled={qrTrackMutation.isPending}>
                    Track Payment Intent
                  </Button>
                </Stack>
                {qrTracked && <Alert severity="success" sx={{ mt: 2 }}>Payment tracking request sent.</Alert>}
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  QR Pay Context
                </Typography>
                <Typography variant="body2">slug: {slug}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  Public QR pay data now loads through the gateway, including tracking endpoint support.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'waiver' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {waiverData?.title || waiverData?.name || 'Waiver'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {waiverData?.content || 'Public waiver content loaded from the legacy compatibility API.'}
                </Typography>
                {waiverItems.length > 0 && (
                  <Stack spacing={1}>
                    {waiverItems.map((item: any, index: number) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={Boolean(waiverChecks[index])}
                            onChange={() => {
                              const next = [...waiverChecks];
                              next[index] = !next[index];
                              setWaiverChecks(next);
                            }}
                          />
                        }
                        label={item.waiver || item.label || `Waiver item ${index + 1}`}
                      />
                    ))}
                  </Stack>
                )}
                <Divider sx={{ my: 2 }} />
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={waiverMethods.handleSubmit((values) => waiverSignMutation.mutate(values))}
                >
                  <TextField label="Signer Name" {...waiverMethods.register('signerName')} />
                  <TextField label="Signature" {...waiverMethods.register('signature')} />
                  {questionItems.length > 0 && (
                    <TextField
                      label="Question Answers"
                      helperText="One answer per line."
                      multiline
                      minRows={4}
                      {...waiverMethods.register('questionAnswers')}
                    />
                  )}
                  <Button type="submit" variant="contained" disabled={waiverSignMutation.isPending}>
                    Sign Waiver
                  </Button>
                </Stack>
                {signSuccess && <Alert severity="success" sx={{ mt: 2 }}>Waiver submitted successfully.</Alert>}
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Waiver Status
                </Typography>
                <Typography variant="body2">status: {waiverData?.status || 'pending'}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  This is a simplified signing experience backed by the public waiver API.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {mode === 'phone-auth' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact Phone Verification
            </Typography>
            <Stack
              component="form"
              spacing={2}
              onSubmit={phoneMethods.handleSubmit((values) => phoneMutation.mutate(values))}
            >
              <TextField label="Phone Number" {...phoneMethods.register('phoneNumber')} />
              <TextField label="Back To / Source" {...phoneMethods.register('source')} />
              <Button type="submit" variant="contained" disabled={phoneMutation.isPending}>
                Send Verification
              </Button>
            </Stack>
            {verificationResult && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Verification request sent. organizationId: {organizationId}, location: {location}
              </Alert>
            )}
          </Card>
        )}

        {mode === 'code-auth' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Device Code Sign-In
            </Typography>
            <Alert severity="info">
              The legacy POS/device code route now exists in the new app. Full device-auth behavior still depends on the legacy auth/device stack and will need a dedicated migration pass.
            </Alert>
          </Card>
        )}

        {mode === 'verify-email' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Verify Email
            </Typography>
            <Typography variant="body2">verification id: {id}</Typography>
            <Alert severity="info" sx={{ mt: 2 }}>
              Legacy email verification route parity is present. Verification execution still depends on the existing authentication/email system.
            </Alert>
          </Card>
        )}

        {mode === 'preview-form' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Form Preview
            </Typography>
            <Typography variant="body2">formId: {formId}</Typography>
            <Typography variant="body2">formPageId: {formPageId}</Typography>
            <Alert severity="info" sx={{ mt: 2 }}>
              The preview route exists in the new app. Full rendered page parity still depends on the legacy form/page runtime.
            </Alert>
          </Card>
        )}

        {mode === 'onboarding' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Onboarding
            </Typography>
            <Alert severity="info">
              Onboarding route parity is now present in the micro-app. The deeper onboarding workflow still needs a dedicated migration from the legacy onboarding stack.
            </Alert>
          </Card>
        )}

        {mode === 'verified' && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Verified
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This confirmation route from the legacy onboarding flow now resolves in the new app.
            </Typography>
          </Card>
        )}

        {(mode === 'notifications' || mode === 'mobile-settings' || mode === 'mobile-menu') && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {mode === 'notifications'
                ? 'Notifications'
                : mode === 'mobile-settings'
                  ? 'Mobile Settings'
                  : 'Mobile Menu'}
            </Typography>
            <Alert severity="info">
              This legacy mobile entry route is now exposed in the new app. Full mobile-native interaction parity still requires a dedicated mobile UX migration.
            </Alert>
          </Card>
        )}

        {(mode === 'integration-callback' || mode === 'forgot-password' || mode === 'generic-auth') && (
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {mode === 'integration-callback'
                ? 'Uber Eats Callback'
                : mode === 'forgot-password'
                  ? 'Forgot Password'
                  : 'Legacy Authentication Route'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              organizationId: {organizationId || 'n/a'} | contactTypeId: {contactTypeId || 'n/a'} | assignerId:{' '}
              {assignerId || 'n/a'} | contactId: {contactId || 'n/a'} | email: {email || 'n/a'}
            </Typography>
            <Alert severity="info" sx={{ mt: 2 }}>
              The legacy route is now present in the micro-app. Full parity for this auth/integration flow still depends on remaining compatibility and auth migration work.
            </Alert>
          </Card>
        )}
      </Stack>
    </Container>
  );
}
