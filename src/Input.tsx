// create functional component Input

import React, {useRef}  from 'react';
import { useState } from 'react';
import { Todo } from './model/models'

interface Props {
  setVal: React.Dispatch<React.SetStateAction<Todo>>;
  val: Todo
}

function toggleTodo(todo: Todo) {
  return {
    value : todo.value,
    isChecked: todo.isChecked
  }
}

export const Input: React.FC<Props> = ({ setVal, val }) => {
  // const [value, setValue] = useState('');
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
      />

      <input type="checkbox" checked={checked} onChange={toggleChecklist} />
    </div>
  )
}