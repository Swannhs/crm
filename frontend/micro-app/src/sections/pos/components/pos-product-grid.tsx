import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { PosEmptyState } from './pos-empty-state';
import { PosErrorState } from './pos-error-state';

type Props = {
  products: any[];
  isLoading: boolean;
  isError: boolean;
  onAddToCart: (product: any) => void;
  onRetry?: () => void;
};

export function PosProductGrid({ products, isLoading, isError, onAddToCart, onRetry }: Props) {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <PosErrorState message="Could not load products." onRetry={onRetry} />;
  }

  if (!products || products.length === 0) {
    return <PosEmptyState message="No products available." />;
  }

  return (
    <Box
      display="grid"
      gap={2}
      gridTemplateColumns={{
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
      p={2}
    >
      {products.map((product) => (
        <Card
          key={product.id || product.sku}
          sx={{
            p: 2,
            cursor: 'pointer',
            textAlign: 'center',
            '&:hover': { boxShadow: (theme) => theme.customShadows.z8 },
          }}
          onClick={() => onAddToCart(product)}
        >
          <Typography variant="subtitle2" noWrap>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${Number(product.price || 0).toFixed(2)}
          </Typography>
        </Card>
      ))}
    </Box>
  );
}
