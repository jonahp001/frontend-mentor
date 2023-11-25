function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
    // JS returns undefined by default
  }
  return income * 1.3;
}

calculateTax(10_000)
