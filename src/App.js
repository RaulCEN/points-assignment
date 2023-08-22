import './App.css';
import { useState } from 'react';
import { useTaxes } from './hooks/useTaxes';

import { validateAnnualIncomeInput, validateTaxYearInput } from "./utils/validations";

import { Input } from './components/Input';
import { Button } from './components/Button';
import { TaxResult } from './components/TaxResult';
import { Error } from './components/Messages';

function App() {
  const [annualIncomeValue, setAnnualIncome] = useState('');
  const [taxYearValue, setTaxYear] = useState('');
  const [inputError, setInputError] = useState(null);
  const { calculateTaxes, totalTaxes, error } = useTaxes();

  const onChangeAnnualIncome = input => {
    try {
      const value = input.target.value;

      validateAnnualIncomeInput(value);
      setAnnualIncome(value);
    } catch (error) {
      setInputError(error.message);
    }
  };
  const onChangeTaxYear = input => setTaxYear(input.target.value);

  const onCalculate = async () => {
    setInputError(null);


    if (isNaN(annualIncomeValue) || annualIncomeValue <= 0) {
      setInputError('Annual income must be a number greater than 0');
      return
    }
    if (isNaN(taxYearValue) || taxYearValue <= 0) {
      setInputError('Tax year must be a number greater than 0');
      return
    }

    await calculateTaxes({ year: taxYearValue, amount: annualIncomeValue });
  }

  return (
    <section className='app--container'>
      <h1 className='app--title'>Tax Calculator</h1>

      <div className='app--input-row'>
        <Input data-testid='annual-income' placeholder='Annual Income' onChange={onChangeAnnualIncome} />
        <Input data-testid='tax-year' placeholder='Tax year' onChange={onChangeTaxYear} />
      </div>

      <Button data-testid='calculate-button' onClick={onCalculate}>Calculate</Button>
      <TaxResult amount={totalTaxes} />
      <Error message={error || inputError} />
    </section>
  );
}

export default App;
