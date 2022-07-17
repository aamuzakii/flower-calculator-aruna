import React, { useRef, useState } from 'react';
import { NumberInterface } from '../interface/NumberInterface';

interface Props {
  setVal: React.Dispatch<React.SetStateAction<NumberInterface>>;
  val: NumberInterface
}

export const Input: React.FC<Props> = ({ setVal, val }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal({
      value: e.currentTarget.value,
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
        onChange={handleChange}
        role='number-input'
        className='input'
      />

      <input className='checkbox' type="checkbox" checked={checked} onChange={toggleChecklist} />
    </div>
  )
}