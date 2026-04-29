import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  barcodeInput: string;
  onBarcodeInputChange: (value: string) => void;
  onSubmitBarcode: () => void;
  addDisabled?: boolean;
  addDisabledReason?: string | null;
  onRetry?: () => void;
};

export function PosProductGrid({
  products,
  isLoading,
  isError,
  onAddToCart,
  searchQuery,
  onSearchQueryChange,
  barcodeInput,
  onBarcodeInputChange,
  onSubmitBarcode,
  addDisabled,
  addDisabledReason,
  onRetry,
}: Props) {
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
    <Box p={2} display="flex" flexDirection="column" gap={2} height="100%" overflow="auto">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <TextField
          fullWidth
          label="Search products"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          placeholder="Name, SKU, or barcode"
        />
        <TextField
          fullWidth
          label="Scan barcode"
          value={barcodeInput}
          onChange={(e) => onBarcodeInputChange(e.target.value)}
          placeholder="Exact barcode"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmitBarcode();
            }
          }}
        />
        <Button variant="contained" onClick={onSubmitBarcode}>
          Add
        </Button>
      </Stack>
      {addDisabledReason && (
        <Typography variant="body2" color="error">
          {addDisabledReason}
        </Typography>
      )}
      <Box
        display="grid"
        gap={2}
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {products.map((product) => {
          const price = toValidNumber(product.price);
          const unavailable = price === null;

          return (
            <Card
              key={product.id || product.sku}
              sx={{
                p: 2,
                cursor: addDisabled || unavailable ? 'not-allowed' : 'pointer',
                textAlign: 'center',
                opacity: addDisabled || unavailable ? 0.6 : 1,
                '&:hover': { boxShadow: (theme) => theme.customShadows.z8 },
              }}
              onClick={() => {
                if (!addDisabled && !unavailable) {
                  onAddToCart(product);
                }
              }}
            >
              <Typography variant="subtitle2" noWrap>
                {product.name}
              </Typography>
              <Typography variant="body2" color={unavailable ? 'error.main' : 'text.secondary'}>
                {unavailable ? 'Price unavailable' : `$${price.toFixed(2)}`}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
