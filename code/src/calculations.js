const vatMultiplier = percentage =>
  (percentage / 100) + 1

export const exVatToIncVat = (percentage, exVat) =>
  exVat * vatMultiplier(percentage)

export const incVatToExtVat = (percentage, incVat) =>
  incVat / vatMultiplier(percentage)

export const vatToIncVat = (percentage, vat) =>
  ((100 / percentage) * parseInt(vat)) + parseInt(vat);
