import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { MarketingTemplate } from '../types';
import { useMarketingTemplates } from '../hooks/use-marketing';
import { Label } from 'src/components/label';

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (template: MarketingTemplate) => void;
};

export function MarketingTemplatePicker({ open, onClose, onSelect }: Props) {
  const { data: templates = [], isLoading } = useMarketingTemplates();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Select Template</DialogTitle>
      <DialogContent sx={{ pb: 3 }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {templates.map((template) => (
            <Grid key={template.id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardActionArea onClick={() => {
                  onSelect(template);
                  onClose();
                }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={template.previewImage || 'https://placehold.co/600x400?text=Template+Preview'}
                    alt={template.name}
                  />
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography variant="subtitle2" noWrap>
                      {template.name}
                    </Typography>
                    <Label variant="soft" color="info" sx={{ mt: 0.5 }}>
                      {template.category}
                    </Label>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          {templates.length === 0 && !isLoading && (
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', py: 5 }}>
                No templates found.
              </Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
