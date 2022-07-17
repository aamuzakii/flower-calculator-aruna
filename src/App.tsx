import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './Input';
import {Operation} from './Operation';
import Result from './Result';
import {Todo} from './model/models'

function App() {

  // const [val, setVal] = React.useState<Array<Todo>>([]);

  const [first, setfirst] = useState<Todo>({value: 0, isChecked: false})
  const [second, setsecond] = useState<Todo>({value: 0, isChecked: false})
  const [third, setthird] = useState<Todo>({value: 0, isChecked: false})
  

  const startOperation = () => {
    console.log('as')
    console.log(
      first, second, third
    )
  }

  return (
    <div className="App" style={{ margin: '50vh', display: 'flex', flexDirection: 'column' }} >
      <Input setVal={setfirst} val={first}  />
      <Input setVal={setsecond} val={second}  />
      <Input setVal={setthird} val={third}  />
      <Operation startOperation={startOperation} />
      <Result/>
    </div>
  );
}

export default App;
