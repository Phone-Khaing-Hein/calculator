import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <Calculator />
      <h3 style={{ marginTop: '20px' }}>Quote</h3>
      <Quote />
    </div>
  );
}

export default App;
