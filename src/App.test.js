import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';

test('display error if annual income doesnt have values', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Calculate'));

  expect(screen.getByTestId('error-taxes')).toHaveTextContent('Annual income must be a number greater than 0');

});

test('calculates and display total taxes', async () => {
  render(<App />);
  const annualIncomeInput = screen.getByTestId('annual-income');
  const taxYearInput = screen.getByTestId('tax-year');

  await userEvent.type(annualIncomeInput, '10');
  await userEvent.type(taxYearInput, '2019')
  await userEvent.click(screen.getByText('Calculate'));
  await new Promise((resolve) => setTimeout(resolve, 7000))

  expect(screen.getByTestId('tax-amount')).toHaveTextContent('$1.5');

}, 100000);

