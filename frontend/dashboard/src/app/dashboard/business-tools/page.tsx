'use client';

import { 
  QrCode, 
  CreditCard, 
  Share2, 
  Search, 
  Plus, 
  Monitor, 
  Smartphone, 
  ExternalLink,
  ChevronRight,
  Tool,
  Download,
  Copy,
  Layout,
  Contact2
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  Stack, 
  Chip,
  Card,
  CardContent,
  CardActions,
  Divider,
  Tooltip
} from "@mui/material";

const tools = [
  { name: "QR Generator", desc: "Create dynamic QR codes for menus, links, and payments.", icon: QrCode, color: "#6366f1" },
  { name: "Digital Business Cards", desc: "NFC and QR enabled cards for your team.", icon: Contact2, color: "#10b981" },
  { name: "Terminal App", desc: "Turn your smartphone into a card reader.", icon: Smartphone, color: "#f59e0b" },
  { name: "Loyalty Programs", desc: "Digital stamps and reward systems.", icon: Layout, color: "#ec4899" },
];

export default function BusinessToolsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Business Growth Tools
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Physical and digital tools to bridge the gap between your brand and your customers.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Add New Tool
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {tools.map((tool) => (
          <Grid item xs={12} sm={6} md={3} key={tool.name}>
             <Card elevation={0} sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' } }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                   <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.02)', color: tool.color, width: 56, height: 56, margin: '0 auto 16px', borderRadius: 3 }}>
                      <tool.icon size={28} />
                   </Avatar>
                   <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{tool.name}</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{ mt: 1, height: 40, overflow: 'hidden' }}>{tool.desc}</Typography>
                </CardContent>
                <Divider sx={{ opacity: 0.5 }} />
                <CardActions sx={{ p: 2, justifyContent: 'center' }}>
                   <Button variant="text" size="small" endIcon={<ChevronRight size={16} />} sx={{ fontWeight: 800 }}>Manage</Button>
                </CardActions>
             </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>My Active QRs</Typography>

      <Grid container spacing={4}>
         {[
           { name: "Main Store Menu", scans: 1240, type: "PDF/Menu", preview: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mymanager-demo-menu" },
           { name: "Payment Portal", scans: 450, type: "Checkout", preview: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mymanager-demo-pay" },
         ].map((qr, i) => (
           <Grid item xs={12} md={6} key={i}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                 <Stack direction="row" spacing={3} alignItems="center">
                    <Box sx={{ p: 1, bgcolor: 'white', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                       <img src={qr.preview} alt={qr.name} style={{ width: 80, height: 80 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{qr.name}</Typography>
                          <Chip label={qr.type} size="small" sx={{ fontWeight: 700, fontSize: 10 }} />
                       </Box>
                       <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                         Last scan: 2 hours ago
                       </Typography>
                       <Stack direction="row" spacing={3}>
                          <Box>
                             <Typography variant="caption" color="text.secondary">Total Scans</Typography>
                             <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{qr.scans}</Typography>
                          </Box>
                          <Box>
                             <Typography variant="caption" color="text.secondary">Status</Typography>
                             <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'success.main' }}>Active</Typography>
                          </Box>
                       </Stack>
                    </Box>
                    <Stack spacing={1}>
                       <Tooltip title="Download PNG"><IconButton size="small"><Download size={18} /></IconButton></Tooltip>
                       <Tooltip title="Copy URL"><IconButton size="small"><Copy size={18} /></IconButton></Tooltip>
                    </Stack>
                 </Stack>
              </Paper>
           </Grid>
         ))}
      </Grid>

      <Paper elevation={0} sx={{ mt: 6, p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.01)' }}>
         <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>NFC Business Cards for Teams</Typography>
               <Typography variant="body2" color="text.secondary">Equip your entire sales force with high-end metal NFC cards that sync directly to your CRM. No app required.</Typography>
               <Button variant="contained" sx={{ mt: 3, borderRadius: 3 }}>Order Team Pack</Button>
            </Grid>
            <Grid item xs={12} md={4}>
               <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=400&q=80" alt="NFC Cards" style={{ width: '100%', maxWidth: 200, borderRadius: 16, transform: 'rotate(-5deg)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
               </Box>
            </Grid>
         </Grid>
      </Paper>
    </Box>
  );
}
