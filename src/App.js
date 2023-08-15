import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';

import { Input } from './components/Input';
import { Button } from './components/Button';

const queryClient = new QueryClient()

function App() {
  const [annualIncomeValue, setAnnualIncome] = useState('');
  const [taxYearValue, setTaxYear] = useState('');

  const onChangeAnnualIncome = input => setAnnualIncome(input.target.value);
  const onChangeTaxYear = input => setTaxYear(input.target.value);

  const onCalculate = () => {

  }

  return (
    <QueryClientProvider client={queryClient}>
      <section className='app--container'>
        <h1 className='app--title'>Tax Calculator</h1>

        <div className='app--input-row'>
          <Input placeholder='Annual Income' onChange={onChangeAnnualIncome} />
          <Input placeholder='Tax year' onChange={onChangeTaxYear} />
        </div>

        <Button onClick={onCalculate}>Calculate</Button>
      </section>
    </QueryClientProvider>
  );
}

export default App;
