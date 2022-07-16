import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';

function App() {
  return (
    <div className="App" style={{ margin: '50vh', display: 'flex', flexDirection: 'column' }} >
      <Input/>
      <Input/>
      <Input/>
      <Operation/>
      <Result/>
    </div>
  );
}

export default App;
