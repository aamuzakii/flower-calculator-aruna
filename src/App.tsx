import { useState } from 'react';
import './App.css';
import { Input } from './component/Input';
import { Operation } from './component/Operation';
import { Result } from './component/Result';
import { NumberInterface } from './interface/NumberInterface';

function App() {

  const [first, setfirst] = useState<NumberInterface>({value: '', isChecked: false})
  const [second, setsecond] = useState<NumberInterface>({value: '', isChecked: false})
  const [third, setthird] = useState<NumberInterface>({value: '', isChecked: false})
  const [result, setResult] = useState<number>(0)
  

  const startOperation = (type: string) => {
    const arr = [first, second, third]
    const filtered = arr.filter((obj) => (obj.isChecked))
    let result

    const flatten = filtered.map((obj) => parseInt(obj.value))

    if (flatten.length <= 1) return alert('Please select two numbers')
    result = flatten.reduce(function(accumulator, currentValue) {
      switch (type) {
        case 'sum':
          return accumulator + currentValue;
          break
        case 'subtract':
          return accumulator - currentValue;
          break
        case 'multiply':
          return accumulator * currentValue;
          break
        case 'divide':
          return accumulator / currentValue;
          break
        default:
          return 0;
      }
      
    });
    setResult(result)
  }

  return (
    <div className="App" >
      <Input setVal={setfirst} val={first}  />
      <Input setVal={setsecond} val={second}  />
      <Input setVal={setthird} val={third}  />
      <Operation startOperation={startOperation} />
      <Result value={result} />
    </div>
  );
}

export default App;
