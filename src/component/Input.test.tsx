import { render, screen } from '@testing-library/react';
import { SetStateAction } from 'react';
import { Todo } from '../model/models';
import { Input } from './Input';

test('Should reject non numeric input', () => {
  const object: Todo = {
    value: 'non numeric',
    isChecked: true
  }

  render(<Input setVal={function (value: SetStateAction<Todo>): void {} } val={object}  />);

  const inputElement = screen.queryByRole('number-input')
  const valueOfInput = inputElement?.closest('input')?.value

  expect(valueOfInput).toEqual("")

})

test('Should accept numeric input', () => {
  const object: Todo = {
    value: '1',
    isChecked: true
  }

  render(<Input setVal={function (value: SetStateAction<Todo>): void {} } val={object}  />);

  const inputElement = screen.queryByRole('number-input')
  const valueOfInput = inputElement?.closest('input')?.value

  expect(valueOfInput).toEqual("1")

})