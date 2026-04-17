'use client';

import { 
  Package, 
  ShoppingCart, 
  Plus, 
  Monitor,
  Tag,
  BarChart3,
  Search,
  MoreVertical
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
  CircularProgress,
  LinearProgress,
  Stack
} from "@mui/material";
import { formatCurrency } from "@/lib/utils";
import { commerceService } from "@/services/commerce.service";
import { useQuery } from "@tanstack/react-query";

export default function CommercePage() {
  const { data: productsResponse, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => commerceService.getProducts(),
  });

  const products = productsResponse?.data || [];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Commerce & Inventory
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your product catalog, stock, and sales performance.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Add Product
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Items in Catalog</Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>{products.length}</Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700 }}>Live Storefront</Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: 'primary.main', width: 56, height: 56, borderRadius: 2 }}>
              <Package size={32} />
            </Avatar>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Total Sales</Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>--</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Next update in 2h</Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(245, 158, 11, 0.1)', color: 'warning.main', width: 56, height: 56, borderRadius: 2 }}>
              <ShoppingCart size={32} />
            </Avatar>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>In Stock Items</Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>{products.filter(p => (p.stockQuantity ?? 0) > 0).length}</Typography>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>Stock Healthy</Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(236, 72, 153, 0.1)', color: 'error.main', width: 56, height: 56, borderRadius: 2 }}>
              <Tag size={32} />
            </Avatar>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, flexGrow: 1 }}>Catalog</Typography>
              <TextField
                 variant="outlined"
                 placeholder="Search products..."
                 size="small"
                 sx={{ maxWidth: 300 }}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <Search size={16} />
                     </InputAdornment>
                   ),
                   sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' }
                 }}
              />
            </Box>
            <TableContainer>
              {isLoading ? (
                <Box sx={{ p: 10, textAlign: 'center' }}>
                  <CircularProgress size={30} sx={{ mb: 2 }} />
                  <Typography color="text.secondary">Fetching products...</Typography>
                </Box>
              ) : error ? (
                <Box sx={{ p: 10, textAlign: 'center', color: 'error.main' }}>
                  <Typography>Commerce service connection error.</Typography>
                </Box>
              ) : (
                <Table>
                  <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Product</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Price</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Stock</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id} hover>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 2, width: 40, height: 40 }}>
                              <Package size={20} color="#64748b" />
                            </Avatar>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, maxWidth: 200, truncate: true }}>
                              {product.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {formatCurrency((product.priceCents || 0) / 100)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
                            {product.stockQuantity ?? 0}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Chip 
                            label={product.status} 
                            size="small" 
                            sx={{ 
                              fontWeight: 700, fontSize: 10, borderRadius: 1.5,
                              bgcolor: product.status === 'active' ? 'success.light' : 'action.selected',
                              color: product.status === 'active' ? 'success.dark' : 'text.secondary'
                            }} 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>Sales Channels</Typography>
            <Stack spacing={4}>
               {[
                 { label: 'Web Storefront', value: 75, color: '#6366f1' },
                 { label: 'Mobile App', value: 45, color: '#ec4899' },
                 { label: 'Point of Sale', value: 20, color: '#f59e0b' }
               ].map((channel) => (
                 <Box key={channel.label}>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                     <Typography variant="caption" sx={{ fontWeight: 700 }}>{channel.label}</Typography>
                     <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{channel.value}%</Typography>
                   </Box>
                   <LinearProgress 
                     variant="determinate" 
                     value={channel.value} 
                     sx={{ 
                       height: 6, 
                       borderRadius: 3, 
                       bgcolor: 'rgba(0,0,0,0.05)',
                       '& .MuiLinearProgress-bar': { bgcolor: channel.color, borderRadius: 3 }
                     }} 
                   />
                 </Box>
               ))}
               <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', pt: 2, textAlign: 'center', display: 'block' }}>
                 Aggregated sales data is updated every 12 hours.
               </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
