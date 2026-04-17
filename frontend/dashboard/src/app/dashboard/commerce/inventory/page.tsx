'use client';

import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Package, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight,
  RefreshCw,
  Box as BoxIcon,
  Tag,
  BarChart2
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  LinearProgress
} from "@mui/material";

const inventory = [
  { id: 1, name: "Premium Membership Card", sku: "MEM-001", stock: 850, status: "In Stock", price: "$29.00", category: "Subscription" },
  { id: 2, name: "Starter Bundle", sku: "BUN-442", stock: 12, status: "Low Stock", price: "$49.00", category: "Hardware" },
  { id: 3, name: "Cloud Storage 1TB", sku: "CLD-1TB", stock: "Unlimited", status: "Digital", price: "$9.99", category: "Service" },
  { id: 4, name: "Consultation Voucher", sku: "SRV-CON", stock: 0, status: "Out of Stock", price: "$150.00", category: "Service" },
];

export default function InventoryPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Inventory Management
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Keep track of your products, stock levels, and supply chain.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<RefreshCw size={20} />} sx={{ borderRadius: 3 }}>Sync</Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>Add Product</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total SKUs", value: "1,240", icon: Package, color: '#6366f1' },
          { label: "Low Stock Items", value: "14", icon: AlertTriangle, color: '#f59e0b' },
          { label: "Out of Stock", value: "8", icon: BoxIcon, color: '#ef4444' },
          { label: "Inventory Value", value: "$124,500", icon: BarChart2, color: '#10b981' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>{stat.label}</Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
                {stat.label === "Low Stock Items" && (
                   <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 700 }}>Action Required</Typography>
                )}
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
             <TextField 
               fullWidth
               placeholder="Search inventory..." 
               size="small" 
               InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
             />
             <Button variant="outlined" startIcon={<Filter size={18} />} sx={{ borderRadius: 3 }}>Filter</Button>
          </Stack>
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Product Details</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Stock Level</TableCell>
                <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Price</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                       <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: 'primary.main', borderRadius: 2 }}>
                          <Tag size={18} />
                       </Avatar>
                       <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{item.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{item.category}</Typography>
                       </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>{item.sku}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: 120 }}>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 800 }}>{item.stock}</Typography>
                       </Box>
                       <LinearProgress 
                         variant="determinate" 
                         value={typeof item.stock === 'number' ? Math.min((item.stock/1000)*100, 100) : 100} 
                         sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: item.status === 'Low Stock' ? 'warning.main' : item.status === 'Out of Stock' ? 'error.main' : 'primary.main' } }} 
                       />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={item.status} 
                      size="small" 
                      sx={{ 
                        fontWeight: 800, fontSize: 10, borderRadius: 1.5,
                        bgcolor: item.status === 'In Stock' ? 'success.light' : item.status === 'Low Stock' ? 'warning.light' : item.status === 'Out of Stock' ? 'error.light' : 'action.selected',
                        color: item.status === 'In Stock' ? 'success.dark' : item.status === 'Low Stock' ? 'warning.dark' : item.status === 'Out of Stock' ? 'error.dark' : 'text.secondary'
                      }} 
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{item.price}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small"><MoreVertical size={18} /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
