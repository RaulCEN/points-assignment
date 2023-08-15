import './App.css';

import { Input } from './components/Input';
import { Button }  from './components/Button';

function App() {
  return (
    <section className='app--container'>
      <h1 className='app--title'>Tax Calculator</h1>

      <div className='app--input-row'>
        <Input placeholder='Annual Income' />
        <Input placeholder='Tax year' />
      </div>

      <Button>Calculate</Button>
    </section>
  );
}

export default App;
