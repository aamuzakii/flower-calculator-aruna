// create functional component Input

import React from 'react';
import { useState } from 'react';

export default function Input() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex' }} >
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </div>
  )
}