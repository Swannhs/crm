'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

import { 
  DomainWhoisSection,
  DomainDnsSection,
  DomainStatusSection
} from './domain-workspace-sections';

// ----------------------------------------------------------------------

export function DomainWorkspaceView() {
  const [step, setStep] = useState<'whois' | 'dns' | 'status'>('whois');
  const [domain, setDomain] = useState('');

  const title = step === 'whois' 
    ? 'Connect Your Domain' 
    : step === 'dns' 
      ? 'Configure DNS Records' 
      : 'Domain Verification Status';

  return (
    <FeatureRouteShell
      title={title}
      description="Modernized domain orchestration hub for connecting custom subdomains and primary domains to your organization platform."
      links={[
        { href: '#', label: 'Domain Setup' },
        { href: '#', label: 'DNS Instructions' },
      ]}
      action={
        <Button
          variant="soft"
          color="inherit"
          startIcon={<Iconify icon="solar:question-square-bold" />}
        >
          Help Center
        </Button>
      }
    >
      <Box sx={{ mt: 3, maxWidth: 800, mx: 'auto' }}>
        <Stack spacing={3}>
           {/* Progress Stepper */}
           <Card sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                 {[
                   { label: 'Domain Lookup', key: 'whois', icon: 'solar:magnifer-bold' },
                   { label: 'DNS Config', key: 'dns', icon: 'solar:settings-bold' },
                   { label: 'Verification', key: 'status', icon: 'solar:check-circle-bold' },
                 ].map((s, idx) => {
                    const isActive = step === s.key;
                    const isCompleted = idx < ['whois', 'dns', 'status'].indexOf(step);
                    return (
                       <Stack key={s.key} direction="row" alignItems="center" spacing={1}>
                          <Box sx={{ 
                             width: 32, 
                             height: 32, 
                             borderRadius: '50%', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center',
                             bgcolor: isActive ? 'primary.main' : isCompleted ? 'success.main' : 'background.neutral',
                             color: isActive || isCompleted ? 'common.white' : 'text.disabled'
                          }}>
                             <Iconify icon={isCompleted ? 'solar:check-read-bold' : s.icon} width={18} />
                          </Box>
                          <Typography variant="subtitle2" sx={{ color: isActive ? 'text.primary' : 'text.disabled' }}>{s.label}</Typography>
                          {idx < 2 && <Box sx={{ width: 40, height: 2, bgcolor: 'divider', mx: 1 }} />}
                       </Stack>
                    );
                 })}
              </Stack>
           </Card>

           {step === 'whois' && (
              <DomainWhoisSection 
                domain={domain} 
                setDomain={setDomain} 
                onNext={() => setStep('dns')} 
              />
           )}

           {step === 'dns' && (
              <DomainDnsSection 
                domain={domain} 
                onBack={() => setStep('whois')} 
                onNext={() => setStep('status')} 
              />
           )}

           {step === 'status' && (
              <DomainStatusSection 
                domain={domain} 
                onReset={() => { setStep('whois'); setDomain(''); }} 
              />
           )}
        </Stack>
      </Box>
    </FeatureRouteShell>
  );
}
