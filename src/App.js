import './App.css';
import { useState } from 'react';
import { useTaxes } from './hooks/useTaxes';

import { validateAnnualIncomeInput, validateTaxYearInput } from "./utils/validations";

import { Input } from './components/Input';
import { Button } from './components/Button';
import { TaxResult } from './components/TaxResult';
import { Error } from './components/Messages';
import { Loading } from './components/Loading';

function App() {
  const [annualIncomeValue, setAnnualIncome] = useState('');
  const [taxYearValue, setTaxYear] = useState('');
  const [inputError, setInputError] = useState(null);
  const { calculateTaxes, totalTaxes, error, loading } = useTaxes();

  const onChangeAnnualIncome = input => {
    try {
      const value = input.target.value;

      setInputError(null);
      validateAnnualIncomeInput(value);
      setAnnualIncome(value);
    } catch (error) {
      setInputError(error.message);
    }
  };
  const onChangeTaxYear = input => {
    try {
      const value = input.target.value;

      setInputError(null);
      validateTaxYearInput(value);
      setTaxYear(value);
    } catch (error) {
      setInputError(error.message);
    }
  };

  const onCalculate = async () => {
    try {
      setInputError(null);
      validateAnnualIncomeInput(annualIncomeValue);
      validateTaxYearInput(taxYearValue);

      await calculateTaxes({ year: taxYearValue, amount: annualIncomeValue });
    } catch (error) {
      setInputError(error.message);
    }
  }

  return (
    <section className='app--container'>
      <h1 className='app--title'>Tax Calculator</h1>

      <div className='app--input-row'>
        <Input
          data-testid='annual-income'
          placeholder='Annual Income'
          disabled={loading}
          onChange={onChangeAnnualIncome}
        />

        <Input
          data-testid='tax-year'
          placeholder='Tax year'
          disabled={loading}
          onChange={onChangeTaxYear}
        />
      </div>

      <Button
        data-testid='calculate-button'
        disable={!!inputError || loading}
        onClick={onCalculate}
      >
        Calculate
      </Button>

      <TaxResult amount={totalTaxes} />
      <Error message={error || inputError} />
      <Loading isLoading={loading} />
    </section>
  );
}

export default App;
