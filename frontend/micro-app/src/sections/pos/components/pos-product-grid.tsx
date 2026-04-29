import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { PosEmptyState } from './pos-empty-state';
import { PosErrorState } from './pos-error-state';

function toValidNumber(value: unknown): number | null {
  const num = typeof value === 'string' ? Number(value) : value;
  return typeof num === 'number' && Number.isFinite(num) ? num : null;
}

type Props = {
  products: any[];
  isLoading: boolean;
  isError: boolean;
  onAddToCart: (product: any) => void;
  onRetry?: () => void;
  disabled?: boolean;
};

export function PosProductGrid({ products, isLoading, isError, onAddToCart, onRetry, disabled }: Props) {
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
      {products.map((product) => {
        const validPrice = toValidNumber(product.price);
        const hasValidPrice = validPrice !== null;
        const isDisabled = disabled || !hasValidPrice;

        return (
          <Card
            key={product.id || product.sku}
            sx={{
              p: 2,
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.6 : 1,
              textAlign: 'center',
              '&:hover': isDisabled ? {} : { boxShadow: (theme) => theme.customShadows.z8 },
            }}
            onClick={() => {
              if (!isDisabled) onAddToCart(product);
            }}
          >
            <Typography variant="subtitle2" noWrap>
              {product.name}
            </Typography>
            {hasValidPrice ? (
              <Typography variant="body2" color="text.secondary">
                ${validPrice.toFixed(2)}
              </Typography>
            ) : (
              <Typography variant="body2" color="error">
                Price unavailable
              </Typography>
            )}
          </Card>
        );
      })}
    </Box>
  );
}
