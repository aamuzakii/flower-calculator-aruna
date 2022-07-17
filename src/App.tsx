import { useState } from 'react';
import './App.css';
import { Input } from './component/Input';
import { Operation } from './component/Operation';
import { Result } from './component/Result';
import { NumberInterface } from './interface/NumberInterface';
import { MathOperation } from './types/MathOperation';

function App() {

  const [first, setfirst] = useState<NumberInterface>({value: '', isChecked: false})
  const [second, setsecond] = useState<NumberInterface>({value: '', isChecked: false})
  const [third, setthird] = useState<NumberInterface>({value: '', isChecked: false})
  const [result, setResult] = useState<number>(0)
  

  const startOperation = (type: MathOperation) => {
    const arr = [first, second, third]
    const filteredObjects: NumberInterface[] = arr.filter( (obj: NumberInterface) => obj.isChecked)

    const flatten: number[] = filteredObjects.map( (obj: NumberInterface) => parseInt(obj.value))

    if (flatten.length <= 1) return alert('Please select at least two numbers')
    if (flatten.includes(NaN)) return alert('Please fill all checked fields')
    const result = flatten.reduce(function(accumulator, currentValue) {
      switch (type) {
        case 'sum':
          return accumulator + currentValue;
        case 'subtract':
          return accumulator - currentValue;
        case 'multiply':
          return accumulator * currentValue;
        case 'divide':
          return accumulator / currentValue;
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
      <hr />
      <Result value={result} />
    </div>
  );
}

export default App;
