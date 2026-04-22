'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function DomainWhoisSection({ domain, setDomain, onNext }: any) {
  return (
    <Card sx={{ p: 4 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h6">Enter Your Custom Domain</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enter the domain you want to use for your organization (e.g., members.yourbrand.com).
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Domain Name"
          placeholder="e.g. members.myawesomegym.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />

        <Button 
          fullWidth 
          variant="contained" 
          size="large" 
          onClick={onNext}
          disabled={!domain.includes('.')}
        >
          Check DNS Status
        </Button>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
           Connecting a custom domain allows you to host your membership portal and landing pages under your own brand.
        </Alert>
      </Stack>
    </Card>
  );
}

export function DomainDnsSection({ domain, onBack, onNext }: any) {
  return (
    <Card sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6">DNS Configuration for {domain}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Please log in to your domain registrar (GoDaddy, Namecheap, etc.) and add the following records.
          </Typography>
        </Box>

        <Box sx={{ p: 0, borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}`, overflow: 'hidden' }}>
           <Table>
              <TableHead sx={{ bgcolor: 'background.neutral' }}>
                 <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Host</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell align="right">Status</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                 <TableRow>
                    <TableCell><Typography variant="subtitle2">CNAME</Typography></TableCell>
                    <TableCell><code>@</code> or <code>www</code></TableCell>
                    <TableCell><code>proxy.mymanager.com</code></TableCell>
                    <TableCell align="right">
                       <Iconify icon="solar:danger-bold" sx={{ color: 'warning.main' }} />
                    </TableCell>
                 </TableRow>
              </TableBody>
           </Table>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button fullWidth variant="outlined" color="inherit" onClick={onBack}>Back</Button>
          <Button fullWidth variant="contained" color="primary" onClick={onNext}>I've updated my DNS</Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export function DomainStatusSection({ domain, onReset }: any) {
  return (
    <Card sx={{ p: 4, textAlign: 'center' }}>
      <Stack spacing={3} alignItems="center">
         <Box sx={{ 
            width: 80, 
            height: 80, 
            borderRadius: '50%', 
            bgcolor: 'success.lighter', 
            color: 'success.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
         }}>
            <Iconify icon="solar:verified-check-bold" width={48} />
         </Box>
         
         <Box>
            <Typography variant="h5">Verification in Progress</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
               We are currently verifying the DNS records for <strong>{domain}</strong>. 
               This can take anywhere from a few minutes to 24 hours depending on your registrar.
            </Typography>
         </Box>

         <Box sx={{ p: 2, bgcolor: 'background.neutral', borderRadius: 1.5, width: '100%' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
               <Typography variant="caption" sx={{ fontWeight: 700 }}>VERIFICATION PROGRESS</Typography>
               <Typography variant="caption">65%</Typography>
            </Stack>
            <Box sx={{ width: '100%', height: 8, bgcolor: 'divider', borderRadius: 4, overflow: 'hidden' }}>
               <Box sx={{ width: '65%', height: '100%', bgcolor: 'success.main' }} />
            </Box>
         </Box>

         <Button fullWidth variant="soft" color="inherit" onClick={onReset}>Cancel & Restart</Button>
      </Stack>
    </Card>
  );
}

// --- Internal Components ---

function Alert({ children, severity, variant, sx }: any) {
  return (
    <Box sx={{ 
       p: 2, 
       borderRadius: 1.5, 
       bgcolor: variant === 'outlined' ? 'transparent' : `${severity}.lighter`,
       border: variant === 'outlined' ? (theme) => `1px solid ${theme.palette[severity].main}` : 'none',
       color: `${severity}.main`,
       display: 'flex',
       gap: 1.5,
       alignItems: 'center',
       ...sx
    }}>
       <Iconify icon={severity === 'info' ? 'solar:info-circle-bold' : 'solar:danger-bold'} />
       <Typography variant="body2" sx={{ fontWeight: 500 }}>{children}</Typography>
    </Box>
  );
}
