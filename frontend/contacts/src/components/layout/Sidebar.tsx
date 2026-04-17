"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Users, 
  FileText, 
  CreditCard, 
  ShoppingBag, 
  Users2, 
  Calendar, 
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Box, 
  Typography, 
  Divider,
  Avatar,
  IconButton
} from "@mui/material";

const drawerWidth = 280;

const menuItems = [
  { icon: Home, label: "Overview", href: "/dashboard" },
  { icon: Users, label: "Contacts", href: "/dashboard/contacts-mfe" },
  { icon: FileText, label: "Documents", href: "/dashboard/documents" },

  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
  { icon: ShoppingBag, label: "Commerce", href: "/dashboard/commerce" },
  { icon: Users2, label: "Employees", href: "/dashboard/employees" },
  { icon: Calendar, label: "Booking", href: "/dashboard/booking" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{ p: 3, mb: 2 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 800, 
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: -0.5
          }}
        >
          MyManager
        </Typography>
      </Box>

      <List sx={{ px: 2, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{
                  borderRadius: 3,
                  py: 1.2,
                  bgcolor: active ? 'primary.main' : 'transparent',
                  color: active ? 'primary.contrastText' : 'text.secondary',
                  '&:hover': {
                    bgcolor: active ? 'primary.dark' : 'rgba(99, 102, 241, 0.08)',
                    color: active ? 'primary.contrastText' : 'primary.main',
                    '& .MuiListItemIcon-root': {
                      color: active ? 'primary.contrastText' : 'primary.main',
                    }
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: 40,
                    color: active ? 'primary.contrastText' : 'text.secondary',
                    transition: 'color 0.2s'
                  }}
                >
                  <item.icon size={20} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    fontSize: 14, 
                    fontWeight: active ? 700 : 500 
                  }} 
                />
                {active && <ChevronRight size={16} />}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ p: 2 }}>
        <Divider sx={{ mb: 2, opacity: 0.5 }} />
        <List disablePadding>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              href="/dashboard/settings"
              sx={{ borderRadius: 3, py: 1, color: 'text.secondary' }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                <Settings size={20} />
              </ListItemIcon>
              <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ 
                borderRadius: 3, 
                py: 1, 
                color: 'error.main',
                '&:hover': { bgcolor: 'error.lighter', color: 'error.dark' }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                <LogOut size={20} />
              </ListItemIcon>
              <ListItemText primary="Logout" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.02)', borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main', fontSize: 14 }}>AD</Avatar>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block' }}>Admin User</Typography>
            <Typography variant="caption" color="text.secondary">Free Plan</Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

