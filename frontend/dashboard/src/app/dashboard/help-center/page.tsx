'use client';

import { 
  Plus, 
  Search, 
  HelpCircle, 
  BookOpen, 
  LifeBuoy, 
  MessageCircle, 
  FileText, 
  ExternalLink,
  ChevronRight,
  ShieldQuestion,
  PlayCircle,
  Users
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
  Stack,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";

const categories = [
  { title: "Getting Started", icon: PlayCircle, color: "#6366f1", articles: 12 },
  { title: "Account & Billing", icon: ShieldQuestion, color: "#10b981", articles: 8 },
  { title: "Dashboard & Tools", icon: BookOpen, color: "#f59e0b", articles: 24 },
  { title: "Advanced Features", icon: LifeBuoy, color: "#ec4899", articles: 15 },
];

const popularArticles = [
  "How to set up your first pipeline?",
  "Managing your member subscription tiers",
  "Connecting a custom domain to your site",
  "Automating your welcome sequence",
  "Setting up multi-user workspace access",
];

export default function HelpCenterPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1, mb: 2 }}>
           How can we help you today?
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600 }}>
           Search our knowledge base for answers, or reach out to our support team for personalized assistance.
        </Typography>
        <Paper elevation={0} sx={{ p: 1, borderRadius: 4, border: '1px solid', borderColor: 'divider', width: '100%', maxWidth: 700, display: 'flex', alignItems: 'center' }}>
           <TextField 
             fullWidth 
             placeholder="Search for articles, guides, and tutorials..." 
             InputProps={{ 
               startAdornment: <InputAdornment position="start"><Search size={24} color="#6366f1" /></InputAdornment>,
               sx: { 
                 border: 'none', 
                 '& fieldset': { border: 'none' },
                 fontSize: 18,
                 fontWeight: 500
               } 
             }} 
           />
           <Button variant="contained" sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 800 }}>Search</Button>
        </Paper>
      </Box>

      <Grid container spacing={3} sx={{ mb: 8 }}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={3} key={cat.title}>
             <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                   <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.05)', color: cat.color, width: 64, height: 64, margin: '0 auto 16px' }}>
                      <cat.icon size={32} />
                   </Avatar>
                   <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{cat.title}</Typography>
                   <Typography variant="caption" color="text.secondary">{cat.articles} Articles</Typography>
                </CardContent>
             </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={6}>
         <Grid item xs={12} md={7}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Popular Articles</Typography>
            <List sx={{ p: 0 }}>
               {popularArticles.map((article, index) => (
                 <ListItem 
                   key={index} 
                   disablePadding 
                   sx={{ 
                     mb: 2, 
                     borderRadius: 3, 
                     border: '1px solid', 
                     borderColor: 'divider', 
                     '&:hover': { bgcolor: 'rgba(0,0,0,0.01)', borderColor: 'primary.light' } 
                   }}
                 >
                    <Box sx={{ p: 2, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                       <Stack direction="row" spacing={2} alignItems="center">
                          <FileText size={20} color="#64748b" />
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{article}</Typography>
                       </Stack>
                       <ChevronRight size={18} color="#94a3b8" />
                    </Box>
                 </ListItem>
               ))}
            </List>
            <Button variant="text" sx={{ mt: 2, fontWeight: 800 }}>View all articles <ChevronRight size={16} /></Button>
         </Grid>

         <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(99, 102, 241, 0.02)' }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Still need help?</Typography>
               <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>Our experts are available 24/7 to assist you with any questions.</Typography>
               
               <Stack spacing={2}>
                  <Paper elevation={0} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
                     <Stack direction="row" spacing={2} alignItems="center">
                        <MessageCircle size={24} color="#6366f1" />
                        <Box>
                           <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Live Chat</Typography>
                           <Typography variant="caption" color="text.secondary">Avg. response time: 2 mins</Typography>
                        </Box>
                     </Stack>
                     <ChevronRight size={18} />
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
                     <Stack direction="row" spacing={2} alignItems="center">
                        <Users size={24} color="#10b981" />
                        <Box>
                           <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Community Forum</Typography>
                           <Typography variant="caption" color="text.secondary">Join our 12k+ users group</Typography>
                        </Box>
                     </Stack>
                     <ChevronRight size={18} />
                  </Paper>
               </Stack>

               <Box sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>Contact Support</Typography>
                  <Button variant="outlined" fullWidth sx={{ color: 'white', borderColor: 'white', borderRadius: 2, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                     Create a Ticket
                  </Button>
               </Box>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
