import React, { useRef, useState } from 'react';
import { NumberInterface } from '../interface/NumberInterface';

interface Props {
  setVal: React.Dispatch<React.SetStateAction<NumberInterface>>;
  val: NumberInterface
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
    <div style={{ display: 'flex', alignItems: 'center' }} >
      <input
        type="number"
        placeholder="Input"
        value={val.value}
        ref={inputRef}
        onChange={handleChange}
        role='number-input'
        className='input'
      />

      <input className='checkbox' type="checkbox" checked={checked} onChange={toggleChecklist} />
    </div>
  )
}