'use client';

import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Search, 
  Plus, 
  MoreVertical,
  Bookmark,
  TrendingUp,
  User,
  Users,
  Grid as GridIcon,
  Filter
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  TextField, 
  InputAdornment,
  Chip,
  CircularProgress,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardActions
} from "@mui/material";
import Link from "next/link";
import { communityService } from "@/services/community.service";
import { useQuery } from "@tanstack/react-query";

export default function CommunityPage() {
  const { data: postsResponse, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => communityService.getPosts(),
  });

  const posts = postsResponse?.data || [];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Community & Insights
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Collaborate with your organization and share industry knowledge.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Create Post
        </Button>
      </Box>

      <Grid container spacing={4}>
        {/* Sidebar Left: Categories */}
        <Grid item xs={12} md={3}>
          <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', mb: 2, display: 'block', px: 1 }}>
                Discovery
              </Typography>
              <List disablePadding>
                {['All Posts', 'Popular', 'Following', 'Bookmarked'].map((label) => (
                  <ListItem key={label} disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton sx={{ borderRadius: 2, py: 1 }}>
                      <ListItemText 
                        primary={label} 
                        primaryTypographyProps={{ fontSize: 13, fontWeight: 700, color: label === 'All Posts' ? 'primary.main' : 'text.secondary' }} 
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Paper elevation={0} sx={{ p: 2, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', mb: 2, display: 'block', px: 1 }}>
                Trending Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['#architecture', '#uxdesign', '#fintech', '#saas', '#leadership'].map(tag => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    size="small" 
                    variant="outlined" 
                    clickable 
                    sx={{ fontSize: 11, fontWeight: 600, borderRadius: 2, '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }} 
                  />
                ))}
              </Box>
            </Paper>
          </Stack>
        </Grid>

        {/* Main Feed */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search conversations... "
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} color="#64748b" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }
              }}
            />
          </Box>

          <Stack spacing={3}>
            {isLoading ? (
              <Box sx={{ p: 10, textAlign: 'center' }}>
                <CircularProgress size={30} sx={{ mb: 2 }} />
                <Typography color="text.secondary">Streaming community feed...</Typography>
              </Box>
            ) : error ? (
              <Box sx={{ p: 10, textAlign: 'center', color: 'error.main' }}>
                <Typography>Community data sync issue.</Typography>
              </Box>
            ) : (
              posts.map((post) => (
                <Card key={post.id} elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', transition: 'all 0.3s', '&:hover': { borderColor: 'primary.main', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.08)' } }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: 'primary.main', fontWeight: 800, fontSize: 14 }}>
                          {post.authorId.substring(0, 1).toUpperCase()}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                            {post.authorName || `Member ${post.authorId.substring(0, 4)}`}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 10 }}>
                            {post.category} • {new Date(post.createdAt).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton size="small"><MoreVertical size={20} /></IconButton>
                    </Box>

                    <Typography 
                      component={Link} 
                      href={`/dashboard/community/${post.id}`} 
                      variant="h5" 
                      sx={{ fontWeight: 800, mb: 1, display: 'block', color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineClamp: 3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.content}
                    </Typography>
                  </CardContent>
                  <Divider sx={{ opacity: 0.5 }} />
                  <CardActions sx={{ px: 3, py: 1.5, justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={3}>
                      <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }}>
                        <Heart size={18} />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <MessageSquare size={18} />
                      </IconButton>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small"><Share2 size={18} /></IconButton>
                      <IconButton size="small"><Bookmark size={18} /></IconButton>
                    </Stack>
                  </CardActions>
                </Card>
              ))
            )}
          </Stack>
        </Grid>

        {/* Sidebar Right: Stats */}
        <Grid item xs={12} md={3}>
          <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(99, 102, 241, 0.02)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <TrendingUp size={24} color="#6366f1" />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Insights</Typography>
              </Box>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>Platform Growth</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'success.main' }}>+12%</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>Active Topics</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800 }}>{posts.length}</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }}>Top Contributors</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', display: 'block' }}>
                Join the conversation to appear in our contributor leaderboard.
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
