import { render, screen } from '@testing-library/react';
import { SetStateAction } from 'react';
import { NumberObject } from '../model/models';
import { Input } from './Input';

test('Should reject non numeric input', () => {
  const object: NumberObject = {
    value: 'non numeric',
    isChecked: true
  }

  render(<Input setVal={function (value: SetStateAction<NumberObject>): void {} } val={object}  />);

  const inputElement = screen.queryByRole('number-input')
  const valueOfInput = inputElement?.closest('input')?.value

  expect(valueOfInput).toEqual("")

})

test('Should accept numeric input', () => {
  const object: NumberObject = {
    value: '1',
    isChecked: true
  }

  render(<Input setVal={function (value: SetStateAction<NumberObject>): void {} } val={object}  />);

  const inputElement = screen.queryByRole('number-input')
  const valueOfInput = inputElement?.closest('input')?.value

  expect(valueOfInput).toEqual("1")

})