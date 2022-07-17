// create functional component Input

import React, { useRef, useState } from 'react';
import { NumberObject } from '../model/models';

interface Props {
  setVal: React.Dispatch<React.SetStateAction<NumberObject>>;
  val: NumberObject
}

function toggleTodo(todo: NumberObject) {
  return {
    value : todo.value,
    isChecked: todo.isChecked
  }
}

export const Input: React.FC<Props> = ({ setVal, val }) => {
  const [checked, setChecked] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    setVal({
      value: e.target.value,
      isChecked: val.isChecked
    })
  }

  const toggleChecklist = () => {
    setChecked(!checked)
    setVal({
      value: val.value,
      isChecked: !checked
    })
  }

  return (
    <div style={{ display: 'flex' }} >
      <input
        type="number"
        placeholder="Input"
        value={val.value}
        ref={inputRef}
        onChange={handleChange}
        role='number-input'
      />

      <input type="checkbox" checked={checked} onChange={toggleChecklist} />
    </div>
  )
}