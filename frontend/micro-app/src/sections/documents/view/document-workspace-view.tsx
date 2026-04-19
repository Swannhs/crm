'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { documentService } from 'src/services/document-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

type Props = {
  folder?: string;
  documentId?: string;
  hashcode?: string;
  mode?: 'list' | 'create' | 'preview' | 'email-link';
  template?: string;
  type?: string;
};

export function DocumentWorkspaceView({
  folder,
  documentId,
  hashcode,
  mode = 'list',
  template,
  type,
}: Props) {
  const docsQuery = useQuery({
    queryKey: ['documents', folder],
    queryFn: () => documentService.getDocuments(folder ? { status: folder } : undefined),
    enabled: mode === 'list',
  });

  const docQuery = useQuery({
    queryKey: ['document', documentId],
    queryFn: () => documentService.getDocument(documentId!),
    enabled: Boolean(documentId),
  });

  const sharedQuery = useQuery({
    queryKey: ['document-share', hashcode],
    queryFn: () => documentService.getSharedDocument(hashcode!),
    enabled: Boolean(hashcode),
  });

  if (docsQuery.isLoading || docQuery.isLoading || sharedQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FeatureRouteShell
      title={
        mode === 'create'
          ? 'Create Document'
          : mode === 'preview'
            ? 'Document Preview'
            : mode === 'email-link'
              ? 'Recipient Document Access'
              : 'Documents'
      }
      description="Legacy documents folder routes, create flow, preview flow, and recipient email-link flow mapped into the micro-app."
      links={[
        { href: paths.dashboard.documents, label: 'All Documents' },
        { href: paths.dashboard.documentFolder('pending'), label: 'Pending' },
        { href: paths.dashboard.documentFolder('signed'), label: 'Signed' },
        { href: paths.dashboard.documentCreate('template', 'signature'), label: 'Create' },
      ]}
    >
      {mode === 'create' ? (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1">Template: {template}</Typography>
            <Typography variant="subtitle1">Type: {type}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              The create route is active and ready for document composer work. Backing upload and document persistence APIs are already wired in the service layer.
            </Typography>
          </Stack>
        </Card>
      ) : mode === 'preview' || mode === 'email-link' ? (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1">
              {sharedQuery.data?.document?.name || sharedQuery.data?.name || 'Shared document'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {sharedQuery.data?.document?.status || sharedQuery.data?.status || 'Recipient access route connected'}
            </Typography>
          </Stack>
        </Card>
      ) : documentId && docQuery.data ? (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">{docQuery.data.name}</Typography>
            <Typography variant="body2">Type: {docQuery.data.type}</Typography>
            <Typography variant="body2">Status: {docQuery.data.status}</Typography>
          </Stack>
        </Card>
      ) : (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            {(docsQuery.data || []).map((doc: any) => (
              <Box key={doc.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">{doc.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {doc.type} • {doc.status}
                </Typography>
              </Box>
            ))}
            {(docsQuery.data || []).length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                No documents are currently available in this folder.
              </Typography>
            )}
          </Stack>
        </Card>
      )}
    </FeatureRouteShell>
  );
}
