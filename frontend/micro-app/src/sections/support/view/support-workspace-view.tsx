'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { supportService } from 'src/services/support-service';

export function SupportWorkspaceView() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<'tickets' | 'kb' | 'public-kb'>('tickets');
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [contactId, setContactId] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [assigneeUserId, setAssigneeUserId] = useState('');
  const [slaDueAt, setSlaDueAt] = useState('');

  const [noteBody, setNoteBody] = useState('');
  const [replyBody, setReplyBody] = useState('');

  const [articleTitle, setArticleTitle] = useState('');
  const [articleBody, setArticleBody] = useState('');
  const [articleCategoryId, setArticleCategoryId] = useState('');
  const [articlePublic, setArticlePublic] = useState(true);

  const ticketsQuery = useQuery({
    queryKey: ['support-tickets'],
    queryFn: () => supportService.listTickets(),
  });
  const selectedTicketQuery = useQuery({
    queryKey: ['support-ticket', selectedTicketId],
    queryFn: () => supportService.getTicket(String(selectedTicketId)),
    enabled: Boolean(selectedTicketId),
  });

  const categoriesQuery = useQuery({
    queryKey: ['support-kb-categories'],
    queryFn: () => supportService.listKbCategories(),
    enabled: activeTab !== 'tickets',
  });
  const articlesQuery = useQuery({
    queryKey: ['support-kb-articles'],
    queryFn: () => supportService.listKbArticles(),
    enabled: activeTab === 'kb',
  });
  const publicArticlesQuery = useQuery({
    queryKey: ['support-kb-public-articles'],
    queryFn: () => supportService.listPublicKbArticles(),
    enabled: activeTab === 'public-kb',
  });

  const createTicketMutation = useMutation({
    mutationFn: () => supportService.createTicket({
      subject,
      description,
      priority,
      customerContactId: contactId ? Number(contactId) : undefined,
      customerCompanyId: companyId ? Number(companyId) : undefined,
      assigneeUserId: assigneeUserId || undefined,
      slaDueAt: slaDueAt || undefined,
    }),
    onSuccess: async () => {
      setSubject('');
      setDescription('');
      setContactId('');
      setCompanyId('');
      setAssigneeUserId('');
      setSlaDueAt('');
      await queryClient.invalidateQueries({ queryKey: ['support-tickets'] });
      showToast({ message: 'Ticket created', severity: 'success' });
    },
    onError: (error: any) => showToast({ message: error?.message || 'Unable to create ticket', severity: 'warning' }),
  });

  const updateTicketMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) => supportService.updateTicket(id, payload),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['support-tickets'] }),
        queryClient.invalidateQueries({ queryKey: ['support-ticket', selectedTicketId] }),
      ]);
    },
  });

  const addNoteMutation = useMutation({
    mutationFn: ({ id, body }: { id: string; body: string }) => supportService.addTicketNote(id, body),
    onSuccess: async () => {
      setNoteBody('');
      await queryClient.invalidateQueries({ queryKey: ['support-ticket', selectedTicketId] });
    },
  });

  const addReplyMutation = useMutation({
    mutationFn: ({ id, body }: { id: string; body: string }) => supportService.addTicketReply(id, body, true),
    onSuccess: async () => {
      setReplyBody('');
      await queryClient.invalidateQueries({ queryKey: ['support-ticket', selectedTicketId] });
    },
  });

  const createArticleMutation = useMutation({
    mutationFn: () => supportService.createKbArticle({
      title: articleTitle,
      body: articleBody,
      categoryId: articleCategoryId || undefined,
      isPublic: articlePublic,
    }),
    onSuccess: async () => {
      setArticleTitle('');
      setArticleBody('');
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['support-kb-articles'] }),
        queryClient.invalidateQueries({ queryKey: ['support-kb-public-articles'] }),
      ]);
      showToast({ message: 'Article created', severity: 'success' });
    },
  });

  const selectedTicket = selectedTicketQuery.data;
  const slaStatus = useMemo(() => {
    if (!selectedTicket?.slaDueAt) return null;
    const due = new Date(selectedTicket.slaDueAt).getTime();
    const breached = selectedTicket.slaBreached || due < Date.now();
    return breached ? 'breached' : 'on-track';
  }, [selectedTicket]);

  return (
    <FeatureRouteShell
      title="Support"
      description="Create, assign, and resolve customer tickets with SLA visibility and a basic knowledge base."
      links={[
        { href: '#', label: 'Tickets' },
        { href: '#', label: 'Knowledge Base' },
        { href: '#', label: 'Public Portal' },
      ]}
      action={<Button variant="contained" startIcon={<Iconify icon="solar:chat-round-dots-bold" />} onClick={() => setActiveTab('tickets')}>New Ticket</Button>}
    >
      <Tabs value={activeTab} onChange={(_, value) => setActiveTab(value)} sx={{ mt: 3 }}>
        <Tab value="tickets" label="Tickets" />
        <Tab value="kb" label="Knowledge Base" />
        <Tab value="public-kb" label="Public KB" />
      </Tabs>

      {activeTab === 'tickets' && (
        <Grid container spacing={3} sx={{ mt: 0.5 }}>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 2.5 }}>
              <Typography variant="h6" sx={{ mb: 1.5 }}>Create Ticket</Typography>
              <Grid container spacing={1.5}>
                <Grid item xs={12}><TextField label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} fullWidth /></Grid>
                <Grid item xs={12}><TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline minRows={3} /></Grid>
                <Grid item xs={12} sm={6}><TextField label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} fullWidth /></Grid>
                <Grid item xs={12} sm={6}><TextField type="datetime-local" label="SLA Due" InputLabelProps={{ shrink: true }} value={slaDueAt} onChange={(e) => setSlaDueAt(e.target.value)} fullWidth /></Grid>
                <Grid item xs={12} sm={4}><TextField label="Contact ID" value={contactId} onChange={(e) => setContactId(e.target.value)} fullWidth /></Grid>
                <Grid item xs={12} sm={4}><TextField label="Company ID" value={companyId} onChange={(e) => setCompanyId(e.target.value)} fullWidth /></Grid>
                <Grid item xs={12} sm={4}><TextField label="Assignee User ID" value={assigneeUserId} onChange={(e) => setAssigneeUserId(e.target.value)} fullWidth /></Grid>
              </Grid>
              <Button sx={{ mt: 2 }} variant="contained" onClick={() => createTicketMutation.mutate()} disabled={createTicketMutation.isPending || !subject.trim()}>Create</Button>
            </Card>

            <Card sx={{ mt: 2, p: 0 }}>
              <Box sx={{ p: 2 }}><Typography variant="h6">Ticket List</Typography></Box>
              <Divider />
              {ticketsQuery.isError ? <Alert severity="warning">Unable to load tickets.</Alert> : null}
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>SLA</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(ticketsQuery.data || []).map((ticket: any) => (
                      <TableRow key={ticket.id} hover selected={selectedTicketId === ticket.id} onClick={() => setSelectedTicketId(ticket.id)} sx={{ cursor: 'pointer' }}>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.status}</TableCell>
                        <TableCell><Chip size="small" label={ticket.priority} color={ticket.priority === 'urgent' ? 'error' : ticket.priority === 'high' ? 'warning' : 'default'} /></TableCell>
                        <TableCell>{ticket.slaDueAt ? new Date(ticket.slaDueAt).toLocaleString() : '—'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ p: 2.5 }}>
              {!selectedTicket ? (
                <Typography variant="body2" color="text.secondary">Select a ticket to view details.</Typography>
              ) : (
                <Stack spacing={1.5}>
                  <Typography variant="h6">{selectedTicket.subject}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip size="small" label={`Status: ${selectedTicket.status}`} />
                    <Chip size="small" color={selectedTicket.priority === 'urgent' ? 'error' : selectedTicket.priority === 'high' ? 'warning' : 'default'} label={`Priority: ${selectedTicket.priority}`} />
                    {slaStatus ? <Chip size="small" color={slaStatus === 'breached' ? 'error' : 'success'} label={`SLA: ${slaStatus}`} /> : null}
                  </Stack>
                  <Typography variant="body2">{selectedTicket.description || 'No description'}</Typography>
                  <Typography variant="caption" color="text.secondary">Contact: {selectedTicket.customerContactId || '—'} · Company: {selectedTicket.customerCompanyId || '—'} · Assignee: {selectedTicket.assigneeUserId || '—'}</Typography>

                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" onClick={() => updateTicketMutation.mutate({ id: selectedTicket.id, payload: { status: 'in_progress' } })}>Start</Button>
                    <Button size="small" variant="outlined" onClick={() => updateTicketMutation.mutate({ id: selectedTicket.id, payload: { status: 'resolved' } })}>Resolve</Button>
                    <Button size="small" variant="contained" onClick={() => updateTicketMutation.mutate({ id: selectedTicket.id, payload: { status: 'closed' } })}>Close</Button>
                  </Stack>

                  <Divider />
                  <Typography variant="subtitle2">Internal Notes</Typography>
                  {(selectedTicket.notes || []).map((note: any) => <Typography key={note.id} variant="body2">• {note.body}</Typography>)}
                  <TextField size="small" placeholder="Add internal note" value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
                  <Button size="small" onClick={() => selectedTicket && addNoteMutation.mutate({ id: selectedTicket.id, body: noteBody })} disabled={!noteBody.trim()}>Add Note</Button>

                  <Typography variant="subtitle2">Customer Replies</Typography>
                  {(selectedTicket.replies || []).map((reply: any) => <Typography key={reply.id} variant="body2">↳ {reply.body}</Typography>)}
                  <TextField size="small" placeholder="Add customer-visible reply" value={replyBody} onChange={(e) => setReplyBody(e.target.value)} />
                  <Button size="small" onClick={() => selectedTicket && addReplyMutation.mutate({ id: selectedTicket.id, body: replyBody })} disabled={!replyBody.trim()}>Add Reply</Button>
                </Stack>
              )}
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 'kb' && (
        <Grid container spacing={3} sx={{ mt: 0.5 }}>
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 2.5 }}>
              <Typography variant="h6" sx={{ mb: 1.5 }}>Create Article</Typography>
              <Stack spacing={1.5}>
                <TextField label="Title" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
                <TextField label="Category ID" value={articleCategoryId} onChange={(e) => setArticleCategoryId(e.target.value)} />
                <TextField label="Body" value={articleBody} onChange={(e) => setArticleBody(e.target.value)} multiline minRows={4} />
                <TextField label="Public" value={articlePublic ? 'true' : 'false'} onChange={(e) => setArticlePublic(e.target.value === 'true')} />
                <Button variant="contained" onClick={() => createArticleMutation.mutate()} disabled={createArticleMutation.isPending || !articleTitle.trim()}>Save Article</Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 2.5 }}>
              <Typography variant="h6">Articles</Typography>
              <Typography variant="caption" color="text.secondary">Categories: {(categoriesQuery.data || []).length}</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                {(articlesQuery.data || []).map((article: any) => (
                  <Box key={article.id} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1.5 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle2">{article.title}</Typography>
                      <Chip size="small" label={article.isPublic ? 'Public' : 'Internal'} color={article.isPublic ? 'success' : 'default'} />
                      {article.category?.name ? <Chip size="small" label={article.category.name} /> : null}
                    </Stack>
                    <Typography variant="body2" color="text.secondary">{article.body}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 'public-kb' && (
        <Card sx={{ mt: 2, p: 2.5 }}>
          <Typography variant="h6">Customer Portal Knowledge Base</Typography>
          <Typography variant="caption" color="text.secondary">Publicly visible support articles.</Typography>
          <Stack spacing={1.5} sx={{ mt: 2 }}>
            {(publicArticlesQuery.data || []).map((article: any) => (
              <Box key={article.id} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1.5 }}>
                <Typography variant="subtitle2">{article.title}</Typography>
                <Typography variant="body2" color="text.secondary">{article.body}</Typography>
                {article.category?.name ? <Chip size="small" label={article.category.name} sx={{ mt: 1 }} /> : null}
              </Box>
            ))}
          </Stack>
        </Card>
      )}
    </FeatureRouteShell>
  );
}
