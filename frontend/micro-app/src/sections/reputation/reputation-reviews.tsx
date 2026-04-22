'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';
import { reputationService } from 'src/services/reputation-service';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function ReputationReviews() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reputation-reviews'],
    queryFn: () => reputationService.getReviews(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Recent Reviews</Typography>
          <Stack spacing={4} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
            {(reviews || []).map((review: any) => (
              <ReviewItem key={review.id} review={review} />
            ))}
            {(reviews || []).length === 0 && (
              <Box sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="subtitle2" color="text.secondary">No reviews found.</Typography>
              </Box>
            )}
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <Card sx={{ p: 3, bgcolor: 'background.neutral' }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Connected Platforms</Typography>
            <Stack spacing={2}>
              <PlatformStatus provider="Google Business" icon="logos:google-icon" isConnected />
              <PlatformStatus provider="Facebook Page" icon="logos:facebook" isConnected={false} />
            </Stack>
          </Card>

          <Card sx={{ p: 3 }}>
             <Typography variant="subtitle1" sx={{ mb: 2 }}>Auto-Reply AI</Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Let our AI suggest the best responses to your reviews to save time.
             </Typography>
             <Button fullWidth variant="soft" color="primary" startIcon={<Iconify icon="solar:magic-stick-3-bold" />}>
                Configure AI Replies
             </Button>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}

function ReviewItem({ review }: any) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={review.author} src={review.avatarUrl} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">{review.author}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{fDate(review.date)}</Typography>
        </Box>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 0.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.neutral',
          }}
        >
          <Iconify
            icon={review.provider === 'google' ? 'logos:google-icon' : 'logos:facebook'}
            width={18}
          />
        </Box>
      </Stack>

      <Rating value={review.rating} readOnly size="small" />

      <Typography variant="body2">{review.content}</Typography>

      {review.reply ? (
        <Box sx={{ p: 2, borderRadius: 1, bgcolor: 'background.neutral', mt: 1 }}>
           <Typography variant="subtitle2" sx={{ mb: 0.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Iconify icon="solar:reply-bold" width={16} />
              Your Reply
           </Typography>
           <Typography variant="body2" color="text.secondary">{review.reply}</Typography>
        </Box>
      ) : (
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <TextField fullWidth size="small" placeholder="Write a reply..." />
          <Button variant="contained">Reply</Button>
        </Stack>
      )}
    </Stack>
  );
}

function PlatformStatus({ provider, icon, isConnected }: any) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Iconify icon={icon} width={24} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{provider}</Typography>
        <Typography variant="caption" sx={{ color: isConnected ? 'success.main' : 'text.disabled' }}>
          {isConnected ? 'Connected' : 'Not Connected'}
        </Typography>
      </Box>
      <Button size="small" variant="outlined" color={isConnected ? 'inherit' : 'primary'}>
        {isConnected ? 'Manage' : 'Connect'}
      </Button>
    </Stack>
  );
}

import { Grid, CircularProgress } from '@mui/material';
