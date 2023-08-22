import { useState } from 'react';
import { globalValues } from '../utils/globalValues';

export const useTaxes = () => {
  const [totalTaxes, setTotalTaxes] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateTaxes = async (input) => {
    try {
      setLoading(true);

      const jsonData = await fetch(`${globalValues.API}/tax-calculator/tax-year/${input.year}`)
      const data = await jsonData.json();

      if (data.errors) throw new Error('Ops, we can’t calculate your taxes, try again')

      let isInRange = true;
      let total = 0;
      let index = 0;

      while (isInRange && index < data.tax_brackets.length) {
        const row = data.tax_brackets[index];
        if (!row.max) {
          total = + input.amount * row.rate;
          isInRange = false;
          index++;
        } else {
          isInRange = row.min <= input.amount && input.amount <= row.max;

          if (isInRange) {
            const amoutToTax = input.amount >= row.max ? row.max : input.amount;
            total = + amoutToTax * row.rate;
          }

          index++;
        }

      }

      setLoading(false);
      setTotalTaxes(total);
    } catch (error) {
      console.log(error);
      setTotalTaxes(0);
      setError(error.message);
      setLoading(false);
    }
  }

  return { calculateTaxes, totalTaxes, error, loading }
}