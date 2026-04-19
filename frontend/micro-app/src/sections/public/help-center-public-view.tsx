'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { helpCenterService } from 'src/services/help-center-service';

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function HelpCenterPublicView({ id }: Props) {
  const articlesQuery = useQuery({
    queryKey: ['help-center-articles'],
    queryFn: () => helpCenterService.getArticles(),
    enabled: !id,
  });

  const articleQuery = useQuery({
    queryKey: ['help-center-article', id],
    queryFn: () => helpCenterService.getArticle(id!),
    enabled: Boolean(id),
  });

  if (articlesQuery.isLoading || articleQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 6, px: 3 }}>
      <Card sx={{ p: 4 }}>
        {id ? (
          <Stack spacing={2}>
            <Typography variant="h4">{articleQuery.data?.title || 'Help center article'}</Typography>
            <Typography variant="body1">
              {articleQuery.data?.content || articleQuery.data?.body || 'Public article route connected.'}
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Typography variant="h4">Help Center</Typography>
            {(articlesQuery.data || []).map((article: any) => (
              <Box key={article.id || article._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">{article.title}</Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Card>
    </Box>
  );
}
