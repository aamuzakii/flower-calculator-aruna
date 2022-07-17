import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './Input';
import {Operation} from './Operation';
import {Result} from './Result';
import {Todo} from './model/models'

function App() {

  // const [val, setVal] = React.useState<Array<Todo>>([]);

  const [first, setfirst] = useState<Todo>({value: '', isChecked: false})
  const [second, setsecond] = useState<Todo>({value: '', isChecked: false})
  const [third, setthird] = useState<Todo>({value: '', isChecked: false})
  const [result, setResult] = useState<number>(0)
  

  const startOperation = (type: string) => {
    const arr = [first, second, third]
    const filtered = arr.filter((obj) => (obj.isChecked))
    let result
    console.log(filtered)
    if (filtered.length === 1) return setResult(parseInt(filtered[0].value))
    result = filtered.reduce(function(accumulator, currentValue) {
      switch (type) {
        case 'sum':
          return accumulator + parseInt(currentValue.value);
          break
        case 'subtract':
          return accumulator - parseInt(currentValue.value);
          break
        case 'multiply':
          return accumulator * parseInt(currentValue.value);
          break
        case 'divide':
          return accumulator / parseInt(currentValue.value);
          break
        default:
          return 0;
      }
      
    }, 0);
    console.log(result)
    setResult(result)
  }

  return (
    <div className="App" style={{ margin: '50vh', display: 'flex', flexDirection: 'column' }} >
      <Input setVal={setfirst} val={first}  />
      <Input setVal={setsecond} val={second}  />
      <Input setVal={setthird} val={third}  />
      <Operation startOperation={startOperation} />
      <Result value={result} />
    </div>
  );
}

export default App;
