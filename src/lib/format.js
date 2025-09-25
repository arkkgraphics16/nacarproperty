export const formatCurrency = (value, currency = 'PHP') => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return 'Price on request';
  }

  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value));
};

export const formatSquareMeters = (value) => {
  if (!value && value !== 0) return 'N/A';
  return `${Number(value).toLocaleString()} sqm`;
};
