import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'

import { Input } from './components/Input';
import { Button } from './components/Button';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='app--container'>
        <h1 className='app--title'>Tax Calculator</h1>

        <div className='app--input-row'>
          <Input placeholder='Annual Income' />
          <Input placeholder='Tax year' />
        </div>

        <Button>Calculate</Button>
      </section>
    </QueryClientProvider>
  );
}

export default App;
