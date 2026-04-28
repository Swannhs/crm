import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export type SalesTab = 'pipeline' | 'leads' | 'orders' | 'activities' | 'analytics';

export function SalesTabs({ value, onChange }: { value: SalesTab; onChange: (tab: SalesTab) => void }) {
  return (
    <Tabs
      value={value}
      onChange={(_, next) => onChange(next)}
      variant="scrollable"
      allowScrollButtonsMobile
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Tab value="pipeline" label="Pipeline" />
      <Tab value="leads" label="Leads" />
      <Tab value="orders" label="Orders" />
      <Tab value="activities" label="Activities" />
      <Tab value="analytics" label="Analytics" />
    </Tabs>
  );
}
