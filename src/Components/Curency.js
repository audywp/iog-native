export const numberFormat = value =>
  new Intl.NumberFormat("en-id", {
    style: "currency",
    currency: "INR"
  }).format(value);
