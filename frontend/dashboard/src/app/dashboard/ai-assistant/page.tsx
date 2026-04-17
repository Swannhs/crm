'use client';

import { 
  Sparkles, 
  Send, 
  MessageSquare, 
  Zap, 
  Image as ImageIcon, 
  Type, 
  Code, 
  Mic,
  MoreVertical,
  RefreshCw,
  Plus,
  ArrowRight,
  Settings,
  Cpu
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
  Chip,
  Divider,
  Card,
  CardContent,
  LinearProgress
} from "@mui/material";

const aiTools = [
  { name: "Content Writer", desc: "Generate blog posts, emails, and ads.", icon: Type, color: "#6366f1" },
  { name: "AI Image Gen", desc: "Create stunning visuals from text.", icon: ImageIcon, color: "#ec4899" },
  { name: "Code Assistant", desc: "Debug or generate technical snippets.", icon: Code, color: "#10b981" },
];

export default function AIAssistantPage() {
  return (
    <Box sx={{ p: 4, height: 'calc(100vh - 64px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
           <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            AI Assistant <Chip label="BETA" size="small" sx={{ fontWeight: 800, bgcolor: 'primary.main', color: 'white', height: 20, fontSize: 10 }} />
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Leverage advanced AI models to accelerate your business growth.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
           <Paper elevation={0} sx={{ px: 2, py: 1, borderRadius: 3, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box>
                 <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block' }}>TOKENS REMAINING</Typography>
                 <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>45,200 / 50k</Typography>
              </Box>
              <Cpu size={20} color="#6366f1" />
           </Paper>
           <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>New Workspace</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ flexGrow: 1, height: 'calc(100% - 100px)' }}>
         <Grid item xs={12} md={4} sx={{ height: '100%', overflowY: 'auto' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }}>Available AI Tools</Typography>
            <Stack spacing={2} sx={{ mb: 4 }}>
               {aiTools.map((tool) => (
                 <Card key={tool.name} elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(99, 102, 241, 0.02)' } }}>
                    <CardContent sx={{ p: 2.5 }}>
                       <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.03)', color: tool.color, borderRadius: 2 }}>
                             <tool.icon size={20} />
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                             <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{tool.name}</Typography>
                             <Typography variant="caption" color="text.secondary">{tool.desc}</Typography>
                          </Box>
                          <ArrowRight size={16} color="#94a3b8" />
                       </Stack>
                    </CardContent>
                 </Card>
               ))}
            </Stack>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: 'secondary.main', color: 'white' }}>
               <Stack spacing={2}>
                  <Sparkles size={32} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Go Premium AI</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Unlock GPT-4, DALL-E 3, and unlimited tokens for your entire team.</Typography>
                  <Button variant="contained" sx={{ bgcolor: 'white', color: 'secondary.main', borderRadius: 3, fontWeight: 800, '&:hover': { bgcolor: '#f8fafc' } }}>Upgrade Now</Button>
               </Stack>
            </Paper>
         </Grid>

         <Grid item xs={12} md={8} sx={{ height: '100%' }}>
            <Paper elevation={0} sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column' }}>
               <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                     <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}><Sparkles size={16} /></Avatar>
                     <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Smart Copilot</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                     <Button size="small" variant="outlined" sx={{ borderRadius: 2 }}>Context: Sales</Button>
                     <IconButton size="small"><Settings size={18} /></IconButton>
                  </Stack>
               </Box>

               <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                     <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '4px 16px 16px 16px', border: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="body2">Hello! I'm your AI Workspace Assistant. How can I help you optimize your business today? I can write copy, generate images, or analyze your sales data.</Typography>
                     </Paper>
                  </Box>

                  <Box sx={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
                     <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px 16px 4px 16px' }}>
                        <Typography variant="body2">Can you draft a welcome email for my new "Pro Plan" members? Include a discount for their next month.</Typography>
                     </Paper>
                  </Box>

                  <Box sx={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                     <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: '4px 16px 16px 16px', border: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>Draft: Welcome to the Pro Family! 🚀</Typography>
                        <Typography variant="body2">
                          Dear [Name],
                          <br/><br/>
                          We're thrilled to have you on board! You've just unlocked advanced tools to scale your business. As a special thank you, use code **PROGROWTH** for 20% off your next renewal.
                          <br/><br/>
                          Best,<br/>MyManager Team
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                           <Button size="small" variant="contained" sx={{ borderRadius: 2, fontSize: 10 }}>Use Draft</Button>
                           <Button size="small" variant="outlined" sx={{ borderRadius: 2, fontSize: 10 }}>Regenerate</Button>
                        </Stack>
                     </Paper>
                  </Box>
               </Box>

               <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                     <IconButton size="small"><Mic size={20} /></IconButton>
                     <TextField 
                       fullWidth 
                       placeholder="Ask AI anything..." 
                       size="small" 
                       sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
                       InputProps={{ endAdornment: <InputAdornment position="end"><Zap size={16} color="#6366f1" /></InputAdornment> }}
                     />
                     <Button variant="contained" sx={{ minWidth: 48, width: 48, height: 40, borderRadius: 2 }}><Send size={18} /></Button>
                  </Stack>
               </Box>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
