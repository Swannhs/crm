export function fNumber(number: number | string | null) {
  return new Intl.NumberFormat().format(Number(number));
}

export function fCurrency(number: number | string | null) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(number));
}

export function fPercent(number: number | string | null) {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Number(number) / 100);
}

export function fShortenNumber(number: number | string | null) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
  }).format(Number(number));
}

export function fData(number: number | string | null) {
  return `${(Number(number) / 1024 / 1024).toFixed(2)} MB`;
}

