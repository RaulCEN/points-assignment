export const validateAnnualIncomeInput = (input) => {
  if (isNaN(input)) throw new Error('Annual income should be a number');
  if (Number(input) < 0) throw new Error('Annual income should be greater than 0');

  return true;
}

export const validateTaxYearInput = (input) => {
  if (isNaN(input)) throw new Error('Tax year should be a number');
  if (Number(input) < 0) throw new Error('Tax year should be greater than 0');

  return true;
};
