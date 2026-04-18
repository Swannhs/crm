'use client';

import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CircularProgress from '@mui/material/CircularProgress';

import { communityService } from 'src/services/community-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CommunityFeedView() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['community-posts'],
    queryFn: () => communityService.getPosts(),
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="md">
      <Typography variant="h4" sx={{ mb: 5 }}>Community Feed</Typography>

      <Stack spacing={3}>
        {/* Create Post Card */}
        <Card sx={{ p: 3 }}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="User" />
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Share something with the community..."
              variant="outlined"
            />
          </Stack>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained">Post</Button>
          </Box>
        </Card>

        {/* Feed Posts */}
        {(posts || []).map((post: any) => (
          <Card key={post._id}>
            <CardHeader
              avatar={<Avatar alt={post.authorName} />}
              title={post.authorName || 'Member'}
              subheader={new Date(post.createdAt).toLocaleString()}
              action={
                <Button size="small" startIcon={<Iconify icon="eva:more-vertical-fill" />} />
              }
            />
            <CardContent>
              <Typography variant="body1">{post.content}</Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button size="small" startIcon={<Iconify icon="eva:heart-fill" sx={{ color: 'error.main' }} />}>
                {post.likesCount || 0} Likes
              </Button>
              <Button size="small" startIcon={<Iconify icon="eva:message-square-fill" />}>
                {post.commentsCount || 0} Comments
              </Button>
            </CardActions>
          </Card>
        ))}

        {posts?.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              No posts yet. Start the conversation!
            </Typography>
          </Box>
        )}
      </Stack>
    </DashboardContent>
  );
}
